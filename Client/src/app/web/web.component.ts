import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider/provider.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  file: any;

  constructor(private provider: ProviderService) {
  }

  ngOnInit() {

    this.provider.getFile().subscribe(data => {
      this.file = data;
      console.log(this.file);
    });
  }

}
