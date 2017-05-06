define(['jquery', 'qlik', './properties'], function ($, qlik, properties) {
    return {
        initialProperties: {field: '',fieldvalue: ''},
		template: '<div></div>',
		definition: properties,
        controller: function ($element, $scope) {
            var app = qlik.currApp(this);
            var layout = $scope.component.model.layout;
            app.field(layout.field).selectValues([layout.fieldvalue], true, true);
        }
    };
});