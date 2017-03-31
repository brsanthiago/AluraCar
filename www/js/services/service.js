angular.module('starter')
.service('CarroService', function ($http) {
	const END_POINT = 'http://aluracar.herokuapp.com/'
	
	return {
		listaCarros : function (){
			return $http.get(END_POINT).then(function (response) {
				return response.data;
			});
		},
		salverPedido : function (pedido){
			return $http.get(END_POINT+'salvarpedido', pedido)
			.then(function (response) {
				return 'Compra realizada com sucesso!'
			});
		}
	}
});