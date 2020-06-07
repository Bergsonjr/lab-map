const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    /* REGISTER CONTROLLER VALIDATOR - START */

    registerStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            phone: Joi.string().required().min(10),
            login: Joi.string().required(),
            password: Joi.string().required(),
            doc: Joi.string().required(),
        }),
    }),

    registerPutValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            phone: Joi.string().required().min(10),
            login: Joi.string().required(),
            password: Joi.string().required(),
            doc: Joi.string().required(),
        }),
    }),

    /* REGISTER CONTROLLER VALIDATOR - END */

    /* SESSION CONTROLLER VALIDATOR - START */

    sessionStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            login: Joi.string().required(),
            password: Joi.string().required(),
        }),
    }),

    /* SESSION CONTROLLER VALIDATOR - END */

    /* CATEGORY CONTROLLER VALIDATOR - START */

    categoryStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),

    categoryPutValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),

    /* CATEGORY CONTROLLER VALIDATOR - END */

    /* STATUS CONTROLLER VALIDATOR - START */

    statusStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),

    statusPutValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),

    /* STATUS CONTROLLER VALIDATOR - END */
};
