import * as am4maps from "@amcharts/amcharts4/maps"
import { gsap } from "gsap";

const mapMarkersMixin = {
    extends: parent,
    methods: {
        markersInit() {
            const imageSeries = this.chart.series.push(new am4maps.MapImageSeries());
            imageSeries.id = "markers";
            const imageSeriesTemplate = imageSeries.mapImages.template;
            imageSeriesTemplate.propertyFields.longitude = "longitude";
            imageSeriesTemplate.propertyFields.latitude = "latitude";
            imageSeriesTemplate.nonScaling = true;

            imageSeries.events.on('datavalidated',this.updateCustomMarkers);
            imageSeries.data = this.objects;
        },
        createTooltip(title) {
            const tooltip = document.createElement('span');
            tooltip.innerText =title.toUpperCase();
            tooltip.className = 'map-marker__tooltip';
            return tooltip
        },
        createMarkerIcon(id) {
            const icon = document.createElement('div');
            icon.className = 'map-marker__icon';
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="type_icon_${id} map-marker__svg">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#type_icon_${id}"></use>
                </svg>
            `;
            return icon;
        },
        createCustomMarker(image) {
            let chart = image.dataItem.component.chart;
            //holder for custom marker

            let holder = document.createElement('div');
            const typeId = image.dataItem.dataContext.type.id;
            const type = this.types.find(type => type.id === typeId);

            holder.id = image.dataItem.dataContext.id;
            holder.dataset.id = image.dataItem.dataContext.id;
            holder.className = 'map-marker';
            holder.dataset.type = image.dataItem.dataContext.type.id;
            holder.style.background = type.color;
            if (image.dataItem.dataContext.corporate) {
                holder.style.borderColor = 'rgba(' + image.dataItem.dataContext.corporate.color + ')';
                holder.style.borderWidth= '2px';
                holder.style.borderStyle = 'solid';
                holder.style.borderRadius= '100%';
            }

            //create icon
            holder.appendChild(this.createMarkerIcon(typeId));
            holder.appendChild(this.createTooltip(image.dataItem.dataContext.title));

            holder.addEventListener('click', event => this.markerHit(event));

            chart.svgContainer.htmlElement.appendChild(holder);


            return holder;
        },
        removeMarker(image) {
            let marker = document.getElementById(image.dataItem.dataContext.id);
            marker && marker.remove();
            image.dummyData = {}
        },
        addMarker(image) {
            const xy = this.chart.geoPointToSVG({longitude: image.longitude, latitude: image.latitude});
            if (!image.dummyData || !image.dummyData.externalElement) {
                image.dummyData = { externalElement: this.createCustomMarker(image) };
            }
            gsap.set(image.dummyData.externalElement, {top: xy.y, left: xy.x}, 0);
        },
        isInViewport(image) {
            const xy = this.chart.geoPointToSVG({longitude: image.longitude, latitude: image.latitude});
            return this.chart.fitsToBounds(xy);
        },
        updateMarker(image) {
                this.isInViewport(image) && this.currentMarkers.includes(image.dataItem.dataContext.id)
                    ? this.addMarker(image)
                    : this.removeMarker(image);
        },
        updateCustomMarkers(update = false) {
            const markers = this.chart.map.getKey("markers");
            markers.mapImages.each(this.updateMarker);
        },
    },
    computed: {
        currentMarkers() {
            let items = this.filteredObjects.slice();
            return items.map(el => el.id)
        }
    }
}
export default mapMarkersMixin;