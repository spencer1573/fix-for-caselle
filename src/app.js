import playwright from 'playwright'
;(async () => {
  const browser = await playwright['chromium'].launch({
    headless: false,
  })
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('https://www.caselle.com#events')
  // wait for image elements to exist
  await page.waitForSelector('#events img')
  await page.evaluate((_) => {
    const eventsElement = document.getElementById('events')

    const imagesToAdjustRaw = eventsElement.getElementsByTagName('img')

    const imagesToAdjust = Array.from(imagesToAdjustRaw)

    // take out that last image that is square
    imagesToAdjust.pop()

    imagesToAdjust.forEach((image, index) => {
      image.style.objectFit = 'cover'
    })
  })
})()
