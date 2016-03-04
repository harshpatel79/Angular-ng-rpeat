(function() {
    'use strict';

    angular
    .module('myapp', []);


    angular
    .module('myapp')
    .controller('mycontroller',mycontroller);
    mycontroller.$inject = ['$scope'];
    function mycontroller($scope){
      var vm = this;
      var id = 3;
      vm.persons = [
                      {
                            id: 1,
                            name: "harshal"
                        },
                      {
                            id: 2,
                            name: "Aamod"
                      },
                      {
                          id: 3,
                          name: "Saurabh"
                      }

      ];
     vm.Addpersons = function(){
        // id++;
        // vm.persons.push({'id':id,'name':'newname'});
      vm.persons[1].id = 6;
      //  vm.persons = [
      //                 {
      //                       id: 1,
      //                       name: "harshal"
      //                   },
      //                 {
      //                       id: 2,
      //                       name: "Aamod"
      //                 },
      //                 {
      //                     id: 3,
      //                     name: "Saurabh"
      //                 },
      //                 {
      //                     id: 4,
      //                     name: "new"
      //                 }
      // ];
     }
     

    };
    
})();
