import "./style.css";


class DatePickerVto {
    value: string = "";

}



class HtmlDatePicker extends HTMLElement {

    constructor() {
        super();


    }

    connectedCallback() {
        // this.refresh(); 
        // this.appendChild(this.valueInputDom);
        // this.appendChild(this.floatingWindowDom);

        // console.log("connectedCallback");
    }
    // called when the element is removed from the DOM
    disconnectedCallback() {
        // console.log("disconnectedCallback");
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        // console.log("attributeChangedCallback", name, oldValue, newValue);
        // this.refresh();
    }

}

(function () {
    // (window as any).TimeLine = TimeLine;
    // (window as any).TimeLineItem = TimeLineItemVto;
    window.customElements.define('ru-date-picker', HtmlDatePicker);
    // window.customElements.define('ru-timeline-item', HtmlTimeLineItem);
})()