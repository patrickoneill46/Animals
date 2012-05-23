Ext.define('Animals.store.Animal', {
  extend: 'Ext.data.Store',
  storeId: 'Animal',
  
  config: {
    
    model: 'Animals.model.Animal',
    data: [],
    filters: [
    ]
  },
  
  setPhotos: function (urls){

    globalArray = urls;
    for(var i=0;i<urls.length;i++){
      //console.log(this);
      record = this.findRecord('tag',urls[i].tag);
      //console.log(record);
      //this.findRecord('tag', urls[i].tag).photos().add({'url': urls[i].url});
      record.photos().add({'url': urls[i].url});
      record.data.photos.push({'url': urls[i].url});
      record.data.img = urls[i].url;
      //console.log(record);
    }
    //this.findRecord('name', 'Pepsi').photos().add({'tag': 'pepsi', 'url':'www.example.com'})
  },
  
  getPhotos: function (tag){
    PhotoStore = Ext.StoreMgr.lookup('Photo');
  }
  
});
