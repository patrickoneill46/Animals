Ext.define('Animals.store.AccountModel',{
  extend:'Ext.data.Store',

  config: {
    model: 'Animals.model.AccountModel',
    data: [],
    autoLoad: true
  }
});
