"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const md5 = require("md5");
const config_1 = require("./config");
function getFolders() {
    return __awaiter(this, void 0, void 0, function* () {
        const folders = yield fs_extra_1.readdir(config_1.CRAWL_FOLDER);
        folders.sort();
        return folders;
    });
}
exports.getFolders = getFolders;
exports.getFilePath = (id, distFolder) => (extension) => {
    return path_1.join(distFolder, `${id}.${extension}`);
};
function addToQueue(url, viewport, distFolder, limit = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = md5(`${url}-${JSON.stringify(viewport)}`);
        const histFile = exports.getFilePath(id, distFolder)('json');
        const queueFile = exports.getFilePath(id, getQueueFolder(distFolder))('json');
        if (!(yield fs_extra_1.pathExists(queueFile)) && !(yield fs_extra_1.pathExists(histFile))) {
            if (!limit || (yield updateSiblingCount(url, distFolder)) < limit) {
                yield savePageInfo(queueFile, { url, id });
            }
            return true;
        }
        return false;
    });
}
exports.addToQueue = addToQueue;
function updateSiblingCount(url, distFolder) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlPaths = url.split('/').filter(s => s);
        urlPaths.pop();
        const id = md5(urlPaths.join('/'));
        const file = path_1.join(distFolder, 'sibling', id);
        let count = 0;
        if (yield fs_extra_1.pathExists(file)) {
            count = parseInt((yield fs_extra_1.readFile(file)).toString(), 10) + 1;
        }
        yield fs_extra_1.outputFile(file, count);
        return count;
    });
}
function getQueueFolder(distFolder) {
    return path_1.join(distFolder, 'queue');
}
exports.getQueueFolder = getQueueFolder;
function savePageInfo(file, pageData) {
    return fs_extra_1.outputJson(file, pageData, { spaces: 4 });
}
exports.savePageInfo = savePageInfo;
function getCodeList() {
    return __awaiter(this, void 0, void 0, function* () {
        const listPath = path_1.join(config_1.CODE_FOLDER, `list.json`);
        if (!(yield fs_extra_1.pathExists(listPath))) {
            return {};
        }
        return fs_extra_1.readJSON(listPath);
    });
}
exports.getCodeList = getCodeList;
