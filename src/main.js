const {app,BrowserWindow,Menu,MenuItem,ipcMain,dialog,Notification,} = require("electron");
const electron = require("electron");

const url = require("url");
const path = require("path");

const log = require('electron-log');
const {autoUpdater} = require("electron-updater");


autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');



/* ruta de imagenes */
// icono de la app
const imgPath_icon = path.join(__dirname, "img/logo-icon.png");
// imagen de notificaciones
const imgPath_n_screenFail = path.join(__dirname, "img/screen-fail.png");

let mainWindow = null;
let videoWindow = null;
let GCWindow = null;
let windowAcercaDe = null;



// solicitar bloqueo de instancia única
const gotTheLock = app.requestSingleInstanceLock();

// cuando la app este lista se crean las ventanas
app.on("ready", () => {

  // se buscan actualizaciones
  autoUpdater.checkForUpdatesAndNotify();

  let displays = electron.screen.getAllDisplays();
  let externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0;
  });

  if (externalDisplay) {
    // bloqueo de instancia única
    if (!gotTheLock) {
      app.quit();
    } else {
      // si hay pantallas externas
      openMainWindow();
      openVideoWindow();
    }
  } else {
    // si no hay pantalla
    osNotif({
        title: "😲 ¡vaya!",
        body: "Tienes que conectar una salida 🔌",
        icon: imgPath_n_screenFail,
      })
    openMainWindow();
    openVideoWindow2();
  }
});

function osNotif(notif) {
  new Notification(notif).show();
}

// La ventana principal
function openMainWindow() {
  mainWindow = new BrowserWindow({
    //kiosk: true, modo quiosco o pantalla completa
    show: false,
    width: 1100,
    height: 680,
    // frame: false,
    title: `${app.getName()} ${app.getVersion()}`,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  mainWindow.setIcon(imgPath_icon);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  // Menu
  const mainMenu = Menu.buildFromTemplate(MainWindowMenu);
  // Establecer el menú en la ventana principal
  Menu.setApplicationMenu(mainMenu);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    if (process.platform == "win32" && process.argv.length >= 2) {
      mainWindow.webContents.send("open:fileType", process.argv[1]);
    }
    /**ACTUALIZACIONES */
    function sendStatusToWindow(text) {
      log.info(text);
      mainWindow.webContents.send("message", text);
    }
    autoUpdater.on("checking-for-update", () => {
      sendStatusToWindow("Comprobación de actualización...");
    });
    autoUpdater.on("update-available", (info) => {
      sendStatusToWindow("Actualización disponible.");
    });
    autoUpdater.on("update-not-available", (info) => {
      sendStatusToWindow("Actualización no disponible.");
    });
    autoUpdater.on("error", (err) => {
      sendStatusToWindow("Error en el actualizador automático." + err);
    });
    autoUpdater.on("download-progress", (progressObj) => {
      let log_message = "Velocidad de Descarga: " + progressObj.bytesPerSecond;
      log_message = log_message + " - descargado" + progressObj.percent + "%";
      log_message =
        log_message +
        " (" +
        progressObj.transferred +
        "/" +
        progressObj.total +
        ")";
      sendStatusToWindow(log_message);
    });
    autoUpdater.on("update-downloaded", (info) => {
      sendStatusToWindow("Actualización descargada");
    });
  });
  // Si cerramos la ventana principal, la segunda ventana se cierra
  mainWindow.on("closed", () => {
    app.quit();
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}


// Ventana de video
function openVideoWindow() {
  app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"); //desactiva las restrincciones de autoplay :)

  let displays = electron.screen.getAllDisplays();
  let externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0;
  });

  videoWindow = new BrowserWindow({
    show: false,
    transparent: true,
    frame: false,
    minimizable: false,
    x: externalDisplay.bounds.x,
    y: externalDisplay.bounds.y,
    title: "video-out",
    webviewTag: true,
    skipTaskbar: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  videoWindow.setFullScreen(true);

  videoWindow.setIcon(imgPath_icon);
  videoWindow.setAlwaysOnTop(true);
  videoWindow.setMenu(null);

  videoWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "video.html"),
      protocol: "file",
      slashes: true,
    })
  );
  videoWindow.once("ready-to-show", () => {
    videoWindow.show();
  });
  videoWindow.on("closed", () => {
    videoWindow = null;
  });
}

// Ventana de video en caso de que no haya pantalla externa
function openVideoWindow2() {
  app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"); //desactiva las restrincciones de autoplay :)

  videoWindow = new BrowserWindow({
    show: false,
    title: "Salida de video",
    width: 16 + 720,
    height: 38 + 480,
    x: 0,
    y: 0,
    webviewTag: true,
    backgroundColor: "#000",
    // skipTaskbar: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  videoWindow.setIcon(imgPath_icon);
  videoWindow.setMenu(null);

  videoWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "video.html"),
      protocol: "file",
      slashes: true,
    })
  );
  videoWindow.once("ready-to-show", () => {
    videoWindow.show();
  });
  videoWindow.on("closed", () => {
    videoWindow = null;
  });
}
// Ventana GC
function openGCWindow() {
  GCWindow = new BrowserWindow({
    show: false,
    width: 630,
    height: 580,
    title: "Generador de caracteres",
    webviewTag: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  GCWindow.setIcon(imgPath_icon);
  GCWindow.setMenu(Menu.buildFromTemplate(GCWindowMenu));
  GCWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "gc.html"),
      protocol: "file",
      slashes: true,
    })
  );
  GCWindow.once("ready-to-show", () => {
    GCWindow.show();
  });
  GCWindow.on("closed", () => {
    GCWindow = null;
  });
}
// Ventana acerca de
function OpenAboutWindow() {
  windowAcercaDe = new BrowserWindow({
    show: false,
    parent: mainWindow,
    title: "Acerca de",
    modal: true,
    width: 450,
    height: 350,
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  windowAcercaDe.setIcon(imgPath_icon);
  windowAcercaDe.setMenu(null);
  windowAcercaDe.loadURL(
    url.format({
      pathname: path.join(__dirname, "acerca-de.html"),
      protocol: "file",
      slashes: true,
    })
  );
  windowAcercaDe.once("ready-to-show", () => {
    windowAcercaDe.show();
  });
  windowAcercaDe.on("closed", () => {
    windowAcercaDe = null;
  });
}

//////////////////////////////////////// Ipc Renderer Events
ipcMain.on("datos:stream", (e, datosStream) => {
  videoWindow.webContents.send("datos:stream", datosStream);
});
ipcMain.on("datos:stream2", (e, datosStream) => {
  videoWindow.webContents.send("datos:stream2", datosStream);
});
ipcMain.on("datos:gc", (e, datosGC) => {
  videoWindow.webContents.send("datos:gc", datosGC);
});
ipcMain.on("control:player", (e, control) => {
  videoWindow.webContents.send("control:player", control);
});
ipcMain.on("control:player2", (e, control) => {
  videoWindow.webContents.send("control:player2", control);
});
ipcMain.on("datos:videoactual", (e, videoActualTime) => {
  mainWindow.webContents.send("datos:videoactual", videoActualTime);
});
ipcMain.on("datos:videoactual2", (e, videoActualTime) => {
  mainWindow.webContents.send("datos:videoactual2", videoActualTime);
});
//////////////////////////////////////// Fin de Ipc Renderer Events

// Menu de la ventana principal
const MainWindowMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Abrir...",
        accelerator: "Ctrl+O",
        click() {
          mainWindow.webContents.send("openScheduler");
        },
      },
      {
        label: "Guardar",
        accelerator: "Ctrl+S",
        click() {
          mainWindow.webContents.send("saveScheduler");
        },
      },
      {
        label: "Guardar como...",
        accelerator: "Ctrl+Shift+S",
        click() {
          mainWindow.webContents.send("saveAsScheduler");
        },
      },
      { type: "separator" },
      {
        label: "Salir",
        accelerator: "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Ver",
    submenu: [
      {
        label: "Generador de Caracteres",
        accelerator: "Ctrl+G",
        click() {
          if (GCWindow) {
            GCWindow.focus();
          } else {
            openGCWindow();
          }
        },
      },
      { type: "separator" },
      {
        label: "Ventana de video",
        click() {
          if (videoWindow) {
            videoWindow.focus();
          } else {
            openVideoWindow2();
          }
        },
      },
    ],
  },
  {
    label: "Ayuda",
    submenu: [
      {
        label: 'About ' + app.getName(),
        role: 'about'
      },
      { type: "separator" },
      {
        label: "Acerca de SAP...",
        click: async () => {
          OpenAboutWindow();
        },
      },
    ],
  },
];

// Menu del GC
const GCWindowMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Abrir...",
        accelerator: "Ctrl+O",
        click() {
          GCWindow.webContents.send("openGC");
        },
      },
      {
        label: "Guardar",
        accelerator: "Ctrl+S",
        click() {
          GCWindow.webContents.send("saveGC");
        },
      },
      {
        label: "Guardar como...",
        accelerator: "Ctrl+Shift+S",
        click() {
          GCWindow.webContents.send("saveAsGC");
        },
      },
    ],
  },
];

// Herramientas para desarrolladores en entornos de desarrollo
// if (app.isPackaged === false) {
  //si la app no esta empaquetada
  MainWindowMenu[2].submenu.push(
    { type: "separator" },
    {
      label: "toggle Dev Tools",
      click(item, focusedWindow) {
        focusedWindow.toggleDevTools();
      },
    },
    {
      label: "Video Out toggle Dev Tools",
      click() {
        videoWindow.webContents.openDevTools();
      },
    },
  );
  
  GCWindowMenu.push({
    label: "dev",
    submenu: [
      {
        label: "toggle Dev Tools",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
// }
