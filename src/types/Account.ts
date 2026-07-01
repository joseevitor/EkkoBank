import { Transation } from "./Transation.js";
import { TransationGroup } from "./TransationGroup.js";
import { TransationType } from "./TransationType.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo") ?? "0");
const transations: Transation[] = JSON.parse(localStorage.getItem("transations") ?? "[]", (key: string, value: string) => { 
    if (key === "date") {
        return new Date(value);
    }

    return value;
});

function todebit(value: number): void{
    if (value<= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    else if (value > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= value;
    localStorage.setItem("saldo", saldo.toString());
}

function todeposit(value: number): void {
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

    getAccessDate(): Date {
        return new Date();
    },

    getTransationGroups(): TransationGroup[] {
        const transationGroups: TransationGroup[] = [];
        /*const transationsList: Transation[] = structuredClone(transations);*/
        const transationsList = [...transations];
        const transationsSorted: Transation[] = transationsList.sort((t1, t2) => t2.date.getTime() - t1.date.getTime());
        let CurrentLabelTransationGroup: string = "";

        for(let transation of transationsSorted) {
            let labelTransationGroup: string = transation.date.toLocaleDateString("pt-br", { month: "long", year: "numeric"});
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

    registerTransation(newTransation: Transation): void {
        if(newTransation.transationType == TransationType.DEPOSITO) {
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
}

export default Account;
