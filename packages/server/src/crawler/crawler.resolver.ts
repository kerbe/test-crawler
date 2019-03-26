import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CrawlerInput } from './dto/crawler.input';
import { Crawler } from './models/crawler';
import { CrawlerService } from './crawler.service';
import { StartCrawler } from './models/startCrawler';

@Resolver(() => Crawler)
export class CrawlerResolver {
    constructor(private readonly crawlerService: CrawlerService) {}

    @Query(() => [Crawler])
    getCrawlers(): Promise<Crawler[]> {
        return this.crawlerService.getAll();
    }

    @Mutation(() => StartCrawler)
    startCrawler(
        @Args('crawler') crawler: CrawlerInput,
    ): Promise<StartCrawler> {
        return this.crawlerService.start(crawler);
    }
}
