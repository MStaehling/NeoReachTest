(function() {
  'use strict';
angular.module('neoreachtest')
.controller('SubmitController', function($http){

  var vm = this;
// vm.list = {
//   firstName:'',
//   lastName:'',
//   email:''
// };
  vm.form = function (){
      firstName=vm.list.firstName,
      lastName= vm.lastName,
      email= vm.email
  }

})

  })();
