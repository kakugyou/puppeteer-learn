/**
 * Created by kakugyou on 2018/1/8.
 */

const puppeteer = require("puppeteer");
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];


(async() => {
    const browser = await puppeteer.launch({
        // 关闭无头模式，方便我们看到这个无头浏览器执行的过程
        // headless: false,
        timeout: 30000, // 默认超时为30秒，设置为0则表示不设置超时
    });


    const page= await browser.newPage();

    //await page.emulate(iPhone);

    await page.setViewport({
        width : 1366,
        height : 768,
        deviceScaleFactor : 1
    });

    await  page.goto("https://fonts.kakugyou.org/",{
        // 配置项
        // waitUntil: 'networkidle', // 等待网络状态为空闲的时候才继续执行
    });

    await  page.screenshot({
        path : " fonts.png"
    });


/*
    await page.pdf({
        path: 'fonts.pdf',
        format: 'A4' // 保存尺寸
    });
*/



    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);

    browser.close();
})();

