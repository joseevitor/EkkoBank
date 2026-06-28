import { toformatDate, toformatCoin } from "../utils/formatters.js";
import { FormatDate } from "../types/FormatDate.js";
let saldo = 3000;
const elementSaldo = document.querySelector(".saldo-value .value");
const elementAccessDate = document.querySelector(".block-saldo time");
if (elementAccessDate != null) {
    const accessDate = new Date();
    elementAccessDate.textContent = toformatDate(accessDate, FormatDate.DAY_WEEK_DAY_MONTH_YEAR);
}
export function getSaldo() {
    return saldo;
}
updateSaldo(saldo);
export function updateSaldo(newSaldo) {
    saldo = newSaldo;
    if (elementSaldo != null) {
        elementSaldo.textContent = toformatCoin(saldo);
    }
}
