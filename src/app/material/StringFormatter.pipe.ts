import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormatter',
})
export class StringFormatter implements PipeTransform {
  transform(value: string, formatType: string): string {
    if (formatType.toLowerCase() == '_') {
      return this.titlecase(value.replace(new RegExp('_', 'g'), ' '));
    } else if (formatType.toLowerCase() == 'l') {
      return value.toLowerCase();
    } else if (formatType.toLowerCase() == 'u') {
      return value.toUpperCase();
    } else if (formatType.toLowerCase() == 't') {
      return this.titlecase(value);
    }
    return value;
  }

  titlecase(str: string): string {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => {
        if (word == 'ott' || word == 'dvd') {
          return word.toUpperCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      })
      .join(' ');
  }
}
