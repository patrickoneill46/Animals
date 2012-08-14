Ext.define('Animals.controller.Main', {
  extend: 'Ext.app.Controller',
  
  config: {
    
    refs: {
      adoptList: '#adoptlist',
      homeTab: 'hometab',
      homePanel: 'homepanel',
      flickrButton: '#flickrbutton',
      typeIcon: '#homepanel button[class=typeIcon]'
    },
    control: {
      adoptList: {
        disclose: 'showDetail',
        itemTap: 'showDetail',
      },
      
      flickrButton: {
        tap: 'getFlickrPhoto'
        //tap: 'testing'
      },
      
      typeIcon: {
        tap: 'showAdoptList'
      },
      
      
    },
  },
  
  init: function () {
      //console.log(this);    
      this.getAnimalList();
      this.getFlickrPhoto();
      
  },
  
  showDetail: function (list, record) {
    //console.log(record);
    var detailCard = Ext.getCmp(record.cardId());
    
    if (typeof detailCard === 'undefined'){
      detailCard = Ext.create('Animals.view.Detail', {
        id: record.cardId(),
        title: record.data.name,
        data: record.getData(),
        //photos: record.photosStore.getData().items
        photos: record.data.photos,
      });
      this.getHomeTab().add([detailCard]);      
    }   
    
    console.log(detailCard)
    this.getHomeTab().setActiveItem(detailCard);
  },
    
  testing: function () {
    console.log('testing....');
  },
  
  showAdoptList: function (button, e, opts)
  { 
    var imgUrl = Ext.StoreMgr.lookup('Photo').findRecord('tag', button.config.type);
    console.log(imgUrl);
  },
  
  getAnimalList: function () {
    $fh.act({
        act: 'getAnimals'
      }, function (res){
        
        var store = Ext.StoreMgr.lookup('Animal');
        store.removeAll();
        store.setData(res.animals);
        //store.setPhotos(photoUrls);
        store.load();  
        Ext.getCmp('adoptlist').setStore('Animal');
        
      }, function (msg, error) {
        console.log(msg + ':' + error);
      });
  },
  
  getFlickrPhoto: function () {
    $fh.act({
      act: 'getPhotos',
      req: {
        //tags: tags
        tags: ['pepsi', 'dingo']
      }
    }, function (res){

      //console.log(res);
      var photos = JSON.parse(res);
      console.log(photos);
      var data = [];
      var urls = [];
      var store = Ext.StoreMgr.lookup('Photo');
      var animalStore = Ext.StoreMgr.lookup('Animal');
      
      for (var i=0;i<photos.photo.length;i++){
        
        var url = 'http://farm' + photos.photo[i].farm + '.staticflickr.com/' +
          photos.photo[i].server + '/' + photos.photo[i].id + '_' + 
          photos.photo[i].secret + '.jpg';
          
        var imgUrl = {'tag': photos.photo[i].tags, 'url': url};
        data[i] = imgUrl;
        urls[i] = {'url': url};
      }
          
      store.setData(data);
      animalStore.setPhotos(data);
      //return data;   
    }, function (msg, error){     
      console.log(msg);
      console.log(error);
    });
  }
  
});