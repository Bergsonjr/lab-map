
exports.up = function (knex) {
    return knex.schema.createTable('equipment', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();

        table.foreign('id_category').references('id').inTable('category')
        table.foreign('id_status').references('id').inTable('status')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('equipment');
};
