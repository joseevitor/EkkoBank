export var FormatDate;
(function (FormatDate) {
    FormatDate["DEFAULT"] = "DD/MM/YYYY";
    FormatDate["DAY_WEEK_DAY_MONTH_YEAR"] = "DAY_WEEK, DD/MM/YYYY";
    FormatDate["DAY_MONTH"] = "DD/MM";
})(FormatDate || (FormatDate = {}));
/*
function toformatInformations(value: number, date: Date, formatDate: FormatDate): string {
    const dateFormated = toformatDate(date, formatDate);
    const valueFormated = toformatCoin(value);
    return `${dateFormated} - ${valueFormated}`;
}*/ 
