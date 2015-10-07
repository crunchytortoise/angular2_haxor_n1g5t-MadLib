var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.name = 'john';
        this.message = '';
        this.nameArr = [
            { 'type': 'Noun', 'value': '' },
            { 'type': 'Noun', 'value': '' },
            { 'type': 'Noun (Plural)', 'value': '' },
            { 'type': 'Occupation', 'value': '' },
            { 'type': 'Verb', 'value': '' },
            { 'type': 'Place', 'value': '' },
            { 'type': 'Verb Ending In "ED"', 'value': '' },
            { 'type': 'Noun', 'value': '' },
            { 'type': 'Verb Ending In "ING"', 'value': '' },
            { 'type': 'Noun (Plural)', 'value': '' },
            { 'type': 'Noun', 'value': '' },
            { 'type': 'Emotion', 'value': '' }
        ];
    }
    DashboardComponent.prototype.reveal = function () {
        var sheet = document.createElement('style');
        sheet.innerHTML = ".paragraph {color: black;}";
        document.body.appendChild(sheet);
    };
    DashboardComponent = __decorate([
        angular2_1.Component({ selector: 'my-dashboard' }),
        angular2_1.View({
            template: "\n\t\t<h2 class=\"header\">Mad lololibs</h2>\n\t\t<h3 style=\"padding-left:60px;\">Crazy Night with Angular 2</h3>\n\t\t<div class=\"form-list\">\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[0].value\" placeholder=\"{{nameArr[0].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[1].value\" placeholder=\"{{nameArr[1].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[2].value\" placeholder=\"{{nameArr[2].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[3].value\" placeholder=\"{{nameArr[3].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[4].value\" placeholder=\"{{nameArr[4].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[5].value\" placeholder=\"{{nameArr[5].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[6].value\" placeholder=\"{{nameArr[6].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[7].value\" placeholder=\"{{nameArr[7].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[8].value\" placeholder=\"{{nameArr[8].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[9].value\" placeholder=\"{{nameArr[9].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[10].value\" placeholder=\"{{nameArr[10].type}}\" />\n\t\t\t<input class=\"form-list-item\" [(ng-model)]=\"nameArr[11].value\" placeholder=\"{{nameArr[11].type}}\" />\n\t\t\t<button (click)=\"reveal()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">Reveal</button>\n\t\t</div>\n\t\t<div class=\"paragraph\">\n\t\t\tI should not have brought my\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[0].value}[nameArr[0].value == \"\"]}}</span>\n\t\t\tto the angular hack night because Sergio brought his\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[1].value}[nameArr[1].value == \"\"]}}</span>.\n\t\t\tThere was plenty of\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[2].value}[nameArr[2].value == \"\"]}}</span>\n\t\t\t thanks to the sponsors. I was expecting all attendees to be an\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[3].value}[nameArr[3].value == \"\"]}}</span>\n\t\t\t who liked to\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[4].value}[nameArr[4].value == \"\"]}}</span>\n\t\t\t daily. I would have preferred it to be hosted at\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[5].value}[nameArr[5].value == \"\"]}}</span>\n\t\t\t  but I suppose Canvs worked out well. I\u2019m pretty sure Jeremy\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[6].value}[nameArr[6].value == \"\"]}}</span>\n\t\t\tthe entire time. I could not have completed this project without my lucky\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[7].value}[nameArr[7].value == \"\"]}}</span>.\n\t\t\tSince the beggining, we planned on\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[8].value}[nameArr[8].value == \"\"]}}</span> and\n\t\t\twe were doing fine until the\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[9].value}[nameArr[9].value == \"\"]}}</span>\n\t\t\t malfunctioned. It broke every\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[10].value}[nameArr[10].value == \"\"]}}</span>\n\t\t\tin the building. Everyone felt\n\t\t\t<span class=\"lib\">{{{true: \"\", false: nameArr[11].value}[nameArr[11].value == \"\"]}}</span>.\n\t\t</div>\n\t",
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map