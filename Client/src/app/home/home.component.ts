import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider/provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
