import Account from "../types/Account.js";
import { FormatDate } from "../types/FormatDate.js";
import { toformatDate } from "../utils/formatters.js";

const elementAccessDate = document.querySelector(".block-saldo time") as HTMLElement;

renderDate();
function renderDate(): void {
    if(elementAccessDate != null){
        elementAccessDate.textContent = toformatDate(Account.getAccessDate(), FormatDate.DAY_WEEK_DAY_MONTH_YEAR);
    }
}

const DateComponent = {
    update: function () {
        renderDate();
    },
};

export default DateComponent;