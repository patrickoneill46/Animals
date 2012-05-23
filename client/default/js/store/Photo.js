Ext.define('Animals.store.Photo', {
  extend: 'Ext.data.Store',
  storeId: 'Photo',
  config: {
    model: 'Animals.model.Photo',
    data: []
  }
});