import React from 'react';
import Typography from 'antd/lib/typography';
import Progress from 'antd/lib/progress';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { Crawler } from '../server/typing';
import { History } from 'history';
import { stringify } from 'query-string';
import { duration } from 'moment';
import 'moment-duration-format';

import { timestampToString } from '../utils';
import { SwitchStatus } from './SwitchStatus';
import { getHomeRoute } from '../routes';
import { getViewportName } from '../viewport';

const { Title } = Typography;

const warningStyle = {
    color: '#faad29',
};

const marginRightStyle = {
    marginRight: 10,
};

const limitStyle = {
    color: '#999',
    fontSize: 11,
};

// need to flatten props and use react memo
export const CrawlerInfo = ({
    crawler: {
        timestamp,
        url,
        diffZoneCount,
        errorCount,
        status,
        urlsCount,
        inQueue,
        startAt,
        lastUpdate,
        method,
        limit,
        autopin,
        viewport,
    },
    history,
}: { crawler: Crawler, history: History }) => {
    const total = urlsCount + inQueue;
    const percent = Math.floor(urlsCount / total * 100);
    const onReRun = () => {
        history.push({
            pathname: getHomeRoute(),
            search: stringify({ url, method, limit, autopin, viewport: JSON.stringify(viewport) }),
        });
    };
    const screen = getViewportName(viewport);
    return (
        <>
            <Title level={3}>{timestampToString(timestamp)}</Title>
            <p>
                <Button icon="retweet" size="small" onClick={onReRun} style={marginRightStyle}>
                    Re-run
                </Button>
                {(diffZoneCount > 0 || errorCount > 0)
                    && <SwitchStatus status={status} timestamp={timestamp} />}
            </p>
            <p><b>URL:</b> {url}</p>
            <p><b>Screen:</b> {screen}</p>
            <p>
                <b>URL crawled:</b> {urlsCount}
                {limit !== undefined && limit > 0 &&
                    <span style={limitStyle}> (with limit set to {limit})</span>
                }
            </p>
            <p><b>Duration:</b> {duration(lastUpdate - startAt).format('h [hrs], m [min], s [sec]')}</p>
            {inQueue > 0 && <>
                <Progress percent={percent} />
                <p><b>In queue:</b> {inQueue}</p>
            </>}
            {errorCount > 0 &&
                <p style={warningStyle}>
                    <Icon type="exclamation-circle" /> {errorCount} error(s) founds
                </p>
            }
        </>
    );
}
