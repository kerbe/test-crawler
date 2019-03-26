import { readdirSync } from 'fs';
import { join } from 'path';
import { CRAWL_FOLDER } from '../lib/config';

// to delete

export function getFolders() {
    const folders = readdirSync(CRAWL_FOLDER);
    folders.sort();

    return folders;
}

export const getFilePath = (id: string, distFolder: string) => (extension: string) => {
    return join(distFolder, `${id}.${extension}`);
};
