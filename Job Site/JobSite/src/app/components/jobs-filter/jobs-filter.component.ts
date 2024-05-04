import { Component, EventEmitter, Output } from '@angular/core';
import { JobField } from '../../models/jobField';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrl: './jobs-filter.component.scss'
})
export class JobsFilterComponent {
  jobField:JobField = 0
  area:string = ""

  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>()

  filter(){
    this.filterChange.emit({jobField: this.jobField, area: this.area});
  }
}
