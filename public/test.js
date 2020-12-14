import gsap from 'gsap';

export default class Instagram {
    constructor() {
        this.section = document.querySelector('.s-instagram');
        this.grid = document.querySelector('.s-instagram-grid');

        this.layer = document.querySelectorAll('.s-instagram-layer');
        this.block = document.querySelectorAll('.s-instagram-block');
        this.scroller = document.querySelector('.s-instagram-scroller');

        this.page = document.querySelector('.a-page');

        this.ww = window.innerWidth;
        this.wh = window.innerHeight;
    }

    set = () => {
        this.font = {
            h3: this.section.querySelector('h3'),
            h2: this.section.querySelector('h2'),
            p: this.section.querySelector('p'),
        }

        if (this.font.h3) this.font.h3.classList.add('f-st');
        if (this.font.h2) this.font.h2.classList.add('f-hm');
        if (this.font.p) this.font.p.classList.add('f-pr');
    }

    cache = () => {
        this.gridBounding = this.grid.getBoundingClientRect();
        this.blockBounding = this.block[3].getBoundingClientRect();
        this.scrollerBounding = this.scroller.getBoundingClientRect();

        this.scrollTop = Math.abs(this.page.getBoundingClientRect().top);

        this.distance = (this.scrollTop) - (this.scrollerBounding.top + this.scrollTop);
        this.percentage = this.distance / ((this.scrollerBounding.height - window.innerHeight) / 100);

        this.blockCenter = window.innerHeight / 2 - this.blockBounding.height / 2;
    }

    positions = () => {
        this.blockScale = this.ww / this.blockBounding.width;

        [...this.layer].forEach((i) => {
            i.style.transform = `scale(${this.blockScale}`;
            i.style.transformOrigin = `44.9% 50%`;
        });
    }

    reset = () => {
        this.layer[0].style.visibility = 'hidden';
        this.layer[1].style.visibility = 'hidden';

        this.section.style.pointerEvents = '';

        [...this.layer].forEach((i) => {
            i.style.transform = `scale(${this.blockScale})`;

            this.grid.style.top = 0;
            this.grid.style.transform = '';
            this.grid.style.bottom = 'auto';
        });
    }

    transform = () => {
        // set
        this.grid.style.top = 0;
        this.grid.style.bottom = 'auto';

        this.section.style.pointerEvents = 'all';

        this.transformTop = Math.abs(this.scrollerBounding.top);

        // easeOutQuad
        let t1 = this.percentage / 100;
        let f1 = t1 * (2 - t1);
        this.easeOutQuad = f1 * 100;

        this.ease1 = (this.blockScale - 1) / 100 * this.easeOutQuad;
        this.ease1Scale = this.blockScale - this.ease1;

        // easeOutCubic
        let t2 = this.percentage / 100;
        let f2 = (--t2) * t2 * t2 + 1;
        this.easeOutCubic = f2 * 100;

        this.ease2 = (this.blockScale - 1) / 100 * this.easeOutCubic;
        this.ease2Scale = this.blockScale - this.ease2;

        // easeOutQuart
        let t3 = this.percentage / 100;
        let f3 = 1 - (--t3) * t3 * t3 * t3;
        this.easeOutQuart = f3 * 100;

        this.ease3 = (this.blockScale - 1) / 100 * this.easeOutQuart;
        this.ease3Scale = this.blockScale - this.ease3;

        // linear
        this.linear = (this.blockScale - 1) / 100 * this.percentage;
        this.linearScale = this.blockScale - this.linear;

        // scale
        if (this.scale <= 1) {
            [...this.layer].forEach((i) => {
                i.style.transform = `scale(1)`;
            });
            return;
        };

        // visibility
        this.layer[0].style.visibility = '';
        this.layer[1].style.visibility = '';

        // sticky
        this.grid.style.transform = `translate3d(0, ${this.transformTop}px, 0)`;

        // scaling
        this.layer[0].style.transform = `scale(${this.ease2Scale})`;
        this.layer[1].style.transform = `scale(${this.linearScale})`;
        this.layer[2].style.transform = `scale(${this.linearScale})`;
        this.layer[3].style.transform = `scale(${this.ease3Scale})`;
        this.layer[4].style.transform = `scale(${this.linearScale})`;
        this.layer[5].style.transform = `scale(${this.ease1Scale})`;
        this.layer[6].style.transform = `scale(${this.ease2Scale})`;
        this.layer[7].style.transform = `scale(${this.ease2Scale})`;
        this.layer[8].style.transform = `scale(${this.linearScale})`;
    }

    render = () => {
        this.cache();

        if (window.innerHeight > this.gridBounding.height) {
            this.margin = window.innerHeight - this.gridBounding.height;
            this.scroller.style.top = `-${this.margin / 2}px`;
            this.scroller.style.bottom = `-${this.margin / 2}px`;
        } else {
            this.margin = this.gridBounding.height - window.innerHeight;
            this.scroller.style.top = `${this.margin / 2}px`;
            this.scroller.style.bottom = `${this.margin / 2}px`;
        }

        if (this.percentage > 0 && this.percentage < 100) {
            this.transform();
        }

        if (this.percentage > 100) {
            [...this.layer].forEach((i) => {
                i.style.transform = `scale(1)`;
            });

            this.grid.style.bottom = 0;
            this.grid.style.top = 'auto';
            this.grid.style.transform = '';
        }

        if (this.percentage < 0) {
            this.reset();
        }
    }

    create = () => {
        gsap.ticker.add(this.render);
    }

    destroy = () => {
        gsap.ticker.remove(this.render);
    }

    init() {
        this.set();
        this.cache();
        this.create();
        this.positions();
    }
}
