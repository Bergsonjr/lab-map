require('dotenv').config();

const server = require('./server');

server.listen(process.env.PORT, () => {
    console.log(`jubilant-octo-lab is running on ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
