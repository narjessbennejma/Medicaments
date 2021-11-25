import { Injectable } from '@angular/core';
import { Medicament } from '../model/medicament';


@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  medicaments : Medicament[];
  medicament :Medicament;
 
  constructor() {
    this.medicaments =[
      {idMedicament : 1, nomMedicament : "PANADOL1000", prixMedicament : 4000, dateCreation : new Date("01/08/2021"), dateExpiree : new Date("02/08/2022"),quantite : 4},
      {idMedicament : 2, nomMedicament : "DOLIPRANE", prixMedicament : 3000, dateCreation : new Date("05/10/2021"), dateExpiree : new Date("06/10/2022"),quantite : 8},
      {idMedicament : 3, nomMedicament : "RHUVEX", prixMedicament : 4500, dateCreation : new Date("01/07/2011"), dateExpiree : new Date("02/07/2022"),quantite : 10},
      {idMedicament : 4, nomMedicament : "FAMODINE", prixMedicament : 20.000 , dateCreation : new Date("01/09/2021"), dateExpiree : new Date("02/09/2022"),quantite : 100},

 ];
   }
   listeMedicaments():Medicament[]
   {
       return this.medicaments
   }
   ajouterMedicament( med: Medicament){
    this.medicaments.push(med);
    }
    supprimerMedicament( med: Medicament){
      //supprimer le produit prod du tableau produits
      const index = this.medicaments.indexOf(med, 0);
      if (index > -1) {
      this.medicaments.splice(index, 1);
      }
      
    }
    consulterMedicamen(id:number): Medicament{
      this.medicament = this.medicaments.find(p => p.idMedicament == id);
      return this.medicament;
      }
   
   trierMedicament(){
    this.medicaments = this.medicaments.sort((n1,n2) => {
    if (n1.idMedicament > n2.idMedicament) {
    return 1;
    }
    if (n1.idMedicament < n2.idMedicament) {
    return -1;
    }
    return 0;
    });
    } 
    updateMedicament(m:Medicament){
     this.supprimerMedicament(m);
     this.ajouterMedicament(m);
     this.trierMedicament();
   }  
}
