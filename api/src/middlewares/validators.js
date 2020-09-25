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
            // doc: Joi.string().required(),
        }),
    }),

    registerPutValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            phone: Joi.string().required().min(10),
            login: Joi.string().required(),
            password: Joi.string().required(),
            // doc: Joi.string().required(),
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

    /* EQUIPMENT CONTROLLER VALIDATOR - START */

    equipmentStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            id_status: Joi.number().required(),
            description: Joi.string().required(),
            id_category: Joi.number().required(),
        }),
    }),

    equipmentPutValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            id_status: Joi.number().required(),
            description: Joi.string().required(),
            id_category: Joi.number().required(),
        }),
    }),

    /* EQUIPMENT CONTROLLER VALIDATOR - END */

    /* LEND CONTROLLER VALIDATOR - START */

    lendStoreValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            status: Joi.number().required(),
            id_approver: Joi.number().required(),
            id_equipment: Joi.number().required(),
            id_requester: Joi.number().required(),
        }),
    }),

    lendPutValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            status: Joi.number().required(),
            id_approver: Joi.number().required(),
            id_equipment: Joi.number().required(),
            id_requester: Joi.number().required(),
        }),
    }),

    /* LEND CONTROLLER VALIDATOR - END */
};
