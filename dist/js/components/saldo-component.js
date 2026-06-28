import { toformatCoin } from "../utils/formatters.js";
import Account from "../types/Account.js";
const elementSaldo = document.querySelector(".saldo-value .value");
renderSaldo();
function renderSaldo() {
    if (elementSaldo != null) {
        elementSaldo.textContent = toformatCoin(Account.getSaldo());
    }
}
const SaldoComponent = {
    update() {
        renderSaldo();
    },
};
export default SaldoComponent;
