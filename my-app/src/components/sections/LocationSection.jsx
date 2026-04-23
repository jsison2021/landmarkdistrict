import React, { useEffect, useRef } from 'react';

const LAT = 38.2350;
const LNG = -85.7603667;

const EDITORIAL_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#efe9dc' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#7a6a56' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#f3ece0' }] },
  { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#c8bca4' }] },
  { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#eee4cf' }] },
  { featureType: 'landscape.man_made', elementType: 'geometry', stylers: [{ color: '#ece2cd' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#c9c9a6' }, { visibility: 'on' }] },
  { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#f6efe0' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#d4c6a9' }] },
  { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#e8d9b5' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#b89f72' }] },
  { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#b9c4bd' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#6a7a72' }] },
];

export default function LocationSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    let pollInterval;
    let cancelled = false;

    const init = () => {
      if (cancelled) return;
      if (!window.google || !window.google.maps) return;

      const map = new window.google.maps.Map(el, {
        center: { lat: LAT, lng: LNG },
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
        styles: EDITORIAL_STYLE,
        backgroundColor: '#efe9dc',
        clickableIcons: false,
      });

      class EditorialPin extends window.google.maps.OverlayView {
        onAdd() {
          const wrap = document.createElement('div');
          wrap.className = 'ld-pin-wrap';
          wrap.innerHTML = '<div class="ld-pin"></div><div class="ld-pin-label">Landmark District</div>';
          this.wrap = wrap;
          this.getPanes().floatPane.appendChild(wrap);
        }
        draw() {
          const proj = this.getProjection();
          if (!proj || !this.wrap) return;
          const pt = proj.fromLatLngToDivPixel(new window.google.maps.LatLng(LAT, LNG));
          this.wrap.style.left = pt.x + 'px';
          this.wrap.style.top = pt.y + 'px';
        }
        onRemove() { this.wrap && this.wrap.remove(); }
      }
      const pin = new EditorialPin();
      pin.setMap(map);
    };

    if (window.google && window.google.maps) {
      init();
    } else {
      pollInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(pollInterval);
          init();
        }
      }, 80);
      setTimeout(() => clearInterval(pollInterval), 10000);
    }

    return () => {
      cancelled = true;
      if (pollInterval) clearInterval(pollInterval);
    };
  }, []);

  return (
    <section id="location" className="location" data-palette="blush">
      <div className="location-inner">
        <div className="location-map-wrap">
          <div ref={mapRef} id="leaflet-map" className="leaflet-map" data-reveal="fade" />
        </div>
        <div className="location-meta">
          <div className="section-eyebrow">Corner of 4th &amp; Oak</div>
          <h2 className="section-title" data-reveal="words" data-reveal-mode="mask">
            Old Louisville, centered.
          </h2>
          <p className="residences-copy" data-reveal style={{ '--d': '0.2s' }}>
            The midpoint between downtown Louisville and the University of Louisville, in one of America's largest Victorian preservation districts.
          </p>
          <dl className="addr-block" data-reveal style={{ '--d': '0.3s' }}>
            <dt>Address</dt><dd>1167 S 4th St, Louisville, KY 40203</dd>
            <dt>Neighborhood</dt><dd>Old Louisville</dd>
            <dt>Hours</dt><dd>By tenant · see marketplace</dd>
            <dt>Transit</dt><dd>TARC 4 · 0.3 mi to Central Park</dd>
          </dl>
          <a
            className="directions-link"
            href="https://www.google.com/maps?q=38.235,-85.7603667"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
