baseApp.controller('livroCtrl', function($scope, $http, $routeParams, $location, $rootScope) {
    $scope.listarTodos = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:4199/api/Livro/ListarTodos',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            $scope.livros = response.data;
        }, function(response) {
            alert('Erro ao buscar livros!');
        });
    }

    $scope.selecionar = function(livro) {
        $scope.livro = livro;
    }

    $scope.incluir = function(nome) {
        var params = {
            'nome': nome
        }
        $http({
            method: 'POST',
            url: 'http://localhost:4199/api/Livro/Incluir',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(params)
        }).then(function(response) {
            alert('Livro adicionado com sucesso!');
            $scope.listarTodos();
        }, function(response) {
            alert('Erro ao incluir');
        });
    }

    $scope.atualizar = function(livro) {
        var params = {
            'Codigo': livro.codigo,
            'nome': livro.nome
        }
        $http({
            method: 'PUT',
            url: 'http://localhost:4199/api/Livro/Atualizar',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(params)
        }).then(function(response) {
            alert('Livro alterado com sucesso!');
        }, function(response) {
            alert('Erro ao atualizar');
        });
    }

    $scope.deletar = function(id) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:4199/api/Livro/Deletar/' + id,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            alert('Livro deletado com sucesso!')
            $scope.listarTodos();
        }, function(response) {
            alert('Erro ao deletar!');
        });
    }

    $scope.listarTodos();
});