1. npm i
1.5(võibolla on vaja) npm install -g nodemon(?)
2. Tee endale 'Google Service Account' Google Sheets API'le
3. Tee Google Sheets fail Google Drive'i
4. Jaga see oma Google Service Accountiga
5. Vaheta 'credentials.json' oma enda Service Account credentialsiga

index.js pane spreadsheetId oma enda spreadsheeti ID'ks
index.ejs (views folderi sees) pane ka spreadsheetId oma enda spreadsheeti ID'ks
index.ejs pane apiKey enda google sheets api apiKey

run command - "nodemon index.js"


enne npm install -g nodemoni tegemist pead sa alla laadima 3 moduleit. 
npm install ejs
npm install googleapis
npm install express