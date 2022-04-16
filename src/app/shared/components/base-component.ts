import { FormBuilder } from '@angular/forms';
import { UtilityService } from '../services/utility.service';

export class BaseComponent {
  hotelsData: any[] = [];
  public builder: FormBuilder;
  constructor(protected utilityService: UtilityService) {
    this.builder = this.utilityService.builder;
  }

  getHotelsInfo() {
    return JSON.parse(
      this.utilityService.localStorageService.getItem('hotels')
    );
  }

  setHotelsInfo() {
    this.utilityService.localStorageService.setItem(
      'hotels',
      JSON.stringify(this.hotelsData)
    );
  }

  sortObjectArrayBySelectedProperty(
    array: any[],
    property: string,
    type: 'ASC' | 'DESC' = 'ASC'
  ): any[] {
    array.sort((a, b) => a[property] - b[property]);
    if (type == 'ASC') {
      array.reverse();
    }
    return array;
  }

  sortObjectArrayByDate(
    array: any[],
    property: string,
    type: 'ASC' | 'DESC' = 'ASC'
  ): any[] {
    array.sort(
      (a, b) =>
        new Date(a[property]).getTime() - new Date(b[property]).getTime()
    );
    if (type == 'ASC') {
      array.reverse();
    }
    return array;
  }
}
