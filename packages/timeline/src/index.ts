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



(function () {
    (window as any).TimeLine = TimeLine;
    (window as any).TimeLineItem = TimeLineItemVto;
})()
export default TimeLine;