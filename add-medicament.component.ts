import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament';
import { MedicamentService } from '../services/medicament.service';
@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  
})
export class AddMedicamentComponent implements OnInit {
  newMedicament = new Medicament();
  message : string;
  constructor(private medicamentService :MedicamentService ) { 
    this.medicamentService.ajouterMedicament(this.newMedicament) }

  ngOnInit(): void {
  }
  addMedicament()
    {
      //console.log(this.newMedicament);
      this.medicamentService.ajouterMedicament(this.newMedicament);
      this.message=" Medicament "+this.newMedicament.nomMedicament +" ajouter avec succes !"
    }

}
