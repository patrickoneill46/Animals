Ext.define('Animals.model.Animal', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: ['name', 'type','tag', 'desc', 'img'],
    hasMany: {
      model: 'Animals.model.Photo',
      name: 'photos',
    }
  },
  
  listTemplate: function (){
    var d = this.data;
    var listPhoto = this.photosStore.first().data.url;
    var name =  d.name;
    //var template = Ext.create(')
    return ('<img src="' + listPhoto + '" class="listphoto" />  <p>Hi! I\'m <b>{'+ d.name + '}</b></p>');
  },
  
  cardId: function () {
    return this.data.name + '-' + this.data.type;
  }
  
});