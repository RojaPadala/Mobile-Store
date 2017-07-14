(function () {
    var app = angular.module("MobileStore", []);
    var iphone = {
        name: "Apple iphone7 Plus",
        color: "Pink",
        memory: "3GB RAM,128 Internal Memory",
        price: 75000,
        image: "pic.png",
        isSoldOut: false
    };
    var iphone2 =
        {
        name: "Apple iphone7 Plus",
        color: "Pink",
        memory: "3GB RAM,128 Internal Memory",
        price: 75000,
        image: "pic2.jpg",
        isSoldOut: false
    };
    app.controller("StoreController", function () {
        this.mobiles = [iphone, iphone2];

        this.setActiveTab=function(mobile,tab)
        {
            mobile.activeTab=tab;
        }
    });

})
();
