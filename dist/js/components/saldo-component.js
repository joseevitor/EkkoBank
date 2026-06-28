import { toformatDate, toformatCoin } from "../utils/formatters.js";
import { FormatDate } from "../types/FormatDate.js";
import Account from "../types/Account.js";
const elementSaldo = document.querySelector(".saldo-value .value");
const elementAccessDate = document.querySelector(".block-saldo time");
if (elementAccessDate != null) {
    const accessDate = new Date();
    elementAccessDate.textContent = toformatDate(accessDate, FormatDate.DAY_WEEK_DAY_MONTH_YEAR);
}
renderSaldo();
function renderSaldo() {
    if (elementSaldo != null) {
        elementSaldo.textContent = toformatCoin(Account.getSaldo());
    }
}
const SaldoComponent = {
    update() {
        renderSaldo();
    }
};
export default SaldoComponent;
