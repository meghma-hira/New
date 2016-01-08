/**
 * Created by hippo-innovations on 6/1/16.
 */
var storehippo = require('storehippo-nodejs-sdk')({
    storename : "atishaydemo2",
    access_key : "admin"
});

var request = {
    entity : "ms.orders",

    query : {

        start: "11",
        limit: "1"

    }

};

//  "array-of-filters" == [{field : "field name", value : "field-value", operator : "operator(equal, less_than, greater_than)"}]

storehippo.list(request, function(err, response){
    if(err) throw err;
    //console.log(response);
    var order = response.data;

    var getadd = {
        entity : "ms.orders",
        arr : response.data

    };

    //console.log(getadd);

    storehippo.call ("getAddresses", getadd, function(err, res){
        if(err) throw err;
        //console.log(res);
        var pickup = res.data;

        var data1 = {
            entity : "ms.fulfillment"
        };

        storehippo.call("getMethods", data1, function(err, res){
          //console.log(res);
            var method = res.data;

            var data2 = {
                entity : "ms.fulfillment",
                arr : {
                    level : data1.level,
                    method : res,
                    orderDetail : order,
                    pickupAddress : pickup

                }
            }

            //console.log(data2.arr);

            /*storehippo.call ("getRates", data2, function(err, res){
                if(err) throw err;
                console.log(res);
            });*/
        });
    });

    //console.log(getadd);

});
