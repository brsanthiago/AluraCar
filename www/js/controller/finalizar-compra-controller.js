(function () {
angular.module('starter')
.controller('FinalizarCompraController', FinalizarCompraController)

  /* @ngInject */
  function FinalizarCompraController ($scope, $stateParams, 
  	$ionicPopup,$state, CarroService) {

  	$scope.carro = angular.fromJson($stateParams.carro)
	$scope.pedido = {}


  	$scope.confirmar = function () {
		$scope.pedidoFinalizado = {
			params : {
				nome: $scope.pedido.nome,
				email: $scope.pedido.email,
				endereco: $scope.pedido.endereco,
				carro: $scope.carro.nome,
				preco: $scope.carro.preco
			}
		}
  		CarroService.salverPedido($scope.pedidoFinalizado)
  		.then(function (dados) {
	  		$ionicPopup.alert({
	  			title: 'Sucesso',
	  			template: 'Compra realizada com sucesso!'
	   		}).then(function(){
	   			$state.go('listagem')
	   		})
  		}, function (error){$ionicPopup.alert({
	  			title: 'Error',
	  			template: 'Não foi possível realizar a compra, tente novamente!'
	   		})
  		})
  	}
  }

})();