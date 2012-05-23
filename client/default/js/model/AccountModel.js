Ext.define('Animals.model.AccountModel',{
  extend:'Ext.data.Model',
  requires:['Animals.proxy.FHActProxy'],

  config:{
    fields:[
      {
        name:'Id',
        type:'string'
      },

      {
        name:'Name',
        type:'string'
      }
    ],
    proxy : {
      type: 'fhact',
      reader: 'json',
      act: 'getRecords'
    }
  }
});
