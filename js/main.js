// Uma das maneiras de chamar uma variavel é através de .
// Controller é o mesmo que o módulo, ele precisa de um nome qualquer. No caso vou utilizar o nome principal.
// Depois colocamos a sintaxe mais robusta dele, que seria aquela sintaxe que você cria um array de todas os elementos que utilizamos e chamamos o "callback" que é quando certa função espera outro paremetro de função.
//Ele chama um parametro de função
// Scope são todos os elementos referenciados. É manipulação do DOM.
// Ao adicionar um novo elemento no controlador, você precisa automaticamente colocar um callback, ou seja sempre que tiver um um timeout como elemento.
// $timeout dentro do array, automaticamente você precisa declarar ele dentro da função.

App.controller('principal', ['$scope', '$timeout',  function($scope, $timeout){

  $scope.video = 1;
  $timeout(function(){
    $scope.video++;
  }, 1000);

  $scope.olaMundo = function(){
    $("#content").text('Ola Mundo!');
  }

}]);
