// HeaderAnimGame.js
import { RGBA } from './RGBA.js';
// import gsap from 'gsap';
import { TweenMax } from 'gsap';
import { CanvasSprite } from './CanvasSprite.js';

export default class HeaderAnimGame {
  /**
   * @param {Object} opts
   * @param {HTMLCanvasElement|string|null} opts.canvas - canvas element or selector (optional; the original code appends CanvasSprite canvases)
   * @param {boolean} opts.createScore - whether to create the SCORE div
   */
  constructor({ canvas = 'canvas#header-anim', createScore = true } = {}) {
    console.log('build game');
    const thisGame = this;
    // --- helpers (were free functions) ---
    this.RAD = Math.PI / 180;

    this.rand = (n1, n2 = 0, rnd) => {
      if (typeof n2 !== 'number') {
        if (typeof n2 === 'boolean') rnd = true;
        if (Number.isNaN(n2)) n2 = 0;
      }
      const n = n1 + Math.random() * (n2 - n1);
      return rnd === true ? Math.round(n) : n;
    };

    this.interpolate = (n1, n2, p) => n1 + (n2 - n1) * p;

    // --- state (was module-level vars) ---
    this.layers = [];
    this.lines = [];
    this.dots = [];
    this.explosions = [];

    this.animating = false;

    this.viewport = {
      width: 100,
      height: 100,
      scaleDelta: 1.02,
      mouseFactor: 0.02,
      acceleration: 0,
      centerX: 50,
      centerY: 50
    };

    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseIsDown = false;

    this.centerOffsetX = 0;
    this.centerOffsetY = 0;

    this.pilot = { offsetX: 0, offsetY: 0, x: 0, y: 0 };

    this.score = { level: 0, kills: 0, points: 0 };
    this.scoreEl = null;
    this.createScore = createScore;

    // optional canvas handle if you want to pass one in
    this.canvas = typeof canvas === 'string' ? document.querySelector(canvas) : canvas instanceof HTMLCanvasElement ? canvas : null;

    // compute from acceleration (same as original)
    this.viewport.mouseFactor = this.interpolate(0.02, 0.05, this.viewport.acceleration);
    this.viewport.scaleDelta = this.interpolate(1.0, 1.1, this.viewport.acceleration);

    // flavors (same)
    this.flavors = {
      purple_blue: {
        lines: [
          { r: 0.9802014472166198, g: 157.36234423883127, b: 255, a: 0.5 },
          { r: 148.21405502788946, g: 129.47137911956344, b: 255, a: 0.5 },
          { r: 64.50694067184185, g: 74.83181585614483, b: 255, a: 0.5 },
          { r: 35.64625568637682, g: 155.87893689351827, b: 255, a: 0.5 }
        ],
        comets: { r: 50, g: 190, b: 165 }
      },
      red: {
        lines: [
          { r: 255, g: 0, b: 0 },
          { r: 255, g: 0, b: 0 },
          { r: 255, g: 0, b: 0 },
          { r: 255, g: 0, b: 0 }
        ],
        comets: { r: 255, g: 200, b: 200 }
      }
    };

    // Bind handlers once so add/removeEventListener works
    // this._handleResize = this.handleResize.bind(this);
    this._handleMouse = this.handleMouse.bind(this);
    // this._handleKeys = this.handleKeys.bind(this);
    // this._handleKeysBody = this.handleKeysBody.bind(this);

    // --- external deps (unchanged): RGBA, CanvasSprite, TweenMax ---
    this.lineColor = new RGBA({
      color: { r: 255, g: 255, b: 255, a: 0.5 },
      change: function () {
        // NOTE: original referenced ctx; we keep it no-op safe
        // You could wire this to a specific ctx if needed.
      }
    });

    this.dotColor = new RGBA({
      color: { r: 255, g: 255, b: 200, a: 0.5 },
      change: () => {
        this.dotSprite?.render();
      }
    });

    this.dotSprite = new CanvasSprite({
      width: 100,
      height: 100,
      render: function () {
        this.clear();
        const center = this.getCenter();
        const rgba = thisGame.dotColor.toArray().slice(0, -1);
        const grd = this.ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, this.width() * 0.48);

        grd.addColorStop(0, `rgba(255,255,255,1)`);
        grd.addColorStop(0.6, `rgba(255,255,255,1)`);

        const c2 = new RGBA({ color: thisGame.dotColor.getValue() });
        c2.interpolate({ r: 255, g: 255, b: 255 }, 0.5);

        grd.addColorStop(0.7, `rgba(${c2.toArray().slice(0, -1).join()},1)`);
        grd.addColorStop(0.75, `rgba(${rgba.join()},.5)`);
        grd.addColorStop(1, `rgba(${rgba.join()},0)`);

        this.fillStyle(grd).circle(center.x, center.y, this.height() * 0.5);
      }
    });

    // little trick: allow CanvasSprite render() to access this class instance

    this.dotSprite.__game = this;

    this.targetColor = new RGBA({
      color: { r: 0, g: 0, b: 200, a: 0.5 },
      change: function () {
        thisGame.targetSprite.clear().fillStyle(this.toRGBA()).fill();
      }
    });

    this.targetSprite = new CanvasSprite({
      width: 80,
      height: 80,
      render: function () {
        const center = this.getCenter();
        const grd = this.ctx.createRadialGradient(center.x, center.y, this.width() * 0.4, this.width() * 0.5, this.height() * 0.5, this.width() * 0.48);
        grd.addColorStop(0, 'rgba(255,255,255,0)');
        grd.addColorStop(0.5, 'rgba(255,255,255,1)');
        grd.addColorStop(1, 'rgba(255,255,255,0)');

        this.clear()
          .fillStyle(grd)
          .circle(center.x, center.y, this.height() * 0.5);

        this.ctx.arc(this.cvs.width * 0.5, this.cvs.height * 0.5, this.cvs.width * 0.45, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    });
  }

  // ------- lifecycle -------
  initGame() {
    // score
    if (this.createScore) {
      this.scoreEl = document.createElement('div');
      this.scoreEl.id = 'score';
      this.scoreEl.textContent = 'kills: 0';
      Object.assign(this.scoreEl.style, { padding: '10px', zIndex: '990', position: 'absolute', top: '0px', color: '#fff', zIndex:3});
      document.body.appendChild(this.scoreEl);
      this.scoreEl.id = 'l0';
    }

    // layers (same idea: CanvasSprite provides its own canvas)
    this.setupLayers();
    this.mountLayers();

    // events (no jQuery)
    document.addEventListener('mousedown', this._handleMouse);
    document.addEventListener('mouseup', this._handleMouse);
    document.addEventListener('mousemove', this._handleMouse);

    window.addEventListener('keydown', this._handleKeys);
    document.body.addEventListener('keyup', this._handleKeysBody);
    document.body.addEventListener('keydown', this._handleKeysBody);

    // content
    for (let i = 0; i < 5; i++) this.makeLine();
    for (let i = 0; i < 3; i++) this.addDot();

    this.prerender();

    // window.addEventListener('resize', this._handleResize);
    // this.handleResize(true);
    this.resize(this.canvas.width, this.canvas.height);
    this.startAnim();

    this.setFlavor('purple_blue');
  }

  destroy() {
    console.log('destroy game');
    this.stopAnim();
    // window.removeEventListener('resize', this._handleResize);

    document.removeEventListener('mousedown', this._handleMouse);
    document.removeEventListener('mouseup', this._handleMouse);
    document.removeEventListener('mousemove', this._handleMouse);

    window.removeEventListener('keydown', this._handleKeys);
    document.body.removeEventListener('keyup', this._handleKeysBody);
    document.body.removeEventListener('keydown', this._handleKeysBody);

    // remove DOM if we created it
    if (this.scoreEl?.parentNode) this.scoreEl.parentNode.removeChild(this.scoreEl);
    this.layers.forEach((l) => l?.cvs?.parentNode && l.cvs.parentNode.removeChild(l.cvs));
  }

  // ------- UI / mounting -------
  mountLayers() {
    // mimic original z-index placement
    Object.assign(this.layers[0].cvs.style, { zIndex: '900', position: 'absolute', top: '0px', left: '0px', zIndex:1 });
    Object.assign(this.layers[1].cvs.style, { zIndex: '910', position: 'absolute', top: '0px', left: '0px', zIndex:2 });
    document.body.appendChild(this.layers[0].cvs);
    document.body.appendChild(this.layers[1].cvs);
    this.layers[0].cvs.id = 'l0';
    this.layers[1].cvs.id = 'l1';
  }

  setupLayers() {
    const game = this;

    // layer 0
    this.layers[0] = new CanvasSprite({
      background: 'rgba(255,0,0)',
      fillStyle: 'rgba(0,0,0,.02)',
      strokeStyle: 'rgba(255,255,255,1)',
      render: function (ctx, cvs) {
        game.pilot.offsetX = game.pilot.x - (game.viewport.scaleDelta * game.viewport.width - game.viewport.width) * 0.5;
        game.pilot.offsetY = game.pilot.y - (game.viewport.scaleDelta * game.viewport.height - game.viewport.height) * 0.5;

        ctx.drawImage(cvs, 0, 0, cvs.width, cvs.height, game.pilot.offsetX, game.pilot.offsetY, cvs.width * game.viewport.scaleDelta, cvs.height * game.viewport.scaleDelta);

        this.fillStyle('rgba(0,0,0,.02)').fill();

        for (let i = game.lines.length - 1; i >= 0; i--) {
          const line = game.lines[i];
          for (let j = line.points.length - 1; j >= 0; j--) {
            game.renderPosition(line.points[j]);
          }
          game.drawLine(line, this.ctx);
        }
      }
    });

    // layer 1
    this.layers[1] = new CanvasSprite({
      render: function () {
        const ctx = this.ctx;
        const cvs = this.cvs;

        const buffer = this.buffer();
        this.clear();

        ctx.globalAlpha = 0.9;
        ctx.drawImage(buffer, 0, 0, cvs.width, cvs.height, game.pilot.offsetX, game.pilot.offsetY, cvs.width * game.viewport.scaleDelta, cvs.height * game.viewport.scaleDelta);
        ctx.globalAlpha = 1;

        // dots
        for (let i = game.dots.length - 1; i >= 0; i--) {
          const dot = game.dots[i];
          game.renderPosition(dot);

          const size = Math.sqrt(dot.lifespan);
          ctx.drawImage(game.dotSprite.cvs, 0, 0, game.dotSprite.width(), game.dotSprite.height(), dot._x, dot._y, size, size);

          if (dot.killed) {
            game.explosion(dot._x, dot._y, size);
            game.dots.splice(i, 1);
          } else if (dot.lifespan < 0.01) {
            game.dots.splice(i, 1);
          } else {
            dot.lifespan *= 0.98;
          }
        }

        // stars
        for (let i = 0; i < 100; i++) {
          const s = game.rand(2, 5);
          ctx.globalAlpha = game.rand(0, 1);
          ctx.drawImage(game.dotSprite.cvs, 0, 0, game.dotSprite.width(), game.dotSprite.height(), game.rand(0, game.viewport.width), game.rand(0, game.viewport.height), s, s);
        }
        ctx.globalAlpha = 1;

        // explosions
        ctx.fillStyle = 'rgba(255,255,255,.5)';
        while (Math.random() < 0.8 && game.explosions.length) {
          const e = game.explosions.shift();
          ctx.globalAlpha = e.alpha;
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
    });
  }

  // ------- core logic -------
  updateScore() {
    if (!this.scoreEl) return;
    // this.scoreEl.textContent = `lvl:${this.score.level} kills:${this.score.kills} ${this.score.points}`;
    this.scoreEl.textContent = `kills: ${this.score.kills}`;
  }

  addDot() {
    const dot = {
      lifespan: 60 * this.rand(3, 150),
      x: this.viewport.width * 0.5,
      y: this.viewport.height * 0.5,
      offset: { x: 0, y: 0, decay: 0.95 },
      rotations: Array.from({ length: 3 }, () => ({
        radius: { x: 100, y: 100 },
        angle: { x: this.rand(360), y: this.rand(360) },
        speed: { x: this.rand(-2, 2), y: this.rand(-2, 2) }
      }))
    };

    this.dots.push(dot);
    this.dots.sort((a, b) => (a.lifespan > b.lifespan ? -1 : a.lifespan < b.lifespan ? 1 : 0));
  }

  renderPosition(sprite) {
    let x = 0;
    let y = 0;
    for (let i = sprite.rotations.length - 1; i >= 0; i--) {
      const r = sprite.rotations[i];
      r.angle.x += r.speed.x;
      r.angle.y += r.speed.y;
      x += Math.sin(r.angle.x * this.RAD) * r.radius.x;
      y += Math.cos(r.angle.y * this.RAD) * r.radius.y;
    }
    sprite._x = sprite.x + sprite.offset.x + x;
    sprite._y = sprite.y + sprite.offset.y + y;
  }

  Point() {
    return { _x: 0, _y: 0, x: 0, y: 0, offset: { x: 0, y: 0 }, rotations: [] };
  }

  Line() {
    return { color: new RGBA({ color: { r: 255, g: 255, b: 255, a: 1 } }), alpha: 0, points: [] };
  }

  randomLineRotation() {
    const n = 8;
    return {
      radius: { x: this.rand(35), y: this.rand(85) },
      angle: { x: this.rand(360), y: this.rand(360) },
      speed: {
        x: this.rand(-Math.sqrt(n), Math.sqrt(n)) * 0.2,
        y: this.rand(-Math.sqrt(n), Math.sqrt(n)) * 0.2
      }
    };
  }

  makeLine() {
    const n = 6;
    const line = this.Line();

    line.color.setValue({ a: 0 });
    line.color.setValue({ a: 0.5 }, { tween: { delay: this.rand(10), time: this.rand(20, 30) } });

    line.points = Array.from({ length: n }, (_, i) => {
      const p = this.Point();
      p.offset.x = i === 0 ? -200 : i === n - 1 ? 200 : 0;
      p.offset.y = this.rand(-50, 50);
      p.rotations.push(this.randomLineRotation());
      return p;
    });

    this.lines.push(line);
  }

  drawLine(line, ctx) {
    if (line.color) {
      if (line.alpha < 0) {
        line.alpha += 0.01;
        line.color.setValue({ r: this.rand(0, 255), a: line.alpha });
      }
      ctx.strokeStyle = line.color.toRGBA();
    }

    ctx.beginPath();
    ctx.moveTo(line.points[0]._x, line.points[0]._y);

    let i;
    for (i = 1; i < line.points.length - 2; i++) {
      const xc = (line.points[i]._x + line.points[i + 1]._x) / 2;
      const yc = (line.points[i]._y + line.points[i + 1]._y) / 2;
      ctx.quadraticCurveTo(line.points[i]._x, line.points[i]._y, xc, yc);
    }
    ctx.quadraticCurveTo(line.points[i]._x, line.points[i]._y, line.points[i + 1]._x, line.points[i + 1]._y);
    ctx.stroke();
  }

  render() {
    this.layers[0].render();
    this.layers[1].render();

    if (this.animating) window.requestAnimationFrame(() => this.render());
    if (Math.random() < 0.02) this.addDot();

    if (this.mouseIsDown) {
      if (this.viewport.scaleDelta < 1.1) {
        this.viewport.scaleDelta += 0.001;
      }
    } else {
      if (this.viewport.scaleDelta > 1.0) {
        this.viewport.scaleDelta -= 0.001;
      }
    }
  }

  explosion(x, y, size) {
    let blips = this.rand(5, 10, true);
    const offset = size * 0.5;
    while (blips--) {
      this.explosions.push({
        x: this.rand(x - offset, x + offset),
        y: this.rand(y - offset, y + offset),
        size: this.rand(size * 0.1, size * 1.5),
        alpha: this.rand(0.5, 1)
      });
    }
  }

  prerender() {
    this.animating = false;
    for (let i = 0; i < 1000; i++) this.render();
  }

  resize(width, height) {
    this.handleResize(true, width, height);
  }

  handleResize(instant, width = 500, height = 500) {
    if (instant !== true) {
      clearTimeout(this._resizeTimeout);
      this._resizeTimeout = setTimeout(() => this.handleResize(true), 1050);
      return;
    }

    // const width = window.innerWidth;
    // const height = window.innerHeight;

    this.layers[0].size(width, height);
    this.layers[1].size(width, height);

    this.viewport.width = width;
    this.viewport.height = height;
    this.viewport.centerX = width * 0.5;
    this.viewport.centerY = height * 0.5;

    // reposition line points
    for (let li = this.lines.length - 1; li >= 0; li--) {
      const line = this.lines[li];
      const step = width / (line.points.length - 1);
      for (let pi = line.points.length - 1; pi >= 0; pi--) {
        const point = line.points[pi];
        point.x = pi * step;
        point.y = height * 0.55;
      }
    }

    // reposition dots
    for (let i = this.dots.length - 1; i >= 0; i--) {
      this.dots[i].x = width * 0.5;
      this.dots[i].y = height * 0.5;
    }
  }

  startAnim() {
    this.animating = true;
    window.requestAnimationFrame(() => this.render());
  }

  stopAnim() {
    this.animating = false;
  }

  setFlavor(name) {
    const f = this.flavors[name];
    if (!f) return;

    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].color.setValue(f.lines[i % f.lines.length]);
    }
    this.dotColor.setValue(f.comets);
  }

  fadeLines(a) {
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].color.setValue({ a }, { tween: { delay: this.rand(3), time: this.rand(3, 8) } });
    }
  }

  fireWeapon() {
    this.layers[1].ctx.drawImage(this.targetSprite.cvs, this.mouseX - this.targetSprite.width() * 0.5, this.mouseY - this.targetSprite.height() * 0.5);

    let bonus = 0;
    let kills = 0;

    for (let i = this.dots.length - 1; i >= 0; i--) {
      const dot = this.dots[i];
      const dx = dot._x - this.mouseX;
      const dy = dot._y - this.mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.targetSprite.width() * 0.5) {
        dot.killed = true;
        kills++;
        bonus++;
      }
    }

    this.score.kills += kills;
    this.score.points += kills * bonus;
    this.updateScore();
  }

  // ------- input handlers (no jQuery) -------
  handleMouse(evt) {
    const rect = this.layers[0].cvs.getBoundingClientRect();
    this.mouseX = evt.clientX - rect.left;
    this.mouseY = evt.clientY - rect.top;

    this.centerOffsetX = this.mouseX - rect.width * 0.5;
    this.centerOffsetY = this.mouseY - rect.height * 0.5;

    const offsetX = this.centerOffsetX / (rect.width * 0.5);
    const offsetY = this.centerOffsetY / (rect.height * 0.5);

    // this.pilot.x = -this.centerOffsetX * this.viewport.mouseFactor * Math.pow(this.viewport.scaleDelta,2);
    this.pilot.x = offsetX * -16; // * 0.07;
    this.pilot.y = offsetY * -16; //-this.centerOffsetY * this.viewport.mouseFactor * Math.pow(this.viewport.scaleDelta, 2);

    switch (evt.type) {
      case 'mousedown':
        this.mouseIsDown = true;
        // still requires TweenMax/GSAP if you want these tweens:
        // if (TweenMax) {
        //   TweenMax.to(this.viewport, 5, { scaleDelta: 1.1 });
        // } else {
        // this.viewport.scaleDelta = 1.1;
        // }
        this.fireWeapon();
        break;

      case 'mouseup':
        this.mouseIsDown = false;
        // if (TweenMax) {
        //   TweenMax.to(this.viewport, 1, { scaleDelta: 1.02 });
        // } else {
        // this.viewport.scaleDelta = 1.02;
        // }
        break;

      default:
        break;
    }
  }

  // handleKeys(e) {
  //   if (e.keyCode === 32 && e.target === document.body) e.preventDefault();
  // }

  // handleKeysBody(evt) {
  //   if (evt.type === 'keydown') {
  //     if (evt.keyCode === 32) evt.preventDefault();
  //     return;
  //   }

  //   // keyup
  //   if (evt.keyCode === 38) {
  //     for (let i = 0; i < 100; i++) this.addDot();
  //   }
  // }
}
