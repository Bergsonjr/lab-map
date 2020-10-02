exports.up = function (knex) {
    return knex.schema.createTable('user', function (table) {
        table.string('id').primary();
        table.integer('admin').defaultTo(0);;
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('phone').notNullable();
        table.string('login').notNullable().unique();
        table.string('password').notNullable();
        // table.string('doc').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};
