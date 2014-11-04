describe('SimpleTextEditor', function(){
  var scope, 
      compiled,
      html,
      element,
      p;

  beforeEach(module('app'));
  beforeEach(module('template.html'));
  beforeEach(inject(function($rootScope, $compile){
    p="Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Earum voluptatem id a ipsum aliquam deserunt aliquid, beatae officiis deleniti! Obcaecati quisquam aperiam quae. Aliquam voluptatem assumenda aperiam porro nobis explicabo?"
    html="<div make-editable>";
    html+=p;
    html+="</div>"
    scope = $rootScope.$new();
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();
  }));

  it('Renders the text editor', function(){
    expect(element.find('button').length).toBe(2);
    expect(element.find('button').text()).toContain('Save');
    expect(element.find('ng-click')).toBeTruthy();
  });
});