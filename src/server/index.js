var express = require('express');
var async = require('async');
var path = require('path');
var fs = require('fs');
var homeCtrl = require("./homeController");
var router = express.Router();


router.get('/', function (req, res) {
    try {
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=new+delhi+city+point+of+interest&language=en&key=AIzaSyDVDNY_xUq0LKpNswJ_d4U5_r2u2hmd1m4";
        homeCtrl.getRequest(req, url, function (resp) {
            var jsonData = JSON.parse(resp);
            if (jsonData.results !== undefined) {
                var addressArray = [];
                for (var index = 0; index < jsonData.results.length; index++) {
                    var element = jsonData.results[index];
                    var location = element.geometry.location;
                    var address = element.formatted_address;
                    // addressArray.push(address);
                    var obj = { 
                        address: address
                    };
                    addressArray.push(obj);
                    var place_name = element.name;
                }
                console.log("location");
                console.log(addressArray);
            }
        })
        res.render('index');
    } catch (error) {
        res.render("error");
    }
});

router.get('/callgoogleapi', function (req, res) {
    console.log("googleapi");
    try {
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=new+delhi+city+point+of+interest&language=en&key=AIzaSyDVDNY_xUq0LKpNswJ_d4U5_r2u2hmd1m4";
        homeCtrl.getRequest(req, url, function (resp) {
            var jsonData = JSON.parse(resp);
            if (jsonData.results !== undefined) {
                var addressArray = [];
                for (var index = 0; index < jsonData.results.length; index++) {
                    var element = jsonData.results[index];
                    var location = element.geometry.location;
                    var address = element.formatted_address;
                    // addressArray.push(address);
                    var obj = { 
                        address: address
                    };
                    addressArray.push(obj);
                    var place_name = element.name;
                }
                console.log("location");
                console.log(addressArray);
                res.json(addressArray);
            }
        })
    } catch (error) {
        res.render("error");
    }
});



module.exports = router;