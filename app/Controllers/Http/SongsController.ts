import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import Song from 'App/Models/Song';

export default class SongsController {
  public index({ request }: HttpContextContract) {
    const { tags: requestTags, notTags: requestNotTags } = request.only([
      'tags',
      'notTags',
    ]);

    const resultQuery = Song.query()
    .select('songs.id', 'title', 'duration', 'type')
    .preload('categories', (query) => {
      query.select('name');

      // This works properly to remove item only if there's 1 item in array. Doesn't work with multiple

      // if (requestNotTags.length > 0) {
      //   query.whereNotInPivot('category_id', requestNotTags);
      // }
    })
    .whereHas('categories', (query) => {
      if (requestTags.length > 0) {
        query.whereIn('categories.id', requestTags);
      }

      if (requestNotTags.length > 0) {
        query.whereNotInPivot('category_id', requestNotTags);
      }
    });

    return resultQuery;
  }
}
