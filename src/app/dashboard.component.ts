import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2 class="header">Mad lololibs</h2>
		<h3 style="padding-left:60px;">Crazy Night with Angular 2</h3>
		<div class="form-list">
			<input class="form-list-item" [(ng-model)]="nameArr[0].value" placeholder="{{nameArr[0].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[1].value" placeholder="{{nameArr[1].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[2].value" placeholder="{{nameArr[2].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[3].value" placeholder="{{nameArr[3].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[4].value" placeholder="{{nameArr[4].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[5].value" placeholder="{{nameArr[5].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[6].value" placeholder="{{nameArr[6].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[7].value" placeholder="{{nameArr[7].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[8].value" placeholder="{{nameArr[8].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[9].value" placeholder="{{nameArr[9].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[10].value" placeholder="{{nameArr[10].type}}" />
			<input class="form-list-item" [(ng-model)]="nameArr[11].value" placeholder="{{nameArr[11].type}}" />
			<button (click)="reveal()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reveal</button>
		</div>
		<div class="paragraph">
			I should not have brought my
			<span class="lib">{{{true: "", false: nameArr[0].value}[nameArr[0].value == ""]}}</span>
			to the angular hack night because Sergio brought his
			<span class="lib">{{{true: "", false: nameArr[1].value}[nameArr[1].value == ""]}}</span>.
			There was plenty of
			<span class="lib">{{{true: "", false: nameArr[2].value}[nameArr[2].value == ""]}}</span>
			 thanks to the sponsors. I was expecting all attendees to be an
			<span class="lib">{{{true: "", false: nameArr[3].value}[nameArr[3].value == ""]}}</span>
			 who liked to
			<span class="lib">{{{true: "", false: nameArr[4].value}[nameArr[4].value == ""]}}</span>
			 daily. I would have preferred it to be hosted at
			<span class="lib">{{{true: "", false: nameArr[5].value}[nameArr[5].value == ""]}}</span>
			  but I suppose canvs worked out well. I’m pretty sure Jeremy
			<span class="lib">{{{true: "", false: nameArr[6].value}[nameArr[6].value == ""]}}</span>
			the entire time. I could not have completed this project without my lucky
			<span class="lib">{{{true: "", false: nameArr[7].value}[nameArr[7].value == ""]}}</span>.
			Since the beggining, we planned on
			<span class="lib">{{{true: "", false: nameArr[8].value}[nameArr[8].value == ""]}}</span> and
			we were doing fine until the
			<span class="lib">{{{true: "", false: nameArr[9].value}[nameArr[9].value == ""]}}</span>
			 malfunctioned. It broke every
			<span class="lib">{{{true: "", false: nameArr[10].value}[nameArr[10].value == ""]}}</span>
			in the building. Everyone felt
			<span class="lib">{{{true: "", false: nameArr[11].value}[nameArr[11].value == ""]}}</span>.
		</div>
	`,
	directives: [FORM_DIRECTIVES]
})

//<div>Hello {{{true: nameArr[0].type, false: nameArr[0].value}[nameArr[0].value == ""]}}</div>
//<button (click)="sayHello()">Say Hello</button>
//<p>{{message}}</p>

export class DashboardComponent {
	public name = 'john';
	public message = '';
	public nameArr = [
		{'type':'Noun','value':''},
		{'type':'Noun','value':''},
		{'type':'Noun (Plural)','value':''},
		{'type':'Occupation','value':''},
		{'type':'Verb','value':''},
		{'type':'Place','value':''},
		{'type':'Verb Ending In "ED"','value':''},
		{'type':'Noun','value':''},
		{'type':'Verb Ending In "ING"','value':''},
		{'type':'Noun (Plural)','value':''},
		{'type':'Noun','value':''},
		{'type':'Emotion','value':''}
	];

	reveal() {
		var sheet = document.createElement('style')
		sheet.innerHTML = ".paragraph {color: black;}";
		document.body.appendChild(sheet);
	}
}
