import { Component } from '@angular/core';
// Define Project class
class Project {
  name: string;
  photo: string;
  description: string;
  
  constructor(name: string, photo: string, description: string) {
    this.name = name;
    this.photo = photo;
    this.description = description;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Define project instance
  project: Project;

  constructor() {
    // Initialize project data
    this.project = new Project(
      'BookShope',
      'assets/home.jfif',
      'A library is a place where books and sources of information are stored. They make it easier for people to get access to them for various purposes. Libraries are very helpful and economical too. They include books, magazines, newspapers, DVDs, manuscripts and more. In other words, they are an all-encompassing source of information.'
    );
  }
}