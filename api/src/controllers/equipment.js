const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const { id } = req.params;

            const [equipment] = await connection('equipment').select('*').where({ id });

            if (equipment) {
                res.status(201).json({ equipment }).end();
            } else {
                res.status(404).json({ error: 'Equipamento não encontrado' }).end();
            }
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async store(req, res) {
        try {
            const { name } = req.body;

            await connection('equipment').insert({ name });

            res.status(201).json({ name }).end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;

            await connection('equipment').where({ id }).update({ name });

            res.status(204).send('Equipamento atualizado').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            await connection('equipment').where({ id }).del();

            res.status(204).send('Equipamento deletado').end();
        } catch (error) {
            res.status(400).json({ error }).end();
        }
    },
};
