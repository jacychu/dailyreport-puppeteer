const puppeteer = require('puppeteer');

(async () => {

  let certainUrl = 'xxxxx'; //change it to your URL

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  let monday = new Date();
  let mon = monday.toJSON().slice(0,10).split`-`.join`/`;

  let tuesday = new Date(monday);
  tuesday.setDate(tuesday.getDate() + 1);
  let tue = tuesday.toJSON().slice(0,10).split`-`.join`/`;

  let wednesday = new Date(tuesday);
  wednesday.setDate(wednesday.getDate() + 1);
  let wed = wednesday.toJSON().slice(0,10).split`-`.join`/`;

  let thursday = new Date(wednesday);
  thursday.setDate(thursday.getDate() + 1);
  let thur = thursday.toJSON().slice(0,10).split`-`.join`/`;

  let friday = new Date(thursday);
  friday.setDate(friday.getDate() + 1);
  let fri = friday.toJSON().slice(0,10).split`-`.join`/`;

  let week ="";
  function getNumberOfWeek() {
      const today = new Date();
      const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
      const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
      week = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
      return week;
  }
  getNumberOfWeek();
  let formatweek = (week-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  console.log(formatweek);

  let content = '*'+ fri +', Friday*\n\n*'+ thur +', Thursday*\n\n*'+ wed +', Wednesday*\n\n*'+ tue +',  Tuesday*\n\n*'+ mon +', Monday*';

  await page.goto(certainUrl, {waitUntil: 'networkidle2'});

  // link to the page
  await page.click('#wrapper > div.flyout-menu.js-flyout-menu > span.js-profile-menu > ul > li:nth-child(1) > a');

  // login
  await page.type('#username', 'Jacy'); //change it to yours
  await page.type('#password', 'xxxxxxxx'); //change it to yours
  await page.click('#login-submit');

  // click add new message button
  await page.waitForSelector('#content > div.contextual > a.icon.icon-add', { visible: true })
  await page.click('#content > div.contextual > a.icon.icon-add');

  // #message_subject
  await page.type('#message_subject', '2021WW'+formatweek+' Jacy');

  // #message_content
  await page.type('#message_content', content);

  // submit
  await page.click('#message-form > p > input[type=submit]');

  debugger;
  await browser.close();
})();