import { Component, OnInit } from '@angular/core';
import {ProviderService} from "../provider/provider.service";

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

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
