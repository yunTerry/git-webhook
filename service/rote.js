
const exec = require('./shell')
const sha = require('../utils/sha')
const logger = require('../utils/log')

const gish = async ctx => {

    const body = JSON.stringify(ctx.request.body, null, 2)

    const tok = ctx.request.header['x-gogs-signature']

    if (tok === sha(body, 'aaaa')) {
        exec.front()
        ctx.response.body = 'front ok'
        logit(ctx.request.body)

    } else if (tok === sha(body, 'bbbb')) {
        exec.back()
        ctx.response.body = 'back ok'
        logit(ctx.request.body)

    } else {
        ctx.response.body = 'ignore'
        logger.loga.info('忽略请求...')
    }

};

function logit(bo) {

    logger.loga.info(bo.repository.html_url + '  ' + bo.repository.description)
    logger.loga.info(bo.pusher.login + '  ' + bo.commits[0].timestamp)
    const hash = bo.commits[0].id.toString().substr(0, 10)
    const msg = bo.commits[0].message.toString().replace(/\n/g, '')
    logger.loga.info(hash + '  ' + msg + '\n')

}


module.exports = gish