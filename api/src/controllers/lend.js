const connection = require('../database/connection');

module.exports = {
    async show(req, res) {
        try {
            const [lend] = await connection('lend').select('*');

            res.status(201).json({ lend }).end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async index(req, res) {
        try {
            const { id } = req.params;

            const [lend] = await connection('lend').select('*').where({ id });

            if (lend) {
                res.status(201).json({ lend }).end();
            } else {
                res.status(404).json({ error: 'Solicitação não encontrada' }).end();
            }
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async store(req, res) {
        try {
            const { name } = req.body;

            await connection('lend').insert({ name });

            res.status(201).json({ name }).end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;

            await connection('lend').where({ id }).update({ name });

            res.status(204).send('Solicitação atualizada').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            await connection('lend').where({ id }).del();

            res.status(204).send('Solicitação finalizada').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
};
