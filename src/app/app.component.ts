import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './service/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Main component';

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit() {
    console.log(this.configurationService.getApiConfig());
  }
}
