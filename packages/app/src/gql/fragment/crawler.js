import gql from 'graphql-tag';

const fragment = gql`
    fragment SelectCrawler on Crawler {
        id
        url
        timestamp
        status
        inQueue
        urlsCount
        viewport {
            width
            height
            isMobile
            hasTouch
            isLandscape
        }
        diffZoneCount
    }
`;

export default fragment;