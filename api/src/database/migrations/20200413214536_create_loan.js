exports.up = function (knex) {
    return knex.schema.createTable('lend', function (table) {
        table.increments('id').primary();

        table.string('status').notNullable();
        table.string('description').notNullable();

        table.integer('id_equipment').notNullable();
        table.integer('id_requester').notNullable();
        table.integer('id_approver').notNullable();

        table.timestamp('created_at').notNullable().defaultTo(knex.raw('current_timestamp'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('current_timestamp'));

        table.foreign('id_equipment').references('id').inTable('equipment');
        table.foreign('id_requester').references('user_id').inTable('requester');
        table.foreign('id_approver').references('user_id').inTable('approver');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('lend');
};
