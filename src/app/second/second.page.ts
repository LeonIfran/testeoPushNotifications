import { Component, OnInit } from '@angular/core';

/* Next, open and edit `src/app/second/second.page.ts` then add this import of ActivatedRoute (@angular/router). */
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  /* Add a variable for hold data from router parameters. */
  price: any = '';

  /* Inject the ActivateRoute module to the constructor. */
  constructor(private route: ActivatedRoute) { 
    this.price = this.route.snapshot.params['price'];
  }

  ngOnInit() {
  }

}
