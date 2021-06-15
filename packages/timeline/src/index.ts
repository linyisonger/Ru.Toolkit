import './index.css';

class TimeLineVto {
    wrapper: string = '';
    items: TimeLineItemVto[] = []
    constructor(options: TimeLineVto) {
        Object.assign(this, options);
    }
}
class TimeLineItemVto {
    img: string | undefined = undefined
    icon: string | undefined = undefined;
    label: string = ''
    content: string = ''
    constructor(options: TimeLineItemVto) {
        Object.assign(this, options);
    }
}
class TimeLine extends TimeLineVto {


    constructor(options: TimeLineVto) {
        super(options);
        this.render();
    }


    private render() {
        const wrapperDom = document.querySelector(this.wrapper)

        if (wrapperDom == null) throw new Error(`wrapper ${this.wrapper} element is null.`);
        wrapperDom.className += ' ru-timeline';

        this.items.map(item => {
            const itemDom = document.createElement('div');

            const iconDom = item.img ? document.createElement('img') : document.createElement('i');
            const labelDom = document.createElement('div');
            const contentDom = document.createElement('div');
            const lineDom = document.createElement('div');

            if (item.img) iconDom.setAttribute('src', item.img);

            itemDom.className = 'ru-timeline-item'
            iconDom.className += `ru-icon ${(item.icon || item.img) ?? 'ru-default'}`
            labelDom.className = 'ru-label'
            contentDom.className = 'ru-content'
            lineDom.className = 'ru-line'

            labelDom.textContent = item.label;
            contentDom.innerHTML = item.content;

            itemDom.appendChild(iconDom);
            itemDom.appendChild(labelDom);
            itemDom.appendChild(contentDom);
            itemDom.appendChild(lineDom);

            wrapperDom.appendChild(itemDom)
        })
    }
}
class HtmlTimeLine extends HTMLElement {
    constructor() {
        super();
    }
    after() {

    }
}
class HtmlTimeLineItem extends HTMLElement {

    get data() {
        return new TimeLineItemVto({
            content: this.getAttribute('content') ?? "",
            label: this.getAttribute("label") ?? "",
            icon: this.getAttribute("icon") ?? "",
            img: this.getAttribute("img") ?? "",
        })
    }

    static get observedAttributes() {
        return ['content', 'label', 'icon', 'img'];
    }


    private iconDom: HTMLElement;
    private imgDom: HTMLDivElement;
    private labelDom: HTMLDivElement;
    private contentDom: HTMLDivElement;
    private lineDom: HTMLDivElement;

    constructor() {
        super();

        this.iconDom = document.createElement('i');
        this.imgDom = document.createElement('img');
        this.labelDom = document.createElement('div');
        this.contentDom = document.createElement('div');
        this.lineDom = document.createElement('div');

        this.imgDom.className = 'ru-icon';
        this.labelDom.className = 'ru-label'
        this.contentDom.className = 'ru-content'
        this.lineDom.className = 'ru-line'
    }
    refresh() {
        if (this.data.img) this.imgDom.setAttribute('src', this.data.img ?? '');
        else if (this.data.icon) this.iconDom.className = `ru-icon ${this.data.icon}`
        else this.iconDom.className = 'ru-icon ru-default'
        this.labelDom.textContent = this.data.label;
        this.contentDom.innerHTML = this.data.content;

    }
    connectedCallback() { 
        this.refresh();
        this.appendChild(this.iconDom);
        this.appendChild(this.labelDom);
        this.appendChild(this.contentDom);
        this.appendChild(this.lineDom);
        this.appendChild(this.imgDom);
        // console.log("connectedCallback");
    }
    // called when the element is removed from the DOM
    disconnectedCallback() {
        // console.log("disconnectedCallback");
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        // console.log("attributeChangedCallback", name, oldValue, newValue);
        this.refresh();
    }
}
(function () {
    (window as any).TimeLine = TimeLine;
    (window as any).TimeLineItem = TimeLineItemVto;
    window.customElements.define('ru-timeline', HtmlTimeLine);
    window.customElements.define('ru-timeline-item', HtmlTimeLineItem);
})()
export default TimeLine;