import { Transation } from "./Transation.js";

export type TransationGroup = {
    label: string;
    transations: Transation[];
}