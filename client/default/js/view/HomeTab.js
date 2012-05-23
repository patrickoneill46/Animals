Ext.define('Animals.view.HomeTab', {
  extend: 'Ext.TabPanel',
  xtype: 'hometab',
  id:'hometab',
  requires: ['Animals.view.Home', 'Animals.view.AdoptList', 'Animals.view.Detail'],
  
  config: {
    fullscreen: true,
    iconCls: 'home',
    title: 'Adopt',
    tabBar: {
      hidden: true
    },
    scrollable: {
      direction: 'vertical',
    },
    items: [
      {xtype: 'homepanel'}, {xtype: 'adoptlist'}
    ]
    
  }
});