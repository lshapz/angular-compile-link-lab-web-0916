function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		// link: function ($scope, $elem, $attrs) {

		// },
		compile: function ($element, $attrs) {
       pre: function (scope, element, attrs) {
          element = 'not this'
      },
      post: function(scope, element, attrs) {
                console.log('post-link');
      }
    

	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);