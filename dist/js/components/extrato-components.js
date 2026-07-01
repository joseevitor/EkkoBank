import Account from "../types/Account.js";
import { FormatDate } from "../types/FormatDate";
import { toformatCoin, toformatDate } from "../utils/formatters.js";
const elementRegisterTransationsExtract = document.querySelector(".extrato .register-transation");
torenderExtrato();
function torenderExtrato() {
    const transationGoups = Account.getTransationGroups();
    elementRegisterTransationsExtract.innerHTML = "";
    let htmlRegisterTransations = "";
    for (let transationGroup of transationGoups) {
        let htmlTransationItem = "";
        for (let transation of transationGroup.transations) {
            htmlTransationItem += `
                <div class="transation-item">
                    <div class="transation-info">
                        <span class="type">${transation.transationType}</span>
                        <strong class="value">${toformatCoin(transation.value)}</strong>
                    </div>
                    <time class="date">${toformatDate(transation.date, FormatDate.DAY_MONTH)}</time>
                </div>
            `;
        }
        htmlRegisterTransations += `
            <div class="transations-group">
                <strong class="mes-group">${transationGroup.label}</strong>
                ${htmlTransationItem}
            </div>
        `;
    }
    if (htmlRegisterTransations == "") {
        htmlRegisterTransations = "<div>Não há transações registradas.</div>";
    }
    elementRegisterTransationsExtract.innerHTML = htmlRegisterTransations;
}
const ExatratoComponent = {
    update() {
        torenderExtrato();
    }
};
export default ExatratoComponent;
