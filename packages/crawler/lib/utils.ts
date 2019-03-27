import { readdir, pathExists, writeJson } from 'fs-extra';

import * as md5 from 'md5';

import { CRAWL_FOLDER } from './config';
import { join } from 'path';
import { PageData } from './typing';

export async function getFolders() {
    const folders = await readdir(CRAWL_FOLDER);
    folders.sort();

    return folders;
}

export const getFilePath = (id: string, distFolder: string) => (extension: string) => {
    return join(distFolder, `${id}.${extension}`);
};

export async function addToQueue(url: string, distFolder: string): Promise<boolean> {
    const id = md5(url);
    const histFile = getFilePath(id, distFolder)('json');
    const queueFile = getFilePath(id, getQueueFolder(distFolder))('json');

    if (!(await pathExists(queueFile)) && !(await pathExists(histFile))) {
        await saveData(queueFile, { url, id });
        return true;
    }
    return false;
}

export function getQueueFolder(distFolder: string) {
    return join(distFolder, 'queue');
}

export function saveData(file: string, pageData: PageData) {
    return writeJson(file, pageData, { spaces: 4 });
}