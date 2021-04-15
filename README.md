# ✨dailyreport-puppeteer
Use peppeteer help create daily report automatically!

**⭐️ Puppeteer簡介**<br>
Puppeteer 是 Node.js 的函式庫，它提供各種 API 來控制Chrome或Chromium 瀏覽器。<br>
Puppeteer主要使用功能包含自動化測試以及爬蟲。這邊用到自動化測試的功能。<br>

**⭐️ 痛點說明**<br>
目前服務的公司部門單位，習慣使用Redmine做工作日誌記錄工具。<br>
每週一的早上，必須使用自己的帳號密碼登入做一個「建立新訊息」的動作。<br>
主旨欄位輸入年份週別「YYYY WW00」(EX:2021 WW03)。<br>
空位區則需輸入當週週一到週五的年月份日期。<br>
有關後續日誌內容則是等該週工作有進展再回頭做記錄。<br>
上述前大半段的動作，基本上是很固定的，卻需要繁瑣地重複(一週一次好像也還好XD?)<br>
相遇Puppeteer之後，發現它可以解決這個問題(搭配Puppeteer內建的Chrome headless)<br>
只需要撰寫幾行程式碼，代入正確的時間日期，即可一鍵呼叫即自動化完成！<br>

**⭐️ 介紹步驟**<br>
(index.js)
certainUrl 變數輸入Redmine網址<br>
接著是一系列編輯時間<br>
使用了getNumberOfWeek 這個function取得真正的時間(省去手動輸入)<br>
後續一系列動作即是「使用者操作」時會做的動作<br>
page.goto是連到Redmine網址<br>
page.click點擊登入<br>
page.type抓對應的id輸入自己的帳號密碼<br>
page.click點擊送出<br>
page.waiteForSelector等待API傳送登入(確認已成功登入)<br>
page.click點選建立新訊息<br>
page.type輸入標題<br>
page.type輸入內容<br>
page.click點擊送出<br>
browser.close關閉網頁(Chrome headless)<br>
完成！

**⭐️ 完成結果**<br>
最後的成果，每週一早上到辦公室，只需要在terminal開啟daily-puppeteer檔案夾<br>
按下npm run test 即完成自動登入，填寫表單標題，內容框架，並自動關閉網頁等一系列的動作。<br>
運用小工具協助工作更便利，是很棒也很有意義的任務！☺
