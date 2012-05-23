Ext.define('Animals.model.Photo', {
  extend: 'Ext.data.Model',
  config: {
    fields: ['tag', 'url'],
    belongsTo: 'Animals.model.Animal'
  }
  
});