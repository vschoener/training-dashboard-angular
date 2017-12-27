import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../service/api-client.service';
import { Channel } from '../../model/channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  channels: Channel[];

  constructor(private apiClient: ApiClientService) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    // Todo: Actually API return the channels history, this will be fixed
    // from the API side to only return channels information.
    this.apiClient.getChannels()
      .subscribe(channels => { this.channels = channels; });
  }
}
