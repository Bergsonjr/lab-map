exports.up = function (knex) {
    return knex.schema.createTable('requester', function (table) {
        table.string('course').notNullable();
        table.foreign('user_id').references('id').inTable('user');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('requester');
};
