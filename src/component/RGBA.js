import { TweenMax } from 'gsap';

export class RGBA {
  constructor(config) {
    var self = this;
    var listeners = {
      change: []
    };
    var value = { r: 0, g: 0, b: 0, a: 0 };

    function interpolate(n1, n2, p) {
      return n1 + (n2 - n1) * p;
    }

    function interpolateColor(delta, p) {
      var n, e, t;
      for (e in value) {
        if (delta[e]) {
          value[e] = interpolate(value[e], delta[e], p);
        }
      }
      dispatchEvent('change');
      return self;
    }

    function setValue(delta, options) {
      TweenMax.killTweensOf(value);
      if (options && options.tween) {
        delta.onUpdate = function () {
          dispatchEvent('change');
        };
        for (var e in options) {
          delta[e] = options[e];
        }
        TweenMax.to(value, options.tween.time || 1, delta);
      } else {
        var n, e;
        for (e in value) {
          if (!isNaN(delta[e])) {
            value[e] = delta[e];
          }
        }
      }
      dispatchEvent('change');
      return self;
    }

    function randomize() {
      setValue({
        r: Math.random() * 255,
        g: Math.random() * 255,
        b: Math.random() * 255
      });
    }

    function getValue(format) {
      return { r: value.r, g: value.g, b: value.b, a: value.a };
    }

    function toArray() {
      return [Math.max(0, Math.min(255, Math.round(value.r))), Math.max(0, Math.min(255, Math.round(value.g))), Math.max(0, Math.min(255, Math.round(value.b))), Math.max(0, Math.min(1, value.a))];
    }
    function toRGBA() {
      return 'rgba(' + toArray().join() + ')';
    }

    function toRGB() {
      return 'rgba(' + toArray().slice(0, -1).join() + ')';
    }

    function dispatchEvent(eventType) {
      if (listeners[eventType]) {
        var i = listeners[eventType].length;
        while (i--) {
          listeners[eventType][i].callback.call(self, { type: eventType, target: self });
        }
      }
    }

    function on(eventType, callback) {
      if (listeners[eventType]) {
        listeners[eventType].push({
          callback: callback
        });
      }
    }

    function off(eventType, callback) {
      if (listeners[eventType]) {
        var i = listeners[eventType].length;
        while (i--) {
          if (callback === null || callback === listeners[eventType][i].callback) {
            listeners[eventType].splice(i, 1);
          }
        }
      }
    }

    function change(callback) {
      if (callback) {
        on('change', callback);
      } else {
        dispatchEvent('change');
      }
    }

    if (config) {
      if (config.color) {
        setValue(config.color);
      }
      if (config.change) {
        change(config.change);
      }
    }

    self.on = on;
    self.off = off;
    self.change = change;
    self.getValue = getValue;
    self.setValue = setValue;
    self.toRGBA = toRGBA;
    self.toRGB = toRGB;
    self.toArray = toArray;
    self.interpolate = interpolateColor;
    self.randomize = randomize;
  }
}
