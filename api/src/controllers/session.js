const connection = require('../database/connection');
const { validateHash } = require('../utils');

module.exports = {
    async store(req, res, next) {
        try {
            const { login, password } = req.body;

            const [user] = await connection('user').where({ login });
            console.log(user)
            const isValid = validateHash(user.password, password);

            if (!user || !isValid) {
                return res.status(400).json({ error: 'Login e/ou senha incorretos' });
            }

            res.locals.data = { user };
            return next();
        } catch (error) {
            console.log(error)
            return res.status(400).json(error);
        }
    },
};
