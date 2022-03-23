import { Moment } from 'moment';


export interface Description{
    id: number,
    description1: string,
    createdDate: Moment,
    createdBy: string,
    updatedDate: Moment,
    updatedBy:string
}