import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament';
import { MedicamentService } from '../services/medicament.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styles: [
  ]
})
export class UpdateMedicamentComponent implements OnInit {
currentMedicament = new Medicament();
  constructor(private activatedRoute: ActivatedRoute,
               private router :Router,
              private medicamenService: MedicamentService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
this.currentMedicament = this.medicamenService.consulterMedicamen(this.activatedRoute.snapshot.params.id);
   console.log(this.currentMedicament);
  }
  updateMedicament(){
    console.log(this.currentMedicament);
    this.medicamenService.updateMedicament(this.currentMedicament);
    this.router.navigate(['medicament']);
  }
  

}
