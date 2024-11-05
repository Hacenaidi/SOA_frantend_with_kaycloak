import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  evenements!: Evenement[]; // an array of Evenement
  
  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.chargerEvenements();
  }
  
  chargerEvenements() {
    this.evenementService.listeEvenement().subscribe(evts => {
      console.log(evts);
      this.evenements = evts;
    });
  }
}
