angular.module('app')
    .component('appCheckbox',{
    templateUrl:'components/checkbox/app.checkbox.html',
    bindings:{
        checkbox:'@',
        activecheckbox:'='
    },
    controller:function(){
        this.changeImage = function (){
            this.activecheckbox = this.checkbox;
        }
    }
})