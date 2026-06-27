let saldo = 3000;
const elementSaldo = document.querySelector(".saldo-value .value");
if (elementSaldo != null) {
    elementSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
