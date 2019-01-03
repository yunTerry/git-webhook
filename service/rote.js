const fs = require('mz/fs')
const exec = require('./shell')
const sha = require('../utils/sha')

const gish = async ctx => {

    await fs.appendFile('./log.txt', '\n\n' + new Date().toLocaleString() + '  收到Webhook')

    const body = JSON.stringify(ctx.request.body, null, 2)
    console.log(body)
    const resa = sha(body, 'aaaa')
    const resb = sha(body, 'bbbb')

    const tok = ctx.request.header['x-gogs-signature']

    if (tok === resa) {
        exec.front()
        ctx.response.body = 'front ok'
        await fs.appendFile('./log.txt', '\n前端开始自动编译...')
        
    } else if (tok === resb) {
        exec.back()
        ctx.response.body = 'back ok'
        await fs.appendFile('./log.txt', '\n后端开始自动部署...')

    } else {
        ctx.response.body = 'ignore'
        await fs.appendFile('./log.txt', '\n忽略请求...')
    }

};

module.exports = gish