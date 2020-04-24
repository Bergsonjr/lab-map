exports.up = function (knex) {
    return knex.schema.createTable('approver', function (table) {
        table.foreign('user_id').references('id').inTable('user');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('approver');
};
