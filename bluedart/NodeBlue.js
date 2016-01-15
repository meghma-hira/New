/**
 * Created by hippo-innovations on 14/1/16.
 */

var assert=require('assert');
var bluedart=require('ms-bluedart-php');

//Location Finder Methods

//GetServicesforPincode //WORKING FINE
var req1 = {
    pinCode: '110001',

    profile: {
        LoginID: 'DL235454',
        Api_type:'S',
        LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
        Version: '1.3',
        Area: 'ALL'
    }
};

var res1={};

bluedart.GetServicesforPincode(req1,res1,function(err,result){
    if(err){
        console.log('Error: ',err);

    }
    console.log('Response: ',result.GetServicesforPincodeResult);

});

//GetServicesforProduct //WORKING FINE
var req2 = {
    pinCode: '110001',
    pProductCode: 'A',
    pSubProductCode:'P',

    profile: {
        LoginID: 'DL235454',
        Api_type:'S',
        LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
        Version: '1.3',
        Area: 'ALL'
    }
};

var res2={};

bluedart.GetServicesforProduct(req2,res2,function(err,result){
    if(err){
        console.log('Error: ',err);

    }
    console.log('Response: ',result.GetServicesforProductResult);

});

//GetDomesticTransitTimeForPinCodeandProduct //WORKING FINE
var req3 = {
    pPinCodeFrom: '110001',
    pPinCodeTo: '110001',
    pProductCode: 'A',
    pSubProductCode:'P',
    pPudate: new Date,
    pPickupTime: '11:00',

     profile: {
         LoginID: 'DL235454',
         Api_type:'S',
         LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
         Version: '1.3',
         Area: 'ALL'
     }
 };

 var res3={};

 bluedart.GetDomesticTransitTimeForPinCodeandProduct(req3,res3,function(err,result){
     if(err){
        console.log('Error: ',err);
     }
     console.log('Response: ',result.GetDomesticTransitTimeForPinCodeandProductResult);
 });


//Pickup Registration Methods

//RegisterPickup //WORKING FINE returning Token No = 31175DEMO
var req4 = {
    request: {
        ProductCode: 'A',
        AreaCode: 'DEL',
        CustomerCode: '235454',
        CustomerName: 'Nitesh',
        CustomerAddress1: '114, Railpara',
        CustomerAddress2: 'Dhitara, Saradapally',
        CustomerAddress3: 'Bhadreswar, Hooghly',
        ContactPersonName: 'Meghma Hira',
        CustomerPincode:'110001',
        CustomerTelephoneNumber:'9536450074',
        MobileTelNo: '9645225544',
        ShipmentPickupDate:new Date(),
        ShipmentPickupTime:'13:00',
        Remarks: 'MyRegisterPickup',
        NumberofPieces: 2,
        WeightofShipment: 12.0,
        VolumeWeight: 2.0,
        //RouteCode: '99',
        OfficeCloseTime:'18:00',
        EmailID: 'meghma@hippo.com',
        isToPayShipper: false,
        //DoxNDox: 'NDox',
        //SubProducts: ['P', 'C'],
        ReferenceNo: 'REF123456'
    },
    profile: {
        LoginID: 'DL235454',
        Api_type:'S',
        LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
        Version: '1.3',
        Area: 'ALL'
    }
};

var res4={};

bluedart.RegisterPickup(req4,res4,function(err,result){
    if(err){
        console.log('Error: ',err);

    }
    console.log('Response: ',result.RegisterPickupResult);

});

//CancelPickup //Error: InvalidTokenNo (Possibly because using DEMO TokenNo
var req5 = {
    request: {
        Token_No:"31175DEMO",
        PickupRegistrationDate: new Date()
    },

    profile: {
        LoginID: 'DL235454',
        Api_type:'S',
        LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
        Version: '1.3',
        Area: 'ALL'
    }
};

var res5={};

bluedart.CancelPickup(req5, res5, function(err, result){
    if(err){
        console.log('Error: ',err);

    }
    console.log('Response: ',result.CancelPickupResult);
});

//GetAllProductsAndSubProducts //WORKING FINE
var req6 = {
    profile: {
        LoginID: 'DL235454',
        Api_type:'S',
        LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
        Version: '1.3',
        Area: 'ALL'
    }
};

var res6={};

bluedart.GetAllProductsAndSubProducts(req6, res6, function(err, result){
    if(err){
        console.log('Error: ',err);

    }
    console.log('Response: ',result.GetAllProductsAndSubProductsResult);
    console.log('ProductList: ', result.GetAllProductsAndSubProductsResult.ProductList);
});


//WayBill Generation Methods .................ERRORS!!!!!

//GenerateWayBill: Single WayBill (Commenting out optional fields
/*
    var req = {
        request: {
            Shipper: {
                OriginArea: 'DEL', //string of length 3
                CustomerCode: '235454',
                CustomerName: 'Nitesh',
                CustomerAddress1: '114, Railpara',
                //CustomerAddress2: 'Dhitara, Saradapally',
                //CustomerAddress3: 'Bhadreswar, Hooghly',
                CustomerPincode:'110001',
                //CustomerTelephone: '7894561236',
                //CustomerMobile: '7894561236',
                //CustomerEmailID: 'someone@example.com',
                //Sender: 'Nitesh',
                isToPayCustomer: false
                //Vendor: 'ABCDED' //string of length 6
            },

            Consignee: {
                ConsigneeName: "ConsigneeName",
                ConsigneeAddress1: '114, Railpara',
                //ConsigneeAddress2: 'Dhitara, Saradapally',
                //ConsigneeAddress3: 'Bhadreswar, Hooghly',
                CustomerPincode:'110001'
                //CustomerTelephone: '7894561236',
                //CustomerMobile: '7894561236',
                //ConsigneeAttention: ''
            },

            Services: {
                ProductCode: 'A',
                ProductType: '',
                //SubProductCode: 'P',
                PieceCount: 2,
                ActualWeight: 10.0,
                //PackType: '',
                //InvoiceNo: '',
                //SpecialInstruction: '',
                //DeclaredValue: 10.0,
                //CollactableAmount: 100.00,
                CreditReferenceNo: 'REF123456',
                */
    /*Dimensions: {
                    Length: 12.0,
                    Breadth: 12.0,
                    Height: 12.0,
                    Count: 2
                },*//*

                PickupDate: new Date,
                PickupTime: '11:00'
                */
    /*Commodity: {
                    CommodityDetail1: '',
                    CommodityDetail2: '',
                    CommodityDetail3: ''
                },*//*

                //PDFOutputNotRequired: false
            },

            SubShipper: {
                OriginArea: 'DEL',
                CustomerCode: '235454',
                CustomerName: 'Nitesh',
                CustomerAddress1: '114, Railpara',
                //CustomerAddress2: 'Dhitara, Saradapally',
                //CustomerAddress3: 'Bhadreswar, Hooghly',
                CustomerPincode:'110001',
                //CustomerTelephone: '7894561236',
                //CustomerMobile: '7894561236',
                //CustomerEmailID: 'someone@example.com',
                //Sender: 'Nitesh',
                isToPayCustomer: false
                //Vendor: 'ABCDED' //string of length 6
            }
        },

        profile: {
            LoginID: 'DL235454',
            Api_type:'S',
            LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
            Version: '1.3',
            Area: 'ALL'
        }
    };

    var res={};

    bluedart.GenerateWayBill(req,res,function(err,result){
        if(err){
            console.log('Error: ',err);
            //Error:  PHP Notice:  Undefined variable: response in /home/hippo-innovations/WebstormProjects/TestCases/BLUEDART/php/bluedart.php on line 30
        }
        console.log('Response: ',result);
    });
*/

//ImportData Method: Multiple WayBill
/*
var req = {
    request: 'List<WayBillGenerationRequest>', //List<WayBillGenerationRequest>

    profile: {
        LoginID: 'DL235454',
        Api_type:'S',
        LicenceKey: 'e58efc27104a142ecc3b0a3fdb7c7836',
        Version: '1.3',
        Area: 'ALL'
    }
};

var res={};

bluedart.ImportData(req,res,function(err,result){
    if(err){
        console.log('Error: ',err);
    }
    console.log('Response: ',result);
});
*/
