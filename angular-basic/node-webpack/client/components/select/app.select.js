angular.module('app').component('appSelect',{
    templateUrl:'components/select/app.select.html',
    bindings:{
        model:'=',
        vendor:'='
    },
    controller:function(){
        var ctrl = this;
    }

});