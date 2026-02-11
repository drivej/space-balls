/**
 * @class CanvasSprite
 */
export class CanvasSprite {
  /** @type {any} */
  config;
  /** @type {HTMLCanvasElement} */
  cvs;
  /** @type {CanvasRenderingContext2D} */
  ctx;
  /** @type {Function} */
  clear;
  /** @type {Function} */
  draw;
  /** @type {Function} */
  fill;
  /** @type {Function} */
  fillStyle;
  /** @type {Function} */
  getCenter;
  /** @type {Function} */
  width;
  /** @type {Function} */
  height;
  /** @type {Function} */
  size;
  /** @type {Function} */
  circle;
  /** @type {Function} */
  render;
  /** @type {Function} */
  buffer;
  /** @type {Function} */
  snapshot;
  /** @type {Function} */
  getSnapshot;
  /** @type {Function} */
  alpha;

  /**
   * @param {any} _config
   */
  constructor(_config) {
    var self = this;

    var config = Object.assign(
      {
        background: 'rgba(0,0,0,0)',
        width: 100,
        height: 100,
        globalAlpha: 1
      },
      _config || {}
    );

    var center = { x: 0, y: 0 };
    var cvs = document.createElement('canvas');
    var ctx = cvs.getContext('2d');

    var buffer_cvs = document.createElement('canvas');
    var buffer_ctx = buffer_cvs.getContext('2d');

    function snapshot() {
      buffer_cvs.width = cvs.width;
      buffer_cvs.height = cvs.height;
      //buffer_ctx.clearRect(0,0,buffer_cvs.width,buffer_cvs.height)
      buffer_ctx.drawImage(cvs, 0, 0);
      return self;
    }

    function getSnapshot() {
      return buffer_cvs;
    }

    function buffer() {
      buffer_ctx.clearRect(0, 0, buffer_cvs.width, buffer_cvs.height);
      buffer_ctx.drawImage(cvs, 0, 0);
      return buffer_cvs;
    }

    function clear() {
      ctx.save();
      ctx.fillStyle = config.background;
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.restore();
      return self;
    }

    function render() {
      if (config.render) {
        config.render.call(self, self.ctx, self.cvs, { target: self });
      }
    }

    function draw(src, x, y) {
      if (x === null) arguments[1] = 0;
      if (y === null) arguments[2] = 0;
      ctx.drawImage.apply(ctx, arguments);
      return self;
    }

    function circle(x, y, r) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }

    function clear(x, y, w, h) {
      ctx.clearRect(x || 0, y || 0, w || cvs.width, h || cvs.height);
      return self;
    }

    function size(w, h) {
      var fs = ctx.fillStyle;
      var ss = ctx.strokeStyle;
      cvs.width = w;
      cvs.height = h;
      ctx.fillStyle = fs;
      ctx.strokeStyle = ss;
      updateCenter();
      return self;
    }

    function width(n) {
      if (n) {
        cvs.width = n;
        updateCenter();
      }
      return cvs.width;
    }

    function height(n) {
      if (n) {
        cvs.height = n;
        updateCenter();
      }
      return cvs.height;
    }

    function alpha(n) {
      if (n) {
        cvs.globalAlpha = Math.max(0, Math.min(1, n));
      }
      return self;
    }

    function updateCenter() {
      center = {
        x: cvs.width * 0.5,
        y: cvs.height * 0.5
      };
      buffer_cvs.width = cvs.width;
      buffer_cvs.height = cvs.height;
    }

    function getCenter() {
      return center;
    }

    function fill(x, y, w, h) {
      ctx.fillRect(x || 0, y || 0, w || cvs.width, h || cvs.height);
      return self;
    }

    function fillStyle(val) {
      ctx.fillStyle = val;
      return self;
    }

    function strokeStyle(val) {
      ctx.strokeStyle = val;
      return self;
    }

    if (config) {
      if (config.width) {
        width(config.width);
      }
      if (config.height) {
        height(config.height);
      }
      if (config.alpha) {
        alpha(config.alpha);
      }
      if (config.fillStyle) {
        fillStyle(config.fillStyle);
      }
      if (config.strokeStyle) {
        strokeStyle(config.strokeStyle);
      }
    }

    self.config = config;
    self.cvs = cvs;
    self.ctx = ctx;
    self.clear = clear;
    self.draw = draw;
    self.fill = fill;
    self.fillStyle = fillStyle;
    self.getCenter = getCenter;
    self.width = width;
    self.height = height;
    self.size = size;
    self.circle = circle;
    self.render = render;
    self.buffer = buffer;
    self.snapshot = snapshot;
    self.getSnapshot = getSnapshot;
    self.alpha = alpha;

    render();
  }
}
