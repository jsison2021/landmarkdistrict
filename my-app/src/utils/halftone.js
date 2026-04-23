export function renderHalftone(img, canvas, opts = {}) {
  const {
    cell = 4,
    maxRadius = 2.2,
    inkColor = [26, 22, 18],
    contrast = 1.15,
    brightness = 0.05,
  } = opts;

  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));

  const off = document.createElement('canvas');
  off.width = canvas.width;
  off.height = canvas.height;
  const octx = off.getContext('2d');

  const ir = img.naturalWidth / img.naturalHeight;
  const cr = canvas.width / canvas.height;
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
  if (ir > cr) { sw = img.naturalHeight * cr; sx = (img.naturalWidth - sw) / 2; }
  else { sh = img.naturalWidth / cr; sy = (img.naturalHeight - sh) / 2; }
  octx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  const src = octx.getImageData(0, 0, canvas.width, canvas.height).data;

  const ctx = canvas.getContext('2d');
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
          const r = src[i], g = src[i + 1], b = src[i + 2];
          sum += 0.299 * r + 0.587 * g + 0.114 * b;
          count++;
        }
      }
      if (!count) continue;
      let l = sum / count / 255;
      l = (l - 0.5) * contrast + 0.5 + brightness;
      l = Math.max(0, Math.min(1, l));
      const darkness = 1 - l;
      const r = darkness * maxR;
      if (r < 0.3) continue;
      ctx.beginPath();
      ctx.arc(x + step / 2, y + step / 2, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export function makeHalftoneReveal(img, canvas, opts = {}) {
  const {
    cell = 5,
    inkColor = [26, 22, 18],
    contrast = 1.1,
    brightness = 0.02,
  } = opts;

  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));

  const off = document.createElement('canvas');
  off.width = canvas.width; off.height = canvas.height;
  const octx = off.getContext('2d');
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = canvas.width / canvas.height;
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
  if (ir > cr) { sw = img.naturalHeight * cr; sx = (img.naturalWidth - sw) / 2; }
  else { sh = img.naturalWidth / cr; sy = (img.naturalHeight - sh) / 2; }
  octx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  const src = octx.getImageData(0, 0, canvas.width, canvas.height).data;

  const ctx = canvas.getContext('2d');
  const step = Math.max(2, Math.floor(cell * dpr));

  const dots = [];
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      let sum = 0, count = 0;
      for (let yy = 0; yy < step; yy += 2) {
        for (let xx = 0; xx < step; xx += 2) {
          const i = ((y + yy) * canvas.width + (x + xx)) * 4;
          if (i >= src.length) continue;
          const r = src[i], g = src[i + 1], b = src[i + 2];
          sum += 0.299 * r + 0.587 * g + 0.114 * b;
          count++;
        }
      }
      if (!count) continue;
      let l = sum / count / 255;
      l = (l - 0.5) * contrast + 0.5 + brightness;
      l = Math.max(0, Math.min(1, l));
      const diag = (x / canvas.width + y / canvas.height) / 2;
      const jitter = Math.random() * 0.35;
      dots.push({
        x: x + step / 2, y: y + step / 2,
        darkness: 1 - l,
        thresh: diag * 0.55 + jitter * 0.45,
      });
    }
  }

  const maxR = (cell * 0.52) * dpr;
  const fadeWindow = 0.35;

  ctx.fillStyle = `rgb(${inkColor[0]},${inkColor[1]},${inkColor[2]})`;

  return function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const washAlpha = Math.max(0, 0.85 - t * 1.05);
    if (washAlpha > 0.01) {
      ctx.globalAlpha = washAlpha;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
    }
    for (let k = 0; k < dots.length; k++) {
      const d = dots[k];
      let p = (t - d.thresh) / fadeWindow;
      if (p <= 0) continue;
      if (p > 1) p = 1;
      const e = 1 - Math.pow(1 - p, 5);
      const r = e * d.darkness * maxR;
      if (r < 0.25) continue;
      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}
