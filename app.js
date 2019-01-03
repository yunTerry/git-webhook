const Koa = require('koa');
const koaBody = require('koa-body');
const route = require('koa-route');
const main = require('./service/rote');

const app = new Koa();

app.use(koaBody());
app.use(route.post('/go', main));

app.listen(8231, () => {
    console.log('start serve')
});