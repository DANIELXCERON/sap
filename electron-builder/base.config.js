const base = {
  appId: "com.sap.app",
  productName: "SAP",
  icon: "src/img/icon.ico",
  files: ["src", "config"],
  nsis: {
    artifactName: '${productName}-Setup-${version}.${ext}',
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
        target: "nsis",
        arch: ["x64"],
      },
    ],
    publish: [
      {
        provider: "github"
      }
    ],
  },
  fileAssociations: [
    {
      name: "SLST",
      description: "Lista SAP",
      ext: "slst",
      icon: "electron-builder/FileTypeIcons/slst.ico",
    },
    {
      name: "SGC",
      description: "Generador de caracteres",
      ext: "sgc",
      icon: "electron-builder/FileTypeIcons/sgc.ico",
    },
  ],
};

module.exports = base;
