import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onValidStudent() {
    this.router.navigate(['auth/signin']);
  }

}
