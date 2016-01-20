/**
 * Created by hippo-innovations on 14/1/16.
 */

var assert = require('assert');
var bluedart = require('ms-bluedart-php');
var fs = require('fs');
var path = require('path');
var bwip = require('barcode');
var handlebars = require('ms-handlebars');
var pdf = require('html-pdf');

//Location Finder Methods

//GetServicesforPincode //WORKING FINE
/*var req1 = {
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

 });*/

//GetServicesforProduct //WORKING FINE
/*var req2 = {
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

 });*/

//GetDomesticTransitTimeForPinCodeandProduct //WORKING FINE
/*var req3 = {
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
 });*/


//Pickup Registration Methods

//RegisterPickup //WORKING FINE returning Token No = 31175DEMO
/*var req4 = {
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
 RouteCode: '99',
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

 });*/

//CancelPickup //Error: InvalidTokenNo (Possibly because using DEMO TokenNo
/*var req5 = {
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
 });*/

//GetAllProductsAndSubProducts //WORKING FINE
/*var req6 = {
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
 });*/


//WayBill Generation Methods

//GenerateWayBill: Single WayBill (Commenting out optional fields
var req7 = {
    'Request': {
        'Shipper': {
            'OriginArea': 'DEL',
            'CustomerCode': '235454',
            'CustomerName': 'Nitesh',
            'CustomerAddress1': 'Baroda House',
            'CustomerAddress2': 'Delhi',
            'CustomerAddress3': '1',
            'CustomerPincode': '110001',
            'CustomerTelephone': '9536480074',
            'CustomerMobile': '9536480074',
            'CustomerEmailID': 'someone@example.com',
            'Sender': 'Nitesh',
            'isToPayCustomer': false,
            'Vendor': '1'
        },

        'Consignee': {
            'ConsigneeName': "ConsigneeName",
            'ConsigneeAddress1': 'Delhi',
            'ConsigneeAddress2': '',
            'ConsigneeAddress3': '',
            'ConsigneePincode': '110001',
            'ConsigneeTelephone': '7894561236',
            'ConsigneeMobile': '7894561236',
            'ConsigneeAttention': ''
        },

        'Services': {
            'ProductCode': 'A',
            'ProductType': 'Dutiables',
            'SubProductCode': 'P',
            'PieceCount': 1,
            'ActualWeight': 1,
            'PackType': '',
            'InvoiceNo': '',
            'SpecialInstruction': '',
            'DeclaredValue': 1,
            'CollactableAmount': 0,
            'CreditReferenceNo': '11233188',

            'Dimensions': {
                'Length': 1,
                'Breadth': 1,
                'Height': 1,
                'Count': 2
            },

            'PickupDate': '2016-01-20',
            'PickupTime': '1100',

            'Commodity': {
                'CommodityDetail1': 'PRETTYSECRETS Dark Blue ',
                'CommodityDetail2': '',
                'CommodityDetail3': ''
            },

            'PDFOutputNotRequired': true,
            'AWBNo': ''
        }
    },

    'Profile': {
        'LoginID': 'DL235454',
        'Api_type': 'S',
        'LicenceKey': 'e58efc27104a142ecc3b0a3fdb7c7836',
        'Version': '1.3',
        'Area': 'ALL'
    }
};

var res7 = {};

bluedart.GenerateWayBill(req7, res7, function (err, result) {
    if (err) {
        console.log('Error: ', err);

    }
    console.log('Response: ', result.GenerateWayBillResult);

    saveShippingLabel(req7, result, function () {
        console.log('in here');
    });

});

//ImportData Method: Multiple WayBill
/*var req8 = {
 'Request': 'List<WayBillGenerationRequest>', //List<WayBillGenerationRequest>

 'Profile': {
 'LoginID': 'DL235454',
 'Api_type':'S',
 'LicenceKey': 'e58efc27104a142ecc3b0a3fdb7c7836',
 'Version': '1.3',
 'Area': 'ALL'
 }
 };

 var res8={};

 bluedart.ImportData(req8,res8,function(err,result){
 if(err){
 console.log('Error: ',err);
 }
 console.log('Response: ',result);
 });*/

//CancelWayBill Method
/*var req9 = {
 'Request': {
 'AWBNo': '69500147183'
 },

 'Profile': {
 'LoginID': 'DL235454',
 'Api_type':'S',
 'LicenceKey': 'e58efc27104a142ecc3b0a3fdb7c7836',
 'Version': '1.3',
 'Area': 'ALL'
 }
 };

 var res9={};

 bluedart.CancelWaybill(req9,res9,function(err,result){
 if(err){
 console.log('Error: ',err);
 }
 console.log('Response: ',result.CancelWaybillResult);
 });*/

var saveShippingLabel = function (req, result, next) {

    getHTMLfile(result, 'COD', function (err, res) {
        if (err || !res) {
            //logger.log('error', err);
            return next({message: 'Error while saving shipping label'}, null)
        }

        //console.log(res);
        var template = res;

        var AWB = '69500148115';
        //console.log('AWB0=============================',AWB);

        req.template = template;
        req.AWB = AWB;

        barcodetopng(AWB, function (err, result) {

            if (err || !result) {
                logger.log('error', err);
                return next({message: 'Error while saving shipping label'}, null)
            }
            req.barcode = result;
            req.template = template;

            joinBarcode(req, function (err, result) {
                if (err || !result) {
                    logger.log('error', err);
                    return next({message: 'Error while saving shipping label'}, null)
                }

                uploadFile(req, result, '.pdf', 'COD_shipping', function (file) {
                    if (!file) {
                        logger.log('error', 'Manifest not uploaded delhivery');
                        return next({message: 'Error while saving shipping label'}, null)
                    }
                    req.shipping_label = file;
                    next();
                })
            });
        });

    });
};

var getHTMLfile = function (req, fileName, next) {
    var filePath = path.resolve(__dirname + '/../BLUEDART/php/ShippingLabels/' + fileName + '.html');
    fs.readFile(filePath, 'utf-8', function (err, html) {
        if (err) {
            return next(err, null);
        }
        //console.log('html', html)
        next(null, html);
    });
};

//convert barcode to png image
var barcodetopng = function (req, next) {

    var text = req;

    var code39 = bwip('code39', {
        data: text,
        width: 300,
        height: 81,
        type: 'PNG'
    });

    code39.getBase64(function (err, imgsrc) {
        console.log('errrrrrrrrrr', err)
        if (err) return next(err);
        console.log('imgsrc=====', imgsrc);
        next(null, imgsrc)
    });

};

//join barcode and template entity both
var joinBarcode = function (req, next) {
    var data = {
        'shipper_name': req.Request.Shipper.CustomerName,
        'shipper_add1': req.Request.Shipper.CustomerAddress1,
        'shipper_add2': req.Request.Shipper.CustomerAddress2,
        'shipper_pin': req.Request.Shipper.CustomerPincode,
        'shipper_phone': req.Request.Shipper.CustomerMobile,
        'shipper_email': req.Request.Shipper.CustomerEmailID,
        'invoice_no': "",
        'invoice_date': "",
        'vat_reg_no': "",
        'cst_reg_no': "",
        'del_name': req.Request.Consignee.ConsigneeName,
        'del_add1': req.Request.Consignee.ConsigneeAddress1,
        'del_add2': req.Request.Consignee.ConsigneeAddress2,
        'del_pin': req.Request.Consignee.ConsigneePincode,
        'del_number': req.Request.Consignee.ConsigneeMobile,

        'order_id': "",
        'AWBNo': req.AWB,
        'weight': req.Request.Services.ActualWeight,
        'l': req.Request.Services.Dimensions.Length,
        'b': req.Request.Services.Dimensions.Breadth,
        'h': req.Request.Services.Dimensions.Height,
        'order_date': "",
        'count': req.Request.Services.Dimensions.Count,
        'amount': req.Request.Services.CollactableAmount
    };



    var template = handlebars.compile(req.template, data);
    if (!template) {
        return next('Error while generating file');
    }
    //console.log(template);
    next(null, template);
};

var uploadFile = function (req, data, ext, fileName, cb) {

    var options = { format: 'A4' };
    pdf.create(data, options).toFile('./mypdf.pdf', function(err, res){
        console.log(res.filename);
    });


};
