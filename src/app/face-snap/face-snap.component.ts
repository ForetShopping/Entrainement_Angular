import { Component,Input,OnInit } from '@angular/core';
import { Facesnap } from '../model/Facesnap';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() facesnap!:Facesnap;
  boutonText:string ="J'aime";
  surLike(){
      if(this.facesnap.nombreLike==0){
        this.facesnap.nombreLike++;
        this.boutonText="Vous aimez déjà";
     }else{
      this.facesnap.nombreLike--;
      this.boutonText ="J'aime";

     }
  }
}
