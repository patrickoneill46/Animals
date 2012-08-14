/*
  All the functions in main.js are publicly accessible

  The contents of the files in the shared directory are also available.
*/

//function getConfig(){
exports.getConfig = function(params, callback) {
  // The config variable from config.js can be accessed directly from here
  //return {'config': config};   
  return callback(null, {config: config});
}

//function getAnimals(){
exports.getAnimals = function(params, callback){
  //return {'animals': animals};
  var cfg = require("config.js");
  return callback(null, {'animals': cfg.animalData});
}

//function getTweets(){
exports.getTweets = function(params, callback){
  var username = 'DublinSPCA';
  var numTweets = 20;
  var url = 'http://search.twitter.com/search.json?q=' + username;
  
  
  var tweets = $fh.web({
    url: url,
    method: 'GET',
    allowSelfSignedCert: true,
  }, function (err,result) {
    if(err){
      console.log(err);
      return err
    } else {
    console.log('reslts...', result);
    //tweets.body = result;
        //return result;
      return callback(null, {'data':tweets});
    }
  });
}

exports.getRecords = function(params, cb){
  var records = [
    {
      Name : 'John',
      Id: '123'
    },
    {
      Name : 'Mary',
      Id: '456'
    }
  ];
  return cb(null, {data: records} );
};



//function getPhotos(params){
exports.getPhotos = function(params, callback){
  //REST variables
  var apiKey = '5244a727c10d8cd5ca8696f791f1bb30';
  var userID = '78250827@N08';
  var perPage = 10;
  var showOnPage = 6;
  var tagString = '';
  
  //create comma delimited string for tags
  /**params.tags.forEach(function(thisArg)
    {
      tagString += (thisArg + ',');
    }
  );**/
  tagString += params.tags[0];
  for(var i=1;i<params.tags.length;i++)
  {
    tagString+= (',' + params.tags[i]);
  }
  
  var url = 'http://api.flickr.com/services/rest/?format=json&method='+
    'flickr.photos.search&api_key=' + apiKey + '&user_id=' + userID + 
    '&per_page=' + perPage + '&nojsoncallback=1' + 
    '&extras=tags' ;
  
  //sconsole.log(url);
  
  var photos = $fh.web({
    url: url,
    method: 'GET',
    charset: 'UTF-8',
    contentType: 'application/json',
    //contentType: 'text/html'
  }, function (err, result){
    
    if(err){
      console.log(err);
      return err;
    }else{
      console.log(result);
      //photos.body=result;
      //return result;
      return callback(null, {'body': result.body, url: url});
    }
  });
  
  
  
    
  var flickrJSON = 'jsonFlickrApi({"photos":{"page":1, "pages":1, "perpage":100, "total":"2", "photo":[{"id":"7164453364", "owner":"78250827@N08", "secret":"1737862fa2", "server":"5464", "farm":6, "title":"dingo", "ispublic":1, "isfriend":0, "isfamily":0}, {"id":"7164453202", "owner":"78250827@N08", "secret":"814c6d8202", "server":"7099", "farm":8, "title":"pepsi", "ispublic":1, "isfriend":0, "isfamily":0}]}, "stat":"ok"})';
  var HARDurl = 'http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=5244a727c10d8cd5ca8696f791f1bb30&user_id=78250827@N08';
  var dingoUrl = 'http://farm6.staticflickr.com/5464/7164453364_1737862fa2_m.jpg';
};