import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { X, MapPin, Check, Search } from 'lucide-react';

const GMAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: -26.2041, lng: 28.0473 };

export interface PickedLocation {
  label: string;
  coords: [number, number]; // [lat, lng]
}

export interface GoogleMapPickerProps {
  title: string;
  initial?: PickedLocation;
  onConfirm: (loc: PickedLocation) => void;
  onClose: () => void;
}

// ── Inner component: has access to Map instance and loaded libraries ──
const PickerInner: React.FC<GoogleMapPickerProps> = ({ initial, onConfirm, onClose, title }) => {
  const map = useMap();
  const geocodingLib = useMapsLibrary('geocoding');
  const placesLib = useMapsLibrary('places');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [pinPos, setPinPos] = useState<google.maps.LatLngLiteral>(
    initial ? { lat: initial.coords[0], lng: initial.coords[1] } : DEFAULT_CENTER,
  );
  const [label, setLabel] = useState(initial?.label ?? '');
  const [reversing, setReversing] = useState(false);

  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  // Create geocoder once geocoding lib is ready
  useEffect(() => {
    if (geocodingLib) geocoderRef.current = new geocodingLib.Geocoder();
  }, [geocodingLib]);

  const reverseGeocode = useCallback((pos: google.maps.LatLngLiteral) => {
    if (!geocoderRef.current) {
      setLabel(`${pos.lat.toFixed(5)}, ${pos.lng.toFixed(5)}`);
      return;
    }
    setReversing(true);
    geocoderRef.current.geocode({ location: pos }, (results, status) => {
      if (status === 'OK' && results?.[0]) {
        setLabel(results[0].formatted_address);
      } else {
        setLabel(`${pos.lat.toFixed(5)}, ${pos.lng.toFixed(5)}`);
      }
      setReversing(false);
    });
  }, []);

  const movePin = useCallback(
    (pos: google.maps.LatLngLiteral) => {
      setPinPos(pos);
      reverseGeocode(pos);
    },
    [reverseGeocode],
  );

  // Wire up Places Autocomplete to the search input
  useEffect(() => {
    if (!placesLib || !searchInputRef.current) return;
    const ac = new placesLib.Autocomplete(searchInputRef.current, {
      fields: ['geometry', 'formatted_address'],
    });
    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (place.geometry?.location) {
        const pos: google.maps.LatLngLiteral = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setPinPos(pos);
        setLabel(place.formatted_address ?? '');
        map?.panTo(pos);
        map?.setZoom(16);
      }
    });
  }, [placesLib, map]);

  // Geolocate on open (skip if an initial location was supplied)
  useEffect(() => {
    if (!map) return;
    if (initial?.coords) return;

    const tryGeocode = (pos: google.maps.LatLngLiteral) => {
      if (geocoderRef.current) {
        reverseGeocode(pos);
      } else {
        setTimeout(() => tryGeocode(pos), 200);
      }
    };

    navigator.geolocation?.getCurrentPosition(
      ({ coords: gc }) => {
        const pos: google.maps.LatLngLiteral = { lat: gc.latitude, lng: gc.longitude };
        setPinPos(pos);
        map.panTo(pos);
        tryGeocode(pos);
      },
      () => tryGeocode(DEFAULT_CENTER),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
      {/* Ensure Google's autocomplete dropdown renders above the modal */}
      <style>{'.pac-container { z-index: 10001 !important; }'}</style>

      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b shrink-0">
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-700 transition">
          <X className="w-5 h-5" />
        </button>
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Search bar */}
      <div className="px-4 py-2 bg-white shrink-0 relative" style={{ zIndex: 10000 }}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search address or place…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative" style={{ minHeight: 0 }}>
        <Map
          defaultCenter={pinPos}
          defaultZoom={14}
          mapId="DEMO_MAP_ID"
          gestureHandling="greedy"
          style={{ width: '100%', height: '100%' }}
          onClick={(e) => {
            if (e.detail.latLng) movePin(e.detail.latLng);
          }}
        >
          <AdvancedMarker
            position={pinPos}
            draggable
            onDragEnd={(e) => {
              if (e.latLng) movePin({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }}
          />
        </Map>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full pointer-events-none select-none whitespace-nowrap">
          Tap map or drag pin to set location
        </div>
      </div>

      {/* Address preview + confirm */}
      <div className="px-4 pt-3 pb-4 border-t bg-white shrink-0">
        <div className="flex items-start gap-2 mb-3 min-h-[2.5rem]">
          <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-700 line-clamp-2">
            {reversing ? (
              <span className="text-gray-400 italic">Resolving address…</span>
            ) : (
              label || <span className="text-gray-400 italic">No address selected</span>
            )}
          </p>
        </div>
        <button
          type="button"
          disabled={!label || reversing}
          onClick={() => onConfirm({ label, coords: [pinPos.lat, pinPos.lng] })}
          className="w-full bg-emerald-600 text-white py-3 rounded-2xl font-semibold disabled:opacity-50 hover:bg-emerald-700 active:scale-95 transition flex items-center justify-center gap-2"
        >
          <Check className="w-4 h-4" /> Set Location
        </button>
      </div>
    </div>
  );
};

// ── Root component: wraps with APIProvider ──
const GoogleMapPicker: React.FC<GoogleMapPickerProps> = (props) => (
  <APIProvider apiKey={GMAPS_KEY}>
    <PickerInner {...props} />
  </APIProvider>
);

export default GoogleMapPicker;
