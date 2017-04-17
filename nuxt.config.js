const path = require('path');

module.exports = {
    loading: {
        color: '#92D3CE',
    },
    rootDir: path.resolve(__dirname),
    srcDir: path.join(__dirname, 'client'),
    dev: process.env.NODE_ENV !== 'production',
    head: {
        titleTemplate: '%s - Nuxt.js',
        title: 'Feathers Chat',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    }
};