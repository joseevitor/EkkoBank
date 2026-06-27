let saldo = 3000;
const elementSaldo = document.querySelector(".saldo-value .value");
const elementAccessDate = document.querySelector(".block-saldo time");
if (elementSaldo != null) {
    elementSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
if (elementAccessDate != null) {
    const accessDate = new Date();
    elementAccessDate.textContent = accessDate.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
