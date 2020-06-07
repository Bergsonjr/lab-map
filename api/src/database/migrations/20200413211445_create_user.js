
exports.up = function (knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('login').notNullable();
        table.string('password').notNullable();
        table.string('doc').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};
