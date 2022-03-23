export interface MonthRange {
  value: number;
  label: string;
}

export class GooglePoint {
  lat: string | number;
  lng: string | number;
  desc?:string;
}


export class GoogleDistance {
  from?: GooglePoint;
  to?: GooglePoint;
  desc?:string;
  duration: MonthRange;
  distance: MonthRange;
}