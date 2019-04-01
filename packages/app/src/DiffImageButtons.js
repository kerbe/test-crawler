import React from 'react';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import notification from 'antd/lib/notification';
import { graphql } from 'react-apollo';

import SET_ZONE_STATUS from './gql/mutation/setZoneStatus';
import { updatePagesCache } from './utils/updatePageCache';

const buttonStyle = {
    marginLeft: 5,
    marginRight: 5,
}

export class DiffImageButtons extends React.Component {
    onSetStatus = (status) => async () => {
        const { mutate, timestamp, id, index } = this.props;
        try {
            await mutate({
                variables: { timestamp: timestamp.toString(), id, index, status },
                update: (store, { data: { setZoneStatus } }) =>
                    updatePagesCache(store, setZoneStatus, timestamp),
            });
            message.success('Page pinned as reference for comparison.', 2);
        } catch (error) {
            notification['error']({
                message: 'Something went wrong!',
                description: error.toString(),
            });
        }
    }

    render() {
        return (
            <>
                <Button style={buttonStyle} icon="check" size="small" onClick={this.onSetStatus('valid')}>Ignore</Button>
                <Button style={buttonStyle} icon="pushpin" size="small" onClick={this.onSetStatus('pin')}>Always ignore</Button>
                <Button style={buttonStyle} icon="warning" size="small" type="danger" onClick={this.onSetStatus('report')}>Report</Button>
            </>
        );
    }
}

export default graphql(SET_ZONE_STATUS)(DiffImageButtons);