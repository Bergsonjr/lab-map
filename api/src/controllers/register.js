const connection = require('../database/connection');
const { generateUniqueId, createHash } = require('../utils');

module.exports = {
    async index(req, res) {
        try {
            const { id } = req.params;

            const [user] = await connection('user').select('*').where({ id });

            if (user) {
                res.status(201).json({ user }).end();
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' }).end();
            }
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async store(req, res) {
        try {
            const id = generateUniqueId();
            const { name, email, phone, login, password, doc } = req.body;

            await connection('user').insert({ id, name, email, phone, login, password: createHash(password) });
            
            res.status(201).json({ id }).end();
        } catch (error) {
            console.log(error);
            res.status(400).json({ error }).end();
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, phone, login, password, doc } = req.body;

            await connection('user').where({ id }).update({ id, name, email, phone, login, password });

            res.status(204).send('Usuário atualizado').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            await connection('user').where({ id }).del();

            res.status(204).send('Usuário deletado').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
};
