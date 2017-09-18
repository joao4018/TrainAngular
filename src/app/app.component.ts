import { Component } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    {name: 'luke', isJedi: true, temple: 'Coruscant'},
    {name: 'cola', isJedi: false, temple: 'Coruscant'},
    {name: 'leia', isJedi: true, temple: ''}
  ]
    }
