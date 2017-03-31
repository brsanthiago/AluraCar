angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('listagem');

	$stateProvider
	.state('listagem',{
		url: '/listagem',
		templateUrl: './view/listagem.html',
		controller: 'ListagemController'
	})
	.state('carro',{
		url: '/carro/:carro',
		templateUrl: './view/carro.html',
		controller: 'CarroController'
	})
	.state('finalizar-compra',{
		url: '/finalizar-compra/:carro',
		templateUrl: './view/encerrar-compra.html',
		controller: 'FinalizarCompraController'
	});


});
