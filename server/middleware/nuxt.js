'use strict';

const Nuxt = require('nuxt');
const config = require('../../nuxt.config');
const logger = require('winston');

const nuxt = new Nuxt(config);

if (config.dev) {
    nuxt.build()
        .then(() => process.emit('nuxt:build:done'))
        .catch((error) => {
            logger.error(error);
            process.exit(1);
        });
} else {
    process.nextTick(() => process.emit('nuxt:build:done'));
}

module.exports = nuxt;