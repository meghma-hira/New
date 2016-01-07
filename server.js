/**
 * Created by hippo-innovations on 6/1/16.
 */
var storehippo = require('storehippo-nodejs-sdk')({
        storename : "atishaydemo2",
    access_key : "admin"
});

var request = {
    entity : "ms.orders"

}
var getaddress;

//  "array-of-filters" == [{field : "field name", value : "field-value", operator : "operator(equal, less_than, greater_than)"}]

storehippo.list(request, function(err, response){
    if(err) throw err;
    //console.log(response);

    getaddress = {
        entity: "ms.orders",
        data: response.data[0]
    }
})

storehippo.call("getAddresses", getaddress, function(err, response){
    console.log(response);
})