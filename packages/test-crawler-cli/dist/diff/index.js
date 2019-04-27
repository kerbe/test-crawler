"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const npmlog_1 = require("npmlog");
const utils_1 = require("test-crawler-lib/dist/lib/utils");
const config_1 = require("test-crawler-lib/dist/lib/config");
const pngjs_1 = require("pngjs");
const pixdiff_zone_1 = require("pixdiff-zone");
const fs_extra_1 = require("fs-extra");
function parsePng(data, filePath, basePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = filePath('png');
        const { id, url } = data;
        const actual = yield fs_extra_1.readFile(file);
        const expected = yield fs_extra_1.readFile(basePath('png'));
        const rawActual = pngjs_1.PNG.sync.read(actual);
        const rawExpected = pngjs_1.PNG.sync.read(expected);
        let { width, height } = rawActual;
        width = Math.min(width, rawExpected.width);
        height = Math.min(height, rawExpected.height);
        const diffImage = new pngjs_1.PNG({ width, height });
        const { diff, zones } = pixdiff_zone_1.pixdiff(cropPng(rawActual, width, height), cropPng(rawExpected, width, height), diffImage);
        const totalPixels = width * height;
        const pixelDiffRatio = diff / totalPixels;
        npmlog_1.info('PNG', id, url, `diff ratio: ${pixelDiffRatio}`);
        npmlog_1.info('PNG', 'zone', zones);
        if (pixelDiffRatio) {
            const buffer = pngjs_1.PNG.sync.write(diffImage, { colorType: 6 });
            const diffFile = `${file}.diff.png`;
            yield fs_extra_1.writeFile(diffFile, buffer);
            npmlog_1.info('PNG', id, url, 'diff file:', diffFile);
        }
        data.png.diff = {
            pixelDiffRatio,
            zones: yield parseZones(basePath, zones),
        };
        yield fs_extra_1.writeJSON(filePath('json'), data, { spaces: 4 });
        return zones.length;
    });
}
function cropPng(png, width, height) {
    const origin = new pngjs_1.PNG({ width: png.width, height: png.height });
    origin.data = png.data;
    const cropped = new pngjs_1.PNG({ width, height });
    origin.bitblt(cropped, 0, 0, width, height);
    return cropped;
}
function parseZones(basePath, zones) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = yield fs_extra_1.readJson(basePath('json'));
        const baseZones = base.png.diff.zones.map(z => z.zone);
        return zones.map(zone => ({
            zone,
            status: pixdiff_zone_1.groupOverlappingZone([...baseZones, zone]).length === baseZones.length ? 'valid' : 'diff',
        }));
    });
}
function prepare(id, distFolder) {
    return __awaiter(this, void 0, void 0, function* () {
        const basePath = utils_1.getFilePath(id, config_1.BASE_FOLDER);
        const filePath = utils_1.getFilePath(id, distFolder);
        const data = yield fs_extra_1.readJson(filePath('json'));
        let diffZoneCount = 0;
        if (yield fs_extra_1.pathExists(basePath('png'))) {
            diffZoneCount = yield parsePng(data, filePath, basePath);
        }
        else {
            npmlog_1.info('DIFF', 'new png');
        }
        return {
            diffZoneCount,
        };
    });
}
exports.prepare = prepare;
//# sourceMappingURL=index.js.map