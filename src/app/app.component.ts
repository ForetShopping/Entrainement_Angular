import { Component,OnInit } from '@angular/core';
import { Facesnap } from './model/Facesnap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!:Facesnap;
  mySnap1!:Facesnap;
  ngOnInit(){
    this.mySnap= new Facesnap('Voiture Bugatti',
                               'la voiture de luxe de toutes les générations',
                               new Date() ,
                                0,
                                'https://cdn-s-www.ledauphine.com/images/834FFF93-8183-4640-88EE-DED51128BDDA/NW_detail/bugatti-symbolise-l-automobile-ultime-entre-performances-style-et-luxe-c-est-aussi-un-gage-d-exclusivite-photo-bugatti-1614849511.jpg');
  
     this.mySnap1= new Facesnap('Voiture Mercedez',
                                'la voiture de luxe de toutes les générations de haut niveau de l\'Allemagne',
                                new Date() ,
                                 0,
                                 'https://votrechauffeur.ma/assets/images/blog/55c94-mercedes-benz.jpg');
   
                              }
}
