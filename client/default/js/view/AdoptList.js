Ext.define('Animals.view.AdoptList', {
  extend: 'Ext.List',
  requires: ['Animals.store.Animal'],
  xtype: 'adoptlist',

  
  config: {
    id: 'adoptList',
    store: Ext.StoreMgr.lookup('Animal'),
    
    itemTpl: '<tpl for=".">' +
      '<p><img src="{img}" class="listphoto" height=50  width=50 float="left" />' +
      ' Hi! I\'m <b>{name}</b></p></tpl>',
      
    onItemDisclosure: true,
    iconCls: 'home',
    title: 'Adoption List',
    items: [
      {
        xtype : 'toolbar',
        docked: 'top',
        title: 'Adopt',
        onItemDisclosure: true,
        items: [
          {
            xtype: 'button',
            text: 'back',
            ui: 'back',
            handler: function () {
              
               Ext.getCmp('hometab').setActiveItem(0);
               Ext.StoreMgr.lookup('Animal').clearFilter();
               
            }
          }
        ]
      }, 
    ]
  }
});