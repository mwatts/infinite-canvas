(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.InfiniteCanvas = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = copyCanvas;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _createCanvas = require('create-canvas');

var _createCanvas2 = _interopRequireDefault(_createCanvas);

var _drawToCanvas = require('draw-to-canvas');

var _drawToCanvas2 = _interopRequireDefault(_drawToCanvas);

function copyCanvas(canvas) {
  return (0, _drawToCanvas2['default'])(canvas, (0, _createCanvas2['default'])(canvas.width, canvas.height));
}

module.exports = exports['default'];

},{"create-canvas":2,"draw-to-canvas":3}],2:[function(require,module,exports){
var canvas = module.exports = function canvas (w, h) {
  var canvas = document.createElement('canvas')
  canvas.width = w || 300
  canvas.height = h || 150
  return canvas
}

canvas.Image = function () {
  var img = document.createElement('img')
  return img
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = drawToCanvas;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _forceCanvasContext = require('force-canvas-context');

var _forceCanvasContext2 = _interopRequireDefault(_forceCanvasContext);

function drawToCanvas(source, dest) {
  var _forceContext;

  var pos = arguments.length <= 2 || arguments[2] === undefined ? [0, 0] : arguments[2];

  (_forceContext = (0, _forceCanvasContext2['default'])(dest)).drawImage.apply(_forceContext, [source].concat(_toConsumableArray(pos)));
  return dest;
}

module.exports = exports['default'];


},{"force-canvas-context":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = forceCanvasContext;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isCanvasContext = require('is-canvas-context');

var _isCanvasContext2 = _interopRequireDefault(_isCanvasContext);

function forceCanvasContext(ctx) {
  var type = arguments.length <= 1 || arguments[1] === undefined ? '2d' : arguments[1];

  // convert canvas to ctx
  if (ctx.tagName === 'CANVAS') {
    ctx = ctx.getContext(type);
  }

  // error if not ctx
  if (!(0, _isCanvasContext2['default'])(ctx)) throw Error('Could not force context');

  return ctx;
}

module.exports = exports['default'];


},{"is-canvas-context":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isContext;

function isContext(ctx) {

  return ctx instanceof CanvasRenderingContext2D || ctx instanceof WebGLRenderingContext;
}

module.exports = exports["default"];


},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = drawToCanvas;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
  } else {
    return Array.from(arr);
  }
}

var _forceCanvasContext = require('force-canvas-context');

var _forceCanvasContext2 = _interopRequireDefault(_forceCanvasContext);

function drawToCanvas(source, dest) {
  var _forceContext;

  var pos = arguments.length <= 2 || arguments[2] === undefined ? [0, 0] : arguments[2];

  (_forceContext = (0, _forceCanvasContext2['default'])(dest)).drawImage.apply(_forceContext, [source].concat(_toConsumableArray(pos)));
  return dest;
}

module.exports = exports['default'];

},{"force-canvas-context":7}],7:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4,"is-canvas-context":8}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _clearCanvas = require('clear-canvas');

var _clearCanvas2 = _interopRequireDefault(_clearCanvas);

var _drawToCanvas = require('draw-to-canvas');

var _drawToCanvas2 = _interopRequireDefault(_drawToCanvas);

var _resizeCanvas = require('resize-canvas');

var _resizeCanvas2 = _interopRequireDefault(_resizeCanvas);

var _copyCanvas = require('copy-canvas');

var _copyCanvas2 = _interopRequireDefault(_copyCanvas);

var _glVec2Add = require('gl-vec2/add');

var _glVec2Add2 = _interopRequireDefault(_glVec2Add);

var _glVec2Max = require('gl-vec2/max');

var _glVec2Max2 = _interopRequireDefault(_glVec2Max);

var _glVec2Min = require('gl-vec2/min');

var _glVec2Min2 = _interopRequireDefault(_glVec2Min);

var _glVec2Subtract = require('gl-vec2/subtract');

// utility functions

var _glVec2Subtract2 = _interopRequireDefault(_glVec2Subtract);

var getDimensions = function getDimensions(canvas) {
  return [canvas.width, canvas.height];
};
var abs = function abs(arr) {
  return arr.map(Math.abs);
};

// calculate where to scale from. If x or y is positive, scale from 0
// otherwise scale from bottom or right
function getResizeFrom(canvas, originDiff) {
  var resizeFrom = getDimensions(canvas);
  if (originDiff[0] <= 0) resizeFrom[0] = 0;
  if (originDiff[1] <= 0) resizeFrom[1] = 0;
  return resizeFrom;
}

var InfiniteCanvas = (function () {
  function InfiniteCanvas(canvas) {
    _classCallCheck(this, InfiniteCanvas);

    // optional new keyword
    if (!(this instanceof InfiniteCanvas)) {
      return new InfiniteCanvas(canvas);
    }

    // instantiate
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.buffer = (0, _copyCanvas2['default'])(canvas);
    this.bufferContext = this.buffer.getContext('2d');
    this.origin = [0, 0];
    this._originMax = [0, 0];
    this._originMin = [0, 0];
    this._originDraw = [0, 0];
  }

  // move the origin of the buffer canvas on the main canvas to pan around
  // scaling the buffer as needed

  _createClass(InfiniteCanvas, [{
    key: 'move',
    value: function move(originDiff) {

      // update origins
      this.origin = (0, _glVec2Add2['default'])([], this.origin, originDiff);
      this._originMax = (0, _glVec2Max2['default'])([], this.origin, this._originMax);
      this._originMin = (0, _glVec2Min2['default'])([], this.origin, this._originMin);

      // get dimensions
      var canvasDimensions = getDimensions(this.canvas);
      var bufferDimensions = getDimensions(this.buffer);
      var maxDimensions = (0, _glVec2Add2['default'])([], canvasDimensions, (0, _glVec2Add2['default'])([], this._originMax, abs(this._originMin)));

      // resize
      var maxDimensionsDiff = (0, _glVec2Subtract2['default'])([], maxDimensions, bufferDimensions);
      this.buffer = (0, _resizeCanvas2['default'])(this.buffer, maxDimensionsDiff, getResizeFrom(this.buffer, originDiff));

      // redraw
      this._originDraw = (0, _glVec2Min2['default'])([], [0, 0], (0, _glVec2Add2['default'])([], this._originDraw, originDiff));
      this.refresh();
    }

    // copy whatever was drawn on the canvas to the buffer
  }, {
    key: 'commitToBuffer',
    value: function commitToBuffer() {
      (0, _drawToCanvas2['default'])(this.canvas, this.bufferContext, this.origin);
    }

    // redraw to the canvas
  }, {
    key: 'refresh',
    value: function refresh() {

      // erase canvas
      (0, _clearCanvas2['default'])(this.canvasContext);

      // draw to canvas
      (0, _drawToCanvas2['default'])(this.buffer, this.canvasContext, this._originDraw);
    }
  }]);

  return InfiniteCanvas;
})();

exports['default'] = InfiniteCanvas;
module.exports = exports['default'];

},{"clear-canvas":10,"copy-canvas":1,"draw-to-canvas":6,"gl-vec2/add":11,"gl-vec2/max":13,"gl-vec2/min":14,"gl-vec2/subtract":16,"resize-canvas":17}],10:[function(require,module,exports){
"use strict";

module.exports = function (ctx) {
  var saveTransform = arguments[1] === undefined ? true : arguments[1];
  if (saveTransform) {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (saveTransform) {
    ctx.restore();
  }
};
},{}],11:[function(require,module,exports){
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
},{}],12:[function(require,module,exports){
module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}
},{}],13:[function(require,module,exports){
module.exports = max

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    return out
}
},{}],14:[function(require,module,exports){
module.exports = min

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    return out
}
},{}],15:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
},{}],16:[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _glVec2Add = require('gl-vec2/add');

var _glVec2Add2 = _interopRequireDefault(_glVec2Add);

var _glVec2Multiply = require('gl-vec2/multiply');

var _glVec2Multiply2 = _interopRequireDefault(_glVec2Multiply);

var _glVec2Divide = require('gl-vec2/divide');

var _glVec2Divide2 = _interopRequireDefault(_glVec2Divide);

var _createCanvas = require('create-canvas');

var _createCanvas2 = _interopRequireDefault(_createCanvas);

var _drawToCanvas = require('draw-to-canvas');

var _drawToCanvas2 = _interopRequireDefault(_drawToCanvas);

var divideBy2 = function divideBy2(x) {
  return x / 2;
};

/**
 * resizes the resolutions of an html5 canvas element from a desired position
 * perserving the drawn image
 * @param  {element} canvas   an html5 canvas element
 * @param  {arr} diff      [width, height] to add to the current resolution
 * @param  {arr} fromPos      [x, y] postion to scale from
 * @return {element}          a new html5 canvas element
 */
function resizeCanvas(canvas, diff, fromPos) {
  if (diff === undefined) diff = [0, 0];

  var size = [canvas.width, canvas.height];
  var newSize = (0, _glVec2Add2['default'])([], size, diff);
  if (!fromPos) fromPos = size.map(divideBy2); // scale from center by default
  var drawOrigin = (0, _glVec2Multiply2['default'])([], (0, _glVec2Divide2['default'])([], fromPos, size), diff);
  return (0, _drawToCanvas2['default'])(canvas, _createCanvas2['default'].apply(undefined, _toConsumableArray(newSize)), drawOrigin);
}

exports['default'] = resizeCanvas;
module.exports = exports['default'];


},{"create-canvas":18,"draw-to-canvas":6,"gl-vec2/add":11,"gl-vec2/divide":12,"gl-vec2/multiply":15}],18:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[9])(9)
});