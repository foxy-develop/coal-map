import * as am4maps from "@amcharts/amcharts4/maps";
import { gsap } from "gsap";
const mapMinesMixin = {
    extends: parent,
    data() {
        return {
            minesData: null,
        }
    },
    methods: {
        updateMines() {
            setTimeout(() => requestAnimationFrame(() =>
                [...document.querySelectorAll('.map-marker--mines')].forEach(el =>
                        el.classList.contains('map-marker--hidden') && !this.filterState.mines.length
                            ? el.classList.remove('map-marker--hidden')
                            : el.classList.add('map-marker--hidden'))
            ), 300);
        },
        minesInit() {
            const minesSeries = this.chart.series.push(new am4maps.MapImageSeries());
            minesSeries.id = 'mines';

            const minesSeriesTemplate = minesSeries.mapImages.template;
            minesSeriesTemplate.propertyFields.longitude = "longitude";
            minesSeriesTemplate.propertyFields.latitude = "latitude";
            minesSeriesTemplate.nonScaling = true;
            minesSeries.events.on('datavalidated', this.updateMineMarkers);

            minesSeries.data = this.minesData;
        },
        createMinesMarker(image) {
            let chart = image.dataItem.component.chart;
            //holder for custom marker

            let holder = document.createElement('div');

            holder.id = 'mine-' + image.dataItem.dataContext.id;
            holder.dataset.mine_id = image.dataItem.dataContext.id;
            holder.className = `map-marker map-marker--mines`;

            const markerBorderColor = corp => (corp && corp.title) ? `rgba(${corp.color}, 1)` : '';
            holder.style.color = markerBorderColor(image.dataItem.dataContext.corporate);

            const icon = document.createElement('div');
            icon.className = 'map-marker__icon';
            icon.innerHTML = `<svg height="20" width="20"><polygon points="10, 4, 4, 16, 16, 16" fill="#000"/></svg>`;

            //create icon
            requestAnimationFrame(() => holder.appendChild(icon));
            requestAnimationFrame(() =>
                holder.appendChild(this.createTooltip(image.dataItem.dataContext.title)));

            holder.addEventListener('click', () => this.mineHit(image));

            requestAnimationFrame(() => chart.svgContainer.htmlElement.appendChild(holder));

            return holder;
        },
        removeMineMarker(image) {
            let marker = document.getElementById('mine-' + image.dataItem.dataContext.id);
            marker && marker.remove();
            image.dummyData = {}
        },
        addMineMarker(image) {
            const xy = this.chart.geoPointToSVG({longitude: image.longitude, latitude: image.latitude});
            if (!image.dummyData || !image.dummyData.externalElement) {
                image.dummyData = {externalElement: this.createMinesMarker(image)};
            }
            gsap.set(image.dummyData.externalElement, {top: xy.y, left: xy.x}, 0);
        },
        updateMineMarker(image) {
            requestAnimationFrame(() =>
                this.isInViewport(image) && !this.filterState.mines.includes(0)
                    ? this.addMineMarker(image)
                    : this.removeMineMarker(image));
        },
        updateMineMarkers() {
            const mines = this.chart.map.getKey("mines");
            mines.mapImages.each(this.updateMineMarker);
        },
        mineHit(image) {
            requestAnimationFrame(this.clearActiveMarker);
            this.currentActive && this.currentActive.setState("default");
            this.currentMarker = image;

            requestAnimationFrame(() => this.rollOverObject(image));
            requestAnimationFrame(() => this.chooseRegion(image.dataItem.dataContext.region));

            if (!this.dialog) {
                requestAnimationFrame(() => {
                    this.openedObject = image.dataItem.dataContext;
                    this.dialog = true;
                });
            } else {
                this.openedObject = image.dataItem.dataContext;
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        this.dialog = true;
                    })
                }, this.chart.zoomDuration)
            }

            requestAnimationFrame(() => this.toggleActiveMarker('mine-' + image.dataItem.dataContext.id));

        }
    },
}
export default mapMinesMixin;
