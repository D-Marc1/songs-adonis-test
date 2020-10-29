import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Songs extends BaseSchema {
  protected tableName = 'songs';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.text('title');
      table.string('type');
      table.time('duration');
      table.integer('time_start_repeat');
      table.timestamp('created_at').defaultTo(this.now());
      table.timestamp('updated_at').defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
