/// <reference types="google.maps" />

declare global {
  interface Window {
    google?: typeof google;
    __ldMapsReady?: () => void;
  }
}

export {};
