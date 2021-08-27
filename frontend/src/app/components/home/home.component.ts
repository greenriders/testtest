import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // demandeForm: any
  // @Output() event = new EventEmitter<string>()

  user:any = null
  constructor(private authService : AuthService) { }

 async ngOnInit() {
   this.user = await this.authService.getUser();
  }

  // receiveMessage(){
  //   this.event.emit(this.demandeForm)
  // }

}

