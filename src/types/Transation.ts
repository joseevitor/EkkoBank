import { TransationType } from "./TransationType.js";

export type Transation = {
    transationType: TransationType;
    value: number;
    date: Date;
}