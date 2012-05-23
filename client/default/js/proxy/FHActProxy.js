//Ext.ux.FHActProxy = Ext.extend(Ext.data.Proxy, {
   
Ext.define('Animals.proxy.FHActProxy', {
    
  extend: 'Ext.data.proxy.Server',

  requires: ['Ext.util.MixedCollection', 'Ext.Ajax'],
  alias: 'proxy.fhact',

  config: {
    /**
     * @property {Object} act
     * Name of the serverside function to call
     */
    act: undefined,

    /**
     * @property {Object} req
     * Request body to be sent with any act call
     */
    req: undefined
  },

  /**
   * Performs FeedHenry request.
   */
  doRequest: function(operation, callback, scope) {
    console.log('doRequest');
    console.log(operation,callback,scope);
    
    var writer  = this.getWriter(),
    me = this,
    actId = this.getAct(),
    req = this.getReq();

    if (typeof req === "string"){
      $fh.data({act: 'load', key: req}, function(res){
        req = (res && res.val) ? res.val  : '';
        req = JSON.parse(req);
        doAct(actId, req);
      });
    }else{
      doAct(actId, req);
    }

    function doAct(actId, req){
      console.log('doAct');
      $fh.act( {
        'act' : actId,
        'req':req
      },
      function(res){
        console.log(res);
        // Check for a .data or .records property if what we got back isn't an array
        if (!res.length){
          res = res.data || res.records;
        }
        me.processResponse(true, operation, null, res, callback, scope);
      },
      function(err){
        me.processResponse(false, operation, null, err, callback, scope);
      });
    }
  }
});

//Ext.data.Proxy.addMember  
//Ext.data.ProxyMgr.registerType('fhact', Ext.ux.FHActProxy);