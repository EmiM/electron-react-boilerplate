const getAppName = () => {
  const extensions = {
    win32: 'ElectronReact Setup 4.5.0.exe',
    linux: 'ElectronReact-4.5.0.AppImage',
    darwin: 'ElectronReact-4.5.0.dmg'
  }
  return extensions[process.platform]
}

module.exports = {
  mainWindowUrl: "./release/app/dist/renderer/index.html",
  electronPath:  `./release/build/${getAppName()}`
}
