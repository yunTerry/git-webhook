const fs = require('mz/fs')
const exec = require('./she')
const sha = require('./sha')

const giwk = async ctx => {

    const resa = sha(ctx.request.body.toString(), 'aaaa')
    const resb = sha(ctx.request.body.toString(), 'bbbb')

    const tok = ctx.request.header['x-gogs-signature']
    console.log(resa + '\n' + resb + '\n' + tok)

    if (tok === resa) {
        exec.front()
        ctx.response.body = 'front ok'

    } else if (tok === resb) {
        exec.back()
        ctx.response.body = 'back ok'

    } else {
        ctx.response.body = 'ignore'
    }

    const out = JSON.stringify(ctx.request.body, null, 2)
    await fs.writeFile('./log.txt', out)

};

module.exports = giwk