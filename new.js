/**
 * Created by hippo-innovations on 7/1/16.
 */
var storehippo = require('storehippo-nodejs-sdk')({
    storename : "atishaydemo2",
    access_key : "admin"
});


var request = {
    entity : "ms.orders"

}


storehippo.list(request, function(err, response){
    if(err) throw err;
    //console.log(response);
    response.data=JSON.parse(response.data);
    var order = response.data.records[0];

    var getadd = {
        entity : "ms.orders",
        query  : {
            filters: [{field:'order_id',value:'OID170'}],
            limit: 1
        }
    };

    storehippo.call("getAddresses", getadd, function (err, res){
        if(err) throw err;
        //console.log(res);

        var pickup = JSON.parse(res.data);

        var getmethod = {
            entity: "ms.fulfillment"
            //command : "getMethods"
        };

        storehippo.call("getMethods", getmethod, function(err, res){
            if(err) throw err;
            //console.log(res)
            var methods = JSON.parse(res.data);
            //console.log(methods[1].settings.services);

            var method = methods;

            var getrate = {
                entity : "ms.fulfillment",

                data : {
                    cod:false,
                    level:methods[0].shipping_level,
                    method : methods[0].provider,
                    orderDetail : order,
                    pickupAddress : pickup[0]
                }
            };

            //console.log('====================',getrate.data); //working fine till here getrate.data.method = [ 'fedex' ]

            storehippo.call("getRates", getrate, function(err, res){
               if(err) throw err;
                console.log("Respomse From getRates:.........",res);
            });
        });
    });

    });