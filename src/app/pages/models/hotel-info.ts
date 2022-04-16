export class HotelInfo {
  id: string;
  name: string;
  point: number;
  creDate: Date;

  constructor() {
    this.creDate = new Date();
  }
}
