enum Logger_Level {
  DEBUG = 0,
  INFO,
  WARN,
  ERROR,
}

class Logger {
  level: Logger_Level

  constructor() {
    this.level = Logger_Level.DEBUG
  }

  info(module: string, message: string, data?: any) {
    if (this.level <= Logger_Level.INFO) {
      console.log(this.formatLog('INFO', module, message, data))
    }
  }

  formatLog(level: string, module: string, message: string, data?: any) {
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
