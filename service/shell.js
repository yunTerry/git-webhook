
const logger = require('../utils/log')
const child_process = require('child_process');

module.exports = {

    front: () => {
        child_process.execFile('sh', ['/prod/front.sh'],
            (error, stdout, stderr) => {
                logit(error, stdout, stderr)
            })
    },

    back: () => {
        child_process.execFile('sh', ['/prod/back.sh'],
            (error, stdout, stderr) => {
                logit(error, stdout, stderr)
            })
    }
}

function logit(error, stdout, stderr) {
    if (error != null) {
        logger.logb.error(error)
    }
    if (stdout != null) {
        logger.logb.info(stdout)
    }
    if (stderr != null) {
        logger.logb.warn(stderr)
    }
}
