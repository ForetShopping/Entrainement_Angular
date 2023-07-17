import { Component,Input,OnInit } from '@angular/core';
import { Facesnap } from '../model/Facesnap';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() facesnap!:Facesnap;

  surLike(){
      if(this.facesnap.nombreLike==0){
        this.facesnap.nombreLike++;
      }else{
        this.facesnap.nombreLike--;
      }
  }
}
