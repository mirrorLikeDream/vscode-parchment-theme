const Logger_Level = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
}

class Logger {
  level

  constructor() {
    this.level = Logger_Level.DEBUG
  }

  info(module, message, data) {
    if (this.level <= Logger_Level.INFO) {
      console.log(this.formatLog('INFO', module, message, data))
    }
  }

  formatLog(level, module, message, data) {
    const timestamp = new Date().toISOString()

    let logMessage = `[${timestamp}] [${level}] [${module}] ${message}`

    if (data !== undefined) {
      try {
        logMessage += '\n' + JSON.stringify(data, null, 2)
      } catch (e) {
        logMessage += '\n' + String(data)
        return logMessage
      }
    }
  }
}
