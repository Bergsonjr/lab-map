exports.up = function (knex) {
    return knex.schema.createTable('loan', function (table) {
        table.increments('id').primary();

        table.string('status').notNullable();
        table.string('description').notNullable();

        table.foreign('id_equipment').references('id').inTable('equipment');
        table.foreign('id_requester').references('id').inTable('requester');
        table.foreign('id_approver').references('id').inTable('approver');

        table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
        table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
        table.timestamp('deleted_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('loan');
};
