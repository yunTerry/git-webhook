
const child_process = require('child_process');

module.exports = {

    front: () => {
        child_process.execFile('sh', ['/prod/front.sh'],
            (error, stdout, stderr) => {
                console.log(stdout)
            })
    },
    
    back: () => {
        child_process.execFile('sh', ['/prod/back.sh'],
            (error, stdout, stderr) => {
                console.log(stdout)
            })
    }
}