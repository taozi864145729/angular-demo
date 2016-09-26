angular.module('app').
    controller('mainController', ['$scope', '$route',function ($scope,$route) {

        $scope.menus = [
            {id:'dashboard',name:'dashboard',href:'#/dashboard'},
            {id:'location',name:'location',href:'#/location'}
        ]

        $scope.menuInfo = {
            selectActive : null
        }

        $scope.control = {
            activecheckbox: 0
        }

        $scope.items = [
            {id:1,name:'app'},{id:2,name:'anna'}
        ]

        $scope.getMenu = function(menu){
            $scope.menuInfo.selectActive = menu.id;
        }
    }])