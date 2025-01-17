(function(){
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController',['$scope', MyFirstController]);

function MyFirstController($scope){
    $scope.names;
   
    $scope.CheckIfTooMuch = function() {     
       //alert($scope.names); 
   
       if($scope.names != undefined && $scope.names != ""){
       const words = $scope.names.split(',');
       if(words.length > 0 && words.length <= 3){
           $scope.names ="Enjoy!"
       }  else if(words.length > 0 && words.length > 3){
           $scope.names ="Too much!"
       }  else{
           $scope.names ="Please enter data first";
       }
      }else{
       $scope.names ="Please enter data first";
      }
   
    
     };
   
   }

// .controller('MyFirstController',function($scope){
//  $scope.names;

//  $scope.CheckIfTooMuch = function() {     
//     //alert($scope.names); 

//     if($scope.names != undefined && $scope.names != ""){
//     const words = $scope.names.split(',');
//     if(words.length > 0 && words.length <= 3){
//         $scope.names ="Enjoy!"
//     }  else if(words.length > 0 && words.length > 3){
//         $scope.names ="Too much!"
//     }  else{
//         $scope.names ="Please enter data first";
//     }
//    }else{
//     $scope.names ="Please enter data first";
//    }

 
//   };

// });

//})();

})();