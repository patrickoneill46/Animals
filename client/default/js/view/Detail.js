Ext.define('Animals.view.Detail', {
  extend: 'Ext.Panel',
  xtype: 'animaldetailpanel',
  
  requires: ['Ext.Carousel'],
  
  config: {
    iconCls: 'user',
    title: 'Details',
    tpl: [
      '{desc}' 
    ],
    photos: [],
    layout: {
      type: 'vbox'
    },
    items:[
      {
        xtype : 'toolbar',
        docked: 'top',
        title: 'Animal Detail',
        items: [{
          xtype: 'button',
          text: 'back',
          ui: 'back',
          handler: function () {
             Ext.getCmp('hometab').setActiveItem(1);
          }
        }]
      },
      {
        xtype: 'carousel',
        flex: 1,
        //data: this.getPhotos(),
        layout: {
          align: 'middle'
        },
        tpl: '<img src="{url}" class="detailphoto" />',
        items: [
          {
            html: 'Panel number 1'
          }
        ]
      },{
        xtype: 'button',
        width: 100,
        ui: 'yellow',
        text: 'Let\'s meet up!'
      }
    ]
  },
  
  initialize: function (){
    //data = this.getData();
    var photos = [];
    var items = this.getItems();
    var data = this.getData();
    items.items[0].setTitle(this.getData().name);
    
    for(var i=0;i < this.config.photos.length; i++) {
      var photo = {
        xtype: 'container',
        html: '<img src="' + this.config.photos[i].url + 
          '" class="detailphoto" />',
      };
      photos[i] = photo;
    }
    console.log(items.items);
    items.items[1].setItems(photos);
    items.items[1].doLayout();
  }
});