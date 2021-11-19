const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    console.log("Aplicação Iniciada.");
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    mainWindow.loadURL('https://authenty.com.br/v1');
});