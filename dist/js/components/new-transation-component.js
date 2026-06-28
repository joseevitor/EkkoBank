import { TransationType } from "../types/TransationType.js";
import { getSaldo, updateSaldo } from "./saldo-component.js";
const elementForms = document.querySelector(".block-new-transation form");
elementForms.addEventListener("submit", function (event) {
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
    let date = new Date(inputDate.value);
    let saldo = getSaldo();
    if (transationType == TransationType.DEPOSITO) {
        saldo += value;
    }
    else if (transationType == TransationType.TRANSFERENCIA || transationType == TransationType.PAGAMENTO_BOLETO) {
        saldo -= value;
    }
    else {
        alert("Tipo de Transação é inválido!");
    }
    updateSaldo(saldo);
    const newTransation = {
        transationType: transationType,
        value: value,
        date: date,
    };
    console.log(newTransation);
    elementForms.reset();
});
