const connection = require('../database/connection');

module.exports = {
    async store(req, res) {
        try {
            const { login, password } = req.body;

            const user = await connection('user').where({ login, password });

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};
