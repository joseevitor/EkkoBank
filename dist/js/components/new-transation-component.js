import Account from "../types/Account.js";
import ExatratoComponent from "./extrato-components.js";
import SaldoComponent from "./saldo-component.js";
const elementForms = document.querySelector(".block-new-transation form");
elementForms.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementForms.checkValidity()) {
            alert("Please, fill all the fields of the transation!");
            return;
        }
        const inputTransationType = elementForms.querySelector("#transationType");
        const inputValue = elementForms.querySelector("#value");
        const inputDate = elementForms.querySelector("#date");
        let transationType = inputTransationType.value;
        let value = inputValue.valueAsNumber;
        let date = new Date(inputDate.value + " 00:00:00");
        const newTransation = {
            transationType: transationType,
            value: value,
            date: date,
        };
        Account.registerTransation(newTransation);
        SaldoComponent.update();
        ExatratoComponent.update();
        elementForms.reset();
    }
    catch (erro) {
        if (erro instanceof Error) {
            alert(erro.message);
        }
        else {
            alert(String(erro));
        }
    }
});
