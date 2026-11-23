'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const LAT = 38.2350;
const LNG = -85.7603667;
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

const MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#dedad1' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#5e5f59' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#ece8e1' }] },
  { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#c9c4ba' }] },
  { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#dedad1' }] },
  { featureType: 'landscape.man_made', elementType: 'geometry', stylers: [{ color: '#d6d1c7' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#cfcbbf' }, { visibility: 'on' }] },
  { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#fbfaf7' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#c9c4ba' }] },
  { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#b6955a' }] },
  { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#bfc2bd' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#5e5f59' }] },
];

let mapsScriptPromise: Promise<void> | null = null;
function loadGoogleMaps(): Promise<void> {
  if (!MAPS_KEY) return Promise.reject(new Error('NEXT_PUBLIC_GOOGLE_MAPS_KEY is not set'));
  if (window.google?.maps) return Promise.resolve();
  if (mapsScriptPromise) return mapsScriptPromise;
  mapsScriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&loading=async&callback=__ldMapsReady`;
    s.async = true;
    s.defer = true;
    window.__ldMapsReady = () => resolve();
    s.onerror = () => { mapsScriptPromise = null; reject(new Error('maps load failed')); };
    document.head.appendChild(s);
  });
  return mapsScriptPromise;
}

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      });
    }, { rootMargin: '400px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return undefined;
    let cancelled = false;

    const init = () => {
      const el = mapRef.current;
      const maps = window.google?.maps;
      if (!el || cancelled || !maps) return;

      const map = new maps.Map(el, {
        center: { lat: LAT, lng: LNG },
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
        styles: MAP_STYLE,
        backgroundColor: '#e4e0d8',
        clickableIcons: false,
      });

      class EditorialPin extends maps.OverlayView {
        wrap?: HTMLDivElement;
        onAdd() {
          const wrap = document.createElement('div');
          wrap.className = 'ld-pin-wrap';
          wrap.innerHTML = '<div class="ld-pin"></div><div class="ld-pin-label">Landmark District</div>';
          this.wrap = wrap;
          this.getPanes()?.floatPane.appendChild(wrap);
        }
        draw() {
          const proj = this.getProjection();
          if (!proj || !this.wrap) return;
          const pt = proj.fromLatLngToDivPixel(new maps.LatLng(LAT, LNG));
          if (!pt) return;
          this.wrap.style.left = pt.x + 'px';
          this.wrap.style.top = pt.y + 'px';
        }
        onRemove() { this.wrap?.remove(); }
      }
      const pin = new EditorialPin();
      pin.setMap(map);
    };

    loadGoogleMaps().then(init).catch((err) => {
      console.warn('Map unavailable', err);
    });

    return () => { cancelled = true; };
  }, [shouldLoad]);

  return (
    <section id="location" ref={sectionRef} className="location" data-theme="light">
      <div className="location-inner">
        <div className="location-meta">
          <div className="section-eyebrow"><span className="section-num">03</span>Corner of 4th &amp; Oak</div>
          <h2 className="section-title" data-reveal="words">
            Old Louisville, centered.
          </h2>
          <p className="section-lede" data-reveal style={{ '--d': '0.15s' }}>
            The midpoint between downtown Louisville and the University of Louisville, in one of America&apos;s largest Victorian preservation districts.
          </p>
          <dl className="addr-block" data-reveal style={{ '--d': '0.25s' }}>
            <div><dt>Address</dt><dd>1167 S 4th St, Louisville, KY 40203</dd></div>
            <div><dt>Neighborhood</dt><dd>Old Louisville</dd></div>
            <div><dt>Hours</dt><dd>By tenant · see marketplace</dd></div>
            <div><dt>Transit</dt><dd>TARC 4 · 0.3 mi to Central Park</dd></div>
          </dl>
          <a
            className="btn btn-primary directions-link"
            href="https://www.google.com/maps?q=38.235,-85.7603667"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.75} />
          </a>
        </div>
        <div className="location-map-wrap" data-reveal="fade">
          <div ref={mapRef} className="location-map" role="region" aria-label="Map of Landmark District at 1167 S 4th St" />
          <div className="location-map-coords" aria-hidden="true">38.2350° N · 85.7604° W</div>
        </div>
      </div>
    </section>
  );
}
