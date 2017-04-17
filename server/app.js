'use strict';

const path = require('path');

const feathers = require('feathers');
const configuration = require('feathers-configuration');

const nuxt = require('./middleware/nuxt');

const api = require('./api');

const app = feathers();
app.configure(configuration(path.join(__dirname, '..')));

app.use('/api', api);
app.use(nuxt.render);

module.exports = app;
