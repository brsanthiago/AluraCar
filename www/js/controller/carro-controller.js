(function () {
angular.module('starter')
.controller('CarroController', CarroController)

  /* @ngInject */
  function CarroController ($scope, $stateParams) {

  	$scope.carro = angular.fromJson($stateParams.carro)

  	$scope.items = [{nome: 'Freio ABS', valor: 800},
  					{nome: 'Ar Condicionado', valor: 500},
  					{nome: 'Direção Hidraulica', valor: 700}]
  	
  	$scope.carro.items = []


  	$scope.selected = function (item, isSelected) {
  		if (isSelected) {
  			$scope.carro.valor = $scope.carro.valor + item.valor
  			$scope.carro.items.push(item)
  		}else{
  			$scope.carro.valor = $scope.carro.valor - item.valor
  		}	
  	};
  }

})();