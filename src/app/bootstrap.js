var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var character_service_1 = require('./character.service');
var app_component_1 = require('./app.component');
angular2_1.bootstrap(app_component_1.AppComponent, [
    router_1.routerBindings(app_component_1.AppComponent),
    character_service_1.CharacterService,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map