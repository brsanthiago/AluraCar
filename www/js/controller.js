(function () {
angular.module('starter')
.controller('ListagemController', ListagemController)

  /* @ngInject */
  function ListagemController ($scope, CarroService) {
  	CarroService.listaCarros().then(function (dados) {
        $scope.listaCarros = dados
    })
  }

})();