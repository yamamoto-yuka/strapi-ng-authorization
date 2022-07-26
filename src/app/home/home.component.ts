import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name='';
  bannerimage ='';
  server = environment.server;

  constructor(private cm:CommonService) { }

  ngOnInit(): void {
    this.cm.getHome().subscribe(res =>{
      console.log(res);
      this.name = res.data.attributes.Name;
      this.bannerimage = res.data.attributes.BannerImage.data.attributes.url;
    })
  }

}
