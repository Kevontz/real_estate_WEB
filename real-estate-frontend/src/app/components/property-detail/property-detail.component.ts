import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: any = {};

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPropertyDetails(id);
    }
  }

  loadPropertyDetails(id: string): void {
    this.propertyService.getPropertyById(id).subscribe(
      (data: any) => {
        this.property = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
