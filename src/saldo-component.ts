let saldo: number = 3000;

const elementSaldo = document.querySelector(".saldo-value .value") as HTMLElement;
if(elementSaldo != null){
    elementSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency"});
}

