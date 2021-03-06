
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions_contexts', table => {
    table.increments();
    table.integer('actionsId').unsigned().references('id').inTable('actions');
    table.integer('contextsId').unsigned().references('id').inTable('contexts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions_contexts');
};
