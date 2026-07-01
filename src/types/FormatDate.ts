export enum FormatDate {
    DEFAULT = "DD/MM/AAAA",
    DAY_WEEK_DAY_MONTH_YEAR = "DIA_SEMANA, DD/MM/AAAA",
    DAY_MONTH = "DD/MM"
}
/*
function toformatInformations(value: number, date: Date, formatDate: FormatDate): string {
    const dateFormated = toformatDate(date, formatDate);
    const valueFormated = toformatCoin(value);
    return `${dateFormated} - ${valueFormated}`;
}*/