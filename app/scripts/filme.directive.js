angular.module("usuarios").directive("awFilme", function () {
  return {
    restrict: "A",
    scope: {
      usuario: '=awFilme',
      fnFechar: '&'
    },
    templateUrl: "templates/usuario.template.html",
    link: function (scope, element, attr) {
      element.addClass('filme com-cartaz');

      if (!attr.fnFechar) {
        element.find('button').remove();
      }
    }
  };
})