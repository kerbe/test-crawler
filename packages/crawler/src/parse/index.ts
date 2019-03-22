import { info, error, warn } from 'npmlog';
import { getFolders } from '../utils';
import { PAGES_FOLDER } from '../config';
import { PNG } from 'pngjs';
import { shell } from 'execa';
import { pixdiff } from 'pixdiff';

import { extname } from 'path';
import { readJson, readFile, readdir, pathExists, writeFile } from 'fs-extra';
import { PageData } from '../typing';

let matchCount = 0;
let htmlCount = 0;
let newCount = 0;
let errorCount = 0;
let pngCount = 0;
let pngDiffCount = 0;
const htmlDiff = [];
const pngDiff = [];

function loadJson(file: string): Promise<PageData> {
    const jsonFile = `${file.split('.').slice(0, -1).join('.')}.json`;
    return readJson(jsonFile);
}

async function parseHtml({ id, url }: PageData, lastFile: string, previousFile: string) {
    htmlCount++;
    if (await pathExists(previousFile)) {
        const { stdout } = await shell(`diff -u ${previousFile} ${lastFile}`);
        // console.log('stdout', stdout);
        // console.log('cmd', `diff -u ${previousFile} ${lastFile}`);
        if (stdout.length) {
            info('Html diff', url, id, stdout);
            htmlDiff.push({ url, id, stdout });
        } else {
            info('Html diff', url, id, 'no diff');
            matchCount++;
        }
    } else {
        info('Html diff', url, id, 'new file');
        newCount++;
    }
}

async function parseError({ id, url }: PageData) {
    // info('Got some error', url, id);
    errorCount++;
    // could check for previous file
}

async function parsePng({ id, url }: PageData, lastFile: string, previousFile: string) {
    pngCount++;
    const actual = await readFile(lastFile);
    const expected = await readFile(previousFile);
    const rawActual = PNG.sync.read(actual);
    const rawExpected = PNG.sync.read(expected);

    const { width, height } = rawActual;
    const diffImage = new PNG({ width, height });

    const { diff, zones } = pixdiff(
        rawActual,
        rawExpected,
        diffImage,
    );

    const totalPixels = width * height;
    const diffRatio = diff / totalPixels;
    info('PNG', id, url, `diff ratio: ${diffRatio}`);
    info('PNG', 'zone', zones);

    if (diffRatio) {
        const buffer = PNG.sync.write(diffImage, { colorType: 6 });
        const diffFile = `${lastFile}.diff.png`;
        writeFile(diffFile, buffer);
        info('PNG', id, url, 'diff file:', diffFile);
        pngDiffCount++;
        pngDiff.push({ url, id, diffFile, diffRatio });
    }
}

export async function parse() {
    info('Parse result', 'start');
    const [last, previous] = getFolders().reverse();

    const files = await readdir(`${PAGES_FOLDER}/${last}`);
    for (const file of files) {
        const lastFile = `${PAGES_FOLDER}/${last}/${file}`;
        const extension = extname(lastFile);
        const data = await loadJson(lastFile);

        try {
            if (extension === '.error') {
                await parseError(data);
            } else if (extension === '.html') {
                warn('Parse html', 'skip html diff for the moment');
                // const previousFile = `${PAGES_FOLDER}/${previous}/${file}`;
                // await parseHtml(data, lastFile, previousFile);
            } else if (extension === '.png') {
                const previousFile = `${PAGES_FOLDER}/${previous}/${file}`;
                await parsePng(data, lastFile, previousFile);
            }
        } catch (err) {
            error('Parse', 'we need to handle error', JSON.stringify(err, null, 4));
        }
    }
    info('Html matching', `${matchCount} of ${htmlCount}, ${newCount} new files.`);
    info('PNG matching', `${pngCount} of ${pngDiffCount}`);
    info('Error count', `${errorCount}`);
    writeFile(`${PAGES_FOLDER}/${last}/_result_.json`, JSON.stringify({
        matchCount,
        htmlCount,
        newCount,
        errorCount,
        pngCount,
        pngDiffCount,
        htmlDiff,
        pngDiff,
    }, null, 4));
}