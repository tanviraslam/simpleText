var app = angular.module('app', []);

app.directive('makeEditable', function(){
  return{
    restrict: 'A',
    templateUrl: "template.html",
    transclude: true,
    scope: true,
    replace: true,
    link: function(scope, element, attrs){
      scope.editOn = true;
      var text = element.find('p');
      scope.toggleEdit = function(){
        text.attr('contenteditable', scope.editOn);
        scope.editOn=!scope.editOn;
      }
    }
  }
});