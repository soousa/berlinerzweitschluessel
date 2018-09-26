import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() title ;
  @Input() icon ;

  constructor() { }

  ngOnInit() {
  }

}
