import React from 'react';
import Typography from 'antd/lib/typography';
import Progress from 'antd/lib/progress';
import { Crawler } from 'test-crawler-lib';
import { duration } from 'moment';
import 'moment-duration-format';

import { timestampToString } from './utils';
import { SwitchStatus } from './SwitchStatus';

const { Title } = Typography;

// need to flatten props and use react memo
export const CrawlerInfo = ({
    crawler: {
        timestamp,
        url,
        diffZoneCount,
        status,
        urlsCount,
        inQueue,
        startAt,
        lastUpdate,
        viewport: { width, height },
    }
}: { crawler: Crawler }) => {
    const total = urlsCount + inQueue;
    const percent = Math.floor(urlsCount / total * 100);
    return (
        <>
            <Title level={3}>{timestampToString(timestamp)}</Title>
            <p><b>URL:</b> {url}</p>
            <p><b>Screen:</b> {width}x{height}</p>
            <p><b>URL crawled:</b> {urlsCount}</p>
            <p><b>Duration:</b> { duration(lastUpdate - startAt).format('h [hrs], m [min], s [sec]') }</p>
            {inQueue > 0 && <>
                <Progress percent={percent} />
                <p><b>In queue:</b> {inQueue}</p>
            </>}
            {diffZoneCount > 0 && <p><SwitchStatus status={status} timestamp={timestamp} /></p>}
        </>
    );
}
