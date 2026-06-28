import { toformatDate, toformatCoin } from "../utils/formatters.js";
import { FormatDate } from "../types/FormatDate.js";

let saldo: number = 3000;

const elementSaldo = document.querySelector(".saldo-value .value") as HTMLElement;
const elementAccessDate = document.querySelector(".block-saldo time") as HTMLElement;


if (elementAccessDate != null) {
    const accessDate: Date = new Date();
    elementAccessDate.textContent = toformatDate(accessDate, FormatDate.DAY_WEEK_DAY_MONTH_YEAR);
}

export function getSaldo(): number {
    return saldo;
}

updateSaldo(saldo);
export function updateSaldo(newSaldo: number): void {
    saldo = newSaldo;
    if(elementSaldo != null){
        elementSaldo.textContent = toformatCoin(saldo);
    }
}