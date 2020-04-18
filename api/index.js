require('dotenv').config();

const cluster = require('cluster');
const server = require('./server');
const numCPUs = require('os').cpus();

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs.length; ++i) {
        cluster.fork();
    }

    cluster.on('exit', () => {
        cluster.fork();
    })
}
else {
    server.listen(process.env.PORT, () => {
        console.log(`jubilant-octo-lab is running on ${process.env.PORT}`)
    });
}