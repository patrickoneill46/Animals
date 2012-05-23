Ext.define('Animals.view.Twitter', {
  extend: 'Ext.Panel',
  xtype: 'twittertab',
  
  config: {
    iconCls: 'twitter',
    title: 'Twitter',
    layout: {
      type: 'vbox',
    },
    items: [
      {
        xtype: 'list',
        store: 'Twitter',
        itemTpl: '<img style="float: left; margin: 0px 8px 8px 0px;" src="{profile_image_url}" />' + 
          '<strong>{from_user}</strong>' +
          '{text}',
        flex: 1,
        
      }
    ]
  }
});