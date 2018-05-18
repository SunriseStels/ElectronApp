const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', () => {
   const windowOption = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
   }
   mainWindow = new BrowserWindow(windowOption);
   mainWindow.loadURL(path.join('file://',__dirname, 'mainWindow.html'));
})