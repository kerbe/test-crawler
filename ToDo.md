- if crawl failed, in some case we could move back the url to crawl in the queue (or maybe too dangerous?)
- make it easy to setup
- need to work globally
- move all package for test-crawler in a single folder?
- rerun doesnt work properly
- should keep log for each url: see why code didn't execute...
- need to handle error properly?

- in new page, instead of new have list of project, button new would create a new project (preset)





- track user behavior, save it in history and reproduce scenarios... (e2e?)


storybook
pattern http://localhost:9001/
module.exports = async function run(page, url, links) {
    return await page.evaluate(() => {
        // Array.from(document.body.getElementsByTagName("a"))
        //      .filter(a => !a.href)
        //      .forEach(a => a.click());
        // return Array.from(document.links).map(
        //     link => link.href.replace('/?path=/story/', '/iframe.html?id=')
        // );
    });
}
|
--->
        module.exports = async function run(page, url, links) {
            return links.map(
                link => link.replace('/?path=/story/', '/iframe.html?id=')
            );
        }

----->
const origin = (new URL(url)).origin;

Array.from(document.body.getElementsByTagName("a")).filter(a => !a.href).forEach(a => {
  if (a.nextSibling.nodeName === 'A') a.click()
});


const URL = require('url').URL;
module.exports = async function run(page, url, links) {
    const foundLinks = await page.evaluate(() => {
        Array.from(document.body.getElementsByTagName("a")).filter(a => !a.href).forEach(a => {
            if (a.nextSibling && a.nextSibling.nodeName === 'A') a.click()
        });
        return Array.from(document.links).map(
            link => link.href.replace('/?path=/story/', '/iframe.html?id=')
        );
    });
    const origin = (new URL(url)).origin;
    return foundLinks.filter(link => link.href.indexOf(origin) !== -1);
}


const URL = require('url').URL;
module.exports = async function run(page, url, links) {
    return await page.evaluate((url) => {
        const origin = (new URL(url)).origin;
        Array.from(document.body.getElementsByTagName("a")).filter(a => !a.href).forEach(a => {
            if (a.nextSibling && a.nextSibling.nodeName === 'A') a.click()
        });
        return Array.from(document.links).filter(link => link.href && link.href.indexOf(origin) !== -1).map(
            link => link.href.replace('/?path=/story/', '/iframe.html?id=')
        );
    }, url);
}



// module.exports = async function run(page, url, links) {
//     return links.map(
//        (link) => link.replace('/?path=/story/', '/iframe.html?id=')
//    );
//}




- - export * from './Image';

- inject code base on url pattern
    - update doc
    - display related pins base on pattern
    - (code history?)

- code preview
    - code preview till specific line

- use html diff to improve visual comparison. automatically remove elements that changed and make screenshot, isolate element that change and make screenshot of them.
    - if we have possibility to reuse original page, with all CSS and so on -> then we can remove element as well on original page, so we can know from with height position page changed

- when limit selected, allow random page (shuffle, if limit is 2 instead to always pick up the first 2 pages, pick randomly eg. page 10 and page 22)
    - or maybe do something with code injection
    -> extract urls from beginning and pass them to code injection

- use single input for search and filtering
        https://2x.ant.design/components/select/#components-select-demo-select-users

- Url to crawl base on pattern

- when page was automatically pined, show info

- page detail

- plugin system

- think about AI!! random click?
    --> instead of random, track user behavior, save it in history and reproduce scenarios...


toggle on/off `runProcess` from settings, set timeout from settings...
```tsx
if (runProcess) {
    exec(`PROCESS_TIMEOUT=60 test-crawler-cli 2> ${this.getLogFile()} &`);
}
```

- ctrl-s save code https://www.npmjs.com/package/react-hotkeys

- ~~improve test-crawler bash > maybe switch to JS~~




- diff images with different height algorithm

- HTML diff -> uglify HTML + linux diff (or diff lib)

- SSR version for react components?

- serverLess version using only github and travis (when loading the ui, github credential would be asked to get the a github token, then data would be saved by pushing commit to github)

### Test-crawler-input

- (form) input random value in field, submit and save result. Do this several time with different values, and saves everything. Re-do with the same value and check if there is the same result. If result change, trigger warning...
    - might give the possibility to reconize filed type
        - email
        - numeric
        - password
        - ...

### Test-crawler-search

- search input test, enter random text... save result, compare... but for generating the search might use the data in the result...
    - actually easier than form testing