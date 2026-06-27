let saldo: number = 3000;

const elementSaldo = document.querySelector(".saldo-value .value") as HTMLElement;
const elementAccessDate = document.querySelector(".block-saldo time") as HTMLElement;
if(elementSaldo != null){
    elementSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency"});
}

if (elementAccessDate != null) {
    const accessDate: Date = new Date();
    elementAccessDate.textContent = accessDate.toLocaleDateString("pt-br", {
        weekday: "long", 
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}