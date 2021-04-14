var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keySlLdEfBORHRkDl'}).base('appvZ6TFNfAzenywA');

var upvoteList = [];

export const getUpvotes = (postId,count)=>{

}

export const addMember = (email)=>{
    return new Promise((resolve,reject)=>{
        base('Newsletter').create([
            {
              "fields": {"Email": email}
            }
          ], function(err, records) {
            if (err) {
              console.error(err);
              reject(err)
            }
            records.forEach(function (record) {
              console.log(record.getId());
            });

            resolve(null)
          });
    })
}

export const upvoteItem = (postid,likes)=>{
    base('Like').update([
        {
          "id": "rec5ld90pooLpKC7O",
          "fields": {
            postid,
            likes
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('postid'));
        });
      });
}