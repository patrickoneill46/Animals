Ext.define('Animals.store.Twitter', {
  extend: 'Ext.data.Store',
  
  config: {
    model: 'Animals.model.Twitter',
    data: [],
    autoLoad: true,

  }
});