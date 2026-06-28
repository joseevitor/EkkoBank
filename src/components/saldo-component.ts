import { toformatDate, toformatCoin } from "../utils/formatters.js";
import { FormatDate } from "../types/FormatDate.js";
import Account from "../types/Account.js";

const elementSaldo = document.querySelector(".saldo-value .value") as HTMLElement;
const elementAccessDate = document.querySelector(".block-saldo time") as HTMLElement;


if (elementAccessDate != null) {
    const accessDate: Date = new Date();
    elementAccessDate.textContent = toformatDate(accessDate, FormatDate.DAY_WEEK_DAY_MONTH_YEAR);
}

renderSaldo();
function renderSaldo(): void {
    if(elementSaldo != null){
        elementSaldo.textContent = toformatCoin(Account.getSaldo());
    }
}

const SaldoComponent = {
    update() {
        renderSaldo();
    }
}

export default SaldoComponent;