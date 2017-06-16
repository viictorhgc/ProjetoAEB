(function(){
  angular
  .module('usuarios')
  .controller('UsuariosController', function($scope, MeusUsuarios,) {
    console.log(MeusUsuarios.listar());

    $scope.titulo = "Lista de usuários";
    $scope.usuarios = [];

    var carregarUsuarios = function (){
     MeusUsuarios.listar().then(function (usuarios){
      $scope.usuarios = usuarios;
    })
   }
   

   $scope.novoUsuario = {};

   $scope.criarUsuario = function(){
    
    
    var usuario = {
      id : $scope.novoUsuario.id,
      username : $scope.novoUsuario.username,
      password : $scope.novoUsuario.password
    };
    MeusUsuarios.inserir(usuario).then(carregarUsuarios);
    $scope.novoUsuario = {};
  }


  $scope.alterarUsuario = function(){
    var usuario = {
      id : $scope.novoUsuario.id,
      username : $scope.novoUsuario.username,
      password : $scope.novoUsuario.password
    };
    MeusUsuarios.alterar(usuario).then(carregarUsuarios);
    $scope.novoUsuario = {};
    
  }

  $scope.removerUsuario = function (id){
    MeusUsuarios.remover(id).then(carregarUsuarios);
  }


   $scope.buscarUsuario = function (id){
    var id = $scope.novoUsuario.id;
    MeusUsuarios.buscar(id).then(carregarUsuarios);
  }

  carregarUsuarios();

});
})();