const mapActionsMixin = {
    extends: parent,
    data() {
        return {
            currentActive: null,
            currentMarker: null,
            openedObject: {},
        }
    },
    methods: {
        resetOthersRegion() {
            const polygons = this.chart.map.getKey("polygon");
            const disabled = this.chart.map.getKey("disabled");
            polygons.mapPolygons.each(polygon => {
                polygon.isHover = false;
                polygon.isActive = false;
            });
            disabled.mapPolygons.each(polygon => {
                polygon.isHover = false;
                polygon.isActive = false;
            });
        },
        handleRegionHit(event) {
            let region = event.target || event;
            // if we have some country selected, set default state to it
            this.currentActive && this.currentActive.setState("default");
            this.resetOthersRegion()
            const currentName = region.dataItem.dataContext.name;
            const chart = region.dataItem.component.chart;
            if (
                this.currentActive &&
                currentName === this.currentActive.dataItem.dataContext.name
            ) {
                this.goHome();
                this.currentActive.setState("default");
                this.currentActive = null;
            } else {
                chart.zoomToMapObject(region);
                region.isActive = true;
                this.currentActive = region;
            }
        },
        rollOverObject(mapPolygon) {
            this.currentActive && this.currentActive.setState("default");
            if (this.currentActive && mapPolygon.isActive) {
                this.goHome();
                mapPolygon.isActive = false;
                mapPolygon.setState("default");
            } else {
                let mineData = mapPolygon.dataItem.dataContext.mine_distance;
                if (mineData) {
                    requestAnimationFrame(() => this.chart.zoomToMapObject(mapPolygon, 2.75));
                } else {
                    requestAnimationFrame(() => this.chart.zoomToMapObject(mapPolygon));
                }

                // handleToggleRegion(true, currentName);
                mapPolygon.setState("active");
                this.currentActive = mapPolygon;
            }
        },
        chooseRegion(id) {
            if (this.currentActive) {
                this.currentActive.setState("default");
                this.currentActive.isActive = false;
                this.currentActive.isHover = false;
                this.currentActive = null;
            }
            this.resetOthersRegion();
            requestAnimationFrame(() => {
                const polygons = this.chart.map.getKey("polygon");
                let region = polygons.getPolygonById(id);
                region.isActive = true;
                this.currentActive = region;
            });
        },
        toggleActiveMarker(id) {
            const current = document.getElementById(id);
            if (current) {
                if (current.classList.contains('map-marker--active')) {
                    current.classList.remove('map-marker--active');
                } else {
                    current.classList.add('map-marker--active');
                }
            }
        },
        clearActiveMarker() {
            const active = [...document.querySelectorAll('.map-marker--active')];
            active.forEach(el => {
                if (el) {
                    el.classList.remove('map-marker--active');
                }
            })
        },
        markerHit(event) {
            const lines = this.chart.map.getKey("lines");
            requestAnimationFrame(this.clearActiveMarker);
            requestAnimationFrame(() => lines.mapLines.clear());
            const markers = this.chart.map.getKey("markers");
            let image = markers.getImageById(event.target.id);
            const object = this.searchedObjects.find(el => Number(el.id) === Number(event.target.id));


            if (this.selectedItem === Number(event.target.id)) {
                requestAnimationFrame(() => {
                    this.dialog = !this.dialog
                });

                if (!this.dialog) {
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            this.goHome();
                            this.currentMarker = null;
                            this.toggleActiveMarker(event.target.id);
                            if (this.currentActive) {
                                this.currentActive.setState("default");
                                this.currentActive.isActive = false;
                                this.currentActive.isHover = false;
                                this.currentActive = null;
                            }
                        });
                    }, 300);
                } else {
                    this.currentMarker = image;
                    this.selectedItem = this.searchedObjects.indexOf(object);
                    requestAnimationFrame(() => this.rollOverObject(image));
                    requestAnimationFrame(() => this.toggleActiveMarker(event.target.id));
                    requestAnimationFrame(() => this.chooseRegion(image.dataItem.dataContext.region));
                }
            } else {
                this.currentMarker = image;
                requestAnimationFrame(() => this.rollOverObject(image));
                this.selectedItem = this.searchedObjects.indexOf(object);

                requestAnimationFrame(() => this.chooseRegion(image.dataItem.dataContext.region));
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        this.dialog = true;
                        this.openedObject = image.dataItem.dataContext;
                    })
                }, !this.dialog ? this.chart.zoomDuration + 100 : 0);

                requestAnimationFrame(() => this.toggleActiveMarker(event.target.id));
            }
        },
        listToCurrent(args) {
            let { selected, index, active } = args;

            this.dialog = false;
            this.currentMarker = null;
            this.currentActive && this.currentActive.setState("default");
            requestAnimationFrame(this.clearActiveMarker);

            if (selected != null && !active) {
                const markers = this.chart.map.getKey("markers");
                let image = markers.getImageById(selected);
                this.currentMarker = image;
                requestAnimationFrame(() => this.rollOverObject(image));
                requestAnimationFrame(() => this.chooseRegion(image.dataItem.dataContext.region));
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        this.dialog = true;
                        requestAnimationFrame(() => this.toggleActiveMarker(selected));
                        this.openedObject = image.dataItem.dataContext;
                    });
                }, this.chart.zoomLevel > 1 ? 0 : this.chart.zoomDuration + 100);
            } else {
                this.currentMarker = null;
                setTimeout(() => {
                    this.currentActive && this.currentActive.setState("default");
                    requestAnimationFrame(() => this.goHome());
                }, this.chart.zoomDuration + 100)
            }

        },
        toggleMarkers(active, type) {
            if (!active) {
                this.typesLoad.splice(this.typesLoad.indexOf(Number(type)), 1)
            } else {
                this.typesLoad.push(Number(type));
            }
            this.updateCustomMarkers(true);
        },
        goHome() {
            this.currentMarker = null;
            this.resetOthersRegion();
            this.chart.goHome();
        },
        zoomIn() {
            const level = Math.floor(this.chart.zoomLevel);
            if (level < this.chart.maxZoomLevel) {
                if (this.currentActive) {
                    this.chart.zoomToMapObject(this.currentActive, level + 1, true);
                } else {
                    this.chart.zoomIn(this.chart.zoomGeoPoint);
                }

            }
        },
        zoomOut() {
            const level = Math.floor(this.chart.zoomLevel);
            if (level <= 2) {
                this.goHome();
            } else {
                if (this.currentActive) {
                    this.chart.zoomToMapObject(this.currentActive, level - 1, true);
                } else {
                    this.chart.zoomOut(this.chart.zoomGeoPoint)
                }
            }
            this.zoom = this.chart.zoomLevel
        },
    },
}
export default mapActionsMixin;