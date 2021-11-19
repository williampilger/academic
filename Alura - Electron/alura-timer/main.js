const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
    console.log("Aplicação Iniciada.");
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
    console.log("Aplicação Finalizada.");
    app.quit();
});

ipcMain.on('abrir-janela-sobre', () => {
    console.log("Abrindo 'Sobre'.");
    let sobreWindow = new BrowserWindow({
        width: 300,
        height: 200
    });
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});