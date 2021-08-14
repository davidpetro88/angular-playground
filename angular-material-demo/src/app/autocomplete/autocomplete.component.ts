import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {map, startWith} from "rxjs/operators";

export interface Course {
  name: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions: Course[] = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'}
  ];
  myControl = new FormControl();
  filteredOptions: Observable<Course[]> = of();

  displayFn(subject: any): string {
    console.log('my display fn -->', subject);
    return subject ? subject.name : undefined;
  }

  displayFn2(course: Course): string {
    return course && course.name ? course.name : '';
  }

  constructor() {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.objectOptions.slice())
      );
  }


  private _filter(name: string): Course[] {
    const filterValue = name.toLowerCase();
    return this.objectOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
