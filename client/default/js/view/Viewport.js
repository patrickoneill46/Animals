Ext.define('Animals.view.Viewport', {
  extend: 'Ext.TabPanel',
  xtype: 'viewport',
  id:'viewport',
  requires: ['Animals.view.Home', 'Animals.view.HomeTab'],
  
  config: {
    fullscreen: true,
    tabBar: {
      docked: 'bottom',
      ui: 'yellow',
      height: 60
    },
    //tabBarPosition: 'bottom',
    scrollable: {
      direction: 'vertical'
    },
    items: [
      {
          docked: 'top',
          xtype: 'titlebar',
          //title: 'Animals',
          title: '<img src="images/dspca_logo.png" class="logo" />',
          items: [
            {
              xtype: 'spacer'
            },
            {
              xtype: 'spacer'
            },
            {
              xtype: 'button',
              ui: 'yellow',
              iconCls: 'settings',
            }
          ]
      },
      {
        xtype: 'hometab'
      },
      {
        xtype: 'twittertab'
      },
      {
        title: 'News',
        iconCls: 'user',
        html: 'This is the news panel',
        items: [{
          xtype: 'button',
          text: 'Flickr',
          id: 'flickrbutton',
        }]
      }
    ]
  },
});