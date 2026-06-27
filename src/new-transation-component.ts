
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

    let transationType: TransationType = inputTransationType.value as TransationType;
    let value: number = inputValue.valueAsNumber;
    let date: Date = new Date(inputDate.value);

    if(transationType == "Depósito"){
        saldo += value;
    }else if (transationType == TransationType.TRANSFERENCIA || transationType == TransationType.PAGAMENTO_BOLETO) {
        saldo -= value;
    } else {
        alert("Tipo de Transação é inválido!");
    }
    
    elementSaldo.textContent = saldo.toString();

    const newTransation: Transation = {
        transationType: transationType,
        value: value,
        date: date,
    }
    console.log(newTransation);
    elementForms.reset();
});