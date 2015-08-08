var carrinho = angular.module('carrinho',[]);

carrinho.controller('itensController', function($scope){
	$scope.itens = [
		{Produto: 'Samsung Galaxy S6', Preco: '3000'},
		{Produto: 'Macbook Air 15', Preco: '7000'},
		{Produto: 'GoPro Hero II', Preco: '10000'},
		{Produto: 'Contrabaixo Tagima', Preco: '700'},
		{Produto: 'Televisão Led', Preco: '2000'}
	];

	$scope.meusItens = [];

	$scope.nome = '';
	$scope.qtdCarrinho = 0;

	$scope.addItem = function(item){
		$scope.meusItens.push(angular.copy(item));
		delete $scope.item;

		$scope.qtdCarrinho = $scope.meusItens.length;
	}

	$scope.removeItem = function(meuItem){
		$scope.meusItens.splice($scope.meusItens.indexOf(meuItem), 1); // exclui o item q foi clicado
		
		$scope.qtdCarrinho = $scope.meusItens.length;			
	}

});