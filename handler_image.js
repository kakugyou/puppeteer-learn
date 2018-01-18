const puppeteer = require("puppeteer");

puppeteer.launch({
    // 关闭无头模式，方便我们看到这个无头浏览器执行的过程
    headless: false,
    //slowMo: 250, //slow down by 250ms
    timeout: 30000, // 默认超时为30秒，设置为0则表示不设置超时
}).then(async browser => {
    const page = await browser.newPage();

  /*  const responses = [];

    page.on('response', resp => {
        responses.push(resp);
    });

    page.on('load', () => {
        responses.map(async (resp, i) => {
            const request = await resp.request();
            const url = new URL(request.url);

            const split = url.pathname.split('/');
            let filename = split[split.length - 1];
            if (!filename.includes('.')) {
                filename += '.html';
            }

            const buffer = await resp.buffer();
            fs.writeFileSync(filename, buffer);
        });
    });*/


    await page.goto("https://fonts.kakugyou.org/image/data/2017/02/025-1.jpg",{
        // 配置项
        waitUntil: 'networkidle2', // 等待网络状态为空闲的时候才继续执行
    });

    // 获取页面标题
    let title = await page.title();
    console.log(title);


    /*
        键盘表
        https://github.com/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js
     */
    await page.keyboard.press('Meta');
    await page.keyboard.press('KeyP');
    //await page.keyboard.up('Meta');



/*
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
        if (interceptedRequest.url.endsWith('.png') || interceptedRequest.url.endsWith('.jpg'))
            interceptedRequest.abort();
        else
            interceptedRequest.continue();
    });
*/


    //await browser.close();
});


