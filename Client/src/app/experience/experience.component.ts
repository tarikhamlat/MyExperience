import {Component, Input, OnInit} from '@angular/core';
import {ProviderService} from '../provider/provider.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() file: any;

  constructor() {
  }

  ngOnInit() {

  }

}
