
const log4js = require('log4js')

log4js.configure({
  appenders: {
    loga: {
      type: 'file',
      filename: 'logs/log-a.txt',
      maxLogSize: 3 * 1024 * 1024,
      encoding: 'utf-8'
    },
    logb: {
      type: 'file',
      filename: 'logs/log-b.txt',
      maxLogSize: 3 * 1024 * 1024,
      encoding: 'utf-8'
    }
  },
  categories: {
    loga: { appenders: ['loga'], level: 'trace' },
    logb: { appenders: ['logb'], level: 'trace' },
    default: { appenders: ['loga', 'logb'], level: 'trace' }
  },
  pm2: true
});

module.exports = {
  loga: log4js.getLogger('loga'),
  logb: log4js.getLogger('logb')
}