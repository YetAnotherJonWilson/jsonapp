angular.module("jsonApp", []).config(function($routeProvider, $locationProvider) {


});

angular.module("jsonApp", []).controller('MainController', function($http){
    var vm = this;

    vm.message = "JSON App";

    $http.get('/info').then(handleSuccess);

    function handleSuccess(response) {
        vm.info = response.data;

        vm.output = vm.info.links;
        console.log(vm.output);
    }


});
