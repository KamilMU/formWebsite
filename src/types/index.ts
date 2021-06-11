export interface Value {
  organizationName: string
  name: string
  email: string
  city: string
  phone: string
  adress: string
  rating: string
  descript: string
  imgSrc: string
  ratings: Rating[]
  dates: Date[]
}

export interface Date {
  id: number,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
  length: number
}

export interface Rating {
  id: number,
  title: string
}



