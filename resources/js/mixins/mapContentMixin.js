import locale from "../locale/ru";
import objectData from "../data/data";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps"


const mapContentMixin = {
    extends: parent,
    methods: {
        mapTemplateInit() {
            // Create map polygon series
            const polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
            polygonSeries.id = 'polygon'
            polygonSeries.exclude = ["UA-40", "UA-43", "RUSSIAN-INVANDERS"];
            polygonSeries.useGeodata = true;
            let polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.nonScalingStroke = true;
            polygonTemplate.strokeWidth = 0.5;
            polygonTemplate.togglable = false;
            polygonTemplate.hoverable = true;
            polygonTemplate.fill = this.colors.default;
            polygonTemplate.propertyFields.id = 'id';
            polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

            const hoverState = polygonTemplate.states.create("hover");
            hoverState.properties.fill = this.colors.hover;

            const activeState = polygonTemplate.states.create("active");
            activeState.properties.fill = this.colors.activeRegion;
            activeState.properties.hoverable = false;

            polygonTemplate.adapter.add("fill", this.createPattern);
            polygonTemplate.events.on("hit", event => this.handleRegionHit(event));

            const disabledSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
            disabledSeries.id = 'disabled';
            disabledSeries.include = ["UA-40", "UA-43"];

            // Make map load polygon data (state shapes and names) from GeoJSON
            disabledSeries.useGeodata = true;
            // Configure series tooltip
            let polygonDisabledTemplate = disabledSeries.mapPolygons.template;
            polygonDisabledTemplate.nonScalingStroke = true;
            polygonDisabledTemplate.propertyFields.id = 'id';
            polygonDisabledTemplate.strokeWidth = 0.5;
            polygonDisabledTemplate.togglable = false;
            polygonDisabledTemplate.hoverable = false;
            polygonDisabledTemplate.fill = this.colors.disabled;
            polygonDisabledTemplate.adapter.add("fill", this.createPattern);

            const shapeSeries = this.chart.series.push(new am4maps.MapPolygonSeries());

            shapeSeries.data = [{
                "geoPolygon": [[
                    {latitude:48.59222, longitude:39.79403}, {latitude:48.58424, longitude:39.82724},
                    {latitude:48.56726, longitude:39.85213}, {latitude:48.53411, longitude:39.85737},
                    {latitude:48.50373, longitude:39.85458}, {latitude:48.47042, longitude:39.85007},
                    {latitude:48.44611, longitude:39.89964}, {latitude:48.4294, longitude:39.89719},
                    {latitude:48.40536, longitude:39.90745}, {latitude:48.39254, longitude:39.90852},
                    {latitude:48.3729, longitude:39.93693}, {latitude:48.34992, longitude:39.94565},
                    {latitude:48.33491, longitude:39.88525}, {latitude:48.32598, longitude:39.84293},
                    {latitude:48.30911, longitude:39.88857}, {latitude:48.29433, longitude:39.90248},
                    {latitude:48.27516, longitude:39.91325}, {latitude:48.27064, longitude:39.91595},
                    {latitude:48.27337, longitude:39.92723}, {latitude:48.27951, longitude:39.93571},
                    {latitude:48.28366, longitude:39.93217}, {latitude:48.2915, longitude:39.93892},
                    {latitude:48.29448, longitude:39.94906}, {latitude:48.3005, longitude:39.95298},
                    {latitude:48.30203, longitude:39.95818}, {latitude:48.29967, longitude:39.9613},
                    {latitude:48.30189, longitude:39.97203}, {latitude:48.30229, longitude:39.96481},
                    {latitude:48.3071, longitude:39.97002}, {latitude:48.31388, longitude:39.97678},
                    {latitude:48.31725, longitude:39.98901}, {latitude:48.31114, longitude:39.9948},
                    {latitude:48.2692, longitude:40.01304}, {latitude:48.26218, longitude:40.01709},
                    {latitude:48.22379, longitude:40.0063}, {latitude:48.22848, longitude:39.94612},
                    {latitude:48.18071, longitude:39.93859}, {latitude:48.16377, longitude:39.9071},
                    {latitude:48.15566, longitude:39.90713}, {latitude:48.15244, longitude:39.90631},
                    {latitude:48.14644, longitude:39.90567}, {latitude:48.13989, longitude:39.90236},
                    {latitude:48.13166, longitude:39.88991}, {latitude:48.10932, longitude:39.87573},
                    {latitude:48.04646, longitude:39.88416}, {latitude:48.03728, longitude:39.78023},
                    {latitude:48.02816, longitude:39.78593}, {latitude:48.01522, longitude:39.79181},
                    {latitude:48.00734, longitude:39.80218}, {latitude:48.00451, longitude:39.81228},
                    {latitude:47.9984, longitude:39.81531}, {latitude:47.9919, longitude:39.81851},
                    {latitude:47.98514, longitude:39.81796}, {latitude:47.97939, longitude:39.82445},
                    {latitude:47.96768, longitude:39.82057}, {latitude:47.96165, longitude:39.82067},
                    {latitude:47.9565, longitude:39.82437}, {latitude:47.95143, longitude:39.813},
                    {latitude:47.92721, longitude:39.80318}, {latitude:47.91673, longitude:39.79516},
                    {latitude:47.86961, longitude:39.79538}, {latitude:47.87013, longitude:39.7772},
                    {latitude:47.84147, longitude:39.75336}, {latitude:47.83645, longitude:39.64635},
                    {latitude:47.83716, longitude:39.56748}, {latitude:47.8326, longitude:39.53577},
                    {latitude:47.85918, longitude:39.4718}, {latitude:47.85625, longitude:39.46007},
                    {latitude:47.85511, longitude:39.44782}, {latitude:47.85454, longitude:39.44179},
                    {latitude:47.83854, longitude:39.4354}, {latitude:47.83204, longitude:39.42347},
                    {latitude:47.87042, longitude:39.38865}, {latitude:47.86723, longitude:39.32011},
                    {latitude:47.86061, longitude:39.23677}, {latitude:47.85397, longitude:39.18277},
                    {latitude:47.84693, longitude:39.14917}, {latitude:47.86835, longitude:39.0836},
                    {latitude:47.8728, longitude:38.94592}, {latitude:47.87276, longitude:38.90824},
                    {latitude:47.87414, longitude:38.89237}, {latitude:47.87277, longitude:38.881},
                    {latitude:47.86526, longitude:38.83945}, {latitude:47.85732, longitude:38.84024},
                    {latitude:47.85012, longitude:38.83203}, {latitude:47.83706, longitude:38.82767},
                    {latitude:47.83137, longitude:38.83003}, {latitude:47.82801, longitude:38.83187},
                    {latitude:47.8277, longitude:38.83594}, {latitude:47.81551, longitude:38.81854},
                    {latitude:47.79335, longitude:38.78824}, {latitude:47.78496, longitude:38.78905},
                    {latitude:47.78395, longitude:38.79453}, {latitude:47.77911, longitude:38.79039},
                    {latitude:47.77512, longitude:38.79749}, {latitude:47.74199, longitude:38.79087},
                    {latitude:47.72662, longitude:38.77291}, {latitude:47.68546, longitude:38.77512},
                    {latitude:47.68648, longitude:38.74824}, {latitude:47.68129, longitude:38.7404},
                    {latitude:47.68807, longitude:38.73604}, {latitude:47.69994, longitude:38.73635},
                    {latitude:47.69986, longitude:38.66588}, {latitude:47.644, longitude:38.6178},
                    {latitude:47.6164, longitude:38.3525}, {latitude:47.54465, longitude:38.29559},
                    {latitude:47.50528, longitude:38.29416}, {latitude:47.49202, longitude:38.29381},
                    {latitude:47.4852, longitude:38.28876}, {latitude:47.47727, longitude:38.28984},
                    {latitude:47.43632, longitude:38.30496}, {latitude:47.374, longitude:38.25965},
                    {latitude:47.36389, longitude:38.24594}, {latitude:47.34425, longitude:38.23227},
                    {latitude:47.327, longitude:38.22237}, {latitude:47.29234, longitude:38.33514},
                    {latitude:47.27171, longitude:38.33418}, {latitude:47.2563, longitude:38.3052},
                    {latitude:47.23525, longitude:38.25823}, {latitude:47.23262, longitude:38.23972},
                    {latitude:47.22364, longitude:38.23965}, {latitude:47.21854, longitude:38.24371},
                    {latitude:47.20665, longitude:38.23818}, {latitude:47.12747, longitude:38.23158},
                    {latitude:47.03995, longitude:38.11363}, {latitude:47.09958, longitude:37.98008},
                    {latitude:47.11667, longitude:37.84807}, {latitude:47.16467, longitude:37.81872},
                    {latitude:47.23508, longitude:37.82731}, {latitude:47.30903, longitude:37.84447},
                    {latitude:47.38998, longitude:37.86095}, {latitude:47.50827, longitude:37.85923},
                    {latitude:47.63095, longitude:37.85421}, {latitude:47.67874, longitude:37.74035},
                    {latitude:47.69786, longitude:37.63968}, {latitude:47.84116, longitude:37.64465},
                    {latitude:47.93321, longitude:37.55156}, {latitude:47.9405, longitude:37.52149},
                    {latitude:47.95383, longitude:37.53492}, {latitude:47.97636, longitude:37.56483},
                    {latitude:48.00606, longitude:37.56346}, {latitude:48.02868, longitude:37.69272},
                    {latitude:48.05376, longitude:37.70075}, {latitude:48.06566, longitude:37.70096},
                    {latitude:48.08364, longitude:37.75529}, {latitude:48.10922, longitude:37.79438},
                    {latitude:48.11987, longitude:37.79947}, {latitude:48.13029, longitude:37.82095},
                    {latitude:48.16151, longitude:37.83742}, {latitude:48.21049, longitude:37.90309},
                    {latitude:48.30625, longitude:37.90348}, {latitude:48.34667, longitude:37.93339},
                    {latitude:48.39491, longitude:38.01501}, {latitude:48.40282, longitude:38.21285},
                    {latitude:48.37829, longitude:38.26687}, {latitude:48.40048, longitude:38.3153},
                    {latitude:48.42481, longitude:38.37107}, {latitude:48.43225, longitude:38.42245},
                    {latitude:48.49601, longitude:38.44786}, {latitude:48.6461, longitude:38.47244},
                    {latitude:48.70104, longitude:38.58278}, {latitude:48.71438, longitude:38.70299},
                    {latitude:48.73275, longitude:38.81448}, {latitude:48.75226, longitude:38.88038},
                    {latitude:48.74558, longitude:38.92561}, {latitude:48.7356, longitude:38.93814},
                    {latitude:48.74595, longitude:38.95984}, {latitude:48.73901, longitude:38.98445},
                    {latitude:48.71603, longitude:38.99745}, {latitude:48.71084, longitude:38.99998},
                    {latitude:48.68386, longitude:39.01606}, {latitude:48.66143, longitude:39.02672},
                    {latitude:48.65539, longitude:39.02447}, {latitude:48.64747, longitude:39.05069},
                    {latitude:48.65086, longitude:39.10206}, {latitude:48.67691, longitude:39.14939},
                    {latitude:48.70286, longitude:39.19199}, {latitude:48.70617, longitude:39.21926},
                    {latitude:48.72531, longitude:39.25316}, {latitude:48.7398, longitude:39.27621},
                    {latitude:48.7503, longitude:39.28638}, {latitude:48.77531, longitude:39.32844},
                    {latitude:48.76278, longitude:39.3526}, {latitude:48.73012, longitude:39.3562},
                    {latitude:48.70897, longitude:39.35011}, {latitude:48.67963, longitude:39.39131},
                    {latitude:48.65622, longitude:39.43731}, {latitude:48.63969, longitude:39.46263},
                    {latitude:48.63016, longitude:39.48551}, {latitude:48.62222, longitude:39.51319},
                    {latitude:48.5935, longitude:39.53473}, {latitude:48.59557, longitude:39.54949},
                    {latitude:48.58132, longitude:39.57473}, {latitude:48.58342, longitude:39.59975},
                    {latitude:48.58708, longitude:39.62314}, {latitude:48.58615, longitude:39.68768},
                    {latitude:48.59009, longitude:39.74974}, {latitude:48.59197, longitude:39.77707}] ]
            }];

            const shapeTemplate = shapeSeries.mapPolygons.template;
            shapeTemplate.stroke = am4core.color("#e33");
            shapeTemplate.strokeWidth = 2;
            shapeTemplate.fill = shapeTemplate.stroke;
            shapeTemplate.fillOpacity = 0.2;
            shapeTemplate.nonScalingStroke = true;
            shapeTemplate.userClassName = 'invanders-polygon';

            const labelSeries = this.chart.series.push(new am4maps.MapImageSeries());
            let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
            labelTemplate.horizontalCenter = "middle";
            labelTemplate.verticalCenter = "middle";
            labelTemplate.fontSize = this.window ? '.9vh' : 5;
            labelTemplate.interactionsEnabled = false;
            labelTemplate.nonScaling = true;

            labelTemplate.fill = this.colors.label;
            labelTemplate.fontWeight = 600;
            labelTemplate.zIndex = 5;
            labelTemplate.align = 'center';
            labelTemplate.textAlign = 'center';

            polygonSeries.events.on('inited', e => {
                polygonSeries.mapPolygons.each(polygon => {
                    let key = polygon.dataItem.dataContext.id;
                    let label = labelSeries.mapImages.create();
                    label.transitionDuration = 100;
                    label.latitude = polygon.visualLatitude;
                    label.longitude = polygon.visualLongitude;
                    label.children.getIndex(0).text = locale[key];
                    switch (key) {
                        case "UA-09":
                            label.dx = 10;
                            break;
                        case "UA-12":
                            label.dy = 5;
                            label.dx = -20;
                            break;
                        case "UA-14":
                            label.dy = -25;
                            label.dx = -20;
                            break;
                        case "UA-21":
                            label.dy = 5;
                            label.dx = -15;
                            break;
                        case "UA-26":
                            label.rotation = 30;
                            label.dy = -5;
                            break;
                        case "UA-32":
                            label.dx = -10;
                            label.dy = 55;
                            break;
                        case "UA-48":
                            label.dx = 10;
                            break;
                        case "UA-51":
                            label.dy = -40;
                            label.dx = 30;
                            break;
                        case "UA-56":
                            label.dy = 10;
                            label.dx = 10;
                            break;
                        case "UA-59":
                            label.dy = 35;
                            label.dx = -20;
                            break;
                        case "UA-63":
                            label.dy = 25;
                            break;
                        case "UA-65":
                            label.dx = 25;
                            break;
                        case "UA-68":
                            label.dy = -15;
                            break;
                        case "UA-71":
                            label.dy = 15;
                            break;
                        case "UA-74":
                            label.dy = 15;
                            label.dx = -15;
                            break;
                        case "UA-77":
                            label.rotation = -30;
                            label.dx = -35;
                            label.dy = 0;
                            break;
                        default:
                            label.dx = 0;
                            label.dy = 0;
                    }
                });
            })

            disabledSeries.events.on('inited', e => {
                let disabledPolygon = disabledSeries.getPolygonById("UA-43");
                let label = labelSeries.mapImages.create();
                label.latitude = disabledPolygon.visualLatitude;
                label.transitionDuration = 100;
                label.longitude = disabledPolygon.visualLongitude;
                label.children.getIndex(0).textAlign = "middle";
                label.children.getIndex(0).maxWidth = 150;
                label.children.getIndex(0).text = `Автономная
                              Республика
                              Крым`;
                label.dx = window.innerWidth <= 1440 ? -20 : -45;
                label.dy = 5;
                label.children.getIndex(0).contentAlign = "middle";
            })




            this.chart.events.on("zoomlevelchanged", () => requestAnimationFrame(() =>
                this.chart.zoomLevel > 2 ? labelSeries.hide() : labelSeries.show()));

            this.chart.events.once("ready", () => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            });


        },
        smallMapInit() {
            this.chart.smallMap = new am4maps.SmallMap();
            this.chart.smallMap.clickable = false;
            this.chart.smallMap.zIndex = 100;
            this.chart.smallMap.id = 'smallMap';
            this.chart.smallMap.rectangle.stroke = this.colors.markerTransparent;
            this.chart.smallMap.rectangle.backgroundColor = this.colors.bg;
            this.chart.smallMap.background.fillOpacity = .2;
            this.chart.smallMap.align = "right";
            this.chart.smallMap.valign = "top";
            this.chart.smallMap.dx = -80;
            this.chart.smallMap.dy = -44;
            const smallMap = this.chart.smallMap.series.push(new am4maps.MapPolygonSeries());
            smallMap.useGeodata = true;

            smallMap.mapPolygons.template.fill = this.colors.default;
            smallMap.mapPolygons.template.strokeWidth = .1;
            smallMap.mapPolygons.template.adapter.add("fill", this.createPattern);

            this.chart.events.on("zoomlevelchanged", () => requestAnimationFrame(() =>
                this.chart.zoomLevel > 2 ? this.chart.smallMap.show() : this.chart.smallMap.hide()));
        },
        seriesDisplay(series) {
            series.mapImages.each(image => {
                image.disabled = !this.isInViewport(image)
            })
        },
        citiesInit() {
            /* eslint-disabled */
            //Create cities series
            const citySeries = this.chart.series.push(new am4maps.MapImageSeries());
            // define template
            const citySeriesTemplate = citySeries.mapImages.template;
            const city = citySeriesTemplate.createChild(am4core.Sprite);
            const targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

            city.scale = this.window ? 0.4 : 0.2;
            city.fill = this.colors.city;
            city.path = targetSVG;

            // set propertyfields
            citySeriesTemplate.hoverable = false;
            citySeriesTemplate.clickable = false;
            citySeriesTemplate.propertyFields.latitude = "latitude";
            citySeriesTemplate.propertyFields.longitude = "longitude";
            citySeriesTemplate.nonScaling = false;
            citySeriesTemplate.setStateOnChildren = true;
            citySeries.data = objectData.cities;
            citySeriesTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

            const cityLabelsSeries = this.chart.series.push(new am4maps.MapImageSeries());
            let cityLabelsTemplate = cityLabelsSeries.mapImages.template.createChild(am4core.Label);
            cityLabelsTemplate.nonScaling = false;
            cityLabelsTemplate.interactionsEnabled = false;
            cityLabelsTemplate.horizontalCenter = "middle";
            cityLabelsTemplate.verticalCenter = "middle";
            cityLabelsTemplate.fontWeight = 600;
            cityLabelsTemplate.fontSize = this.window ? 5 : 3;
            cityLabelsTemplate.fill = this.colors.markerTransparent;
            cityLabelsTemplate.transitionDuration = 0;
            cityLabelsSeries.hidden = true;

            citySeries.events.on('inited', e => {
                citySeries.mapImages.each(image => {
                    let label = cityLabelsSeries.mapImages.create();
                    label.padding(0, 0, 0, 0);
                    label.latitude = image.latitude;
                    label.longitude = image.longitude;
                    label.children.getIndex(0).text = image.dataItem.dataContext.title;
                    label.dy = this.window ? 12 : 6;
                    label.dx = 3;
                });
            })

            this.chart.events.on("zoomlevelchanged", () => requestAnimationFrame(() =>
                this.chart.zoomLevel > 2 ? cityLabelsSeries.show() : cityLabelsSeries.hide()));
        },
        createPattern(fill, target) {
            const regions = ["UA-40", "UA-43", "UA-14", "UA-09"];
            const disabled = ["UA-40", "UA-43"]
            if (target.dataItem.dataContext && regions.includes(target.dataItem.dataContext.id)) {
                const color = disabled.includes(target.dataItem.dataContext.id) ? this.colors.disabled : this.colors.default;
                let pattern = new am4core.LinePattern();
                pattern.width = 1000;
                pattern.height = 1000;
                pattern.gap = 6;
                pattern.stroke = am4core.color("#fff");
                pattern.strokeOpacity = .35;
                pattern.strokeWidth = 2;
                pattern.backgroundOpacity = 1;
                pattern.backgroundFill = color;
                pattern.rotation = -45;
                pattern.nonScalingStroke = true;
                return pattern;
            }
            return fill;
        },
        mapLinesInit() {
            const lineSeries = this.chart.series.push(new am4maps.MapLineSeries());
            lineSeries.id = 'lines';
            lineSeries.dataFields.multiGeoLine = "multiGeoLine";
            lineSeries.mapLines.template.nonScalingStroke = true;
            lineSeries.mapLines.template.strokeWidth = 2;
        },
        goTrain(bullet, train) {
            let from = bullet.position, to;
            if (from == 0) {
                to = 1;
                train.rotation = 0;
            } else {
                to = 0;
                train.rotation = 180;
            }
            let animation = bullet.animate({
                from: from,
                to: to,
                property: "position"
            }, 5000, am4core.ease.sinInOut);

            let animateTrain = train.animate({
                from: 0.0025,
                to: 0.004,
                property: "scale"
            }, 2500, am4core.ease.sinIn);

            animateTrain.events.on('animationended', () => train.animate({
                from: 0.004,
                to: 0.0025,
                property: "scale"
            }, 2500, am4core.ease.sinOut));

            animation.events.on("animationended", () => requestAnimationFrame(() => this.goTrain(bullet, train)));
        },
        clearLines() {
            const lines = this.chart.map.getKey("lines");
            requestAnimationFrame(() => {
                lines.mapLines.clear();
                this.currentLine = null;
            });
        },
        showLines() {
            if (this.filterState.mines.length === 0) {
                setTimeout(() => requestAnimationFrame(() => {
                    let el = this.currentMarker;
                    const lines = this.chart.map.getKey("lines");
                    lines.mapLines.clear();
                    if (el) {
                        const origin = el.dataItem.dataContext;
                        let destination = this.minesData.find(mine => mine.title === origin.mine_title);
                        // clear old
                        if (destination) {
                            const line = lines.mapLines.create();
                            line.fill = this.colors.city;
                            line.multiGeoLine = [[
                                {
                                    latitude: origin.latitude,
                                    longitude: origin.longitude
                                },
                                {
                                    latitude: destination.latitude,
                                    longitude: destination.longitude
                                }
                            ]]
                            line.userClassName = 'arrow-line'
                            line.strokeDasharray = "1,1";
                            line.arc = -0.8;
                            line.setClassName();

                            let bullet = line.lineObjects.create();
                            bullet.nonScaling = true;
                            bullet.position = 0;

                            let train = bullet.createChild(am4core.Sprite);
                            train.scale = 0.0025;
                            train.horizontalCenter = "middle";
                            train.verticalCenter = "middle";
                            train.path = "M1950 3620 c-469 -8 -526 -13 -928 -69 -137 -20 -192 -83 -222 -258 -39 -225 -43 -310 -47 -943 -5 -741 3 -871 68 -1046 39 -105 150 -189 304 -229 76 -19 264 -37 369 -34 44 1 1494 -2 3221 -6 3117 -8 4468 0 4830 26 336 24 706 80 845 127 240 83 450 187 533 266 15 14 31 26 36 26 14 0 69 66 91 109 12 24 34 87 48 140 26 96 26 97 30 551 3 433 2 459 -18 546 -25 109 -65 198 -116 253 -50 56 -192 139 -371 218 -276 121 -413 165 -675 217 -250 50 -359 62 -878 98 -189 13 -6412 20 -7120 8z m7970 -316 c140 -20 257 -38 258 -40 8 -6 54 -176 73 -269 23 -112 49 -494 50 -725 0 -194 -32 -472 -72 -622 l-32 -116 -271 -4 c-149 -2 -277 -2 -284 1 -8 2 -10 10 -7 20 18 44 67 249 84 352 27 154 45 484 38 689 -6 188 -30 359 -82 573 -38 160 -42 188 -22 182 6 -2 127 -20 267 -41z m1007 -279 c31 -22 63 -77 79 -138 29 -107 46 -594 29 -847 -9 -135 -48 -360 -72 -408 -21 -43 -95 -102 -127 -102 l-22 0 27 134 c43 215 52 333 53 716 1 332 0 362 -21 460 -25 117 -28 152 -13 181 13 23 38 24 67 4z";
                            train.fill = this.colors.active;
                            train.zIndex = 100;
                            this.currentLine = line;
                            setTimeout(() => this.goTrain(bullet, train), 400);


                            requestAnimationFrame(() => this.toggleActiveMarker('mine-' + destination.id));
                        }
                    }
                }), this.chart.zoomLevel > 1 ? 0 : this.chart.zoomDuration + 100);
            }
        },
        clearActive() {
            requestAnimationFrame(() => {
                this.clearActiveMarker();
                this.clearLines();
                this.selectedItem = null;
            });
        },
    },
    computed: {
        getMarkerLine() {
            if (this.currentMarker) {
                return {}
            }
            const mine = this.minesData.find(mine => mine.title === this.currentMarker.dataItem.dataContext.mine_title);
            if (mine) {
                return {
                    multiGeoLine: [
                        [
                            {
                                latitude: el.latitude,
                                longitude: el.longitude
                            },
                            {
                                latitude: mine.latitude,
                                longitude: mine.longitude
                            }
                        ]
                    ]
                }
            } else {
                return {}
            }
        }
    }
}
export default mapContentMixin;