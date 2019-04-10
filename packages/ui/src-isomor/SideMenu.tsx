import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import { Link } from 'react-router-dom';

import { getHomeRoute, getHistoryRoute, getPinsRoute } from './routes';
import { timestampToString } from './utils';

const dividerStyle = {
    borderTop: '1px solid #7e8791',
}

const getIcon = (diffZoneCount: number, status: string, inQueue: number) => {
    if (inQueue > 0) {
        return 'loading';
    }
    if (!diffZoneCount) {
        return 'check';
    }
    if (status === 'done') {
        return 'issues-close';
    }
    return 'exclamation-circle';
}

const SideMenu = ({ getCrawlers }: any) => {
    return (
        <Menu theme="dark" mode="inline">
            <Menu.Item key="new">
                <Icon type="plus" />
                <span className="nav-text">New</span>
                <Link to={getHomeRoute()} />
            </Menu.Item>
            <Menu.Item key="pins">
                <Icon type="pushpin" />
                <span className="nav-text">Pins</span>
                <Link to={getPinsRoute()} />
            </Menu.Item>
            {getCrawlers &&
                getCrawlers.sort(({ timestamp: a }, { timestamp: b }) => b - a)
                    .map(({ timestamp, url, id, diffZoneCount, status, inQueue }, index) => (
                        <Menu.Item key={`crawler-${id}`} title={url} style={index === 0 && dividerStyle}>
                            <Icon type={getIcon(diffZoneCount, status, inQueue)} />
                            <span className="nav-text">
                                { timestampToString(timestamp) }
                            </span>
                            <Link to={getHistoryRoute(timestamp)} />
                        </Menu.Item>
                    ))}
        </Menu>
    );
}

export default function (props: any) {
    return SideMenu(props);
}