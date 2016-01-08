/**
 * Created by hippo-innovations on 7/1/16.
 */




var customers=['abc@asda.com','atishay@storehippo.com'];



var updateCustomers=function(customers){
    console.log('===============>>>>>>',customers);
}

var processCustomers=function(customers,next){
    customers.forEach(function(cu,i){
        console.log('===========>>>>',cu,i)
    })
    next();
    updateCustomers(customers);
}



processCustomers(customers,function(){
    console.log('done-----------------')
})