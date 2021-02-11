const base = {
  appId: "com.sap.app",
  productName: "SAP Playout",
  icon: "src/img/icon.ico",
  files: ["src", "config"],
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
    target: [
      {
        target: "squirrel",
        arch: [
          "x64"
        ]
      }
    ]
  },
  fileAssociations: [
    {
      name: "SLST",
      description: "Lista SAP",
      ext: "slst",
      icon: "electron-builder/FileTypeIcons/slst.ico"
    },
    {
      name: "SGC",
      description: "Generador de caracteres",
      ext: "sgc",
      icon: "electron-builder/FileTypeIcons/sgc.ico"
    }
  ],
};

module.exports = base;
