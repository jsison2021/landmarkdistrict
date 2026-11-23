export type HalftoneOptions = {
  cell?: number;
  maxRadius?: number;
  inkColor?: [number, number, number];
  contrast?: number;
  brightness?: number;
  /** Size dots by lightness instead of darkness, for light dots on a dark ground. */
  invert?: boolean;
};

function ctx2d(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  return ctx;
}

export function renderHalftone(img: HTMLImageElement, canvas: HTMLCanvasElement, opts: HalftoneOptions = {}) {
  const {
    cell = 4,
    maxRadius = 2.2,
    inkColor = [26, 22, 18],
    contrast = 1.15,
    brightness = 0.05,
    invert = false,
  } = opts;

  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));

  const off = document.createElement('canvas');
  off.width = canvas.width;
  off.height = canvas.height;
  const octx = ctx2d(off);

  const ir = img.naturalWidth / img.naturalHeight;
  const cr = canvas.width / canvas.height;
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
  if (ir > cr) { sw = img.naturalHeight * cr; sx = (img.naturalWidth - sw) / 2; }
  else { sh = img.naturalWidth / cr; sy = (img.naturalHeight - sh) / 2; }
  octx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  const src = octx.getImageData(0, 0, canvas.width, canvas.height).data;

  const ctx = ctx2d(canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgb(${inkColor[0]},${inkColor[1]},${inkColor[2]})`;

  const step = Math.max(2, Math.floor(cell * dpr));
  const maxR = maxRadius * dpr;

  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      let sum = 0, count = 0;
      for (let yy = 0; yy < step; yy += 2) {
        for (let xx = 0; xx < step; xx += 2) {
          const i = ((y + yy) * canvas.width + (x + xx)) * 4;
          if (i >= src.length) continue;
          sum += 0.299 * src[i] + 0.587 * src[i + 1] + 0.114 * src[i + 2];
          count++;
        }
      }
      if (!count) continue;
      let l = sum / count / 255;
      l = (l - 0.5) * contrast + 0.5 + brightness;
      l = Math.max(0, Math.min(1, l));
      const r = (invert ? l : 1 - l) * maxR;
      if (r < 0.3) continue;
      ctx.beginPath();
      ctx.arc(x + step / 2, y + step / 2, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
