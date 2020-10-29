import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: Number;

  @column()
  public name: String;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
