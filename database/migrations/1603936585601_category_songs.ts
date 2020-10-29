import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CategorySongs extends BaseSchema {
  protected tableName = 'category_song';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('song_id');
      table.integer('category_id');
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
