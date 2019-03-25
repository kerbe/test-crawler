import gql from 'graphql-tag';

import SelectCrawler from '../fragment/crawler';

const template = gql`
{
    getCrawlers {
        ...SelectCrawler
    }
}
${SelectCrawler}
`;

export default template;