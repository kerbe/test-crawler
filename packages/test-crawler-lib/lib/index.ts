import { readdir, readJSON, mkdir, writeJSON, readFile, pathExists, copy, readJson } from 'fs-extra';
import { join, extname } from 'path';
import * as rimraf from 'rimraf';
import * as md5 from 'md5';

import { CRAWL_FOLDER, MAX_HISTORY, BASE_FOLDER } from './config';
import { getFolders, addToQueue, getQueueFolder, getFilePath, FilePath } from './utils';

import * as config from './config';
import { Crawler, CrawlerInput, StartCrawler, PageData } from './typing';
import { groupOverlappingZone } from 'pixdiff-zone';

export {
    Crawler,
    CrawlerInput,
    StartCrawler,
    Navigation,
    PageData,
    Performance,
    Timing,
    Viewport,
    PngDiffData,
    PngDiffDataZone,
    Zone,
} from './typing';

export const getConfig = () => config;

export class CrawlerProvider {
    private async copyFile(filePath: FilePath, basePath: FilePath, extension: string) {
        const file = filePath(extension);
        if (await pathExists(file)) {
            await copy(file, basePath(extension), { overwrite: true });
        }
    }

    async setZoneStatus(timestamp: string, id: string, index: number, status: string): Promise<PageData> {
        const folder = join(CRAWL_FOLDER, timestamp);
        const filePath = getFilePath(id, folder);
        const data: PageData = await readJson(filePath('json'));
        if (status === 'pin') {
            const basePath = getFilePath(id, BASE_FOLDER);
            const base: PageData = await readJson(basePath('json'));

            base.png.diff.zones.push({ ...data.png.diff.zones[index], status });
            const zones = base.png.diff.zones.map(item => item.zone);
            zones.sort((a, b) => a.xMin * a.yMin - b.xMin * b.yMin);
            const groupedZones = groupOverlappingZone(zones);
            base.png.diff.zones = groupedZones.map(zone => ({ zone, status }));

            await writeJSON(basePath('json'), base, { spaces: 4 });
        }
        data.png.diff.zones[index].status = status;
        await writeJSON(filePath('json'), data, { spaces: 4 });
        return data;
    }

    async copyToBase(timestamp: string, id: string): Promise<PageData> {
        const folder = join(CRAWL_FOLDER, timestamp);
        const filePath = getFilePath(id, folder);
        const basePath = getFilePath(id, BASE_FOLDER);

        const data: PageData = await readJson(filePath('json'));
        data.png.diff = {
            pixelDiffRatio: 0,
            zones: [],
        };
        await writeJSON(filePath('json'), data, { spaces: 4 });

        await this.copyFile(filePath, basePath, 'png');
        await this.copyFile(filePath, basePath, 'html');
        await this.copyFile(filePath, basePath, 'json');

        return data;
    }

    image(folder: string, id: string): Promise<Buffer> {
        const target = folder === 'base' ? BASE_FOLDER : join(CRAWL_FOLDER, folder);
        const filePath = getFilePath(id, target);
        return readFile(filePath('png'));
    }

    getBasePages(): Promise<PageData[]> {
        return this.getPagesInFolder(BASE_FOLDER);
    }

    getPages(timestamp: string): Promise<PageData[]> {
        const folder = join(CRAWL_FOLDER, timestamp);
        return this.getPagesInFolder(folder);
    }

    private async getPagesInFolder(folder: string): Promise<PageData[]> {
        const files = await readdir(folder);
        return Promise.all(
            files.filter(file => extname(file) === '.json' && file !== '_.json')
                .map(file => readJSON(join(folder, file))),
        );
    }

    async setCrawlerStatus(timestamp: string, status: string): Promise<Crawler> {
        const file = join(CRAWL_FOLDER, timestamp, '_.json');
        const crawler: Crawler = await readJson(file);
        crawler.status = status;
        await writeJSON(file, crawler, { spaces: 4 });
        return crawler;
    }

    getCrawler(timestamp: string): Promise<Crawler> {
        return readJSON(join(CRAWL_FOLDER, timestamp, '_.json'));
    }

    async getAllCrawlers(): Promise<Crawler[]> {
        const folders = await readdir(CRAWL_FOLDER);
        const crawlers: Crawler[] = await Promise.all(
            folders.map(folder => readJSON(join(
                CRAWL_FOLDER,
                folder,
                '_.json',
            ))),
        );
        return crawlers;
    }

    async startCrawler(crawlerInput: CrawlerInput): Promise<StartCrawler> {
        await this.cleanHistory();
        const timestamp = Math.floor(Date.now() / 1000);
        const id = md5(`${timestamp}-${crawlerInput.url}`);

        const crawler: Crawler = {
            ...crawlerInput,
            timestamp,
            id,
            diffZoneCount: 0,
            status: 'review',
            inQueue: 1,
            urlsCount: 0,
        };

        const distFolder = join(CRAWL_FOLDER, (timestamp).toString());
        await mkdir(distFolder);
        await mkdir(getQueueFolder(distFolder));
        await writeJSON(join(distFolder, '_.json'), crawler, { spaces: 4 });

        const addedToqueue = await addToQueue(crawlerInput.url, distFolder);
        if (!addedToqueue) {
            throw (new Error('Something went wrong while adding job to queue'));
        }
        return {
            crawler,
            config: { MAX_HISTORY },
        };
    }

    private async cleanHistory() {
        const folders = await getFolders();
        const cleanUp = folders.slice(0, -(MAX_HISTORY - 1));
        cleanUp.forEach((folder) => {
            rimraf.sync(join(CRAWL_FOLDER, folder));
        });
    }
}