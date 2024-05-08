import { Pipe, PipeTransform } from '@angular/core';
import { JobField } from '../models/jobField';

@Pipe({
  name: 'jobField'
})
export class JobFieldPipe implements PipeTransform {

  transform(value: number): string {
    return `${JobField[value]}`;
  }

}
