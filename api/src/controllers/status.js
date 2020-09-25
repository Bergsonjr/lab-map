const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const { id } = req.params;

            const [status] = await connection('status').select('*').where({ id });

            if (status) {
                res.status(201).json({ status }).end();
            } else {
                res.status(404).json({ error: 'Status não encontrado' }).end();
            }
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async store(req, res) {
        try {
            const { name } = req.body;

            await connection('status').insert({ name });

            res.status(201).json({ name }).end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            await connection('status').where({ id }).update({ name });

            res.status(204).send('Status atualizado').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            await connection('status').where({ id }).del();

            res.status(204).send('Status deletado').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
};
