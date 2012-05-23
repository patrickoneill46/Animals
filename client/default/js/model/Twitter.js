Ext.define('Animals.model.Twitter', {
  extend: 'Ext.data.Model',
  requires: ['Animals.proxy.FHActProxy'],
  
  config: {
    fields: ['from_user', 'text', 'profile_image_url', 'from_user_name'],
    proxy: {
      type: 'fhact',
      reader: 'json',
      //id: 'getTweets',
      act: 'getTweets',
      req: {},
    },
    //autoLoad: true,
    
  }
});