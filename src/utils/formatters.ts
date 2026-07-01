import { FormatDate } from "../types/FormatDate.js";

export function toformatCoin(value: number): string {
    return value.toLocaleString("pt-br", { style: "currency", currency: "BRL"});
}

export function toformatDate(date: Date, format: FormatDate = FormatDate.DEFAULT): string {
    if (format === FormatDate.DAY_WEEK_DAY_MONTH_YEAR) {
        return date.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric" 
        })
    } else if (format === FormatDate.DAY_MONTH){
        return date.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }

    return date.toLocaleDateString("pt-br");
}

