
const crypto = require('crypto')

module.exports = (content, key) => {
    const signs = crypto.createHmac('sha256', key)
        .update(content)
        .digest('hex')
    return signs
}