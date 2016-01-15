/**
 * Created with JetBrains WebStorm.
 * User: nitesh
 * Date: 17/10/14
 * Time: 4:39 PM
 * To change this template use File | Settings | File Templates.
 */

var soap = require('soap');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

var bluedart = function () {

    var self = this;

    /*   The Location Finder provides you with information on locations serviced by Blue Dart. It also outlines the services available
     for each location. This service can be used by the customer to be better advised on the serviceability and reach of Blue Dart locations.
     This query input is based on pin code. Methods used in Location Finder :
     GetServicesforPincode  : This method will return information about  all types of services provided by Blue Dart for requested pin code. */

    self.GetServicesforPincode = function (req, res, next) {
        req._data = {
            pinCode: req.pinCode,
            profile: req.profile
        };
        //console.log('===================',__dirname);

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');
        //console.log('===============',dir)
        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'ServiceFinderQuery.wsdl', '-f', 'GetServicesforPincode'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };

    /* GetServicesforProduct : This method will return service availability for requested pincode,product / subproduct */

    self.GetServicesforProduct = function (req, res, next) {
        req._data = {
            pinCode: req.pinCode,
            pProductCode: req.pProductCode,
            pSubProductCode: req.pSubProductCode,

            profile: req.profile
        };
        //console.log('===================',__dirname);

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');
        //console.log('===============',dir)
        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'ServiceFinderQuery.wsdl', '-f', 'GetServicesforProduct'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };

    /* Transit Time: The Transit Time Finder provides you with the delivery date for a selected service. You are required
     to provide the Blue Dart service required by you, the Origin pin code, Destination pin code ,pickup date and time */

    self.GetDomesticTransitTimeForPinCodeandProduct = function (req, res, next) {
        req._data = {
            pPinCodeFrom: req.pPinCodeFrom,
            pPinCodeTo: req.pPinCodeTo,
            pProductCode: req.pProductCode,
            pSubProductCode: req.pSubProductCode,
            pPudate: req.pPudate,
            pPickupTime: req.pPickupTime,

            profile: req.profile
        };
        //console.log('===================',__dirname);

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');
        //console.log('===============',dir)
        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'ServiceFinderQuery.wsdl', '-f', 'GetDomesticTransitTimeForPinCodeandProduct'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };


    /*
     *Pickup Registration:  The Pickup registration API exposes methods those will be used to register a Pickup.
     * Methods used in Pickup Registration :
     * RegisterPickup
     * GetAllProductsAndSubProducts
     * */

    //RegisterPickup:  This method will register Pickup using all necessary data as input parameters.
    self.RegisterPickup = function (req, res, next) {
        req._data = {
            profile: req.profile,
            request: req.request
        };
        //console.log('===================',__dirname);

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');
        //console.log('===============',dir)
        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'PickupRegistrationService.wsdl', '-f', 'RegisterPickup'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };

    //CancelPickup:  This method will allow user to cancel pickup (which are registered by him).
    self.CancelPickup = function (req, res, next) {

        req._data = {
            profile: req.profile,
            request: req.request
        };
        //console.log('===================',__dirname);

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');
        //console.log('===============',dir)
        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'PickupRegistrationService.wsdl', '-f', 'CancelPickup'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };

    //GetAllProductsAndSubProducts: This method will return all product & subproduct codes details that will be
    //used to send as input parameters in Pickup Registration method.
    self.GetAllProductsAndSubProducts = function (req, res, next) {

        req._data = {
            profile: req.profile
        };

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');

        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'PickupRegistrationService.wsdl', '-f', 'GetAllProductsAndSubProducts'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };


    //Waybill Generation: This API exposes methods those will be used to generate new Waybill.
    // This method will register Pickup using all necessary data as input parameters.
    self.GenerateWayBill = function (req, res, next) {

        req._data = {
            request: req.request,
            profile: req.profile
        };

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');

        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'WayBillGeneration.wsdl', '-f', 'GenerateWayBill'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                //console.log('error=-====================>>>>>',error);
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };

    //ImportData:  This API exposes methods those will be used to generate multiple Waybills.
    // This method will generate Waybill  using all necessary data as input parameters.
    self.ImportData = function (req, res, next) {

        req._data = {
            request: req.request,
            profile: req.profile
        };

        var dir = path.resolve(__dirname, '..', 'BLUEDART/php/');

        var spawn = require('child_process').spawn;

        req._data = JSON.stringify(req._data);

        var php = spawn('php', ['bluedart.php', '-d', req._data, '-p', 'WayBillGeneration.wsdl', '-f', 'ImportData'], {cwd: dir});

        var out = "";
        var error = "";

        php.stdout.on('data', function (data) {
            out += data;
        });

        php.stderr.on('data', function (err) {
            error += err;
        });

        php.on('close', function (code) {

            if (error) {
                //console.log('error=-====================>>>>>',error);
                return next(error, '');
            }

            else {
                //console.log('out=-====================>>>>>',out);
                out = JSON.parse(out);
                return next('', out);
            }

        });
    };

};

module.exports = new bluedart;
