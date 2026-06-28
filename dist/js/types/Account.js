import { TransationType } from "./TransationType.js";
let saldo = 3000;
const Account = {
    getSaldo() {
        return saldo;
    },
    getAccessDate() {
        return new Date();
    },
    registerTransation(newTransation) {
        if (newTransation.transationType == TransationType.DEPOSITO) {
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
};
export default Account;
