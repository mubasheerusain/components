import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { title: 'Cars', content: 'A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them.' },
    { title: 'Aeroplanes', content: 'An airplane or aeroplane is a fixed-wing aircraft that is propelled forward by thrust from a jet engine, propeller, or rocket engine. Airplanes come in a variety of sizes, shapes, and wing configurations.' },
    { title: 'ships', content: "A ship is a large watercraft that travels the world's oceans and other sufficiently deep waterways, carrying goods or passengers, or in support of specialized missions, such as defense, research, and fishing. Ships are generally distinguished from boats, based on size, shape, load capacity, and purpose." }
  ]
}
