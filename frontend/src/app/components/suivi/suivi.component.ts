import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/services/auth.service';
import { User, UserRole } from 'src/app/entities/user';
import { DistributeurService } from 'src/app/services/distributeur.service';
import { Distributeur } from 'src/app/entities/distributeur';

export interface PeriodicElement {
  name: string;
  position: number;
  numeroRMA: string;
  situation: string;
  client: string;
}


@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.scss'],
})
export class SuiviComponent implements OnInit {
  displayedColumns: string[] = ['position', 'numeroRMA', 'situation'];
  dataSource: any;
  demandes: any[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  user!: User;
  distributeur: Distributeur[] = [];


  constructor(
    private router: Router,
    private demandeService: DemandereparationService,
    private authService: AuthService,
    private distributeurService: DistributeurService
  ) { }

  async ngOnInit() {
    this.distributeurService.getDistributeur().subscribe(data => this.distributeur = data);
    this.user = await this.authService.getUser();
    if (this.user.role === UserRole.Professionnel) {
      this.demandeService.getByDistributeur(this.user.email).subscribe((demandes) => {
        this.demandes = demandes
        this.dataSource = new MatTableDataSource(demandes);
        if (this.dataSource) {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
    }
    else {
      this.displayedColumns = ['position', 'numeroRMA', 'distributer', 'situation'];
      this.demandeService.getDemandereparation().subscribe((demandes) => {
        this.demandes = demandes
        this.dataSource = new MatTableDataSource(demandes);
        if (this.dataSource) {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
    }
  }



  applyFilter(event: Event) {
    //console.log(filterValue);
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  filterPredicate(data: PeriodicElement, filter: string): boolean {
    if (filter == '') return true;
    if (data.situation.search(filter) == -1) return false;
    return true;
  }

  redirectDetails(row: any) {
    this.router.navigate([`/suivireparation/${row.id}`]);
  }

  isAdmin() {
    return this.user.role === UserRole.Admin;
  }

  getDistributerName(id: number) {
    return this.distributeur.find(e => e.id === id)?.nom;
  }
}
