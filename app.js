const {
  app,
  BrowserWindow, ipcMain
} = require('electron')
const url = require("url");
const path = require("path");

const { autoUpdater } = require('electron-updater');

let appWindow

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Electron Build Path
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Initialize the DevTools.
  //appWindow.webContents.openDevTools()

  appWindow.on('closed', function () {
    appWindow = null
  })

  appWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
}



app.on('ready', initWindow)

// Close when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    initWindow()
  }
})



ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});


autoUpdater.on('update-available', () => {
  appWindow.webContents.send('update_available');
});
autoUpdater.on('update-downloaded', () => {
  appWindow.webContents.send('update_downloaded');
});


ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});
