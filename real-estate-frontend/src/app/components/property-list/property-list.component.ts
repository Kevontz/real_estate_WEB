import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    // Ao iniciar, carregar todas as propriedades
    this.loadProperties();
  }

  loadProperties(): void {
    this.propertyService.getAllProperties().subscribe(
      (data: any) => {
        this.properties = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
