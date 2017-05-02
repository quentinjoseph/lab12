var app= angular.module('myMod',[]);
app.controller('myController',function($scope){
 $scope.todoList=[];
 $scope.addTodo = function(todoItem){
   console.log('hello');
   $scope.todoList.push({item: todoItem.todo});
   document.getElementById('clear').reset();
   console.log($scope.todoList)
 }

$scope.goAway = function(index){
  console.log('yo');
  $scope.todoList.splice(index,1);

}









// end controller
});
