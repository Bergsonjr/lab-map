module.exports = {
    apps: [
        {
            name: 'jubilant-octo-lab',
            script: './app.js',
            instances: 'max',
            exec_mode: 'cluster',
        },
    ],
};
