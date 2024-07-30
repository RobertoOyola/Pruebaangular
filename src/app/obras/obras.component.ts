import { Component, OnInit } from '@angular/core';
import { LibreriaServicesService } from '../services/libreria-services.service';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {
  obrasAleatorias: any[] = [];
  autores: string[] = [];

  constructor(private libreriaService: LibreriaServicesService) { }

  ngOnInit(): void {
    this.libreriaService.getRandomLibros().subscribe((response: any) => {
      this.obrasAleatorias = response;
      console.log('Assigned obrasAleatorias:', this.obrasAleatorias);
    });
    this.libreriaService.getAuthors().subscribe((response: string[]) => {
      this.autores = response;
      console.log('Assigned autores:', this.autores);
    });
  }
}