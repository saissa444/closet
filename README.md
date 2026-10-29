# 衣櫥帳本

衣物建檔、盤點、花費統計與淘汰紀錄。資料（含照片）只存在你自己的裝置裡，不會上傳。

## 放上 GitHub Pages（約 5 分鐘，做一次就好）
1. 到 GitHub 建立新的 repository，例如 `closet`，設為 **Public**。
2. 進入 repo →「Add file」→「Upload files」，把這個資料夾裡的所有檔案（含 `icons` 資料夾）拖進去 →「Commit changes」。
3. repo 的「Settings」→「Pages」→ Source 選「Deploy from a branch」，Branch 選 `main`、資料夾 `/ (root)` →「Save」。
4. 等 1～2 分鐘，網址會是 `https://你的帳號.github.io/closet/`。

> 和慾望清單放在同一個帳號沒問題，兩個 App 的資料各自分開。

## 各裝置使用
- **iPhone**：用 Safari 開網址 → 分享 →「加入主畫面」，之後都從主畫面圖示開。Safari 分頁和主畫面 App 的資料是分開的，請固定用主畫面那個。
- **Mac Chrome**：網址列右側的「安裝」圖示，會變成獨立視窗 App（直接開網頁也可以）。
- **Windows Chrome／Edge**：網址列右側的「安裝應用程式」圖示。

## 換機／在電腦上看
設定 →「匯出備份」產生一個 `.json` 檔（含照片）→ 傳到另一台 → 設定 →「匯入備份」→ 選「合併」或「全部取代」。
建議每個月匯出一次，存到 iCloud 雲碟或 Google 雲端硬碟。App 會在超過 30 天沒備份時，在「設定」標上紅點提醒。

## 之後要更新 App
修改 `index.html` 後，把 `sw.js` 第二行的 `closet-v1` 改成 `closet-v2`（每次 +1），再上傳覆蓋。你的資料不會受影響。
