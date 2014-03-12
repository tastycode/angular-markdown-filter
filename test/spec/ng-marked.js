'use strict';

describe('Directive: marked,', function () {

  // load the directive's module
  beforeEach(module('ngMarked'));

  var element,
    scope,
    $compile,
    markdown, html;

  beforeEach(inject(function ($rootScope, $templateCache, _$httpBackend_, _$compile_) {

    scope = $rootScope.$new();

    scope.markdown = markdown = "# A heading\n\nHello *world*. Here is a [link](//hello).\nAnd an image ![alt](http://angularjs.org/img/AngularJS-large.png).\n\n    Code goes here.\n";

    html = "<h1 id=\"a-heading\">A heading</h1>\n<p>Hello <em>world</em>. Here is a <a href=\"//hello\">link</a>.\nAnd an image <img src=\"http://angularjs.org/img/AngularJS-large.png\" alt=\"alt\">.</p>\n<pre><code>Code goes here.\n</code></pre>";

    $compile = _$compile_;

  }));

  describe('Element,', function () {
    it('should convert markdown', function () {
      element = $compile('<marked>## Element</marked>')(scope);
      expect(element.html()).toContain('<h2 id="element">Element</h2>');
    });
  });

  describe('Attribute,', function () {
    it('should convert markdown', function () {
      element = $compile('<div marked>## Attribute</div>')(scope);
      expect(element.html()).toContain('<h2 id="attribute">Attribute</h2>');
    });

    it('should convert markdown from scope', function () {
      element = $compile('<div marked="markdown"></div>')(scope);
      expect(element.html()).toContain(html);
    });

    it('should catch changes to scope', function () {
      element = $compile('<div marked="markdown"></div>')(scope);
      scope.$apply(function() {
        scope.markdown = "# Element";
      });
      expect(element.html()).toContain("<h1 id=\"element\">Element</h1>");
    });

    it('should convert markdown from string', function () {
      element = $compile('<div marked="\'## String\'"></div>')(scope);
      expect(element.html()).toContain('<h2 id="string">String</h2>');
    });
  });

  describe('Filter', function () {
    var marked;
    beforeEach(inject(function($filter) {
      marked = $filter('marked');
    }));
    it('should provide a marked filter', function() {
      expect(marked).not.toEqual(null);
    });

    it('processes markdown', inject(function($sce) {
      expect($sce.getTrustedHtml(marked('#hello'))).toEqual("<h1 id=\"hello\">Hello</h1>");
    }));
  });

});
