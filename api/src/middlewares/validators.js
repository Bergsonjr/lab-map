const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    registerIndexValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        }),
    }),

    registerStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            phone: Joi.string().required().min(10),
            login: Joi.string().required(),
            password: Joi.string().required(),
            document: Joi.string().required(),
        }),
    }),

    registerPutValidator: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        }),
    }),

    registerDeleteValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
    }),

    incidentsDeleteValidator: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        }),
    }),

    sessionStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            login: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }),
};
