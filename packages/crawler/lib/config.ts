import { join } from 'path';

export const BASE_URL = 'http://localhost:3005/';
export const PAGES_FOLDER = join(__dirname, '../pages');
export const CRAWL_FOLDER = join(PAGES_FOLDER, 'crawl');
export const BASE_FOLDER = join(PAGES_FOLDER, 'base');
export const MAX_HISTORY = 2;
export const TIMEOUT = 10000; // 10 sec
export const CONSUMER_COUNT = 5;
export const USER_AGENT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';