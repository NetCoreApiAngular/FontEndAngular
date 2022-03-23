import { Moment } from "moment";

export interface ForwardingDirectoryDetailModel {
    id: number;
    code: string;
    name: string;
    positionName: string;
    type: number;
    dateCreated: Moment;
    status: true;
    description: string;
}
