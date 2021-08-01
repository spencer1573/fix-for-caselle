// const playwright = require('playwright')(
import playwright from 'playwright'

// here
;(async () => {
  // for (const browserType of ['chromium', 'firefox', 'webkit']) {
  // TODO #keep for later
  // args: ['--start-fullscreen', '--window-size=1896,896'],
  // viewport: { width: 1896, height: 720 },

  console.log('something')
  const browser = await playwright['chromium'].launch({
    headless: false,
  })
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('https://www.caselle.com#events')
  // await page.screenshot({ path: `example.png` })
  // await browser.close()
  // }
})()
