const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const { id } = req.params;

            const [category] = await connection('category').select('*').where({ id });

            if (category) {
                res.status(201).json({ category }).end();
            } else {
                res.status(404).json({ error: 'Categoria não encontrada' }).end();
            }
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async store(req, res) {
        try {
            const { name } = req.body;

            await connection('category').insert({ name });

            res.status(201).json({ name }).end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            await connection('category').where({ id }).update({ name });

            res.status(204).send('Categoria atualizada').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            await connection('category').where({ id }).del();

            res.status(204).send('Categoria deletada').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
};
