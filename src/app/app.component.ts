import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   
  title = 'BerlinerZweitschlüssel';

	constructor(
		private gaService: GoogleAnalyticsService
	) { }

	ngOnInit() {
		this.gaService.event.emit({
			category: 'app',
			action: 'bootstrap'
		});
	}
}

