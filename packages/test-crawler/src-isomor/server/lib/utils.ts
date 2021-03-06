import { readdir, pathExists, outputJson, readFile, outputFile, readJSON } from 'fs-extra';
import { join } from 'path';
import * as md5 from 'md5';

import { CRAWL_FOLDER, CODE_FOLDER } from './config';
import { PageData, Viewport, CodeInfoList } from '../typing';

export async function getFolders() {
    const folders = await readdir(CRAWL_FOLDER);
    folders.sort();

    return folders;
}

export type FilePath = (extension: string) => string;
export const getFilePath = (id: string, distFolder: string): FilePath => (extension: string) => {
    return join(distFolder, `${id}.${extension}`);
};

export async function addToQueue(url: string, viewport: Viewport, distFolder: string, limit: number = 0): Promise<boolean> {
    const id = md5(`${url}-${JSON.stringify(viewport)}`);
    const histFile = getFilePath(id, distFolder)('json');
    const queueFile = getFilePath(id, getQueueFolder(distFolder))('json');

    if (!(await pathExists(queueFile)) && !(await pathExists(histFile))) {
        if (!limit || (await updateSiblingCount(url, distFolder)) < limit) {
            await savePageInfo(queueFile, { url, id });
        }
        return true;
    }
    return false;
}

async function updateSiblingCount(url: string, distFolder: string) {
    const urlPaths = url.split('/').filter(s => s);
    urlPaths.pop();
    const id = md5(urlPaths.join('/'));
    const file = join(distFolder, 'sibling', id);
    let count = 0;
    if (await pathExists(file)) {
        count = parseInt((await readFile(file)).toString(), 10) + 1;
    }
    await outputFile(file, count);
    return count;
}

export function getQueueFolder(distFolder: string) {
    return join(distFolder, 'queue');
}

export function savePageInfo(file: string, pageData: PageData) {
    return outputJson(file, pageData, { spaces: 4 });
}

export async function getCodeList(): Promise<CodeInfoList> {
    const listPath = join(CODE_FOLDER, `list.json`);
    if (!(await pathExists(listPath))) {
        return {};
    }
    return readJSON(listPath);
}
