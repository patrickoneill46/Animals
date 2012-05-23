Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath({
    'Animals': 'js',
    //'Cs': 'src',
    
});

Ext.application({
    name: 'Animals',
  
    models: ['Animal', 'Photo', 'Twitter', 'AccountModel'],
    stores: ['Animal', 'Photo', 'Twitter', 'AccountModel'],
    
    views: ['Viewport','HomeTab', 'Home', 'Detail', 'AdoptList', 'Twitter'],
    
    controllers : ['Main'],
    
    proxys: ['FHActProxy'],
    
    viewport: {
        autoMaximize: true
    },
	
    launch: function(){
      /**$fh.act({
        act: 'getAnimals'
      }, function (res){
        //console.log(res);
        //Ext.StoreMgr.lookup('Animal').add(res.animals);
      }, function (msg, error) {
        console.log(msg + ':' + error);
      });**/
      var tweets = $fh.act({
        act: 'getTweets',
      }, function (res) {
        console.log(res);
      }, function (err){
        console.log(err);
      });
      
      Ext.create('Animals.view.Viewport');
    }
});
