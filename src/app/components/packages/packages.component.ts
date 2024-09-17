import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  travelDetails = [
    {
      place: 'Paris, France',
      price: 1200,
      difficultyLevel: 'Easy'
    },
    {
      place: 'Mount Everest Base Camp, Nepal',
      price: 2500,
      difficultyLevel: 'Hard'
    },
    {
      place: 'Kyoto, Japan',
      price: 1800,
      difficultyLevel: 'Moderate'
    },
    {
      place: 'Great Barrier Reef, Australia',
      price: 2200,
      difficultyLevel: 'Moderate'
    },
    {
      place: 'Machu Picchu, Peru',
      price: 1700,
      difficultyLevel: 'Hard'
    },
    {
      place: 'Santorini, Greece',
      price: 1300,
      difficultyLevel: 'Easy'
    },
    {
      place: 'Grand Canyon, USA',
      price: 900,
      difficultyLevel: 'Moderate'
    },
    {
      place: 'Banff National Park, Canada',
      price: 1100,
      difficultyLevel: 'Moderate'
    },
    {
      place: 'Iceland Ring Road, Iceland',
      price: 3000,
      difficultyLevel: 'Hard'
    },
    {
      place: 'Bali, Indonesia',
      price: 1000,
      difficultyLevel: 'Easy'
    }
  ];
}
