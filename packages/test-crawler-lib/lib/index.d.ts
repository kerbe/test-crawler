/// <reference types="node" />
import * as config from './config';
import { Crawler, CrawlerInput, StartCrawler, PageData, Preset, Code, CodeInfoList } from './typing';
export { Crawler, CrawlerInput, StartCrawler, Navigation, PageData, Performance, Timing, Viewport, PngDiffData, PngDiffDataZone, Zone, Preset, Code, CodeInfo, CodeInfoList, } from './typing';
export declare const getConfig: () => typeof config;
export declare const CrawlerMethod: {
    URLs: string;
    SPIDER_BOT: string;
};
export declare class CrawlerProvider {
    private copyFile;
    private getLogFile;
    getSettings(): {
        dir: string;
        logFile: string;
    };
    getLogs(): Promise<Buffer>;
    setZoneStatus(timestamp: string, id: string, index: number, status: string): Promise<PageData>;
    setZonesStatus(timestamp: string, id: string, status: string): Promise<PageData>;
    copyToBase(timestamp: string, id: string): Promise<PageData>;
    image(folder: string, id: string): Promise<Buffer>;
    saveBasePageCode(id: string, code: string): Promise<void>;
    loadBasePageCode(id: string): Promise<string>;
    saveCode(code: Code): Promise<void>;
    loadCode(id: string): Promise<Code>;
    getCodeList(): Promise<CodeInfoList>;
    getBasePages(): Promise<PageData[]>;
    getBasePage(id: string): Promise<PageData>;
    getPages(timestamp: string): Promise<PageData[]>;
    private getPageInFolder;
    private getPagesInFolder;
    setCrawlerStatus(timestamp: string, status: string): Promise<Crawler>;
    getCrawler(timestamp: string): Promise<Crawler>;
    getAllCrawlers(): Promise<Crawler[]>;
    loadPresets(): Promise<Preset[]>;
    saveAndStart(crawlerInput: CrawlerInput, name: string): Promise<StartCrawler>;
    startCrawlerWithPresetFile(presetFile: string): Promise<CrawlerInput>;
    startCrawler(crawlerInput: CrawlerInput, runProcess?: boolean): Promise<StartCrawler>;
    private startUrlsCrawling;
    private startSpiderBotCrawling;
    private cleanHistory;
}
