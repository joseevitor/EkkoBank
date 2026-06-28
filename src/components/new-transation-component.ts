import Account from "../types/Account.js";
import { Transation } from "../types/Transation.js";
import { TransationType } from "../types/TransationType.js";
import SaldoComponent from "./saldo-component.js";

const elementForms = document.querySelector(".block-new-transation form") as HTMLFormElement;
elementForms.addEventListener("submit", function(event) {
    
    try
    {
        event.preventDefault();
        if(!elementForms.checkValidity()) {
            alert("Please, fill all the fields of the transation!");
            return;
        }


        const inputTransationType = elementForms.querySelector("#transationType") as HTMLSelectElement;
        const inputValue = elementForms.querySelector("#value") as HTMLInputElement;
        const inputDate = elementForms.querySelector("#date") as HTMLInputElement;

        let transationType: TransationType = inputTransationType.value as TransationType;
        let value: number = inputValue.valueAsNumber;
        let date: Date = new Date(inputDate.value);
        

        const newTransation: Transation = {
            transationType: transationType,
            value: value,
            date: date,
        }

        Account.registerTransation(newTransation);
        SaldoComponent.update();
        elementForms.reset();
    }
    catch(erro) {
        
        
        if(erro instanceof Error) {
            alert(erro.message);
        }
        else {
            alert(String(erro));
        }
    }
});

