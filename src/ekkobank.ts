let saldo = 3000;




const elementSaldo = document.querySelector(".saldo-value .value") as HTMLElement;
if(elementSaldo != null){
    elementSaldo.textContent = saldo.toString();
}

const elementForms = document.querySelector(".block-new-transation form") as HTMLFormElement;
elementForms.addEventListener("submit", function(event) {
    event.preventDefault();
    if(!elementForms.checkValidity()) {
        alert("Please, fill all the fields of the transation!");
        return;
    }


    const inputTransationType = elementForms.querySelector("#transationType") as HTMLSelectElement;
    const inputValue = elementForms.querySelector("#value") as HTMLInputElement;
    const inputDate = elementForms.querySelector("#date") as HTMLInputElement;

    let transationType: string = inputTransationType.value;
    let value: number = inputValue.valueAsNumber;
    let date: Date = new Date(inputDate.value);

    if(transationType == "Depósito"){
        saldo += value;
    }else if (transationType == "Transferência" || transationType == "Pagamento de Boleto") {
        saldo -= value;
    } else {
        alert("Tipo de Transação é inválido!");
    }
    
    elementSaldo.textContent = saldo.toString();

    const newTransation = {
        transationType: transationType,
        value: value,
        date: date
    }

    console.log(newTransation);
    elementForms.reset();
});