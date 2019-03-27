import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider/provider.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

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
