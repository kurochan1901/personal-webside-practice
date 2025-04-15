# 中央火舞藝術研究社網站

## 專案簡介
這是一個使用 HTML、CSS 和 JavaScript 製作的靜態網頁，目的是介紹「中央火舞藝術研究社」，並吸引：
- 新生加入社團
- 校內同學觀賞火舞表演
- 一般民眾認識火舞藝術與安全文化

## 網站特色
- 滿版區塊式排版（左右分欄）
- 動態背景與區塊漸顯動畫效果
- 活動紀錄表格可錨點跳轉
- 表單送出後導向感謝頁，並提供正式入社表單 QR Code

## 技術重點
- 純 HTML + CSS 開發，未使用框架或 Bootstrap
- 使用 `IntersectionObserver` 實作滾動動畫
- 背景使用 `@keyframes` 製作火焰／藝術風動態漸層
- 表單以 JavaScript 攔截並跳轉，避免後端錯誤

## 檔案結構
- `index.html`：首頁（社團介紹）
- `activity.html`：活動紀錄頁面
- `join.html`：入社表單頁面
- `thankyou.html`：感謝頁面
- `style.css`：主樣式檔
- `script.js`：動畫與表單控制

## 開發心得（選擇性段落）
本專案過程中，我學會了從結構規劃到視覺微調的完整流程，特別是在：
- 使用 flexbox 解決 footer 排版問題
- 放棄 Bootstrap 改用純 CSS 控制風格
- 學會 iframe 正確嵌入 YouTube 的方式
等部分大幅提升前端理解與實作能力。

## 預覽連結
[GitHub Pages 預覽](https://kurochan1901.github.io/personal-website-practice/)

