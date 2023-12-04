
import { VueloService } from 'src/app/services/vuelo.service';
import { Component, OnInit } from '@angular/core';

import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit {

  vuelos: any[] = [];

  constructor(private vueloService: VueloService) { }

  async ngOnInit(): Promise<void> {
    await this.vueloService.obtenerVuelos().subscribe(
      data => {
        this.vuelos = data;
      },
      error => {
        console.error('Error al obtener vuelos:', error);
      }
    );
  }

  async generarReportePDF(): Promise<void> {
    const jsPDF = await import('jspdf');
    const pdf = new jsPDF.default();

    // Agregar contenido al PDF
    pdf.text('Lista de Vuelos', 10, 10);
    
    this.vuelos.forEach((vuelo, index) => {
      const yPosition = 20 + index * 10;
      pdf.text(`${vuelo.numeroVuelo} - ${vuelo.origen} a ${vuelo.destino}`, 10, yPosition);
    });

    // Descargar el PDF
    pdf.save('reporte_vuelos.pdf');
  }
}
