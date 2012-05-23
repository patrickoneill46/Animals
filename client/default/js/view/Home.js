Ext.define('Animals.view.Home', {
  extend: 'Ext.Panel',
  xtype: 'homepanel',
  requires: ['Animals.view.AdoptList'],
  
  config: {
    fullscreen: true,
    iconCls: 'home',
    title: 'Adopt',
    scrollable: {
      direction: 'vertical',
    },
    items: [
        {
          xtype: 'panel',
      		height: 20
      	},
        Ext.create('Ext.Panel', {
          height: 100,
          layout: {  
            type: 'hbox',
    	      pack: 'center',
          },
          items: [
            { 
              xtype: 'spacer'
              
            },
            {
              xtype: 'button',
              cls: 'catIcon typeIcon',
              width: 100,
              height: 100,
              text: 'Cats',
              type: 'cat',
              handler: function () {
                var adopt = Ext.getCmp('adoptlist');
                adopt.getStore().filter('type', this.config.type);
                console.log(this.config.type);
                Ext.getCmp('hometab').setActiveItem(adopt);
              }
            },
            { 
              xtype: 'spacer'
            },
            {
              xtype: 'button',
              cls: 'dogIcon typeIcon',
              width: 100,
              height: 100,
              text: 'Dogs',
              type: 'dog',
              handler: function () {
                var adopt = Ext.getCmp('adoptlist');
                adopt.getStore().filter('type', this.config.type);
                console.log(this.config.type);
                Ext.getCmp('hometab').setActiveItem(adopt);
              }
            },
            {
	  		      xtype: 'spacer'
	  	      }
          ]
  	    }),
        {
          xtype: 'panel',
      		height: 20
      	},
        Ext.create('Ext.Panel', {
        height: 100,
        layout: {  
          type: 'hbox',
          pack: 'center',
        },
        items: [
          { 
            xtype: 'spacer'
            
          },
          {
            xtype: 'button',
            cls: 'farmIcon typeIcon',
            width: 100,
            height: 100,
            text: 'Farm',
            type: 'farm',
            handler: function () {
              var adopt = Ext.getCmp('adoptlist');
              adopt.getStore().filter('type', this.config.type);
              console.log(this.config.type);
              Ext.getCmp('hometab').setActiveItem(adopt);
            }
          },
          { 
            xtype: 'spacer'
            
          },
          {
            xtype: 'button',
            cls: 'reptileIcon typeIcon',
            width: 100,
            height: 100,
            text: 'Reptiles',
            type: 'reptile',
            handler: function () {
              var adopt = Ext.getCmp('adoptlist');
              adopt.getStore().filter('type', this.config.type);
              console.log(this.config.type);
              Ext.getCmp('hometab').setActiveItem(adopt);
            }
          },
          {
  		      xtype: 'spacer'
  	      }
        ]
	    }),
      {
          xtype: 'panel',
        	height: 20
    	},
      Ext.create('Ext.Panel', {
        height: 100,
        layout: {  
          type: 'hbox',
          pack: 'center',
        },
        items: [
          { 
            xtype: 'spacer'
            
          },
          {
            xtype: 'button',
            cls: 'furryIcon typeIcon',
            width: 100,
            height: 100,
            text: 'Furry',
            type: 'furry',
            handler: function () {
              var adopt = Ext.getCmp('adoptlist');
              adopt.getStore().filter('type', this.config.type);
              console.log(this.config.type);
              Ext.getCmp('hometab').setActiveItem(adopt);
            }
          },
          { 
            xtype: 'spacer'
            
          },
          {
            xtype: 'button',
            cls: 'horseIcon typeIcon',
            width: 100,
            height: 100,
            text: 'Horses',
            type: 'horse',
            handler: function () {
              var adopt = Ext.getCmp('adoptlist');
              adopt.getStore().filter('type', this.config.type);
              //console.log(this.config.type);
              Ext.getCmp('hometab').setActiveItem(adopt);
            }
          },
          {
    	      xtype: 'spacer'
  	      }
        ]
	    })
    ]
    
  }

});