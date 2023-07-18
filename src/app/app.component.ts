import { Component,OnInit } from '@angular/core';
import { Facesnap } from './model/Facesnap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  listFacesnap!:Facesnap[];

  ngOnInit(){
    this.listFacesnap=[
    {  title:'Voiture Bugatti',
    description:'la voiture de luxe de toutes les générations',
    dateCreation:new Date() ,
    nombreLike:0,
    imgUrl:'https://cdn.motor1.com/images/mgl/wBNQm/s1/bugatti-la-voiture-noire.webp',
    localisation:"Etats Unis d'Amerique"
  },
  {
    title:'Voiture Mercedez',
    description:'la voiture de luxe de toutes les générations de haut niveau de l\'Allemagne',
    dateCreation:new Date() ,
     nombreLike:0,
     imgUrl:'https://votrechauffeur.ma/assets/images/blog/55c94-mercedes-benz.jpg'},
     {
      title:'Voiture Mazda',
      description:'la voiture de luxe pour les moins riche qui se veulent une voiture Coooool !',
      dateCreation:new Date() ,
      nombreLike:0,
      imgUrl:'https://www.groupe-parot.com/sites/zanzicar/files/inline-images/mazda-6_2.jpg',
      localisation:"France - Paris"
    },
    {  title:'Voiture Bugatti',
    description:'la voiture de luxe de toutes les générations',
    dateCreation:new Date() ,
    nombreLike:0,
    imgUrl:'https://cdn.motor1.com/images/mgl/wBNQm/s1/bugatti-la-voiture-noire.webp',
    localisation:"Etats Unis d'Amerique"
  },
  {
    title:'Voiture Mercedez',
    description:'la voiture de luxe de toutes les générations de haut niveau de l\'Allemagne',
    dateCreation:new Date() ,
     nombreLike:0,
     imgUrl:'https://votrechauffeur.ma/assets/images/blog/55c94-mercedes-benz.jpg'},
     {
      title:'Voiture Mazda',
      description:'la voiture de luxe pour les moins riche qui se veulent une voiture Coooool !',
      dateCreation:new Date() ,
      nombreLike:0,
      imgUrl:'https://www.groupe-parot.com/sites/zanzicar/files/inline-images/mazda-6_2.jpg',
      localisation:"France - Paris"
    }
  ];

             }
}
