const base = {
  appId: "com.sap.app",
  productName: "SAP Playout",
  icon: "src/img/icon.ico",
  files: ["src","config"],
  nsis: {
    oneClick: true,
    perMachine: true,
    createDesktopShortcut: "always",
    allowToChangeInstallationDirectory: false,
    installerSidebar: "electron-builder/win-installer-sidebar.bmp",
    uninstallerSidebar: "electron-builder/win-uninstaller-sidebar.bmp",
  },
  directories: {
    buildResources: "electron-builder",
    output: "dist",
  },
  extraMetadata: {
    env: "production",
  },
  win: {
    extraResources: [],
    extraFiles: [
      // {
      //   from: "config",
      //   to: "config",
      // },
    ],
  },
  fileAssociations: [
    {
      name: "SLST",
      description: "Archivo lista de programacion.",
      ext: "slst",
      icon: "electron-builder/FileTypeIcons/slst.ico"
    },
    {
      name: "SGC",
      description: "Archivo de generador de caracteres.",
      ext: "sgc",
      icon: "electron-builder/FileTypeIcons/sgc.ico"
    }
  ],
};

module.exports = base;
