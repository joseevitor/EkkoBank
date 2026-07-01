import { TransationType } from "./TransationType.js";
let saldo = JSON.parse(localStorage.getItem("saldo") ?? "0");
const transations = JSON.parse(localStorage.getItem("transations") ?? "[]", (key, value) => {
    if (key === "date") {
        return new Date(value);
    }
    return value;
});
function todebit(value) {
    if (value <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    else if (value > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= value;
    localStorage.setItem("saldo", saldo.toString());
}
function todeposit(value) {
    if (value <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }
    saldo += value;
    localStorage.setItem("saldo", saldo.toString());
}
const Account = {
    getSaldo() {
        return saldo;
    },
    getAccessDate() {
        return new Date();
    },
    getTransationGroups() {
        const transationGroups = [];
        /*const transationsList: Transation[] = structuredClone(transations);*/
        const transationsList = [...transations];
        const transationsSorted = transationsList.sort((t1, t2) => t2.date.getTime() - t1.date.getTime());
        let CurrentLabelTransationGroup = "";
        for (let transation of transationsSorted) {
            let labelTransationGroup = transation.date.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (CurrentLabelTransationGroup !== labelTransationGroup) {
                CurrentLabelTransationGroup = labelTransationGroup;
                transationGroups.push({
                    label: labelTransationGroup,
                    transations: []
                });
            }
            /*transationGroups.at(-1).transations.push(transation);*/
            transationGroups[transationGroups.length - 1].transations.push(transation);
        }
        return transationGroups;
    },
    registerTransation(newTransation) {
        if (newTransation.transationType == TransationType.DEPOSITO) {
            todeposit(newTransation.value);
        }
        else if (newTransation.transationType == TransationType.TRANSFERENCIA || newTransation.transationType == TransationType.PAGAMENTO_BOLETO) {
            todebit(newTransation.value);
            newTransation.value *= -1;
        }
        else {
            throw new Error("Tipo de Transação é inválido!");
        }
        console.log(newTransation);
        console.log(this.getTransationGroups());
        transations.push(newTransation);
        localStorage.setItem("transations", JSON.stringify(transations));
    }
};
export default Account;
