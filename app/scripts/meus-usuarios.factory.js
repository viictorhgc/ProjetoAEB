angular.module("usuarios").factory("MeusUsuarios", function($q, $http,){
	var baseUrl = 'http://csf.aeb.gov.br/user';
	return {
		listar: function() {
			var promessa = $q.defer();

			$http.get(baseUrl).then(
				function(result){
					var usuarios = [];

					angular.forEach(result.data, function(usuario, id){
						usuarios.push(usuario);
					});

					promessa.resolve(usuarios);
				}
				);

			return promessa.promise;
		},


		inserir: function(usuario) {
			var id = usuario.id;
			var x = {username:"b", password:"b"};
			var teste = JSON.stringify ({username: usuario.username, password: usuario.password});
			var params = 'json=' + teste;
			
			alert(x);
			return $http({
				method: "POST",
				url: "http://csf.aeb.gov.br/user",
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: 'username='+usuario.username+'&password='+usuario.password
			})
		},
			buscar: function(id) {
			 return $http.get("http://csf.aeb.gov.br/user/" + id ).then(
				function(result){
					var usuarios = [];
					angular.forEach(result.data, function(usuario, id){
						usuarios.push(usuario);

			})
							 alert (usuarios);
}

					);

		}
,
		alterar: function(usuario) {
			var id = usuario.id;
			var x = {username:"b", password:"b"};
			var teste = JSON.stringify ({username: usuario.username, password: usuario.password});
			var params = 'json=' + teste;
			
			return $http({
				method: "PUT",
				url: "http://csf.aeb.gov.br/user/" + id,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: 'username='+usuario.username+'&password='+usuario.password
			})
		},
			remover: function(id) {
				return $http.delete("http://csf.aeb.gov.br/user/" + id );
			}



	};
});