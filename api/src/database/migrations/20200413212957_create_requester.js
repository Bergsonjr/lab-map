
exports.up = function (knex) {
    return knex.schema.createTable('requester', function (table) {
        table.string('user_id').primary();

        table.foreign('user_id').references('is').inTable('user')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('requester');
};
