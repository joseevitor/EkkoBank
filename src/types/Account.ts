import { Transation } from "./Transation.js";
import { TransationType } from "./TransationType.js";

let saldo: number = 3000;

const Account = {
    getSaldo() {
        return saldo;
    },

    getAccessDate(): Date {
        return new Date();
    },

    registerTransation(newTransation: Transation): void {
        if(newTransation.transationType == TransationType.DEPOSITO) {
                saldo += newTransation.value;
            }
            else if (newTransation.transationType == TransationType.TRANSFERENCIA || newTransation.transationType == TransationType.PAGAMENTO_BOLETO) {
                saldo -= newTransation.value;
            } 
            else {
                alert("Tipo de Transação é inválido!");
                return;
            }

            console.log(newTransation);
    }
}

export default Account;