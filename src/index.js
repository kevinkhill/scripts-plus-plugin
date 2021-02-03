const createNanoEvents = require("./createNanoEvents");

function ScriptsPlus(config) {  
  return {
    alert: require("./alert"),
    babel: require("./babel"),
    balloon: require("./balloon"),
    balloons: require("./balloons"),
    cache: require("./cache"),
    calc: require("./calc"),
    chrome: require("./chrome"),
    cimco: require("./cimco"),
    datestamp: require("./datestamp"),
    dialog: require("./dialog"),
    engine: require("./engine"),
    env: require("./env"),
    events: createNanoEvents(),
    exec: require("./exec"),
    explorer: require("./explorer"),
    fs: require("./fs"),
    getType: require("./getType"),
    keyboard: require("./keyboard"),
    mastercam: require("./mastercam"),
    mouse: require("./mouse"),
    npp: require("./notepadPlusPlus"),
    path: require("./path"),
    popup: require("./popup"),
    regedit: require("./regedit"),
    request: require("./request"),
    specialFolder: require("./specialFolder"),
    store: require("./store"),
    strings: require("./strings"),
    timer: require("./timer"),
    timestamp: require("./timestamp"),
    toast: require("./toast"),
    toaster: require("./toaster"),
    types: require("./types"),
    unpkg: require("./unpkg"),
    utils: require("./utils"),
    webview: require("./webview"),
    window: require("./window")
  }
}

module.exports = ScriptsPlus;