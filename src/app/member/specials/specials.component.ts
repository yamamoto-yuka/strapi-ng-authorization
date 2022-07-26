import { Component, OnInit } from '@angular/core';
import { Special } from 'src/app/interfaces/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {
  special:Special[] = [];

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getSpecials().subscribe(res =>{
      console.log(res);
      this.special = res.data;
    })
  }

}
