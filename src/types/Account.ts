import { Transation } from "./Transation.js";
import { TransationType } from "./TransationType.js";

let saldo: number = 3000;

function todebit(value: number): void{
    if (value<= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    else if (value > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= value;
}

function todeposit(value: number): void {
    if (value <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!!");
    }
    saldo += value;
}

const Account = {
    getSaldo() {
        return saldo;
    },

    getAccessDate(): Date {
        return new Date();
    },

    registerTransation(newTransation: Transation): void {
        if(newTransation.transationType == TransationType.DEPOSITO) {
                todeposit(newTransation.value);
            }
            else if (newTransation.transationType == TransationType.TRANSFERENCIA || newTransation.transationType == TransationType.PAGAMENTO_BOLETO) {
                todebit(newTransation.value);
            } 
            else {
                throw new Error("Tipo de Transação é inválido!");
            }

            console.log(newTransation);
    }
}

export default Account;
