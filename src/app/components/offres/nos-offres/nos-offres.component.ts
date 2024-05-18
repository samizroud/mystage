import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.scss'],
})
export class NosOffresComponent implements OnInit {
  idUser = sessionStorage.getItem('userId');
  data: any[] | undefined;
  offres: any[] = [
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
    {
        user: 'sami zroud',
        titre: 'offre 2024',
        description: 'quelque description',
        lieux: 'mahdia',
        domaine: 'informatique',
        date_dexpiration: '12/06/2024',
        duree: '1',
        number_candidats: '6',
        status: 'disponible',
        date: '17/05/2024',
    },
]
  first: number = 0;
  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  constructor(private service: OffreService, private route: Router) {}

  ngOnInit() {
    this.getAllOffres();
  }

  getAllOffres() {
    this.service.getAllOffre().subscribe((data) => {
      this.data = Object.values(data);
    });
  };


  getOffreById(id: any) {
    this.route.navigateByUrl(`/dashboard/offres/${id}`);

    // this.service.getOffreById(id).subscribe((data)=>  {this.data = Object.values(data)});
  }
  // addToFavoris(id: number): void {
  //   const fav = { id };
  //   this.service.addToFavori(fav).subscribe();
  // }

  // deleteFromFavoris(id: number): void {
  //   this.service.deleteOne(id).subscribe(() => {
  //     this.getAllOffers();
  //   });
  // }
}
