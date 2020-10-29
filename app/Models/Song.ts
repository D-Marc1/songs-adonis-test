import { DateTime } from 'luxon';
import {
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm';

import Category from 'App/Models/Category';

export default class Song extends BaseModel {
  @column({ isPrimary: true })
  public id: Number;

  @column()
  public title: String;

  @column()
  public type: String;

  @column.date({
    serialize: (value) => value.toFormat('HH:mm:ss')
  })
  public duration: DateTime;

  @column()
  public timeStartRepeat: Number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Category)
  public categories: ManyToMany<typeof Category>;
}
