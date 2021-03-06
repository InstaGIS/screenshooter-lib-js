(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.screenShooter = global.screenShooter || {})));
}(this, (function (exports) { 'use strict';

function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var Path = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var PATH = exports.PATH = {
        VECTOR: 0,
        BEZIER_CURVE: 1,
        CIRCLE: 2
    };
});

unwrapExports(Path);

var Color_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    // http://dev.w3.org/csswg/css-color/

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var HEX3 = /^#([a-f0-9]{3})$/i;
    var hex3 = function hex3(value) {
        var match = value.match(HEX3);
        if (match) {
            return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
        }
        return false;
    };

    var HEX6 = /^#([a-f0-9]{6})$/i;
    var hex6 = function hex6(value) {
        var match = value.match(HEX6);
        if (match) {
            return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
        }
        return false;
    };

    var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    var rgb = function rgb(value) {
        var match = value.match(RGB);
        if (match) {
            return [Number(match[1]), Number(match[2]), Number(match[3]), null];
        }
        return false;
    };

    var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
    var rgba = function rgba(value) {
        var match = value.match(RGBA);
        if (match && match.length > 4) {
            return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
        }
        return false;
    };

    var fromArray = function fromArray(array) {
        return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
    };

    var namedColor = function namedColor(name) {
        var color = NAMED_COLORS[name.toLowerCase()];
        return color ? color : false;
    };

    var Color = function () {
        function Color(value) {
            _classCallCheck(this, Color);

            var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
                _ref2 = _slicedToArray(_ref, 4),
                r = _ref2[0],
                g = _ref2[1],
                b = _ref2[2],
                a = _ref2[3];

            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }

        _createClass(Color, [{
            key: 'isTransparent',
            value: function isTransparent() {
                return this.a === 0;
            }
        }, {
            key: 'toString',
            value: function toString() {
                return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
            }
        }]);

        return Color;
    }();

    exports.default = Color;

    var NAMED_COLORS = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, null],
        antiquewhite: [250, 235, 215, null],
        aqua: [0, 255, 255, null],
        aquamarine: [127, 255, 212, null],
        azure: [240, 255, 255, null],
        beige: [245, 245, 220, null],
        bisque: [255, 228, 196, null],
        black: [0, 0, 0, null],
        blanchedalmond: [255, 235, 205, null],
        blue: [0, 0, 255, null],
        blueviolet: [138, 43, 226, null],
        brown: [165, 42, 42, null],
        burlywood: [222, 184, 135, null],
        cadetblue: [95, 158, 160, null],
        chartreuse: [127, 255, 0, null],
        chocolate: [210, 105, 30, null],
        coral: [255, 127, 80, null],
        cornflowerblue: [100, 149, 237, null],
        cornsilk: [255, 248, 220, null],
        crimson: [220, 20, 60, null],
        cyan: [0, 255, 255, null],
        darkblue: [0, 0, 139, null],
        darkcyan: [0, 139, 139, null],
        darkgoldenrod: [184, 134, 11, null],
        darkgray: [169, 169, 169, null],
        darkgreen: [0, 100, 0, null],
        darkgrey: [169, 169, 169, null],
        darkkhaki: [189, 183, 107, null],
        darkmagenta: [139, 0, 139, null],
        darkolivegreen: [85, 107, 47, null],
        darkorange: [255, 140, 0, null],
        darkorchid: [153, 50, 204, null],
        darkred: [139, 0, 0, null],
        darksalmon: [233, 150, 122, null],
        darkseagreen: [143, 188, 143, null],
        darkslateblue: [72, 61, 139, null],
        darkslategray: [47, 79, 79, null],
        darkslategrey: [47, 79, 79, null],
        darkturquoise: [0, 206, 209, null],
        darkviolet: [148, 0, 211, null],
        deeppink: [255, 20, 147, null],
        deepskyblue: [0, 191, 255, null],
        dimgray: [105, 105, 105, null],
        dimgrey: [105, 105, 105, null],
        dodgerblue: [30, 144, 255, null],
        firebrick: [178, 34, 34, null],
        floralwhite: [255, 250, 240, null],
        forestgreen: [34, 139, 34, null],
        fuchsia: [255, 0, 255, null],
        gainsboro: [220, 220, 220, null],
        ghostwhite: [248, 248, 255, null],
        gold: [255, 215, 0, null],
        goldenrod: [218, 165, 32, null],
        gray: [128, 128, 128, null],
        green: [0, 128, 0, null],
        greenyellow: [173, 255, 47, null],
        grey: [128, 128, 128, null],
        honeydew: [240, 255, 240, null],
        hotpink: [255, 105, 180, null],
        indianred: [205, 92, 92, null],
        indigo: [75, 0, 130, null],
        ivory: [255, 255, 240, null],
        khaki: [240, 230, 140, null],
        lavender: [230, 230, 250, null],
        lavenderblush: [255, 240, 245, null],
        lawngreen: [124, 252, 0, null],
        lemonchiffon: [255, 250, 205, null],
        lightblue: [173, 216, 230, null],
        lightcoral: [240, 128, 128, null],
        lightcyan: [224, 255, 255, null],
        lightgoldenrodyellow: [250, 250, 210, null],
        lightgray: [211, 211, 211, null],
        lightgreen: [144, 238, 144, null],
        lightgrey: [211, 211, 211, null],
        lightpink: [255, 182, 193, null],
        lightsalmon: [255, 160, 122, null],
        lightseagreen: [32, 178, 170, null],
        lightskyblue: [135, 206, 250, null],
        lightslategray: [119, 136, 153, null],
        lightslategrey: [119, 136, 153, null],
        lightsteelblue: [176, 196, 222, null],
        lightyellow: [255, 255, 224, null],
        lime: [0, 255, 0, null],
        limegreen: [50, 205, 50, null],
        linen: [250, 240, 230, null],
        magenta: [255, 0, 255, null],
        maroon: [128, 0, 0, null],
        mediumaquamarine: [102, 205, 170, null],
        mediumblue: [0, 0, 205, null],
        mediumorchid: [186, 85, 211, null],
        mediumpurple: [147, 112, 219, null],
        mediumseagreen: [60, 179, 113, null],
        mediumslateblue: [123, 104, 238, null],
        mediumspringgreen: [0, 250, 154, null],
        mediumturquoise: [72, 209, 204, null],
        mediumvioletred: [199, 21, 133, null],
        midnightblue: [25, 25, 112, null],
        mintcream: [245, 255, 250, null],
        mistyrose: [255, 228, 225, null],
        moccasin: [255, 228, 181, null],
        navajowhite: [255, 222, 173, null],
        navy: [0, 0, 128, null],
        oldlace: [253, 245, 230, null],
        olive: [128, 128, 0, null],
        olivedrab: [107, 142, 35, null],
        orange: [255, 165, 0, null],
        orangered: [255, 69, 0, null],
        orchid: [218, 112, 214, null],
        palegoldenrod: [238, 232, 170, null],
        palegreen: [152, 251, 152, null],
        paleturquoise: [175, 238, 238, null],
        palevioletred: [219, 112, 147, null],
        papayawhip: [255, 239, 213, null],
        peachpuff: [255, 218, 185, null],
        peru: [205, 133, 63, null],
        pink: [255, 192, 203, null],
        plum: [221, 160, 221, null],
        powderblue: [176, 224, 230, null],
        purple: [128, 0, 128, null],
        rebeccapurple: [102, 51, 153, null],
        red: [255, 0, 0, null],
        rosybrown: [188, 143, 143, null],
        royalblue: [65, 105, 225, null],
        saddlebrown: [139, 69, 19, null],
        salmon: [250, 128, 114, null],
        sandybrown: [244, 164, 96, null],
        seagreen: [46, 139, 87, null],
        seashell: [255, 245, 238, null],
        sienna: [160, 82, 45, null],
        silver: [192, 192, 192, null],
        skyblue: [135, 206, 235, null],
        slateblue: [106, 90, 205, null],
        slategray: [112, 128, 144, null],
        slategrey: [112, 128, 144, null],
        snow: [255, 250, 250, null],
        springgreen: [0, 255, 127, null],
        steelblue: [70, 130, 180, null],
        tan: [210, 180, 140, null],
        teal: [0, 128, 128, null],
        thistle: [216, 191, 216, null],
        tomato: [255, 99, 71, null],
        turquoise: [64, 224, 208, null],
        violet: [238, 130, 238, null],
        wheat: [245, 222, 179, null],
        white: [255, 255, 255, null],
        whitesmoke: [245, 245, 245, null],
        yellow: [255, 255, 0, null],
        yellowgreen: [154, 205, 50, null]
    };

    var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);
});

unwrapExports(Color_1);

var textDecoration = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

    var _Color2 = _interopRequireDefault(Color_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
        SOLID: 0,
        DOUBLE: 1,
        DOTTED: 2,
        DASHED: 3,
        WAVY: 4
    };

    var TEXT_DECORATION = exports.TEXT_DECORATION = {
        NONE: null
    };

    var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
        UNDERLINE: 1,
        OVERLINE: 2,
        LINE_THROUGH: 3,
        BLINK: 4
    };

    var parseLine = function parseLine(line) {
        switch (line) {
            case 'underline':
                return TEXT_DECORATION_LINE.UNDERLINE;
            case 'overline':
                return TEXT_DECORATION_LINE.OVERLINE;
            case 'line-through':
                return TEXT_DECORATION_LINE.LINE_THROUGH;
        }
        return TEXT_DECORATION_LINE.BLINK;
    };

    var parseTextDecorationLine = function parseTextDecorationLine(line) {
        if (line === 'none') {
            return null;
        }

        return line.split(' ').map(parseLine);
    };

    var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
        switch (style) {
            case 'double':
                return TEXT_DECORATION_STYLE.DOUBLE;
            case 'dotted':
                return TEXT_DECORATION_STYLE.DOTTED;
            case 'dashed':
                return TEXT_DECORATION_STYLE.DASHED;
            case 'wavy':
                return TEXT_DECORATION_STYLE.WAVY;
        }
        return TEXT_DECORATION_STYLE.SOLID;
    };

    var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
        var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
        if (textDecorationLine === null) {
            return TEXT_DECORATION.NONE;
        }

        var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
        var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

        return {
            textDecorationLine: textDecorationLine,
            textDecorationColor: textDecorationColor,
            textDecorationStyle: textDecorationStyle
        };
    };
});

unwrapExports(textDecoration);

var CanvasRenderer_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var addColorStops = function addColorStops(gradient, canvasGradient) {
        var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
            return colorStop.stop;
        }));
        var f = 1 / Math.max(1, maxStop);
        gradient.colorStops.forEach(function (colorStop) {
            canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
        });
    };

    var CanvasRenderer = function () {
        function CanvasRenderer(canvas) {
            _classCallCheck(this, CanvasRenderer);

            this.canvas = canvas ? canvas : document.createElement('canvas');
        }

        _createClass(CanvasRenderer, [{
            key: 'render',
            value: function render(options) {
                this.ctx = this.canvas.getContext('2d');
                this.options = options;
                this.canvas.width = Math.floor(options.width * options.scale);
                this.canvas.height = Math.floor(options.height * options.scale);
                this.canvas.style.width = options.width + 'px';
                this.canvas.style.height = options.height + 'px';

                this.ctx.scale(this.options.scale, this.options.scale);
                this.ctx.translate(-options.x, -options.y);
                this.ctx.textBaseline = 'bottom';
                options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
            }
        }, {
            key: 'clip',
            value: function clip(clipPaths, callback) {
                var _this = this;

                if (clipPaths.length) {
                    this.ctx.save();
                    clipPaths.forEach(function (path) {
                        _this.path(path);
                        _this.ctx.clip();
                    });
                }

                callback();

                if (clipPaths.length) {
                    this.ctx.restore();
                }
            }
        }, {
            key: 'drawImage',
            value: function drawImage(image, source, destination) {
                this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
            }
        }, {
            key: 'drawShape',
            value: function drawShape(path, color) {
                this.path(path);
                this.ctx.fillStyle = color.toString();
                this.ctx.fill();
            }
        }, {
            key: 'fill',
            value: function fill(color) {
                this.ctx.fillStyle = color.toString();
                this.ctx.fill();
            }
        }, {
            key: 'getTarget',
            value: function getTarget() {
                return Promise.resolve(this.canvas);
            }
        }, {
            key: 'path',
            value: function path(_path) {
                var _this2 = this;

                this.ctx.beginPath();
                if (Array.isArray(_path)) {
                    _path.forEach(function (point, index) {
                        var start = point.type === Path.PATH.VECTOR ? point : point.start;
                        if (index === 0) {
                            _this2.ctx.moveTo(start.x, start.y);
                        } else {
                            _this2.ctx.lineTo(start.x, start.y);
                        }

                        if (point.type === Path.PATH.BEZIER_CURVE) {
                            _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                        }
                    });
                } else {
                    this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
                }

                this.ctx.closePath();
            }
        }, {
            key: 'rectangle',
            value: function rectangle(x, y, width, height, color) {
                this.ctx.fillStyle = color.toString();
                this.ctx.fillRect(x, y, width, height);
            }
        }, {
            key: 'renderLinearGradient',
            value: function renderLinearGradient(bounds, gradient) {
                var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

                addColorStops(gradient, linearGradient);
                this.ctx.fillStyle = linearGradient;
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }, {
            key: 'renderRadialGradient',
            value: function renderRadialGradient(bounds, gradient) {
                var _this3 = this;

                var x = bounds.left + gradient.center.x;
                var y = bounds.top + gradient.center.y;

                var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
                if (!radialGradient) {
                    return;
                }

                addColorStops(gradient, radialGradient);
                this.ctx.fillStyle = radialGradient;

                if (gradient.radius.x !== gradient.radius.y) {
                    // transforms for elliptical radial gradient
                    var midX = bounds.left + 0.5 * bounds.width;
                    var midY = bounds.top + 0.5 * bounds.height;
                    var f = gradient.radius.y / gradient.radius.x;
                    var invF = 1 / f;

                    this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                        return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                    });
                } else {
                    this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
                }
            }
        }, {
            key: 'renderRepeat',
            value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
                this.path(path);
                this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
                this.ctx.translate(offsetX, offsetY);
                this.ctx.fill();
                this.ctx.translate(-offsetX, -offsetY);
            }
        }, {
            key: 'renderTextNode',
            value: function renderTextNode(textBounds, color, font, textDecoration$$1, textShadows) {
                var _this4 = this;

                this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

                textBounds.forEach(function (text) {
                    _this4.ctx.fillStyle = color.toString();
                    if (textShadows && text.text.trim().length) {
                        textShadows.slice(0).reverse().forEach(function (textShadow) {
                            _this4.ctx.shadowColor = textShadow.color.toString();
                            _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                            _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                            _this4.ctx.shadowBlur = textShadow.blur;

                            _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                        });
                    } else {
                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    }

                    if (textDecoration$$1 !== null) {
                        var textDecorationColor = textDecoration$$1.textDecorationColor || color;
                        textDecoration$$1.textDecorationLine.forEach(function (textDecorationLine) {
                            switch (textDecorationLine) {
                                case textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                    // Draws a line at the baseline of the font
                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                    // need to take that into account both in position and size
                                    var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                        baseline = _options$fontMetrics$.baseline;

                                    _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                    break;
                                case textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                    _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                    break;
                                case textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                    // TODO try and find exact position for line-through
                                    var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                        middle = _options$fontMetrics$2.middle;

                                    _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                    break;
                            }
                        });
                    }
                });
            }
        }, {
            key: 'resizeImage',
            value: function resizeImage(image, size) {
                if (image.width === size.width && image.height === size.height) {
                    return image;
                }

                var canvas = this.canvas.ownerDocument.createElement('canvas');
                canvas.width = size.width;
                canvas.height = size.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
                return canvas;
            }
        }, {
            key: 'setOpacity',
            value: function setOpacity(opacity) {
                this.ctx.globalAlpha = opacity;
            }
        }, {
            key: 'transform',
            value: function transform(offsetX, offsetY, matrix, callback) {
                this.ctx.save();
                this.ctx.translate(offsetX, offsetY);
                this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                this.ctx.translate(-offsetX, -offsetY);

                callback();

                this.ctx.restore();
            }
        }]);

        return CanvasRenderer;
    }();

    exports.default = CanvasRenderer;
});

unwrapExports(CanvasRenderer_1);

var Logger_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Logger = function () {
        function Logger(enabled, id, start) {
            _classCallCheck(this, Logger);

            this.enabled = typeof window !== 'undefined' && enabled;
            this.start = start ? start : Date.now();
            this.id = id;
        }

        _createClass(Logger, [{
            key: 'child',
            value: function child(id) {
                return new Logger(this.enabled, id, this.start);
            }

            // eslint-disable-next-line flowtype/no-weak-types

        }, {
            key: 'log',
            value: function log() {
                if (this.enabled && window.console && window.console.log) {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
                }
            }

            // eslint-disable-next-line flowtype/no-weak-types

        }, {
            key: 'error',
            value: function error() {
                if (this.enabled && window.console && window.console.error) {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
                }
            }
        }]);

        return Logger;
    }();

    exports.default = Logger;
});

unwrapExports(Logger_1);

var Util = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var contains = exports.contains = function contains(bit, value) {
        return (bit & value) !== 0;
    };

    var distance = exports.distance = function distance(a, b) {
        return Math.sqrt(a * a + b * b);
    };

    var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
        // Edge does not provide value for cssText
        for (var i = style.length - 1; i >= 0; i--) {
            var property = style.item(i);
            // Safari shows pseudoelements if content is set
            if (property !== 'content') {
                target.style.setProperty(property, style.getPropertyValue(property));
            }
        }
        return target;
    };

    var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
});

unwrapExports(Util);

var Length_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var LENGTH_TYPE = exports.LENGTH_TYPE = {
        PX: 0,
        PERCENTAGE: 1
    };

    var Length = function () {
        function Length(value) {
            _classCallCheck(this, Length);

            this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
            var parsedValue = parseFloat(value);
            if ("production" !== 'production' && isNaN(parsedValue)) {
                console.error('Invalid value given for Length: "' + value + '"');
            }
            this.value = isNaN(parsedValue) ? 0 : parsedValue;
        }

        _createClass(Length, [{
            key: 'isPercentage',
            value: function isPercentage() {
                return this.type === LENGTH_TYPE.PERCENTAGE;
            }
        }, {
            key: 'getAbsoluteValue',
            value: function getAbsoluteValue(parentLength) {
                return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
            }
        }], [{
            key: 'create',
            value: function create(v) {
                return new Length(v);
            }
        }]);

        return Length;
    }();

    exports.default = Length;

    var getRootFontSize = function getRootFontSize(container) {
        var parent = container.parent;
        return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
    };

    var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
        switch (unit) {
            case 'px':
            case '%':
                return new Length(value + unit);
            case 'em':
            case 'rem':
                var length = new Length(value);
                length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
                return length;
            default:
                // TODO: handle correctly if unknown unit is used
                return new Length('0');
        }
    };
});

unwrapExports(Length_1);

var Size_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Size = function Size(width, height) {
        _classCallCheck(this, Size);

        this.width = width;
        this.height = height;
    };

    exports.default = Size;
});

unwrapExports(Size_1);

var Vector_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Vector = function Vector(x, y) {
        _classCallCheck(this, Vector);

        this.type = Path.PATH.VECTOR;
        this.x = x;
        this.y = y;
    };

    exports.default = Vector;
});

unwrapExports(Vector_1);

var BezierCurve_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Vector2 = _interopRequireDefault(Vector_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var lerp = function lerp(a, b, t) {
        return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };

    var BezierCurve = function () {
        function BezierCurve(start, startControl, endControl, end) {
            _classCallCheck(this, BezierCurve);

            this.type = Path.PATH.BEZIER_CURVE;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
        }

        _createClass(BezierCurve, [{
            key: 'subdivide',
            value: function subdivide(t, firstHalf) {
                var ab = lerp(this.start, this.startControl, t);
                var bc = lerp(this.startControl, this.endControl, t);
                var cd = lerp(this.endControl, this.end, t);
                var abbc = lerp(ab, bc, t);
                var bccd = lerp(bc, cd, t);
                var dest = lerp(abbc, bccd, t);
                return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
            }
        }, {
            key: 'reverse',
            value: function reverse() {
                return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
            }
        }]);

        return BezierCurve;
    }();

    exports.default = BezierCurve;
});

unwrapExports(BezierCurve_1);

var Bounds_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Vector2 = _interopRequireDefault(Vector_1);

    var _BezierCurve2 = _interopRequireDefault(BezierCurve_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TOP = 0;
    var RIGHT = 1;
    var BOTTOM = 2;
    var LEFT = 3;

    var H = 0;
    var V = 1;

    var Bounds = exports.Bounds = function () {
        function Bounds(x, y, w, h) {
            _classCallCheck(this, Bounds);

            this.left = x;
            this.top = y;
            this.width = w;
            this.height = h;
        }

        _createClass(Bounds, null, [{
            key: 'fromClientRect',
            value: function fromClientRect(clientRect, scrollX, scrollY) {
                return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
            }
        }]);

        return Bounds;
    }();

    var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
        return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
    };

    var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
        return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
    };

    var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
        // TODO support percentage paddings
        var paddingTop = padding[TOP].value;
        var paddingRight = padding[RIGHT].value;
        var paddingBottom = padding[BOTTOM].value;
        var paddingLeft = padding[LEFT].value;

        return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
    };

    var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
        var body = document.body;
        var documentElement = document.documentElement;

        if (!body || !documentElement) {
            throw new Error('');
        }
        var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

        var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

        return new Bounds(0, 0, width, height);
    };

    var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
        switch (borderSide) {
            case TOP:
                return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
            case RIGHT:
                return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
            case BOTTOM:
                return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
            case LEFT:
            default:
                return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
        }
    };

    var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
        var path = [];
        if (outer1 instanceof _BezierCurve2.default) {
            path.push(outer1.subdivide(0.5, false));
        } else {
            path.push(outer1);
        }

        if (outer2 instanceof _BezierCurve2.default) {
            path.push(outer2.subdivide(0.5, true));
        } else {
            path.push(outer2);
        }

        if (inner2 instanceof _BezierCurve2.default) {
            path.push(inner2.subdivide(0.5, true).reverse());
        } else {
            path.push(inner2);
        }

        if (inner1 instanceof _BezierCurve2.default) {
            path.push(inner1.subdivide(0.5, false).reverse());
        } else {
            path.push(inner1);
        }

        return path;
    };

    var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
        return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
    };

    var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
        return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
    };

    var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
        var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
        var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
        var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
        var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
        var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
        var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
        var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
        var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

        var factors = [];
        factors.push((tlh + trh) / bounds.width);
        factors.push((blh + brh) / bounds.width);
        factors.push((tlv + blv) / bounds.height);
        factors.push((trv + brv) / bounds.height);
        var maxFactor = Math.max.apply(Math, factors);

        if (maxFactor > 1) {
            tlh /= maxFactor;
            tlv /= maxFactor;
            trh /= maxFactor;
            trv /= maxFactor;
            brh /= maxFactor;
            brv /= maxFactor;
            blh /= maxFactor;
            blv /= maxFactor;
        }

        var topWidth = bounds.width - trh;
        var rightHeight = bounds.height - brv;
        var bottomWidth = bounds.width - brh;
        var leftHeight = bounds.height - blv;

        return {
            topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
            topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
            topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
            topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
            bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
            bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
            bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
            bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
        };
    };

    var CORNER = {
        TOP_LEFT: 0,
        TOP_RIGHT: 1,
        BOTTOM_RIGHT: 2,
        BOTTOM_LEFT: 3
    };

    var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
        var ox = r1 * kappa; // control point offset horizontal
        var oy = r2 * kappa; // control point offset vertical
        var xm = x + r1; // x-middle
        var ym = y + r2; // y-middle

        switch (position) {
            case CORNER.TOP_LEFT:
                return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
            case CORNER.TOP_RIGHT:
                return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
            case CORNER.BOTTOM_RIGHT:
                return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
                return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
        }
    };
});

unwrapExports(Bounds_1);

var padding = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parsePadding = exports.PADDING_SIDES = undefined;

    var _Length2 = _interopRequireDefault(Length_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var PADDING_SIDES = exports.PADDING_SIDES = {
        TOP: 0,
        RIGHT: 1,
        BOTTOM: 2,
        LEFT: 3
    };

    var SIDES = ['top', 'right', 'bottom', 'left'];

    var parsePadding = exports.parsePadding = function parsePadding(style) {
        return SIDES.map(function (side) {
            return new _Length2.default(style.getPropertyValue('padding-' + side));
        });
    };
});

unwrapExports(padding);

var background = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

    var _Color2 = _interopRequireDefault(Color_1);

    var _Length2 = _interopRequireDefault(Length_1);

    var _Size2 = _interopRequireDefault(Size_1);

    var _Vector2 = _interopRequireDefault(Vector_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
        REPEAT: 0,
        NO_REPEAT: 1,
        REPEAT_X: 2,
        REPEAT_Y: 3
    };

    var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
        AUTO: 0,
        CONTAIN: 1,
        COVER: 2,
        LENGTH: 3
    };

    var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
        BORDER_BOX: 0,
        PADDING_BOX: 1,
        CONTENT_BOX: 2
    };

    var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

    var AUTO = 'auto';

    var BackgroundSize = function BackgroundSize(size) {
        _classCallCheck(this, BackgroundSize);

        switch (size) {
            case 'contain':
                this.size = BACKGROUND_SIZE.CONTAIN;
                break;
            case 'cover':
                this.size = BACKGROUND_SIZE.COVER;
                break;
            case 'auto':
                this.size = BACKGROUND_SIZE.AUTO;
                break;
            default:
                this.value = new _Length2.default(size);
        }
    };

    var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
        var width = 0;
        var height = 0;
        var size = backgroundImage.size;
        if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
            var targetRatio = bounds.width / bounds.height;
            var currentRatio = image.width / image.height;
            return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
        }

        if (size[0].value) {
            width = size[0].value.getAbsoluteValue(bounds.width);
        }

        if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
            height = image.height;
        } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
            height = width / image.width * image.height;
        } else if (size[1].value) {
            height = size[1].value.getAbsoluteValue(bounds.height);
        }

        if (size[0].size === BACKGROUND_SIZE.AUTO) {
            width = height / image.height * image.width;
        }

        return new _Size2.default(width, height);
    };

    var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
        var size = backgroundImage.size;
        var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
        var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

        return new _Size2.default(width, height);
    };

    var AUTO_SIZE = new BackgroundSize(AUTO);

    var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
        switch (clip) {
            case BACKGROUND_CLIP.BORDER_BOX:
                return (Bounds_1.calculateBorderBoxPath)(curves);
            case BACKGROUND_CLIP.PADDING_BOX:
            default:
                return (Bounds_1.calculatePaddingBoxPath)(curves);
        }
    };

    var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding$$1, border) {
        var paddingBox = (Bounds_1.calculatePaddingBox)(bounds, border);

        switch (backgroundOrigin) {
            case BACKGROUND_ORIGIN.BORDER_BOX:
                return bounds;
            case BACKGROUND_ORIGIN.CONTENT_BOX:
                var paddingLeft = padding$$1[padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
                var paddingRight = padding$$1[padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
                var paddingTop = padding$$1[padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
                var paddingBottom = padding$$1[padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
                return new Bounds_1.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
            case BACKGROUND_ORIGIN.PADDING_BOX:
            default:
                return paddingBox;
        }
    };

    var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
        return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
    };

    var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
        var repeat = background.repeat;
        switch (repeat) {
            case BACKGROUND_REPEAT.REPEAT_X:
                return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
            case BACKGROUND_REPEAT.REPEAT_Y:
                return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
            case BACKGROUND_REPEAT.NO_REPEAT:
                return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
            default:
                return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
        }
    };

    var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
        return {
            backgroundColor: new _Color2.default(style.backgroundColor),
            backgroundImage: parseBackgroundImages(style, resourceLoader),
            backgroundClip: parseBackgroundClip(style.backgroundClip),
            backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
        };
    };

    var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
        switch (backgroundClip) {
            case 'padding-box':
                return BACKGROUND_CLIP.PADDING_BOX;
            case 'content-box':
                return BACKGROUND_CLIP.CONTENT_BOX;
        }
        return BACKGROUND_CLIP.BORDER_BOX;
    };

    var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
        switch (backgroundOrigin) {
            case 'padding-box':
                return BACKGROUND_ORIGIN.PADDING_BOX;
            case 'content-box':
                return BACKGROUND_ORIGIN.CONTENT_BOX;
        }
        return BACKGROUND_ORIGIN.BORDER_BOX;
    };

    var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
        switch (backgroundRepeat.trim()) {
            case 'no-repeat':
                return BACKGROUND_REPEAT.NO_REPEAT;
            case 'repeat-x':
            case 'repeat no-repeat':
                return BACKGROUND_REPEAT.REPEAT_X;
            case 'repeat-y':
            case 'no-repeat repeat':
                return BACKGROUND_REPEAT.REPEAT_Y;
            case 'repeat':
                return BACKGROUND_REPEAT.REPEAT;
        }

        return BACKGROUND_REPEAT.REPEAT;
    };

    var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
        var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
            if (backgroundImage.method === 'url') {
                var key = resourceLoader.loadImage(backgroundImage.args[0]);
                backgroundImage.args = key ? [key] : [];
            }
            return backgroundImage;
        });
        var positions = style.backgroundPosition.split(',');
        var repeats = style.backgroundRepeat.split(',');
        var sizes = style.backgroundSize.split(',');

        return sources.map(function (source, index) {
            var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
            var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

            return {
                source: source,
                repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
                size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
                position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
            };
        });
    };

    var parseBackgroundSize = function parseBackgroundSize(size) {
        return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
    };

    var parseBackgoundPosition = function parseBackgoundPosition(position) {
        switch (position) {
            case 'bottom':
            case 'right':
                return new _Length2.default('100%');
            case 'left':
            case 'top':
                return new _Length2.default('0%');
            case 'auto':
                return new _Length2.default('0');
        }
        return new _Length2.default(position);
    };

    var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
        var whitespace = /^\s$/;
        var results = [];

        var args = [];
        var method = '';
        var quote = null;
        var definition = '';
        var mode = 0;
        var numParen = 0;

        var appendResult = function appendResult() {
            var prefix = '';
            if (method) {
                if (definition.substr(0, 1) === '"') {
                    definition = definition.substr(1, definition.length - 2);
                }

                if (definition) {
                    args.push(definition.trim());
                }

                var prefix_i = method.indexOf('-', 1) + 1;
                if (method.substr(0, 1) === '-' && prefix_i > 0) {
                    prefix = method.substr(0, prefix_i).toLowerCase();
                    method = method.substr(prefix_i);
                }
                method = method.toLowerCase();
                if (method !== 'none') {
                    results.push({
                        prefix: prefix,
                        method: method,
                        args: args
                    });
                }
            }
            args = [];
            method = definition = '';
        };

        image.split('').forEach(function (c) {
            if (mode === 0 && whitespace.test(c)) {
                return;
            }
            switch (c) {
                case '"':
                    if (!quote) {
                        quote = c;
                    } else if (quote === c) {
                        quote = null;
                    }
                    break;
                case '(':
                    if (quote) {
                        break;
                    } else if (mode === 0) {
                        mode = 1;
                        return;
                    } else {
                        numParen++;
                    }
                    break;
                case ')':
                    if (quote) {
                        break;
                    } else if (mode === 1) {
                        if (numParen === 0) {
                            mode = 0;
                            appendResult();
                            return;
                        } else {
                            numParen--;
                        }
                    }
                    break;

                case ',':
                    if (quote) {
                        break;
                    } else if (mode === 0) {
                        appendResult();
                        return;
                    } else if (mode === 1) {
                        if (numParen === 0 && !method.match(/^url$/i)) {
                            args.push(definition.trim());
                            definition = '';
                            return;
                        }
                    }
                    break;
            }

            if (mode === 0) {
                method += c;
            } else {
                definition += c;
            }
        });

        appendResult();
        return results;
    };
});

unwrapExports(background);

var border = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

    var _Color2 = _interopRequireDefault(Color_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var BORDER_STYLE = exports.BORDER_STYLE = {
        NONE: 0,
        SOLID: 1
    };

    var BORDER_SIDES = exports.BORDER_SIDES = {
        TOP: 0,
        RIGHT: 1,
        BOTTOM: 2,
        LEFT: 3
    };

    var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
        return s.toLowerCase();
    });

    var parseBorderStyle = function parseBorderStyle(style) {
        switch (style) {
            case 'none':
                return BORDER_STYLE.NONE;
        }
        return BORDER_STYLE.SOLID;
    };

    var parseBorder = exports.parseBorder = function parseBorder(style) {
        return SIDES.map(function (side) {
            var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
            var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
            var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
            return {
                borderColor: borderColor,
                borderStyle: borderStyle,
                borderWidth: isNaN(borderWidth) ? 0 : borderWidth
            };
        });
    };
});

unwrapExports(border);

var borderRadius = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseBorderRadius = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _Length2 = _interopRequireDefault(Length_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

    var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
        return SIDES.map(function (side) {
            var value = style.getPropertyValue('border-' + side + '-radius');

            var _value$split$map = value.split(' ').map(_Length2.default.create),
                _value$split$map2 = _slicedToArray(_value$split$map, 2),
                horizontal = _value$split$map2[0],
                vertical = _value$split$map2[1];

            return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
        });
    };
});

unwrapExports(borderRadius);

var display = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var DISPLAY = exports.DISPLAY = {
        NONE: 1 << 0,
        BLOCK: 1 << 1,
        INLINE: 1 << 2,
        RUN_IN: 1 << 3,
        FLOW: 1 << 4,
        FLOW_ROOT: 1 << 5,
        TABLE: 1 << 6,
        FLEX: 1 << 7,
        GRID: 1 << 8,
        RUBY: 1 << 9,
        SUBGRID: 1 << 10,
        LIST_ITEM: 1 << 11,
        TABLE_ROW_GROUP: 1 << 12,
        TABLE_HEADER_GROUP: 1 << 13,
        TABLE_FOOTER_GROUP: 1 << 14,
        TABLE_ROW: 1 << 15,
        TABLE_CELL: 1 << 16,
        TABLE_COLUMN_GROUP: 1 << 17,
        TABLE_COLUMN: 1 << 18,
        TABLE_CAPTION: 1 << 19,
        RUBY_BASE: 1 << 20,
        RUBY_TEXT: 1 << 21,
        RUBY_BASE_CONTAINER: 1 << 22,
        RUBY_TEXT_CONTAINER: 1 << 23,
        CONTENTS: 1 << 24,
        INLINE_BLOCK: 1 << 25,
        INLINE_LIST_ITEM: 1 << 26,
        INLINE_TABLE: 1 << 27,
        INLINE_FLEX: 1 << 28,
        INLINE_GRID: 1 << 29
    };

    var parseDisplayValue = function parseDisplayValue(display) {
        switch (display) {
            case 'block':
                return DISPLAY.BLOCK;
            case 'inline':
                return DISPLAY.INLINE;
            case 'run-in':
                return DISPLAY.RUN_IN;
            case 'flow':
                return DISPLAY.FLOW;
            case 'flow-root':
                return DISPLAY.FLOW_ROOT;
            case 'table':
                return DISPLAY.TABLE;
            case 'flex':
                return DISPLAY.FLEX;
            case 'grid':
                return DISPLAY.GRID;
            case 'ruby':
                return DISPLAY.RUBY;
            case 'subgrid':
                return DISPLAY.SUBGRID;
            case 'list-item':
                return DISPLAY.LIST_ITEM;
            case 'table-row-group':
                return DISPLAY.TABLE_ROW_GROUP;
            case 'table-header-group':
                return DISPLAY.TABLE_HEADER_GROUP;
            case 'table-footer-group':
                return DISPLAY.TABLE_FOOTER_GROUP;
            case 'table-row':
                return DISPLAY.TABLE_ROW;
            case 'table-cell':
                return DISPLAY.TABLE_CELL;
            case 'table-column-group':
                return DISPLAY.TABLE_COLUMN_GROUP;
            case 'table-column':
                return DISPLAY.TABLE_COLUMN;
            case 'table-caption':
                return DISPLAY.TABLE_CAPTION;
            case 'ruby-base':
                return DISPLAY.RUBY_BASE;
            case 'ruby-text':
                return DISPLAY.RUBY_TEXT;
            case 'ruby-base-container':
                return DISPLAY.RUBY_BASE_CONTAINER;
            case 'ruby-text-container':
                return DISPLAY.RUBY_TEXT_CONTAINER;
            case 'contents':
                return DISPLAY.CONTENTS;
            case 'inline-block':
                return DISPLAY.INLINE_BLOCK;
            case 'inline-list-item':
                return DISPLAY.INLINE_LIST_ITEM;
            case 'inline-table':
                return DISPLAY.INLINE_TABLE;
            case 'inline-flex':
                return DISPLAY.INLINE_FLEX;
            case 'inline-grid':
                return DISPLAY.INLINE_GRID;
        }

        return DISPLAY.NONE;
    };

    var setDisplayBit = function setDisplayBit(bit, display) {
        return bit | parseDisplayValue(display);
    };

    var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
        return display.split(' ').reduce(setDisplayBit, 0);
    };
});

unwrapExports(display);

var float_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var FLOAT = exports.FLOAT = {
        NONE: 0,
        LEFT: 1,
        RIGHT: 2,
        INLINE_START: 3,
        INLINE_END: 4
    };

    var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
        switch (float) {
            case 'left':
                return FLOAT.LEFT;
            case 'right':
                return FLOAT.RIGHT;
            case 'inline-start':
                return FLOAT.INLINE_START;
            case 'inline-end':
                return FLOAT.INLINE_END;
        }
        return FLOAT.NONE;
    };
});

unwrapExports(float_1);

var font = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var parseFontWeight = function parseFontWeight(weight) {
        switch (weight) {
            case 'normal':
                return 400;
            case 'bold':
                return 700;
        }

        var value = parseInt(weight, 10);
        return isNaN(value) ? 400 : value;
    };

    var parseFont = exports.parseFont = function parseFont(style) {
        var fontFamily = style.fontFamily;
        var fontSize = style.fontSize;
        var fontStyle = style.fontStyle;
        var fontVariant = style.fontVariant;
        var fontWeight = parseFontWeight(style.fontWeight);

        return {
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontStyle: fontStyle,
            fontVariant: fontVariant,
            fontWeight: fontWeight
        };
    };
});

unwrapExports(font);

var letterSpacing = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
        if (letterSpacing === 'normal') {
            return 0;
        }
        var value = parseFloat(letterSpacing);
        return isNaN(value) ? 0 : value;
    };
});

unwrapExports(letterSpacing);

var lineBreak = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var LINE_BREAK = exports.LINE_BREAK = {
        NORMAL: 'normal',
        STRICT: 'strict'
    };

    var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
        switch (wordBreak) {
            case 'strict':
                return LINE_BREAK.STRICT;
            case 'normal':
            default:
                return LINE_BREAK.NORMAL;
        }
    };
});

unwrapExports(lineBreak);

var listStyle = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

    var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
        INSIDE: 0,
        OUTSIDE: 1
    };

    var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
        NONE: -1,
        DISC: 0,
        CIRCLE: 1,
        SQUARE: 2,
        DECIMAL: 3,
        CJK_DECIMAL: 4,
        DECIMAL_LEADING_ZERO: 5,
        LOWER_ROMAN: 6,
        UPPER_ROMAN: 7,
        LOWER_GREEK: 8,
        LOWER_ALPHA: 9,
        UPPER_ALPHA: 10,
        ARABIC_INDIC: 11,
        ARMENIAN: 12,
        BENGALI: 13,
        CAMBODIAN: 14,
        CJK_EARTHLY_BRANCH: 15,
        CJK_HEAVENLY_STEM: 16,
        CJK_IDEOGRAPHIC: 17,
        DEVANAGARI: 18,
        ETHIOPIC_NUMERIC: 19,
        GEORGIAN: 20,
        GUJARATI: 21,
        GURMUKHI: 22,
        HEBREW: 22,
        HIRAGANA: 23,
        HIRAGANA_IROHA: 24,
        JAPANESE_FORMAL: 25,
        JAPANESE_INFORMAL: 26,
        KANNADA: 27,
        KATAKANA: 28,
        KATAKANA_IROHA: 29,
        KHMER: 30,
        KOREAN_HANGUL_FORMAL: 31,
        KOREAN_HANJA_FORMAL: 32,
        KOREAN_HANJA_INFORMAL: 33,
        LAO: 34,
        LOWER_ARMENIAN: 35,
        MALAYALAM: 36,
        MONGOLIAN: 37,
        MYANMAR: 38,
        ORIYA: 39,
        PERSIAN: 40,
        SIMP_CHINESE_FORMAL: 41,
        SIMP_CHINESE_INFORMAL: 42,
        TAMIL: 43,
        TELUGU: 44,
        THAI: 45,
        TIBETAN: 46,
        TRAD_CHINESE_FORMAL: 47,
        TRAD_CHINESE_INFORMAL: 48,
        UPPER_ARMENIAN: 49,
        DISCLOSURE_OPEN: 50,
        DISCLOSURE_CLOSED: 51
    };

    var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
        switch (type) {
            case 'disc':
                return LIST_STYLE_TYPE.DISC;
            case 'circle':
                return LIST_STYLE_TYPE.CIRCLE;
            case 'square':
                return LIST_STYLE_TYPE.SQUARE;
            case 'decimal':
                return LIST_STYLE_TYPE.DECIMAL;
            case 'cjk-decimal':
                return LIST_STYLE_TYPE.CJK_DECIMAL;
            case 'decimal-leading-zero':
                return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
            case 'lower-roman':
                return LIST_STYLE_TYPE.LOWER_ROMAN;
            case 'upper-roman':
                return LIST_STYLE_TYPE.UPPER_ROMAN;
            case 'lower-greek':
                return LIST_STYLE_TYPE.LOWER_GREEK;
            case 'lower-alpha':
                return LIST_STYLE_TYPE.LOWER_ALPHA;
            case 'upper-alpha':
                return LIST_STYLE_TYPE.UPPER_ALPHA;
            case 'arabic-indic':
                return LIST_STYLE_TYPE.ARABIC_INDIC;
            case 'armenian':
                return LIST_STYLE_TYPE.ARMENIAN;
            case 'bengali':
                return LIST_STYLE_TYPE.BENGALI;
            case 'cambodian':
                return LIST_STYLE_TYPE.CAMBODIAN;
            case 'cjk-earthly-branch':
                return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
            case 'cjk-heavenly-stem':
                return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
            case 'cjk-ideographic':
                return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
            case 'devanagari':
                return LIST_STYLE_TYPE.DEVANAGARI;
            case 'ethiopic-numeric':
                return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
            case 'georgian':
                return LIST_STYLE_TYPE.GEORGIAN;
            case 'gujarati':
                return LIST_STYLE_TYPE.GUJARATI;
            case 'gurmukhi':
                return LIST_STYLE_TYPE.GURMUKHI;
            case 'hebrew':
                return LIST_STYLE_TYPE.HEBREW;
            case 'hiragana':
                return LIST_STYLE_TYPE.HIRAGANA;
            case 'hiragana-iroha':
                return LIST_STYLE_TYPE.HIRAGANA_IROHA;
            case 'japanese-formal':
                return LIST_STYLE_TYPE.JAPANESE_FORMAL;
            case 'japanese-informal':
                return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
            case 'kannada':
                return LIST_STYLE_TYPE.KANNADA;
            case 'katakana':
                return LIST_STYLE_TYPE.KATAKANA;
            case 'katakana-iroha':
                return LIST_STYLE_TYPE.KATAKANA_IROHA;
            case 'khmer':
                return LIST_STYLE_TYPE.KHMER;
            case 'korean-hangul-formal':
                return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
            case 'korean-hanja-formal':
                return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
            case 'korean-hanja-informal':
                return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
            case 'lao':
                return LIST_STYLE_TYPE.LAO;
            case 'lower-armenian':
                return LIST_STYLE_TYPE.LOWER_ARMENIAN;
            case 'malayalam':
                return LIST_STYLE_TYPE.MALAYALAM;
            case 'mongolian':
                return LIST_STYLE_TYPE.MONGOLIAN;
            case 'myanmar':
                return LIST_STYLE_TYPE.MYANMAR;
            case 'oriya':
                return LIST_STYLE_TYPE.ORIYA;
            case 'persian':
                return LIST_STYLE_TYPE.PERSIAN;
            case 'simp-chinese-formal':
                return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
            case 'simp-chinese-informal':
                return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
            case 'tamil':
                return LIST_STYLE_TYPE.TAMIL;
            case 'telugu':
                return LIST_STYLE_TYPE.TELUGU;
            case 'thai':
                return LIST_STYLE_TYPE.THAI;
            case 'tibetan':
                return LIST_STYLE_TYPE.TIBETAN;
            case 'trad-chinese-formal':
                return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
            case 'trad-chinese-informal':
                return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
            case 'upper-armenian':
                return LIST_STYLE_TYPE.UPPER_ARMENIAN;
            case 'disclosure-open':
                return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
            case 'disclosure-closed':
                return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
            case 'none':
            default:
                return LIST_STYLE_TYPE.NONE;
        }
    };

    var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
        var listStyleImage = (background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
        return {
            listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
            listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
            listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
        };
    };

    var parseListStylePosition = function parseListStylePosition(position) {
        switch (position) {
            case 'inside':
                return LIST_STYLE_POSITION.INSIDE;
            case 'outside':
            default:
                return LIST_STYLE_POSITION.OUTSIDE;
        }
    };
});

unwrapExports(listStyle);

var margin = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseMargin = undefined;

    var _Length2 = _interopRequireDefault(Length_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var SIDES = ['top', 'right', 'bottom', 'left'];

    var parseMargin = exports.parseMargin = function parseMargin(style) {
        return SIDES.map(function (side) {
            return new _Length2.default(style.getPropertyValue('margin-' + side));
        });
    };
});

unwrapExports(margin);

var overflow = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var OVERFLOW = exports.OVERFLOW = {
        VISIBLE: 0,
        HIDDEN: 1,
        SCROLL: 2,
        AUTO: 3
    };

    var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
        switch (overflow) {
            case 'hidden':
                return OVERFLOW.HIDDEN;
            case 'scroll':
                return OVERFLOW.SCROLL;
            case 'auto':
                return OVERFLOW.AUTO;
            case 'visible':
            default:
                return OVERFLOW.VISIBLE;
        }
    };
});

unwrapExports(overflow);

var overflowWrap = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
        NORMAL: 0,
        BREAK_WORD: 1
    };

    var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
        switch (overflow) {
            case 'break-word':
                return OVERFLOW_WRAP.BREAK_WORD;
            case 'normal':
            default:
                return OVERFLOW_WRAP.NORMAL;
        }
    };
});

unwrapExports(overflowWrap);

var position = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var POSITION = exports.POSITION = {
        STATIC: 0,
        RELATIVE: 1,
        ABSOLUTE: 2,
        FIXED: 3,
        STICKY: 4
    };

    var parsePosition = exports.parsePosition = function parsePosition(position) {
        switch (position) {
            case 'relative':
                return POSITION.RELATIVE;
            case 'absolute':
                return POSITION.ABSOLUTE;
            case 'fixed':
                return POSITION.FIXED;
            case 'sticky':
                return POSITION.STICKY;
        }

        return POSITION.STATIC;
    };
});

unwrapExports(position);

var textShadow = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTextShadow = undefined;

    var _Color2 = _interopRequireDefault(Color_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var NUMBER = /^([+-]|\d|\.)$/i;

    var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
        if (textShadow === 'none' || typeof textShadow !== 'string') {
            return null;
        }

        var currentValue = '';
        var isLength = false;
        var values = [];
        var shadows = [];
        var numParens = 0;
        var color = null;

        var appendValue = function appendValue() {
            if (currentValue.length) {
                if (isLength) {
                    values.push(parseFloat(currentValue));
                } else {
                    color = new _Color2.default(currentValue);
                }
            }
            isLength = false;
            currentValue = '';
        };

        var appendShadow = function appendShadow() {
            if (values.length && color !== null) {
                shadows.push({
                    color: color,
                    offsetX: values[0] || 0,
                    offsetY: values[1] || 0,
                    blur: values[2] || 0
                });
            }
            values.splice(0, values.length);
            color = null;
        };

        for (var i = 0; i < textShadow.length; i++) {
            var c = textShadow[i];
            switch (c) {
                case '(':
                    currentValue += c;
                    numParens++;
                    break;
                case ')':
                    currentValue += c;
                    numParens--;
                    break;
                case ',':
                    if (numParens === 0) {
                        appendValue();
                        appendShadow();
                    } else {
                        currentValue += c;
                    }
                    break;
                case ' ':
                    if (numParens === 0) {
                        appendValue();
                    } else {
                        currentValue += c;
                    }
                    break;
                default:
                    if (currentValue.length === 0 && NUMBER.test(c)) {
                        isLength = true;
                    }
                    currentValue += c;
            }
        }

        appendValue();
        appendShadow();

        if (shadows.length === 0) {
            return null;
        }

        return shadows;
    };
});

unwrapExports(textShadow);

var textTransform = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
        NONE: 0,
        LOWERCASE: 1,
        UPPERCASE: 2,
        CAPITALIZE: 3
    };

    var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
        switch (textTransform) {
            case 'uppercase':
                return TEXT_TRANSFORM.UPPERCASE;
            case 'lowercase':
                return TEXT_TRANSFORM.LOWERCASE;
            case 'capitalize':
                return TEXT_TRANSFORM.CAPITALIZE;
        }

        return TEXT_TRANSFORM.NONE;
    };
});

unwrapExports(textTransform);

var transform = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTransform = undefined;

    var _Length2 = _interopRequireDefault(Length_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var toFloat = function toFloat(s) {
        return parseFloat(s.trim());
    };

    var MATRIX = /(matrix|matrix3d)\((.+)\)/;

    var parseTransform = exports.parseTransform = function parseTransform(style) {
        var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
        // $FlowFixMe
        style.msTransform ||
        // $FlowFixMe
        style.oTransform);
        if (transform === null) {
            return null;
        }

        return {
            transform: transform,
            transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
            // $FlowFixMe
            style.msTransformOrigin ||
            // $FlowFixMe
            style.oTransformOrigin)
        };
    };

    // $FlowFixMe
    var parseTransformOrigin = function parseTransformOrigin(origin) {
        if (typeof origin !== 'string') {
            var v = new _Length2.default('0');
            return [v, v];
        }
        var values = origin.split(' ').map(_Length2.default.create);
        return [values[0], values[1]];
    };

    // $FlowFixMe
    var parseTransformMatrix = function parseTransformMatrix(transform) {
        if (transform === 'none' || typeof transform !== 'string') {
            return null;
        }

        var match = transform.match(MATRIX);
        if (match) {
            if (match[1] === 'matrix') {
                var matrix = match[2].split(',').map(toFloat);
                return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
            } else {
                var matrix3d = match[2].split(',').map(toFloat);
                return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
            }
        }
        return null;
    };
});

unwrapExports(transform);

var visibility = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var VISIBILITY = exports.VISIBILITY = {
        VISIBLE: 0,
        HIDDEN: 1,
        COLLAPSE: 2
    };

    var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
        switch (visibility) {
            case 'hidden':
                return VISIBILITY.HIDDEN;
            case 'collapse':
                return VISIBILITY.COLLAPSE;
            case 'visible':
            default:
                return VISIBILITY.VISIBLE;
        }
    };
});

unwrapExports(visibility);

var wordBreak = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var WORD_BREAK = exports.WORD_BREAK = {
        NORMAL: 'normal',
        BREAK_ALL: 'break-all',
        KEEP_ALL: 'keep-all'
    };

    var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
        switch (wordBreak) {
            case 'break-all':
                return WORD_BREAK.BREAK_ALL;
            case 'keep-all':
                return WORD_BREAK.KEEP_ALL;
            case 'normal':
            default:
                return WORD_BREAK.NORMAL;
        }
    };
});

unwrapExports(wordBreak);

var zIndex = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
        var auto = zIndex === 'auto';
        return {
            auto: auto,
            order: auto ? 0 : parseInt(zIndex, 10)
        };
    };
});

unwrapExports(zIndex);

var ForeignObjectRenderer_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ForeignObjectRenderer = function () {
        function ForeignObjectRenderer(element) {
            _classCallCheck(this, ForeignObjectRenderer);

            this.element = element;
        }

        _createClass(ForeignObjectRenderer, [{
            key: 'render',
            value: function render(options) {
                var _this = this;

                this.options = options;
                this.canvas = document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.canvas.width = Math.floor(options.width) * options.scale;
                this.canvas.height = Math.floor(options.height) * options.scale;
                this.canvas.style.width = options.width + 'px';
                this.canvas.style.height = options.height + 'px';

                options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
                var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

                return loadSerializedSVG(svg).then(function (img) {
                    if (options.backgroundColor) {
                        _this.ctx.fillStyle = options.backgroundColor.toString();
                        _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                    }

                    _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                    return _this.canvas;
                });
            }
        }]);

        return ForeignObjectRenderer;
    }();

    exports.default = ForeignObjectRenderer;
    var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
        var xmlns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(xmlns, 'svg');
        var foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttributeNS(null, 'width', width);
        svg.setAttributeNS(null, 'height', height);

        foreignObject.setAttributeNS(null, 'width', '100%');
        foreignObject.setAttributeNS(null, 'height', '100%');
        foreignObject.setAttributeNS(null, 'x', x);
        foreignObject.setAttributeNS(null, 'y', y);
        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);

        foreignObject.appendChild(node);

        return svg;
    };

    var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                return resolve(img);
            };
            img.onerror = reject;

            img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
});

unwrapExports(ForeignObjectRenderer_1);

var Feature = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var testRangeBounds = function testRangeBounds(document) {
        var TEST_HEIGHT = 123;

        if (document.createRange) {
            var range = document.createRange();
            if (range.getBoundingClientRect) {
                var testElement = document.createElement('boundtest');
                testElement.style.height = TEST_HEIGHT + 'px';
                testElement.style.display = 'block';
                document.body.appendChild(testElement);

                range.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                document.body.removeChild(testElement);
                if (rangeHeight === TEST_HEIGHT) {
                    return true;
                }
            }
        }

        return false;
    };

    // iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
    var testBase64 = function testBase64(document, src) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        return new Promise(function (resolve) {
            // Single pixel base64 image renders fine on iOS 10.3???
            img.src = src;

            var onload = function onload() {
                try {
                    ctx.drawImage(img, 0, 0);
                    canvas.toDataURL();
                } catch (e) {
                    return resolve(false);
                }

                return resolve(true);
            };

            img.onload = onload;
            img.onerror = function () {
                return resolve(false);
            };

            if (img.complete === true) {
                setTimeout(function () {
                    onload();
                }, 500);
            }
        });
    };

    var testCORS = function testCORS() {
        return typeof new Image().crossOrigin !== 'undefined';
    };

    var testResponseType = function testResponseType() {
        return typeof new XMLHttpRequest().responseType === 'string';
    };

    var testSVG = function testSVG(document) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

        try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
        } catch (e) {
            return false;
        }
        return true;
    };

    var isGreenPixel = function isGreenPixel(data) {
        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
    };

    var testForeignObject = function testForeignObject(document) {
        var canvas = document.createElement('canvas');
        var size = 100;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, size, size);

        var img = new Image();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = (ForeignObjectRenderer_1.createForeignObjectSVG)(size, size, 0, 0, img);
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        return (ForeignObjectRenderer_1.loadSerializedSVG)(svg).then(function (img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);

            var node = document.createElement('div');
            node.style.backgroundImage = 'url(' + greenImageSrc + ')';
            node.style.height = size + 'px';
            // Firefox 55 does not render inline <img /> tags
            return isGreenPixel(data) ? (ForeignObjectRenderer_1.loadSerializedSVG)((ForeignObjectRenderer_1.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
        }).then(function (img) {
            ctx.drawImage(img, 0, 0);
            // Edge does not render background-images
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
        }).catch(function (e) {
            return false;
        });
    };

    var FEATURES = {
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_RANGE_BOUNDS() {
            'use strict';

            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_SVG_DRAWING() {
            'use strict';

            var value = testSVG(document);
            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_BASE64_DRAWING() {
            'use strict';

            return function (src) {
                var _value = testBase64(document, src);
                Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                        return _value;
                    } });
                return _value;
            };
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            'use strict';

            var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_CORS_IMAGES() {
            'use strict';

            var value = testCORS();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_RESPONSE_TYPE() {
            'use strict';

            var value = testResponseType();
            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
            return value;
        },
        // $FlowFixMe - get/set properties not yet supported
        get SUPPORT_CORS_XHR() {
            'use strict';

            var value = 'withCredentials' in new XMLHttpRequest();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
            return value;
        }
    };

    exports.default = FEATURES;
});

unwrapExports(Feature);

var Util$2 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                } else {
                    codePoints.push(value);
                    i--;
                }
            } else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };

    var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, arguments);
        }

        var length = arguments.length;
        if (!length) {
            return '';
        }

        var codeUnits = [];

        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = arguments.length <= index ? undefined : arguments[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            } else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
    }

    var decode = exports.decode = function decode(base64) {
        var bufferLength = base64.length * 0.75,
            len = base64.length,
            i = void 0,
            p = 0,
            encoded1 = void 0,
            encoded2 = void 0,
            encoded3 = void 0,
            encoded4 = void 0;

        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }

        var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

        for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];

            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }

        return buffer;
    };

    var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var _i = 0; _i < length; _i += 2) {
            bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
        }
        return bytes;
    };

    var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var _i2 = 0; _i2 < length; _i2 += 4) {
            bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
        }
        return bytes;
    };
});

unwrapExports(Util$2);

var Trie_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

    var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

    var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
        var buffer = (Util$2.decode)(base64);
        var view32 = Array.isArray(buffer) ? (Util$2.polyUint32Array)(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? (Util$2.polyUint16Array)(buffer) : new Uint16Array(buffer);
        var headerLength = 24;

        var index = view16.slice(headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };

    var Trie = exports.Trie = function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            _classCallCheck(this, Trie);

            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }

        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */

        _createClass(Trie, [{
            key: 'get',
            value: function get(codePoint) {
                var ix = void 0;
                if (codePoint >= 0) {
                    if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                        // Ordinary BMP code point, excluding leading surrogates.
                        // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                        // 16 bit data is stored in the index array itself.
                        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }

                    if (codePoint <= 0xffff) {
                        // Lead Surrogate Code Point.  A Separate index section is stored for
                        // lead surrogate code units and code points.
                        //   The main index has the code unit data.
                        //   For this function, we need the code point data.
                        // Note: this expression could be refactored for slightly improved efficiency, but
                        //       surrogate code points will be so rare in practice that it's not worth it.
                        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }

                    if (codePoint < this.highStart) {
                        // Supplemental code point, use two-level lookup.
                        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                        ix = this.index[ix];
                        ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                        ix = this.index[ix];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0x10ffff) {
                        return this.data[this.highValueIndex];
                    }
                }

                // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
                return this.errorValue;
            }
        }]);

        return Trie;
    }();
});

unwrapExports(Trie_1);

'use strict';

var linebreakTrie = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

var LineBreak = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _linebreakTrie2 = _interopRequireDefault(linebreakTrie);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

    // Non-tailorable Line Breaking Classes
    var BK = 1; //  Cause a line break (after)
    var CR = 2; //  Cause a line break (after), except between CR and LF
    var LF = 3; //  Cause a line break (after)
    var CM = 4; //  Prohibit a line break between the character and the preceding character
    var NL = 5; //  Cause a line break (after)
    var SG = 6; //  Do not occur in well-formed text
    var WJ = 7; //  Prohibit line breaks before and after
    var ZW = 8; //  Provide a break opportunity
    var GL = 9; //  Prohibit line breaks before and after
    var SP = 10; // Enable indirect line breaks
    var ZWJ = 11; // Prohibit line breaks within joiner sequences
    // Break Opportunities
    var B2 = 12; //  Provide a line break opportunity before and after the character
    var BA = 13; //  Generally provide a line break opportunity after the character
    var BB = 14; //  Generally provide a line break opportunity before the character
    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
    var CB = 16; //   Provide a line break opportunity contingent on additional information
    // Characters Prohibiting Certain Breaks
    var CL = 17; //  Prohibit line breaks before
    var CP = 18; //  Prohibit line breaks before
    var EX = 19; //  Prohibit line breaks before
    var IN = 20; //  Allow only indirect line breaks between pairs
    var NS = 21; //  Allow only indirect line breaks before
    var OP = 22; //  Prohibit line breaks after
    var QU = 23; //  Act like they are both opening and closing
    // Numeric Context
    var IS = 24; //  Prevent breaks after any and before numeric
    var NU = 25; //  Form numeric expressions for line breaking purposes
    var PO = 26; //  Do not break following a numeric expression
    var PR = 27; //  Do not break in front of a numeric expression
    var SY = 28; //  Prevent a break before; and allow a break after
    // Other Characters
    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
    var EB = 32; //  Do not break from following Emoji Modifier
    var EM = 33; //  Do not break from preceding Emoji Base
    var H2 = 34; //  Form Korean syllable blocks
    var H3 = 35; //  Form Korean syllable blocks
    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
    var ID = 37; //  Break before or after; except in some numeric context
    var JL = 38; //  Form Korean syllable blocks
    var JV = 39; //  Form Korean syllable blocks
    var JT = 40; //  Form Korean syllable blocks
    var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

    var classes = exports.classes = {
        BK: BK,
        CR: CR,
        LF: LF,
        CM: CM,
        NL: NL,
        SG: SG,
        WJ: WJ,
        ZW: ZW,
        GL: GL,
        SP: SP,
        ZWJ: ZWJ,
        B2: B2,
        BA: BA,
        BB: BB,
        HY: HY,
        CB: CB,
        CL: CL,
        CP: CP,
        EX: EX,
        IN: IN,
        NS: NS,
        OP: OP,
        QU: QU,
        IS: IS,
        NU: NU,
        PO: PO,
        PR: PR,
        SY: SY,
        AI: AI,
        AL: AL,
        CJ: CJ,
        EB: EB,
        EM: EM,
        H2: H2,
        H3: H3,
        HL: HL,
        ID: ID,
        JL: JL,
        JV: JV,
        JT: JT,
        RI: RI,
        SA: SA,
        XX: XX
    };

    var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
    var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '\xD7';
    var BREAK_ALLOWED = exports.BREAK_ALLOWED = '\xF7';
    var UnicodeTrie = exports.UnicodeTrie = (Trie_1.createTrieFromBase64)(_linebreakTrie2.default);

    var ALPHABETICS = [AL, HL];
    var HARD_LINE_BREAKS = [BK, CR, LF, NL];
    var SPACE = [SP, ZW];
    var PREFIX_POSTFIX = [PR, PO];
    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
    var HYPHEN = [HY, BA];

    var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
        var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

        var types = [];
        var indicies = [];
        var categories = [];
        codePoints.forEach(function (codePoint, index) {
            var classType = UnicodeTrie.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categories.push(true);
                classType -= LETTER_NUMBER_MODIFIER;
            } else {
                categories.push(false);
            }

            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                    indicies.push(index);
                    return types.push(CB);
                }
            }

            if (classType === CM || classType === ZWJ) {
                // LB10 Treat any remaining combining mark or ZWJ as AL.
                if (index === 0) {
                    indicies.push(index);
                    return types.push(AL);
                }

                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                // the base character in all of the following rules. Treat ZWJ as if it were CM.
                var prev = types[index - 1];
                if (LINE_BREAKS.indexOf(prev) === -1) {
                    indicies.push(indicies[index - 1]);
                    return types.push(prev);
                }
                indicies.push(index);
                return types.push(AL);
            }

            indicies.push(index);

            if (classType === CJ) {
                return types.push(lineBreak === 'strict' ? NS : ID);
            }

            if (classType === SA) {
                return types.push(AL);
            }

            if (classType === AI) {
                return types.push(AL);
            }

            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.
            if (classType === XX) {
                if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                    return types.push(ID);
                } else {
                    return types.push(AL);
                }
            }

            types.push(classType);
        });

        return [indicies, types, categories];
    };

    var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
        var current = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;
            while (i <= classTypes.length) {
                i++;
                var next = classTypes[i];

                if (next === b) {
                    return true;
                }

                if (next !== SP) {
                    break;
                }
            }
        }

        if (current === SP) {
            var _i = currentIndex;

            while (_i > 0) {
                _i--;
                var prev = classTypes[_i];

                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                    var n = currentIndex;
                    while (n <= classTypes.length) {
                        n++;
                        var _next = classTypes[n];

                        if (_next === b) {
                            return true;
                        }

                        if (_next !== SP) {
                            break;
                        }
                    }
                }

                if (prev !== SP) {
                    break;
                }
            }
        }
        return false;
    };

    var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
        var i = currentIndex;
        while (i >= 0) {
            var type = classTypes[i];
            if (type === SP) {
                i--;
            } else {
                return type;
            }
        }
        return 0;
    };

    var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
        if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED;
        }

        var currentIndex = index - 1;
        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED;
        }

        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var current = classTypes[currentIndex];

        // LB4 Always break after hard line breaks.
        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
        var next = classTypes[afterIndex];

        if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
        }

        if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
        }

        // LB6 Do not break before hard line breaks.
        if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB7 Do not break before spaces or zero width space.
        if (SPACE.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED;
        }

        // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
        if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB11 Do not break before or after Word joiner and related characters.
        if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED;
        }

        // LB12 Do not break after NBSP and related characters.
        if (current === GL) {
            return BREAK_NOT_ALLOWED;
        }

        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
        if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED;
        }

        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
        if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB14 Do not break after ‘[’, even after spaces.
        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED;
        }

        // LB15 Do not break within ‘”[’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB17 Do not break within ‘——’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED;
        }

        // LB18 Break after spaces.
        if (current === SP) {
            return BREAK_ALLOWED;
        }

        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
        if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED;
        }

        // LB20 Break before and after unresolved CB.
        if (next === CB || current === CB) {
            return BREAK_ALLOWED;
        }

        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
        if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED;
        }

        // LB21a Don't break after Hebrew + Hyphen.
        if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB21b Don’t break between Solidus and Hebrew letters.
        if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED;
        }

        // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
        if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB23 Do not break between digits and letters.
        if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED;
        }

        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
        if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED;
        }

        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
        if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB25 Do not break between the following pairs of classes relevant to numbers:
        if (
        // (PR | PO) × ( OP | HY )? NU
        [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
        // ( OP | HY ) × NU
        [OP, HY].indexOf(current) !== -1 && next === NU ||
        // NU ×	(NU | SY | IS)
        current === NU && [NU, SY, IS].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED;
                } else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                } else {
                    break;
                }
            }
        }

        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([PR, PO].indexOf(next) !== -1) {
            var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (_prevIndex >= 0) {
                var _type = classTypes[_prevIndex];
                if (_type === NU) {
                    return BREAK_NOT_ALLOWED;
                } else if ([SY, IS].indexOf(_type) !== -1) {
                    _prevIndex--;
                } else {
                    break;
                }
            }
        }

        // LB26 Do not break a Korean syllable.
        if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED;
        }

        // LB27 Treat a Korean Syllable Block the same as ID.
        if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED;
        }

        // LB28 Do not break between alphabetics (“at”).
        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
        if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }

        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
        if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED;
        }

        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
        // indicators preceding the position of the break.
        if (current === RI && next === RI) {
            var i = indicies[currentIndex];
            var count = 1;
            while (i > 0) {
                i--;
                if (classTypes[i] === RI) {
                    count++;
                } else {
                    break;
                }
            }
            if (count % 2 !== 0) {
                return BREAK_NOT_ALLOWED;
            }
        }

        // LB30b Do not break between an emoji base and an emoji modifier.
        if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED;
        }

        return BREAK_ALLOWED;
    };

    var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
        // LB2 Never break at the start of text.
        if (index === 0) {
            return BREAK_NOT_ALLOWED;
        }

        // LB3 Always break at the end of text.
        if (index >= codePoints.length) {
            return BREAK_MANDATORY;
        }

        var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
            _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
            indicies = _codePointsToCharacte2[0],
            classTypes = _codePointsToCharacte2[1];

        return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
    };

    var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
        if (!options) {
            options = { lineBreak: 'normal', wordBreak: 'normal' };
        }

        var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
            _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
            indicies = _codePointsToCharacte4[0],
            classTypes = _codePointsToCharacte4[1],
            isLetterNumber = _codePointsToCharacte4[2];

        if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
            classTypes = classTypes.map(function (type) {
                return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
        }

        var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
            return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
        }) : null;

        return [indicies, classTypes, forbiddenBreakpoints];
    };

    var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
        var codePoints = (Util$2.toCodePoints)(str);
        var output = BREAK_NOT_ALLOWED;

        var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
            _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
            indicies = _cssFormattedClasses2[0],
            classTypes = _cssFormattedClasses2[1],
            forbiddenBreakpoints = _cssFormattedClasses2[2];

        codePoints.forEach(function (codePoint, i) {
            output += (Util$2.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
        });

        return output;
    };

    var Break = function () {
        function Break(codePoints, lineBreak, start, end) {
            _classCallCheck(this, Break);

            this._codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
        }

        _createClass(Break, [{
            key: 'slice',
            value: function slice() {
                return Util$2.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
            }
        }]);

        return Break;
    }();

    var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
        var codePoints = (Util$2.toCodePoints)(str);

        var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
            _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
            indicies = _cssFormattedClasses4[0],
            classTypes = _cssFormattedClasses4[1],
            forbiddenBreakpoints = _cssFormattedClasses4[2];

        var length = codePoints.length;
        var lastEnd = 0;
        var nextIndex = 0;

        return {
            next: function next() {
                if (nextIndex >= length) {
                    return { done: true };
                }
                var lineBreak = BREAK_NOT_ALLOWED;
                while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

                if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return { value: value, done: false };
                }

                return { done: true };
            }
        };
    };
});

unwrapExports(LineBreak);

var dist = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    Object.defineProperty(exports, 'toCodePoints', {
        enumerable: true,
        get: function get() {
            return Util$2.toCodePoints;
        }
    });
    Object.defineProperty(exports, 'fromCodePoint', {
        enumerable: true,
        get: function get() {
            return Util$2.fromCodePoint;
        }
    });

    Object.defineProperty(exports, 'LineBreaker', {
        enumerable: true,
        get: function get() {
            return LineBreak.LineBreaker;
        }
    });
});

unwrapExports(dist);

var Unicode = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

    Object.defineProperty(exports, 'toCodePoints', {
        enumerable: true,
        get: function get() {
            return dist.toCodePoints;
        }
    });
    Object.defineProperty(exports, 'fromCodePoint', {
        enumerable: true,
        get: function get() {
            return dist.fromCodePoint;
        }
    });

    var breakWords = exports.breakWords = function breakWords(str, parent) {
        var breaker = (dist.LineBreaker)(str, {
            lineBreak: parent.style.lineBreak,
            wordBreak: parent.style.overflowWrap === overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
        });

        var words = [];
        var bk = void 0;

        while (!(bk = breaker.next()).done) {
            words.push(bk.value.slice());
        }

        return words;
    };
});

unwrapExports(Unicode);

var TextBounds_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseTextBounds = exports.TextBounds = undefined;

    var _Feature2 = _interopRequireDefault(Feature);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
        _classCallCheck(this, TextBounds);

        this.text = text;
        this.bounds = bounds;
    };

    var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
        var letterRendering = parent.style.letterSpacing !== 0;
        var textList = letterRendering ? (Unicode.toCodePoints)(value).map(function (i) {
            return (Unicode.fromCodePoint)(i);
        }) : (Unicode.breakWords)(value, parent);
        var length = textList.length;
        var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
        var scrollX = defaultView ? defaultView.pageXOffset : 0;
        var scrollY = defaultView ? defaultView.pageYOffset : 0;
        var textBounds = [];
        var offset = 0;
        for (var i = 0; i < length; i++) {
            var text = textList[i];
            if (parent.style.textDecoration !== textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
                if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                    textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
                } else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                    node = replacementNode;
                }
            } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                node = node.splitText(text.length);
            }
            offset += text.length;
        }
        return textBounds;
    };

    var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        wrapper.appendChild(node.cloneNode(true));
        var parentNode = node.parentNode;
        if (parentNode) {
            parentNode.replaceChild(wrapper, node);
            var bounds = (Bounds_1.parseBounds)(wrapper, scrollX, scrollY);
            if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
            }
            return bounds;
        }
        return new Bounds_1.Bounds(0, 0, 0, 0);
    };

    var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
        var range = node.ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset + length);
        return Bounds_1.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
    };
});

unwrapExports(TextBounds_1);

var TextContainer_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TextContainer = function () {
        function TextContainer(text, parent, bounds) {
            _classCallCheck(this, TextContainer);

            this.text = text;
            this.parent = parent;
            this.bounds = bounds;
        }

        _createClass(TextContainer, null, [{
            key: 'fromTextNode',
            value: function fromTextNode(node, parent) {
                var text = transform(node.data, parent.style.textTransform);
                return new TextContainer(text, parent, (TextBounds_1.parseTextBounds)(text, parent, node));
            }
        }]);

        return TextContainer;
    }();

    exports.default = TextContainer;

    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

    var transform = function transform(text, _transform) {
        switch (_transform) {
            case textTransform.TEXT_TRANSFORM.LOWERCASE:
                return text.toLowerCase();
            case textTransform.TEXT_TRANSFORM.CAPITALIZE:
                return text.replace(CAPITALIZE, capitalize);
            case textTransform.TEXT_TRANSFORM.UPPERCASE:
                return text.toUpperCase();
            default:
                return text;
        }
    };

    function capitalize(m, p1, p2) {
        if (m.length > 0) {
            return p1 + p2.toUpperCase();
        }

        return m;
    }
});

unwrapExports(TextContainer_1);

var Circle_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Circle = function Circle(x, y, radius) {
        _classCallCheck(this, Circle);

        this.type = Path.PATH.CIRCLE;
        this.x = x;
        this.y = y;
        this.radius = radius;
    };

    exports.default = Circle;
});

unwrapExports(Circle_1);

var Input = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

    var _TextContainer2 = _interopRequireDefault(TextContainer_1);

    var _Circle2 = _interopRequireDefault(Circle_1);

    var _Vector2 = _interopRequireDefault(Vector_1);

    var _Color2 = _interopRequireDefault(Color_1);

    var _Length2 = _interopRequireDefault(Length_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
    var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
    var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
    var INPUT_BORDER = {
        borderWidth: 1,
        borderColor: INPUT_BORDER_COLOR,
        borderStyle: border.BORDER_STYLE.SOLID
    };
    var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
    var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
        backgroundColor: INPUT_BACKGROUND_COLOR,
        backgroundImage: [],
        backgroundClip: background.BACKGROUND_CLIP.PADDING_BOX,
        backgroundOrigin: background.BACKGROUND_ORIGIN.PADDING_BOX
    };

    var RADIO_BORDER_RADIUS = new _Length2.default('50%');
    var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
    var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

    var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
    var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
    var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

    var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
        return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
    };

    var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
        if (node.type === 'radio' || node.type === 'checkbox') {
            if (node.checked) {
                var size = Math.min(container.bounds.width, container.bounds.height);
                container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
            }
        } else {
            inlineFormElement(getInputValue(node), node, container, false);
        }
    };

    var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
        inlineFormElement(node.value, node, container, true);
    };

    var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
        var option = node.options[node.selectedIndex || 0];
        inlineFormElement(option ? option.text || '' : '', node, container, false);
    };

    var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
        if (bounds.width > bounds.height) {
            bounds.left += (bounds.width - bounds.height) / 2;
            bounds.width = bounds.height;
        } else if (bounds.width < bounds.height) {
            bounds.top += (bounds.height - bounds.width) / 2;
            bounds.height = bounds.width;
        }
        return bounds;
    };

    var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
        var body = node.ownerDocument.body;
        if (value.length > 0 && body) {
            var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
            (Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
            wrapper.style.position = 'absolute';
            wrapper.style.left = container.bounds.left + 'px';
            wrapper.style.top = container.bounds.top + 'px';
            if (!allowLinebreak) {
                wrapper.style.whiteSpace = 'nowrap';
            }
            var text = node.ownerDocument.createTextNode(value);
            wrapper.appendChild(text);
            body.appendChild(wrapper);
            container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
            body.removeChild(wrapper);
        }
    };

    var getInputValue = function getInputValue(node) {
        var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

        return value.length === 0 ? node.placeholder || '' : value;
    };
});

unwrapExports(Input);

var ListItem = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

    var _NodeContainer2 = _interopRequireDefault(NodeContainer_1);

    var _TextContainer2 = _interopRequireDefault(TextContainer_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    // Margin between the enumeration and the list item content
    var MARGIN_RIGHT = 7;

    var ancestorTypes = ['OL', 'UL', 'MENU'];

    var getListOwner = exports.getListOwner = function getListOwner(container) {
        var parent = container.parent;
        if (!parent) {
            return null;
        }

        do {
            var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
            if (isAncestor) {
                return parent;
            }
            parent = parent.parent;
        } while (parent);

        return container.parent;
    };

    var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
        var listStyle$$1 = container.style.listStyle;

        if (!listStyle$$1) {
            return;
        }

        var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (Util.copyCSSStyles)(style, wrapper);

        wrapper.style.position = 'absolute';
        wrapper.style.bottom = 'auto';
        wrapper.style.display = 'block';
        wrapper.style.letterSpacing = 'normal';

        switch (listStyle$$1.listStylePosition) {
            case listStyle.LIST_STYLE_POSITION.OUTSIDE:
                wrapper.style.left = 'auto';
                wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
                wrapper.style.textAlign = 'right';
                break;
            case listStyle.LIST_STYLE_POSITION.INSIDE:
                wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
                wrapper.style.right = 'auto';
                wrapper.style.textAlign = 'left';
                break;
        }

        var text = void 0;
        var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
        var styleImage = listStyle$$1.listStyleImage;
        if (styleImage) {
            if (styleImage.method === 'url') {
                var image = node.ownerDocument.createElement('img');
                image.src = styleImage.args[0];
                wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
                wrapper.style.width = 'auto';
                wrapper.style.height = 'auto';
                wrapper.appendChild(image);
            } else {
                var size = parseFloat(container.style.font.fontSize) * 0.5;
                wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
                wrapper.style.width = size + 'px';
                wrapper.style.height = size + 'px';
                wrapper.style.backgroundImage = style.listStyleImage;
            }
        } else if (typeof container.listIndex === 'number') {
            text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle$$1.listStyleType, true));
            wrapper.appendChild(text);
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
        }

        // $FlowFixMe
        var body = node.ownerDocument.body;
        body.appendChild(wrapper);

        if (text) {
            container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
            body.removeChild(wrapper);
        } else {
            // $FlowFixMe
            container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
        }
    };

    var ROMAN_UPPER = {
        integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    };

    var ARMENIAN = {
        integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ['\u0554', '\u0553', '\u0552', '\u0551', '\u0550', '\u054F', '\u054E', '\u054D', '\u054C', '\u054B', '\u054A', '\u0549', '\u0548', '\u0547', '\u0546', '\u0545', '\u0544', '\u0543', '\u0542', '\u0541', '\u0540', '\u053F', '\u053E', '\u053D', '\u053C', '\u053B', '\u053A', '\u0539', '\u0538', '\u0537', '\u0536', '\u0535', '\u0534', '\u0533', '\u0532', '\u0531']
    };

    var HEBREW = {
        integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ['\u05D9\u05F3', '\u05D8\u05F3', '\u05D7\u05F3', '\u05D6\u05F3', '\u05D5\u05F3', '\u05D4\u05F3', '\u05D3\u05F3', '\u05D2\u05F3', '\u05D1\u05F3', '\u05D0\u05F3', '\u05EA', '\u05E9', '\u05E8', '\u05E7', '\u05E6', '\u05E4', '\u05E2', '\u05E1', '\u05E0', '\u05DE', '\u05DC', '\u05DB', '\u05D9\u05D8', '\u05D9\u05D7', '\u05D9\u05D6', '\u05D8\u05D6', '\u05D8\u05D5', '\u05D9', '\u05D8', '\u05D7', '\u05D6', '\u05D5', '\u05D4', '\u05D3', '\u05D2', '\u05D1', '\u05D0']
    };

    var GEORGIAN = {
        integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ['\u10F5', '\u10F0', '\u10EF', '\u10F4', '\u10EE', '\u10ED', '\u10EC', '\u10EB', '\u10EA', '\u10E9', '\u10E8', '\u10E7', '\u10E6', '\u10E5', '\u10E4', '\u10F3', '\u10E2', '\u10E1', '\u10E0', '\u10DF', '\u10DE', '\u10DD', '\u10F2', '\u10DC', '\u10DB', '\u10DA', '\u10D9', '\u10D8', '\u10D7', '\u10F1', '\u10D6', '\u10D5', '\u10D4', '\u10D3', '\u10D2', '\u10D1', '\u10D0']
    };

    var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
        if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
        }

        return symbols.integers.reduce(function (string, integer, index) {
            while (value >= integer) {
                value -= integer;
                string += symbols.values[index];
            }
            return string;
        }, '') + suffix;
    };

    var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
        var string = '';

        do {
            if (!isNumeric) {
                value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
        } while (value * codePointRangeLength >= codePointRangeLength);

        return string;
    };

    var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

        return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
            return (Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
        }) + suffix);
    };

    var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
        var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

        var codePointRangeLength = symbols.length;
        return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
        }) + suffix;
    };

    var CJK_ZEROS = 1 << 0;
    var CJK_TEN_COEFFICIENTS = 1 << 1;
    var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
    var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

    var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
        if (value < -9999 || value > 9999) {
            return createCounterText(value, listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
        }
        var tmp = Math.abs(value);
        var string = suffix;

        if (tmp === 0) {
            return numbers[0] + string;
        }

        for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;

            if (coefficient === 0 && (Util.contains)(flags, CJK_ZEROS) && string !== '') {
                string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
                string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
            } else if (coefficient === 1 && digit > 0) {
                string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
        }

        return (value < 0 ? negativeSign : '') + string;
    };

    var CHINESE_INFORMAL_MULTIPLIERS = '\u5341\u767E\u5343\u842C';
    var CHINESE_FORMAL_MULTIPLIERS = '\u62FE\u4F70\u4EDF\u842C';
    var JAPANESE_NEGATIVE = '\u30DE\u30A4\u30CA\u30B9';
    var KOREAN_NEGATIVE = '\uB9C8\uC774\uB108\uC2A4 ';

    var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
        var defaultSuffix = appendSuffix ? '. ' : '';
        var cjkSuffix = appendSuffix ? '\u3001' : '';
        var koreanSuffix = appendSuffix ? ', ' : '';
        switch (type) {
            case listStyle.LIST_STYLE_TYPE.DISC:
                return '\u2022';
            case listStyle.LIST_STYLE_TYPE.CIRCLE:
                return '\u25E6';
            case listStyle.LIST_STYLE_TYPE.SQUARE:
                return '\u25FE';
            case listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                return string.length < 4 ? '0' + string : string;
            case listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
                return createCounterStyleFromSymbols(value, '\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D', cjkSuffix);
            case listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
            case listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.ARMENIAN:
            case listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
            case listStyle.LIST_STYLE_TYPE.BENGALI:
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.CAMBODIAN:
            case listStyle.LIST_STYLE_TYPE.KHMER:
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                return createCounterStyleFromSymbols(value, '\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5', cjkSuffix);
            case listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                return createCounterStyleFromSymbols(value, '\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678', cjkSuffix);
            case listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
            case listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                return createCJKCounter(value, '\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D', CHINESE_INFORMAL_MULTIPLIERS, '\u8CA0', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                return createCJKCounter(value, '\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396', CHINESE_FORMAL_MULTIPLIERS, '\u8CA0', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                return createCJKCounter(value, '\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D', CHINESE_INFORMAL_MULTIPLIERS, '\u8D1F', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                return createCJKCounter(value, '\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396', CHINESE_FORMAL_MULTIPLIERS, '\u8D1F', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                return createCJKCounter(value, '\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D', '\u5341\u767E\u5343\u4E07', JAPANESE_NEGATIVE, cjkSuffix, 0);
            case listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
                return createCJKCounter(value, '\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D', '\u62FE\u767E\u5343\u4E07', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                return createCJKCounter(value, '\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C', '\uC2ED\uBC31\uCC9C\uB9CC', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                return createCJKCounter(value, '\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D', '\u5341\u767E\u5343\u842C', KOREAN_NEGATIVE, koreanSuffix, 0);
            case listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                return createCJKCounter(value, '\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D', '\u62FE\u767E\u5343', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case listStyle.LIST_STYLE_TYPE.DEVANAGARI:
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.GEORGIAN:
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.GUJARATI:
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.GURMUKHI:
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.HEBREW:
                return createAdditiveCounter(value, 1, 10999, HEBREW, listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.HIRAGANA:
                return createCounterStyleFromSymbols(value, '\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093');
            case listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
                return createCounterStyleFromSymbols(value, '\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059');
            case listStyle.LIST_STYLE_TYPE.KANNADA:
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.KATAKANA:
                return createCounterStyleFromSymbols(value, '\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3', cjkSuffix);
            case listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
                return createCounterStyleFromSymbols(value, '\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9', cjkSuffix);
            case listStyle.LIST_STYLE_TYPE.LAO:
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.MONGOLIAN:
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.MYANMAR:
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.ORIYA:
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.PERSIAN:
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.TAMIL:
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.TELUGU:
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.THAI:
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.TIBETAN:
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            case listStyle.LIST_STYLE_TYPE.DECIMAL:
            default:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };
});

unwrapExports(ListItem);

var NodeContainer_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Color2 = _interopRequireDefault(Color_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

    var NodeContainer = function () {
        function NodeContainer(node, parent, resourceLoader, index) {
            var _this = this;

            _classCallCheck(this, NodeContainer);

            this.parent = parent;
            this.tagName = node.tagName;
            this.index = index;
            this.childNodes = [];
            this.listItems = [];
            if (typeof node.start === 'number') {
                this.listStart = node.start;
            }
            var defaultView = node.ownerDocument.defaultView;
            var scrollX = defaultView.pageXOffset;
            var scrollY = defaultView.pageYOffset;
            var style = defaultView.getComputedStyle(node, null);
            var display$$1 = (display.parseDisplay)(style.display);

            var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

            var position$$1 = (position.parsePosition)(style.position);

            this.style = {
                background: IS_INPUT ? Input.INPUT_BACKGROUND : (background.parseBackground)(style, resourceLoader),
                border: IS_INPUT ? Input.INPUT_BORDERS : (border.parseBorder)(style),
                borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (Input.getInputBorderRadius)(node) : (borderRadius.parseBorderRadius)(style),
                color: IS_INPUT ? Input.INPUT_COLOR : new _Color2.default(style.color),
                display: display$$1,
                float: (float_1.parseCSSFloat)(style.float),
                font: (font.parseFont)(style),
                letterSpacing: (letterSpacing.parseLetterSpacing)(style.letterSpacing),
                listStyle: display$$1 === display.DISPLAY.LIST_ITEM ? (listStyle.parseListStyle)(style) : null,
                lineBreak: (lineBreak.parseLineBreak)(style.lineBreak),
                margin: (margin.parseMargin)(style),
                opacity: parseFloat(style.opacity),
                overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (overflow.parseOverflow)(style.overflow) : overflow.OVERFLOW.HIDDEN,
                overflowWrap: (overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
                padding: (padding.parsePadding)(style),
                position: position$$1,
                textDecoration: (textDecoration.parseTextDecoration)(style),
                textShadow: (textShadow.parseTextShadow)(style.textShadow),
                textTransform: (textTransform.parseTextTransform)(style.textTransform),
                transform: (transform.parseTransform)(style),
                visibility: (visibility.parseVisibility)(style.visibility),
                wordBreak: (wordBreak.parseWordBreak)(style.wordBreak),
                zIndex: (zIndex.parseZIndex)(position$$1 !== position.POSITION.STATIC ? style.zIndex : 'auto')
            };

            if (this.isTransformed()) {
                // getBoundingClientRect provides values post-transform, we want them without the transformation
                node.style.transform = 'matrix(1,0,0,1,0,0)';
            }

            if (display$$1 === display.DISPLAY.LIST_ITEM) {
                var listOwner = (ListItem.getListOwner)(this);
                if (listOwner) {
                    var listIndex = listOwner.listItems.length;
                    listOwner.listItems.push(this);
                    this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
                }
            }

            // TODO move bound retrieval for all nodes to a later stage?
            if (node.tagName === 'IMG') {
                node.addEventListener('load', function () {
                    _this.bounds = (Bounds_1.parseBounds)(node, scrollX, scrollY);
                    _this.curvedBounds = (Bounds_1.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
                });
            }
            this.image = getImage(node, resourceLoader);
            this.bounds = IS_INPUT ? (Input.reformatInputBounds)((Bounds_1.parseBounds)(node, scrollX, scrollY)) : (Bounds_1.parseBounds)(node, scrollX, scrollY);
            this.curvedBounds = (Bounds_1.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);
        }

        _createClass(NodeContainer, [{
            key: 'getClipPaths',
            value: function getClipPaths() {
                var parentClips = this.parent ? this.parent.getClipPaths() : [];
                var isClipped = this.style.overflow !== overflow.OVERFLOW.VISIBLE;

                return isClipped ? parentClips.concat([(Bounds_1.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
            }
        }, {
            key: 'isInFlow',
            value: function isInFlow() {
                return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
            }
        }, {
            key: 'isVisible',
            value: function isVisible() {
                return !(Util.contains)(this.style.display, display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === visibility.VISIBILITY.VISIBLE;
            }
        }, {
            key: 'isAbsolutelyPositioned',
            value: function isAbsolutelyPositioned() {
                return this.style.position !== position.POSITION.STATIC && this.style.position !== position.POSITION.RELATIVE;
            }
        }, {
            key: 'isPositioned',
            value: function isPositioned() {
                return this.style.position !== position.POSITION.STATIC;
            }
        }, {
            key: 'isFloating',
            value: function isFloating() {
                return this.style.float !== float_1.FLOAT.NONE;
            }
        }, {
            key: 'isRootElement',
            value: function isRootElement() {
                return this.parent === null;
            }
        }, {
            key: 'isTransformed',
            value: function isTransformed() {
                return this.style.transform !== null;
            }
        }, {
            key: 'isPositionedWithZIndex',
            value: function isPositionedWithZIndex() {
                return this.isPositioned() && !this.style.zIndex.auto;
            }
        }, {
            key: 'isInlineLevel',
            value: function isInlineLevel() {
                return (Util.contains)(this.style.display, display.DISPLAY.INLINE) || (Util.contains)(this.style.display, display.DISPLAY.INLINE_BLOCK) || (Util.contains)(this.style.display, display.DISPLAY.INLINE_FLEX) || (Util.contains)(this.style.display, display.DISPLAY.INLINE_GRID) || (Util.contains)(this.style.display, display.DISPLAY.INLINE_LIST_ITEM) || (Util.contains)(this.style.display, display.DISPLAY.INLINE_TABLE);
            }
        }, {
            key: 'isInlineBlockOrInlineTable',
            value: function isInlineBlockOrInlineTable() {
                return (Util.contains)(this.style.display, display.DISPLAY.INLINE_BLOCK) || (Util.contains)(this.style.display, display.DISPLAY.INLINE_TABLE);
            }
        }]);

        return NodeContainer;
    }();

    exports.default = NodeContainer;

    var getImage = function getImage(node, resourceLoader) {
        if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
            var s = new XMLSerializer();
            return resourceLoader.loadImage('data:image/svg+xml,' + encodeURIComponent(s.serializeToString(node)));
        }
        switch (node.tagName) {
            case 'IMG':
                // $FlowFixMe
                var img = node;
                return resourceLoader.loadImage(img.currentSrc || img.src);
            case 'CANVAS':
                // $FlowFixMe
                var canvas = node;
                return resourceLoader.loadCanvas(canvas);
            case 'IFRAME':
                var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
                if (iframeKey) {
                    return iframeKey;
                }
                break;
        }

        return null;
    };
});

unwrapExports(NodeContainer_1);

var StackingContext_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var StackingContext = function () {
        function StackingContext(container, parent, treatAsRealStackingContext) {
            _classCallCheck(this, StackingContext);

            this.container = container;
            this.parent = parent;
            this.contexts = [];
            this.children = [];
            this.treatAsRealStackingContext = treatAsRealStackingContext;
        }

        _createClass(StackingContext, [{
            key: 'getOpacity',
            value: function getOpacity() {
                return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
            }
        }, {
            key: 'getRealParentStackingContext',
            value: function getRealParentStackingContext() {
                return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
            }
        }]);

        return StackingContext;
    }();

    exports.default = StackingContext;
});

unwrapExports(StackingContext_1);

var NodeParser_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NodeParser = undefined;

    var _StackingContext2 = _interopRequireDefault(StackingContext_1);

    var _NodeContainer2 = _interopRequireDefault(NodeContainer_1);

    var _TextContainer2 = _interopRequireDefault(TextContainer_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
        var index = 0;

        var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
        var stack = new _StackingContext2.default(container, null, true);

        parseNodeTree(node, container, stack, resourceLoader, index);

        return stack;
    };

    var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

    var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
        if ("production" !== 'production' && index > 50000) {
            throw new Error('Recursion error while parsing node tree');
        }

        for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            var defaultView = childNode.ownerDocument.defaultView;
            if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
                if (childNode.data.trim().length > 0) {
                    parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
                }
            } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
                if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                    var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                    if (container.isVisible()) {
                        if (childNode.tagName === 'INPUT') {
                            // $FlowFixMe
                            (Input.inlineInputElement)(childNode, container);
                        } else if (childNode.tagName === 'TEXTAREA') {
                            // $FlowFixMe
                            (Input.inlineTextAreaElement)(childNode, container);
                        } else if (childNode.tagName === 'SELECT') {
                            // $FlowFixMe
                            (Input.inlineSelectElement)(childNode, container);
                        } else if (container.style.listStyle && container.style.listStyle.listStyleType !== listStyle.LIST_STYLE_TYPE.NONE) {
                            (ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                        }

                        var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                        var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                        if (treatAsRealStackingContext || createsStackingContext(container)) {
                            // for treatAsRealStackingContext:false, any positioned descendants and descendants
                            // which actually create a new stacking context should be considered part of the parent stacking context
                            var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                            var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                            parentStack.contexts.push(childStack);
                            if (SHOULD_TRAVERSE_CHILDREN) {
                                parseNodeTree(childNode, container, childStack, resourceLoader, index);
                            }
                        } else {
                            stack.children.push(container);
                            if (SHOULD_TRAVERSE_CHILDREN) {
                                parseNodeTree(childNode, container, stack, resourceLoader, index);
                            }
                        }
                    }
                }
            } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
                var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
                if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                    // for treatAsRealStackingContext:false, any positioned descendants and descendants
                    // which actually create a new stacking context should be considered part of the parent stacking context
                    var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                    var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                    _parentStack.contexts.push(_childStack);
                } else {
                    stack.children.push(_container);
                }
            }
        }
    };

    var createsRealStackingContext = function createsRealStackingContext(container, node) {
        return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
    };

    var createsStackingContext = function createsStackingContext(container) {
        return container.isPositioned() || container.isFloating();
    };

    var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
        return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
    };
});

unwrapExports(NodeParser_1);

var Font = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.FontMetrics = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var SAMPLE_TEXT = 'Hidden Text';

    var FontMetrics = exports.FontMetrics = function () {
        function FontMetrics(document) {
            _classCallCheck(this, FontMetrics);

            this._data = {};
            this._document = document;
        }

        _createClass(FontMetrics, [{
            key: '_parseMetrics',
            value: function _parseMetrics(font) {
                var container = this._document.createElement('div');
                var img = this._document.createElement('img');
                var span = this._document.createElement('span');

                var body = this._document.body;
                if (!body) {
                    throw new Error('');
                }

                container.style.visibility = 'hidden';
                container.style.fontFamily = font.fontFamily;
                container.style.fontSize = font.fontSize;
                container.style.margin = '0';
                container.style.padding = '0';

                body.appendChild(container);

                img.src = Util.SMALL_IMAGE;
                img.width = 1;
                img.height = 1;

                img.style.margin = '0';
                img.style.padding = '0';
                img.style.verticalAlign = 'baseline';

                span.style.fontFamily = font.fontFamily;
                span.style.fontSize = font.fontSize;
                span.style.margin = '0';
                span.style.padding = '0';

                span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.appendChild(span);
                container.appendChild(img);
                var baseline = img.offsetTop - span.offsetTop + 2;

                container.removeChild(span);
                container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

                container.style.lineHeight = 'normal';
                img.style.verticalAlign = 'super';

                var middle = img.offsetTop - container.offsetTop + 2;

                body.removeChild(container);

                return { baseline: baseline, middle: middle };
            }
        }, {
            key: 'getMetrics',
            value: function getMetrics(font) {
                var key = font.fontFamily + ' ' + font.fontSize;
                if (this._data[key] === undefined) {
                    this._data[key] = this._parseMetrics(font);
                }

                return this._data[key];
            }
        }]);

        return FontMetrics;
    }();
});

unwrapExports(Font);

var Angle = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

    var parseAngle = exports.parseAngle = function parseAngle(angle) {
        var match = angle.match(ANGLE);

        if (match) {
            var value = parseFloat(match[1]);
            switch (match[2].toLowerCase()) {
                case 'deg':
                    return Math.PI * value / 180;
                case 'grad':
                    return Math.PI / 200 * value;
                case 'rad':
                    return value;
                case 'turn':
                    return Math.PI * 2 * value;
            }
        }

        return null;
    };
});

unwrapExports(Angle);

var Gradient = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _NodeContainer2 = _interopRequireDefault(NodeContainer_1);

    var _Color2 = _interopRequireDefault(Color_1);

    var _Length2 = _interopRequireDefault(Length_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
    var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
    var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
    var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
    var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

    var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
        LINEAR_GRADIENT: 0,
        RADIAL_GRADIENT: 1
    };

    var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
        CIRCLE: 0,
        ELLIPSE: 1
    };

    var LENGTH_FOR_POSITION = {
        left: new _Length2.default('0%'),
        top: new _Length2.default('0%'),
        center: new _Length2.default('50%'),
        right: new _Length2.default('100%'),
        bottom: new _Length2.default('100%')
    };

    var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
        _classCallCheck(this, LinearGradient);

        this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
        this.colorStops = colorStops;
        this.direction = direction;
    };

    var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
        _classCallCheck(this, RadialGradient);

        this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
        this.colorStops = colorStops;
        this.shape = shape;
        this.center = center;
        this.radius = radius;
    };

    var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
        var args = _ref.args,
            method = _ref.method,
            prefix = _ref.prefix;

        if (method === 'linear-gradient') {
            return parseLinearGradient(args, bounds, !!prefix);
        } else if (method === 'gradient' && args[0] === 'linear') {
            // TODO handle correct angle
            return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
        } else if (method === 'radial-gradient') {
            return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
        } else if (method === 'gradient' && args[0] === 'radial') {
            return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
        }
    };

    var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
        var colorStops = [];

        for (var i = firstColorStopIndex; i < args.length; i++) {
            var value = args[i];
            var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
            var lastSpaceIndex = value.lastIndexOf(' ');
            var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
            var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
            colorStops.push({ color: _color, stop: _stop });
        }

        var absoluteValuedColorStops = colorStops.map(function (_ref2) {
            var color = _ref2.color,
                stop = _ref2.stop;

            var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

            return {
                color: color,
                // $FlowFixMe
                stop: absoluteStop
            };
        });

        var previousColorStop = absoluteValuedColorStops[0].stop;
        for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
            if (previousColorStop !== null) {
                var _stop2 = absoluteValuedColorStops[_i].stop;
                if (_stop2 === null) {
                    var n = _i;
                    while (absoluteValuedColorStops[n].stop === null) {
                        n++;
                    }
                    var steps = n - _i + 1;
                    var nextColorStep = absoluteValuedColorStops[n].stop;
                    var stepSize = (nextColorStep - previousColorStop) / steps;
                    for (; _i < n; _i++) {
                        previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                    }
                } else {
                    previousColorStop = _stop2;
                }
            }
        }

        return absoluteValuedColorStops;
    };

    var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
        var angle = (Angle.parseAngle)(args[0]);
        var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
        var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
        var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
        // if there is a prefix, the 0° angle points due East (instead of North per W3C)
        hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
        var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

        // TODO: Fix some inaccuracy with color stops with px values
        var lineLength = Math.min((Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

        return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
    };

    var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
        var m = args[0].match(RADIAL_SHAPE_DEFINITION);
        var shape = m && (m[1] === 'circle' || // explicit shape specification
        m[3] !== undefined && m[5] === undefined) // only one radius coordinate
        ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
        var radius = {};
        var center = {};

        if (m) {
            // Radius
            if (m[3] !== undefined) {
                radius.x = (Length_1.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
            }

            if (m[5] !== undefined) {
                radius.y = (Length_1.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
            }

            // Position
            if (m[7]) {
                center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
            } else if (m[8] !== undefined) {
                center.x = (Length_1.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
            }

            if (m[10]) {
                center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
            } else if (m[11] !== undefined) {
                center.y = (Length_1.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
            }
        }

        var gradientCenter = {
            x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
            y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
        };
        var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

        return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
    };

    var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
        var width = bounds.width;
        var height = bounds.height;
        var HALF_WIDTH = width * 0.5;
        var HALF_HEIGHT = height * 0.5;
        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
        var HALF_LINE_LENGTH = lineLength / 2;

        var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
        var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
        var x1 = width - x0;
        var y1 = height - y0;

        return { x0: x0, x1: x1, y0: y0, y1: y1 };
    };

    var parseTopRight = function parseTopRight(bounds) {
        return Math.acos(bounds.width / 2 / ((Util.distance)(bounds.width, bounds.height) / 2));
    };

    var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
        switch (side) {
            case 'bottom':
            case 'to top':
                return calculateGradientDirection(0, bounds);
            case 'left':
            case 'to right':
                return calculateGradientDirection(Math.PI / 2, bounds);
            case 'right':
            case 'to left':
                return calculateGradientDirection(3 * Math.PI / 2, bounds);
            case 'top right':
            case 'right top':
            case 'to bottom left':
            case 'to left bottom':
                return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
            case 'top left':
            case 'left top':
            case 'to bottom right':
            case 'to right bottom':
                return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
            case 'bottom left':
            case 'left bottom':
            case 'to top right':
            case 'to right top':
                return calculateGradientDirection(parseTopRight(bounds), bounds);
            case 'bottom right':
            case 'right bottom':
            case 'to top left':
            case 'to left top':
                return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
            case 'top':
            case 'to bottom':
            default:
                return calculateGradientDirection(Math.PI, bounds);
        }
    };

    var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
        var _angle$split$map = angle.split(' ').map(parseFloat),
            _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
            left = _angle$split$map2[0],
            top = _angle$split$map2[1];

        var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

        return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
    };

    var findCorner = function findCorner(bounds, x, y, closest) {
        var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

        // $FlowFixMe
        return corners.reduce(function (stat, corner) {
            var d = (Util.distance)(x - corner.x, y - corner.y);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                return {
                    optimumCorner: corner,
                    optimumDistance: d
                };
            }

            return stat;
        }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
        }).optimumCorner;
    };

    var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
        var x = center.x;
        var y = center.y;
        var rx = 0;
        var ry = 0;

        switch (extent) {
            case 'closest-side':
                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                    ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
                }
                break;

            case 'closest-corner':
                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.min((Util.distance)(x, y), (Util.distance)(x, y - bounds.height), (Util.distance)(x - bounds.width, y), (Util.distance)(x - bounds.width, y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                    var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                    var corner = findCorner(bounds, x, y, true);
                    rx = (Util.distance)(corner.x - x, (corner.y - y) / c);
                    ry = c * rx;
                }
                break;

            case 'farthest-side':
                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                    ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
                }
                break;

            case 'farthest-corner':
                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                    rx = ry = Math.max((Util.distance)(x, y), (Util.distance)(x, y - bounds.height), (Util.distance)(x - bounds.width, y), (Util.distance)(x - bounds.width, y - bounds.height));
                } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                    var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                    var _corner = findCorner(bounds, x, y, false);
                    rx = (Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                    ry = _c * rx;
                }
                break;

            default:
                // pixel or percentage values
                rx = radius.x || 0;
                ry = radius.y !== undefined ? radius.y : rx;
                break;
        }

        return {
            x: rx,
            y: ry
        };
    };

    var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
        var shape = '';
        var radius = '';
        var extent = '';
        var position = '';
        var idx = 0;

        var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
        var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
        var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

        var matchStartPosition = args[idx].match(POSITION);
        if (matchStartPosition) {
            idx++;
        }

        var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
        if (matchShapeExtent) {
            shape = matchShapeExtent[1] || '';
            extent = matchShapeExtent[2] || '';
            if (extent === 'contain') {
                extent = 'closest-side';
            } else if (extent === 'cover') {
                extent = 'farthest-corner';
            }
            idx++;
        }

        var matchStartRadius = args[idx].match(RADIUS);
        if (matchStartRadius) {
            idx++;
        }

        var matchEndPosition = args[idx].match(POSITION);
        if (matchEndPosition) {
            idx++;
        }

        var matchEndRadius = args[idx].match(RADIUS);
        if (matchEndRadius) {
            idx++;
        }

        var matchPosition = matchEndPosition || matchStartPosition;
        if (matchPosition && matchPosition[1]) {
            position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
            if (matchPosition[2]) {
                position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
            }
        }

        var matchRadius = matchEndRadius || matchStartRadius;
        if (matchRadius) {
            radius = matchRadius[0];
            if (!matchRadius[1]) {
                radius += 'px';
            }
        }

        if (position && !shape && !radius && !extent) {
            radius = position;
            position = '';
        }

        if (position) {
            position = 'at ' + position;
        }

        return [[shape, extent, radius, position].filter(function (s) {
            return !!s;
        }).join(' ')].concat(args.slice(idx));
    };

    var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
        return args.map(function (color) {
            return color.match(FROM_TO_COLORSTOP);
        })
        // $FlowFixMe
        .map(function (v, index) {
            if (!v) {
                return args[index];
            }

            switch (v[1]) {
                case 'from':
                    return v[4] + ' 0%';
                case 'to':
                    return v[4] + ' 100%';
                case 'color-stop':
                    if (v[3] === '%') {
                        return v[4] + ' ' + v[2];
                    }
                    return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
            }
        });
    };
});

unwrapExports(Gradient);

var Renderer_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _TextContainer2 = _interopRequireDefault(TextContainer_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Renderer = function () {
        function Renderer(target, options) {
            _classCallCheck(this, Renderer);

            this.target = target;
            this.options = options;
            target.render(options);
        }

        _createClass(Renderer, [{
            key: 'renderNode',
            value: function renderNode(container) {
                if (container.isVisible()) {
                    this.renderNodeBackgroundAndBorders(container);
                    this.renderNodeContent(container);
                }
            }
        }, {
            key: 'renderNodeContent',
            value: function renderNodeContent(container) {
                var _this = this;

                var callback = function callback() {
                    if (container.childNodes.length) {
                        container.childNodes.forEach(function (child) {
                            if (child instanceof _TextContainer2.default) {
                                var style = child.parent.style;
                                _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                            } else {
                                _this.target.drawShape(child, container.style.color);
                            }
                        });
                    }

                    if (container.image) {
                        var _image = _this.options.imageStore.get(container.image);
                        if (_image) {
                            var contentBox = (Bounds_1.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                            var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                            var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                            if (_width > 0 && _height > 0) {
                                _this.target.clip([(Bounds_1.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                    _this.target.drawImage(_image, new Bounds_1.Bounds(0, 0, _width, _height), contentBox);
                                });
                            }
                        }
                    }
                };
                var paths = container.getClipPaths();
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }, {
            key: 'renderNodeBackgroundAndBorders',
            value: function renderNodeBackgroundAndBorders(container) {
                var _this2 = this;

                var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

                var hasRenderableBorders = container.style.border.some(function (border$$2) {
                    return border$$2.borderStyle !== border.BORDER_STYLE.NONE && !border$$2.borderColor.isTransparent();
                });

                var callback = function callback() {
                    var backgroundPaintingArea = (background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                    if (HAS_BACKGROUND) {
                        _this2.target.clip([backgroundPaintingArea], function () {
                            if (!container.style.background.backgroundColor.isTransparent()) {
                                _this2.target.fill(container.style.background.backgroundColor);
                            }

                            _this2.renderBackgroundImage(container);
                        });
                    }

                    container.style.border.forEach(function (border$$2, side) {
                        if (border$$2.borderStyle !== border.BORDER_STYLE.NONE && !border$$2.borderColor.isTransparent()) {
                            _this2.renderBorder(border$$2, side, container.curvedBounds);
                        }
                    });
                };

                if (HAS_BACKGROUND || hasRenderableBorders) {
                    var paths = container.parent ? container.parent.getClipPaths() : [];
                    if (paths.length) {
                        this.target.clip(paths, callback);
                    } else {
                        callback();
                    }
                }
            }
        }, {
            key: 'renderBackgroundImage',
            value: function renderBackgroundImage(container) {
                var _this3 = this;

                container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                    if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                        _this3.renderBackgroundRepeat(container, backgroundImage);
                    } else if (/gradient/i.test(backgroundImage.source.method)) {
                        _this3.renderBackgroundGradient(container, backgroundImage);
                    }
                });
            }
        }, {
            key: 'renderBackgroundRepeat',
            value: function renderBackgroundRepeat(container, background$$2) {
                var image = this.options.imageStore.get(background$$2.source.args[0]);
                if (image) {
                    var backgroundPositioningArea = (background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                    var backgroundImageSize = (background.calculateBackgroundSize)(background$$2, image, backgroundPositioningArea);
                    var position = (background.calculateBackgroundPosition)(background$$2.position, backgroundImageSize, backgroundPositioningArea);
                    var _path = (background.calculateBackgroundRepeatPath)(background$$2, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                    var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                    var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                    this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
                }
            }
        }, {
            key: 'renderBackgroundGradient',
            value: function renderBackgroundGradient(container, background$$2) {
                var backgroundPositioningArea = (background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (background.calculateGradientBackgroundSize)(background$$2, backgroundPositioningArea);
                var position = (background.calculateBackgroundPosition)(background$$2.position, backgroundImageSize, backgroundPositioningArea);
                var gradientBounds = new Bounds_1.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

                var gradient = (Gradient.parseGradient)(container, background$$2.source, gradientBounds);
                if (gradient) {
                    switch (gradient.type) {
                        case Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                            // $FlowFixMe
                            this.target.renderLinearGradient(gradientBounds, gradient);
                            break;
                        case Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                            // $FlowFixMe
                            this.target.renderRadialGradient(gradientBounds, gradient);
                            break;
                    }
                }
            }
        }, {
            key: 'renderBorder',
            value: function renderBorder(border$$2, side, curvePoints) {
                this.target.drawShape((Bounds_1.parsePathForBorder)(curvePoints, side), border$$2.borderColor);
            }
        }, {
            key: 'renderStack',
            value: function renderStack(stack) {
                var _this4 = this;

                if (stack.container.isVisible()) {
                    var _opacity = stack.getOpacity();
                    if (_opacity !== this._opacity) {
                        this.target.setOpacity(stack.getOpacity());
                        this._opacity = _opacity;
                    }

                    var _transform = stack.container.style.transform;
                    if (_transform !== null) {
                        this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                            return _this4.renderStackContent(stack);
                        });
                    } else {
                        this.renderStackContent(stack);
                    }
                }
            }
        }, {
            key: 'renderStackContent',
            value: function renderStackContent(stack) {
                var _splitStackingContext = splitStackingContexts(stack),
                    _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                    negativeZIndex = _splitStackingContext2[0],
                    zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                    positiveZIndex = _splitStackingContext2[2],
                    nonPositionedFloats = _splitStackingContext2[3],
                    nonPositionedInlineLevel = _splitStackingContext2[4];

                var _splitDescendants = splitDescendants(stack),
                    _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                    inlineLevel = _splitDescendants2[0],
                    nonInlineLevel = _splitDescendants2[1];

                // https://www.w3.org/TR/css-position-3/#painting-order
                // 1. the background and borders of the element forming the stacking context.


                this.renderNodeBackgroundAndBorders(stack.container);
                // 2. the child stacking contexts with negative stack levels (most negative first).
                negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
                // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                this.renderNodeContent(stack.container);
                nonInlineLevel.forEach(this.renderNode, this);
                // 4. All non-positioned floating descendants, in tree order. For each one of these,
                // treat the element as if it created a new stacking context, but any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context,
                // not this new one.
                nonPositionedFloats.forEach(this.renderStack, this);
                // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
                nonPositionedInlineLevel.forEach(this.renderStack, this);
                inlineLevel.forEach(this.renderNode, this);
                // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
                //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
                //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
                //  but any positioned descendants and descendants which actually create a new stacking context should be
                //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
                //  treat the stacking context generated atomically.
                //
                //  All opacity descendants with opacity less than 1
                //
                //  All transform descendants with transform other than none
                zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
                // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
                // order (smallest first) then tree order.
                positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            }
        }, {
            key: 'render',
            value: function render(stack) {
                if (this.options.backgroundColor) {
                    this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
                }
                this.renderStack(stack);
                var target = this.target.getTarget();
                return target;
            }
        }]);

        return Renderer;
    }();

    exports.default = Renderer;

    var splitDescendants = function splitDescendants(stack) {
        var inlineLevel = [];
        var nonInlineLevel = [];

        var length = stack.children.length;
        for (var i = 0; i < length; i++) {
            var child = stack.children[i];
            if (child.isInlineLevel()) {
                inlineLevel.push(child);
            } else {
                nonInlineLevel.push(child);
            }
        }
        return [inlineLevel, nonInlineLevel];
    };

    var splitStackingContexts = function splitStackingContexts(stack) {
        var negativeZIndex = [];
        var zeroOrAutoZIndexOrTransformedOrOpacity = [];
        var positiveZIndex = [];
        var nonPositionedFloats = [];
        var nonPositionedInlineLevel = [];
        var length = stack.contexts.length;
        for (var i = 0; i < length; i++) {
            var child = stack.contexts[i];
            if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
                if (child.container.style.zIndex.order < 0) {
                    negativeZIndex.push(child);
                } else if (child.container.style.zIndex.order > 0) {
                    positiveZIndex.push(child);
                } else {
                    zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
                }
            } else {
                if (child.container.isFloating()) {
                    nonPositionedFloats.push(child);
                } else {
                    nonPositionedInlineLevel.push(child);
                }
            }
        }
        return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
    };

    var sortByZIndex = function sortByZIndex(a, b) {
        if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
            return 1;
        } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
            return -1;
        }

        return a.container.index > b.container.index ? 1 : -1;
    };
});

unwrapExports(Renderer_1);

var _Proxy = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Proxy = undefined;

    var _Feature2 = _interopRequireDefault(Feature);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var Proxy = exports.Proxy = function Proxy(src, options) {
        if (!options.proxy) {
            return Promise.reject(null);
        }
        var proxy = options.proxy;

        return new Promise(function (resolve, reject) {
            var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
            var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
            xhr.onload = function () {
                if (xhr instanceof XMLHttpRequest) {
                    if (xhr.status === 200) {
                        if (responseType === 'text') {
                            resolve(xhr.response);
                        } else {
                            var reader = new FileReader();
                            // $FlowFixMe
                            reader.addEventListener('load', function () {
                                return resolve(reader.result);
                            }, false);
                            // $FlowFixMe
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    } else {
                        reject('');
                    }
                } else {
                    resolve(xhr.responseText);
                }
            };

            xhr.onerror = reject;
            xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

            if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                xhr.responseType = responseType;
            }

            if (options.imageTimeout) {
                var timeout = options.imageTimeout;
                xhr.timeout = timeout;
                xhr.ontimeout = function () {
                    return reject('');
                };
            }

            xhr.send();
        });
    };
});

unwrapExports(_Proxy);

var ResourceLoader_1 = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ResourceStore = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _Feature2 = _interopRequireDefault(Feature);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ResourceLoader = function () {
        function ResourceLoader(options, logger, window) {
            _classCallCheck(this, ResourceLoader);

            this.options = options;
            this._window = window;
            this.origin = this.getOrigin(window.location.href);
            this.cache = {};
            this.logger = logger;
            this._index = 0;
        }

        _createClass(ResourceLoader, [{
            key: 'loadImage',
            value: function loadImage(src) {
                var _this = this;

                if (this.hasResourceInCache(src)) {
                    return src;
                }

                if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                    if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                        return this.addImage(src, src, false);
                    } else if (!this.isSameOrigin(src)) {
                        if (typeof this.options.proxy === 'string') {
                            this.cache[src] = (_Proxy.Proxy)(src, this.options).then(function (src) {
                                return _loadImage(src, _this.options.imageTimeout || 0);
                            });
                            return src;
                        } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                            return this.addImage(src, src, true);
                        }
                    }
                }
            }
        }, {
            key: 'inlineImage',
            value: function inlineImage(src) {
                var _this2 = this;

                if (isInlineImage(src)) {
                    return _loadImage(src, this.options.imageTimeout || 0);
                }
                if (this.hasResourceInCache(src)) {
                    return this.cache[src];
                }
                if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                    return this.cache[src] = (_Proxy.Proxy)(src, this.options).then(function (src) {
                        return _loadImage(src, _this2.options.imageTimeout || 0);
                    });
                }

                return this.xhrImage(src);
            }
        }, {
            key: 'xhrImage',
            value: function xhrImage(src) {
                var _this3 = this;

                this.cache[src] = new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status !== 200) {
                                reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                            } else {
                                var reader = new FileReader();
                                reader.addEventListener('load', function () {
                                    // $FlowFixMe
                                    var result = reader.result;
                                    resolve(result);
                                }, false);
                                reader.addEventListener('error', function (e) {
                                    return reject(e);
                                }, false);
                                reader.readAsDataURL(xhr.response);
                            }
                        }
                    };
                    xhr.responseType = 'blob';
                    if (_this3.options.imageTimeout) {
                        var timeout = _this3.options.imageTimeout;
                        xhr.timeout = timeout;
                        xhr.ontimeout = function () {
                            return reject('');
                        };
                    }
                    xhr.open('GET', src, true);
                    xhr.send();
                }).then(function (src) {
                    return _loadImage(src, _this3.options.imageTimeout || 0);
                });

                return this.cache[src];
            }
        }, {
            key: 'loadCanvas',
            value: function loadCanvas(node) {
                var key = String(this._index++);
                this.cache[key] = Promise.resolve(node);
                return key;
            }
        }, {
            key: 'hasResourceInCache',
            value: function hasResourceInCache(key) {
                return typeof this.cache[key] !== 'undefined';
            }
        }, {
            key: 'addImage',
            value: function addImage(key, src, useCORS) {
                var _this4 = this;

                var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                    return new Promise(function (resolve, reject) {
                        var img = new Image();
                        img.onload = function () {
                            return resolve(img);
                        };
                        //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                        if (!supportsDataImages || useCORS) {
                            img.crossOrigin = 'anonymous';
                        }

                        img.onerror = reject;
                        img.src = src;
                        if (img.complete === true) {
                            // Inline XML images may fail to parse, throwing an Error later on
                            setTimeout(function () {
                                resolve(img);
                            }, 500);
                        }
                        if (_this4.options.imageTimeout) {
                            var timeout = _this4.options.imageTimeout;
                            setTimeout(function () {
                                return reject('');
                            }, timeout);
                        }
                    });
                };

                this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
                _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
                return key;
            }
        }, {
            key: 'isSameOrigin',
            value: function isSameOrigin(url) {
                return this.getOrigin(url) === this.origin;
            }
        }, {
            key: 'getOrigin',
            value: function getOrigin(url) {
                var link = this._link || (this._link = this._window.document.createElement('a'));
                link.href = url;
                link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
                return link.protocol + link.hostname + link.port;
            }
        }, {
            key: 'ready',
            value: function ready() {
                var _this5 = this;

                var keys = Object.keys(this.cache);
                var values = keys.map(function (str) {
                    return _this5.cache[str].catch(function (e) {
                        return null;
                    });
                });
                return Promise.all(values).then(function (images) {
                    return new ResourceStore(keys, images);
                });
            }
        }]);

        return ResourceLoader;
    }();

    exports.default = ResourceLoader;

    var ResourceStore = exports.ResourceStore = function () {
        function ResourceStore(keys, resources) {
            _classCallCheck(this, ResourceStore);

            this._keys = keys;
            this._resources = resources;
        }

        _createClass(ResourceStore, [{
            key: 'get',
            value: function get(key) {
                var index = this._keys.indexOf(key);
                return index === -1 ? null : this._resources[index];
            }
        }]);

        return ResourceStore;
    }();

    var INLINE_SVG = /^data:image\/svg\+xml/i;
    var INLINE_BASE64 = /^data:image\/.*;base64,/i;
    var INLINE_IMG = /^data:image\/.*/i;

    var isInlineImage = function isInlineImage(src) {
        return INLINE_IMG.test(src);
    };
    var isInlineBase64Image = function isInlineBase64Image(src) {
        return INLINE_BASE64.test(src);
    };

    var isSVG = function isSVG(src) {
        return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
    };

    var _loadImage = function _loadImage(src, timeout) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                return resolve(img);
            };
            img.onerror = reject;
            img.src = src;
            if (img.complete === true) {
                // Inline XML images may fail to parse, throwing an Error later on
                setTimeout(function () {
                    resolve(img);
                }, 500);
            }
            if (timeout) {
                setTimeout(function () {
                    return reject('');
                }, timeout);
            }
        });
    };
});

unwrapExports(ResourceLoader_1);

var PseudoNodeContent = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
        TEXT: 0,
        IMAGE: 1
    };

    var TOKEN_TYPE = exports.TOKEN_TYPE = {
        STRING: 0,
        ATTRIBUTE: 1,
        URL: 2,
        COUNTER: 3,
        COUNTERS: 4,
        OPENQUOTE: 5,
        CLOSEQUOTE: 6
    };

    var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
        if (!style || !style.counterReset || style.counterReset === 'none') {
            return [];
        }

        var counterNames = [];
        var counterResets = style.counterReset.split(/\s*,\s*/);
        var lenCounterResets = counterResets.length;

        for (var i = 0; i < lenCounterResets; i++) {
            var _counterResets$i$spli = counterResets[i].split(/\s+/),
                _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
                counterName = _counterResets$i$spli2[0],
                initialValue = _counterResets$i$spli2[1];

            counterNames.push(counterName);
            var counter = data.counters[counterName];
            if (!counter) {
                counter = data.counters[counterName] = [];
            }
            counter.push(parseInt(initialValue || 0, 10));
        }

        return counterNames;
    };

    var popCounters = exports.popCounters = function popCounters(counterNames, data) {
        var lenCounters = counterNames.length;
        for (var i = 0; i < lenCounters; i++) {
            data.counters[counterNames[i]].pop();
        }
    };

    var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
        if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
            return null;
        }

        var tokens = parseContent(style.content);

        var len = tokens.length;
        var contentItems = [];
        var s = '';

        // increment the counter (if there is a "counter-increment" declaration)
        var counterIncrement = style.counterIncrement;
        if (counterIncrement && counterIncrement !== 'none') {
            var _counterIncrement$spl = counterIncrement.split(/\s+/),
                _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
                counterName = _counterIncrement$spl2[0],
                incrementValue = _counterIncrement$spl2[1];

            var counter = data.counters[counterName];
            if (counter) {
                counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
            }
        }

        // build the content string
        for (var i = 0; i < len; i++) {
            var token = tokens[i];
            switch (token.type) {
                case TOKEN_TYPE.STRING:
                    s += token.value || '';
                    break;

                case TOKEN_TYPE.ATTRIBUTE:
                    if (node instanceof HTMLElement && token.value) {
                        s += node.getAttribute(token.value) || '';
                    }
                    break;

                case TOKEN_TYPE.COUNTER:
                    var _counter = data.counters[token.name || ''];
                    if (_counter) {
                        s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                    }
                    break;

                case TOKEN_TYPE.COUNTERS:
                    var _counters = data.counters[token.name || ''];
                    if (_counters) {
                        s += formatCounterValue(_counters, token.glue, token.format);
                    }
                    break;

                case TOKEN_TYPE.OPENQUOTE:
                    s += getQuote(style, true, data.quoteDepth);
                    data.quoteDepth++;
                    break;

                case TOKEN_TYPE.CLOSEQUOTE:
                    data.quoteDepth--;
                    s += getQuote(style, false, data.quoteDepth);
                    break;

                case TOKEN_TYPE.URL:
                    if (s) {
                        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                        s = '';
                    }
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                    break;
            }
        }

        if (s) {
            contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
        }

        return contentItems;
    };

    var parseContent = exports.parseContent = function parseContent(content, cache) {
        if (cache && cache[content]) {
            return cache[content];
        }

        var tokens = [];
        var len = content.length;

        var isString = false;
        var isEscaped = false;
        var isFunction = false;
        var str = '';
        var functionName = '';
        var args = [];

        for (var i = 0; i < len; i++) {
            var c = content.charAt(i);

            switch (c) {
                case "'":
                case '"':
                    if (isEscaped) {
                        str += c;
                    } else {
                        isString = !isString;
                        if (!isFunction && !isString) {
                            tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                            str = '';
                        }
                    }
                    break;

                case '\\':
                    if (isEscaped) {
                        str += c;
                        isEscaped = false;
                    } else {
                        isEscaped = true;
                    }
                    break;

                case '(':
                    if (isString) {
                        str += c;
                    } else {
                        isFunction = true;
                        functionName = str;
                        str = '';
                        args = [];
                    }
                    break;

                case ')':
                    if (isString) {
                        str += c;
                    } else if (isFunction) {
                        if (str) {
                            args.push(str);
                        }

                        switch (functionName) {
                            case 'attr':
                                if (args.length > 0) {
                                    tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                                }
                                break;

                            case 'counter':
                                if (args.length > 0) {
                                    var counter = {
                                        type: TOKEN_TYPE.COUNTER,
                                        name: args[0]
                                    };
                                    if (args.length > 1) {
                                        counter.format = args[1];
                                    }
                                    tokens.push(counter);
                                }
                                break;

                            case 'counters':
                                if (args.length > 0) {
                                    var _counters2 = {
                                        type: TOKEN_TYPE.COUNTERS,
                                        name: args[0]
                                    };
                                    if (args.length > 1) {
                                        _counters2.glue = args[1];
                                    }
                                    if (args.length > 2) {
                                        _counters2.format = args[2];
                                    }
                                    tokens.push(_counters2);
                                }
                                break;

                            case 'url':
                                if (args.length > 0) {
                                    tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                                }
                                break;
                        }

                        isFunction = false;
                        str = '';
                    }
                    break;

                case ',':
                    if (isString) {
                        str += c;
                    } else if (isFunction) {
                        args.push(str);
                        str = '';
                    }
                    break;

                case ' ':
                case '\t':
                    if (isString) {
                        str += c;
                    } else if (str) {
                        addOtherToken(tokens, str);
                        str = '';
                    }
                    break;

                default:
                    str += c;
            }

            if (c !== '\\') {
                isEscaped = false;
            }
        }

        if (str) {
            addOtherToken(tokens, str);
        }

        if (cache) {
            cache[content] = tokens;
        }

        return tokens;
    };

    var addOtherToken = function addOtherToken(tokens, identifier) {
        switch (identifier) {
            case 'open-quote':
                tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
                break;
            case 'close-quote':
                tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
                break;
        }
    };

    var getQuote = function getQuote(style, isOpening, quoteDepth) {
        var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
        var idx = quoteDepth * 2;
        if (idx >= quotes.length) {
            idx = quotes.length - 2;
        }
        if (!isOpening) {
            ++idx;
        }
        return quotes[idx].replace(/^["']|["']$/g, '');
    };

    var formatCounterValue = function formatCounterValue(counter, glue, format) {
        var len = counter.length;
        var result = '';

        for (var i = 0; i < len; i++) {
            if (i > 0) {
                result += glue || '';
            }
            result += (ListItem.createCounterText)(counter[i], (listStyle.parseListStyleType)(format || 'decimal'), false);
        }

        return result;
    };
});

unwrapExports(PseudoNodeContent);

var Clone = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.cloneWindow = exports.DocumentCloner = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _ResourceLoader2 = _interopRequireDefault(ResourceLoader_1);

    var _CanvasRenderer2 = _interopRequireDefault(CanvasRenderer_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

    var DocumentCloner = exports.DocumentCloner = function () {
        function DocumentCloner(element, options, logger, copyInline, renderer) {
            _classCallCheck(this, DocumentCloner);

            this.referenceElement = element;
            this.scrolledElements = [];
            this.copyStyles = copyInline;
            this.inlineImages = copyInline;
            this.logger = logger;
            this.options = options;
            this.renderer = renderer;
            this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
            this.pseudoContentData = {
                counters: {},
                quoteDepth: 0
            };
            // $FlowFixMe
            this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
        }

        _createClass(DocumentCloner, [{
            key: 'inlineAllImages',
            value: function inlineAllImages(node) {
                var _this = this;

                if (this.inlineImages && node) {
                    var style = node.style;
                    Promise.all((background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                        if (backgroundImage.method === 'url') {
                            return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                                return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                            }).catch(function (e) {});
                        }
                        return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                    })).then(function (backgroundImages) {
                        if (backgroundImages.length > 1) {
                            // TODO Multiple backgrounds somehow broken in Chrome
                            style.backgroundColor = '';
                        }
                        style.backgroundImage = backgroundImages.join(',');
                    });

                    if (node instanceof HTMLImageElement) {
                        this.resourceLoader.inlineImage(node.src).then(function (img) {
                            if (img && node instanceof HTMLImageElement && node.parentNode) {
                                var parentNode = node.parentNode;
                                var clonedChild = (Util.copyCSSStyles)(node.style, img.cloneNode(false));
                                parentNode.replaceChild(clonedChild, node);
                            }
                        }).catch(function (e) {});
                    }
                }
            }
        }, {
            key: 'inlineFonts',
            value: function inlineFonts(document) {
                var _this2 = this;

                return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                    if (sheet.href) {
                        return fetch(sheet.href).then(function (res) {
                            return res.text();
                        }).then(function (text) {
                            return createStyleSheetFontsFromText(text, sheet.href);
                        }).catch(function (e) {
                            return [];
                        });
                    }
                    return getSheetFonts(sheet, document);
                })).then(function (fonts) {
                    return fonts.reduce(function (acc, font) {
                        return acc.concat(font);
                    }, []);
                }).then(function (fonts) {
                    return Promise.all(fonts.map(function (font) {
                        return fetch(font.formats[0].src).then(function (response) {
                            return response.blob();
                        }).then(function (blob) {
                            return new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.onerror = reject;
                                reader.onload = function () {
                                    // $FlowFixMe
                                    var result = reader.result;
                                    resolve(result);
                                };
                                reader.readAsDataURL(blob);
                            });
                        }).then(function (dataUri) {
                            font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                            return '@font-face {' + font.fontFace.cssText + ' ';
                        });
                    }));
                }).then(function (fontCss) {
                    var style = document.createElement('style');
                    style.textContent = fontCss.join('\n');
                    _this2.documentElement.appendChild(style);
                });
            }
        }, {
            key: 'createElementClone',
            value: function createElementClone(node) {
                var _this3 = this;

                if (this.copyStyles && node instanceof HTMLCanvasElement) {
                    var img = node.ownerDocument.createElement('img');
                    try {
                        img.src = node.toDataURL();
                        return img;
                    } catch (e) {}
                }

                if (node instanceof HTMLIFrameElement) {
                    var tempIframe = node.cloneNode(false);
                    var iframeKey = generateIframeKey();
                    tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                    var _parseBounds = (Bounds_1.parseBounds)(node, 0, 0),
                        width = _parseBounds.width,
                        height = _parseBounds.height;

                    this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                        return _this3.renderer(documentElement, {
                            async: _this3.options.async,
                            allowTaint: _this3.options.allowTaint,
                            backgroundColor: '#ffffff',
                            canvas: null,
                            imageTimeout: _this3.options.imageTimeout,
                            logging: _this3.options.logging,
                            proxy: _this3.options.proxy,
                            removeContainer: _this3.options.removeContainer,
                            scale: _this3.options.scale,
                            foreignObjectRendering: _this3.options.foreignObjectRendering,
                            useCORS: _this3.options.useCORS,
                            target: new _CanvasRenderer2.default(),
                            width: width,
                            height: height,
                            x: 0,
                            y: 0,
                            windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                            windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                            scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                            scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                        }, _this3.logger.child(iframeKey));
                    }).then(function (canvas) {
                        return new Promise(function (resolve, reject) {
                            var iframeCanvas = document.createElement('img');
                            iframeCanvas.onload = function () {
                                return resolve(canvas);
                            };
                            iframeCanvas.onerror = reject;
                            iframeCanvas.src = canvas.toDataURL();
                            if (tempIframe.parentNode) {
                                tempIframe.parentNode.replaceChild((Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                            }
                        });
                    });
                    return tempIframe;
                }

                if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                    var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                        return css + rule.cssText;
                    }, '');
                    var style = node.cloneNode(false);
                    style.textContent = css;
                    return style;
                }

                return node.cloneNode(false);
            }
        }, {
            key: 'cloneNode',
            value: function cloneNode(node) {
                var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

                var window = node.ownerDocument.defaultView;
                var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
                var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
                var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

                if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                    this.clonedReferenceElement = clone;
                }

                if (clone instanceof window.HTMLBodyElement) {
                    createPseudoHideStyles(clone);
                }

                var counters = (PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
                var contentBefore = (PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

                for (var child = node.firstChild; child; child = child.nextSibling) {
                    if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                    // $FlowFixMe
                    !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                    // $FlowFixMe
                    !this.options.ignoreElements(child))) {
                        if (!this.copyStyles || child.nodeName !== 'STYLE') {
                            clone.appendChild(this.cloneNode(child));
                        }
                    }
                }

                var contentAfter = (PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
                (PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

                if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                    if (styleBefore) {
                        this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                    }
                    if (styleAfter) {
                        this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                    }
                    if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                        (Util.copyCSSStyles)(style, clone);
                    }
                    this.inlineAllImages(clone);
                    if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                        this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                    }
                    switch (node.nodeName) {
                        case 'CANVAS':
                            if (!this.copyStyles) {
                                cloneCanvasContents(node, clone);
                            }
                            break;
                        case 'TEXTAREA':
                        case 'SELECT':
                            clone.value = node.value;
                            break;
                    }
                }
                return clone;
            }
        }]);

        return DocumentCloner;
    }();

    var getSheetFonts = function getSheetFonts(sheet, document) {
        // $FlowFixMe
        return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
            return rule.type === CSSRule.FONT_FACE_RULE;
        }).map(function (rule) {
            var src = (background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
            var formats = [];
            for (var i = 0; i < src.length; i++) {
                if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                    var a = document.createElement('a');
                    a.href = src[i].args[0];
                    if (document.body) {
                        document.body.appendChild(a);
                    }

                    var font = {
                        src: a.href,
                        format: src[i + 1].args[0]
                    };
                    formats.push(font);
                }
            }

            return {
                // TODO select correct format for browser),

                formats: formats.filter(function (font) {
                    return (/^woff/i.test(font.format)
                    );
                }),
                fontFace: rule.style
            };
        }).filter(function (font) {
            return font.formats.length;
        });
    };

    var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
        var doc = document.implementation.createHTMLDocument('');
        var base = document.createElement('base');
        // $FlowFixMe
        base.href = baseHref;
        var style = document.createElement('style');

        style.textContent = text;
        if (doc.head) {
            doc.head.appendChild(base);
        }
        if (doc.body) {
            doc.body.appendChild(style);
        }

        return style.sheet ? getSheetFonts(style.sheet, doc) : [];
    };

    var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
        if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
        }
    };

    var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
        try {
            if (clonedCanvas) {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext('2d');
                var clonedCtx = clonedCanvas.getContext('2d');
                if (ctx) {
                    clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                } else {
                    clonedCtx.drawImage(canvas, 0, 0);
                }
            }
        } catch (e) {}
    };

    var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
        if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
            return;
        }

        var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
        (Util.copyCSSStyles)(style, anonymousReplacedElement);

        if (contentItems) {
            var len = contentItems.length;
            for (var i = 0; i < len; i++) {
                var item = contentItems[i];
                switch (item.type) {
                    case PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                        var img = clone.ownerDocument.createElement('img');
                        img.src = (background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                        img.style.opacity = '1';
                        anonymousReplacedElement.appendChild(img);
                        break;
                    case PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                        anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                        break;
                }
            }
        }

        anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
        clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
        if (pseudoElt === PSEUDO_BEFORE) {
            clone.insertBefore(anonymousReplacedElement, clone.firstChild);
        } else {
            clone.appendChild(anonymousReplacedElement);
        }

        return anonymousReplacedElement;
    };

    var PSEUDO_BEFORE = ':before';
    var PSEUDO_AFTER = ':after';
    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

    var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

    var createPseudoHideStyles = function createPseudoHideStyles(body) {
        createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
    };

    var createStyles = function createStyles(body, styles) {
        var style = body.ownerDocument.createElement('style');
        style.innerHTML = styles;
        body.appendChild(style);
    };

    var initNode = function initNode(_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            element = _ref2[0],
            x = _ref2[1],
            y = _ref2[2];

        element.scrollLeft = x;
        element.scrollTop = y;
    };

    var generateIframeKey = function generateIframeKey() {
        return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
    };

    var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

    var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
        try {
            return Promise.resolve(node.contentWindow.document.documentElement);
        } catch (e) {
            return options.proxy ? (_Proxy.Proxy)(node.src, options).then(function (html) {
                var match = html.match(DATA_URI_REGEXP);
                if (!match) {
                    return Promise.reject();
                }

                return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
            }).then(function (html) {
                return createIframeContainer(node.ownerDocument, (Bounds_1.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                    var cloneWindow = cloneIframeContainer.contentWindow;
                    var documentClone = cloneWindow.document;

                    documentClone.open();
                    documentClone.write(html);
                    var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                        return documentClone.documentElement;
                    });

                    documentClone.close();
                    return iframeLoad;
                });
            }) : Promise.reject();
        }
    };

    var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
        var cloneIframeContainer = ownerDocument.createElement('iframe');

        cloneIframeContainer.className = 'html2canvas-container';
        cloneIframeContainer.style.visibility = 'hidden';
        cloneIframeContainer.style.position = 'fixed';
        cloneIframeContainer.style.left = '-10000px';
        cloneIframeContainer.style.top = '0px';
        cloneIframeContainer.style.border = '0';
        cloneIframeContainer.width = bounds.width.toString();
        cloneIframeContainer.height = bounds.height.toString();
        cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
        if (!ownerDocument.body) {
            return Promise.reject('');
        }

        ownerDocument.body.appendChild(cloneIframeContainer);

        return Promise.resolve(cloneIframeContainer);
    };

    var iframeLoader = function iframeLoader(cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        return new Promise(function (resolve, reject) {
            cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
                var interval = setInterval(function () {
                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                        clearInterval(interval);
                        resolve(cloneIframeContainer);
                    }
                }, 50);
            };
        });
    };

    var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
        var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
        var scrollX = ownerDocument.defaultView.pageXOffset;
        var scrollY = ownerDocument.defaultView.pageYOffset;

        return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
            var cloneWindow = cloneIframeContainer.contentWindow;
            var documentClone = cloneWindow.document;

            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
                 if window url is about:blank, we can assign the url to current by writing onto the document
                 */

            var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                cloner.scrolledElements.forEach(initNode);
                cloneWindow.scrollTo(bounds.left, bounds.top);
                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                    documentClone.documentElement.style.top = -bounds.top + 'px';
                    documentClone.documentElement.style.left = -bounds.left + 'px';
                    documentClone.documentElement.style.position = 'absolute';
                }

                var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

                var onclone = options.onclone;

                return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                    return onclone(documentClone);
                }).then(function () {
                    return result;
                }) : result : Promise.reject('');
            });

            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
            // Chrome scrolls the parent document for some reason after the write to the cloned window???
            restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
            documentClone.close();

            return iframeLoad;
        });
    };

    var serializeDoctype = function serializeDoctype(doctype) {
        var str = '';
        if (doctype) {
            str += '<!DOCTYPE ';
            if (doctype.name) {
                str += doctype.name;
            }

            if (doctype.internalSubset) {
                str += doctype.internalSubset;
            }

            if (doctype.publicId) {
                str += '"' + doctype.publicId + '"';
            }

            if (doctype.systemId) {
                str += '"' + doctype.systemId + '"';
            }

            str += '>';
        }

        return str;
    };
});

unwrapExports(Clone);

var Window = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.renderElement = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _Logger2 = _interopRequireDefault(Logger_1);

    var _Renderer2 = _interopRequireDefault(Renderer_1);

    var _ForeignObjectRenderer2 = _interopRequireDefault(ForeignObjectRenderer_1);

    var _Feature2 = _interopRequireDefault(Feature);

    var _Color2 = _interopRequireDefault(Color_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var renderElement = exports.renderElement = function renderElement(element, options, logger) {
        var ownerDocument = element.ownerDocument;

        var windowBounds = new Bounds_1.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : Color_1.TRANSPARENT;
        var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : Color_1.TRANSPARENT;

        var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

        return (options.foreignObjectRendering ? // $FlowFixMe
        _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
            return supportForeignObject ? function (cloner) {
                return cloner.inlineFonts(ownerDocument).then(function () {
                    return cloner.resourceLoader.ready();
                }).then(function () {
                    var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);
                    return renderer.render({
                        backgroundColor: backgroundColor,
                        logger: logger,
                        scale: options.scale,
                        x: options.x,
                        y: options.y,
                        width: options.width,
                        height: options.height,
                        windowWidth: options.windowWidth,
                        windowHeight: options.windowHeight,
                        scrollX: options.scrollX,
                        scrollY: options.scrollY
                    });
                });
            }(new Clone.DocumentCloner(element, options, logger, true, renderElement)) : (Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 3),
                    container = _ref2[0],
                    clonedElement = _ref2[1],
                    resourceLoader = _ref2[2];

                var stack = (NodeParser_1.NodeParser)(clonedElement, resourceLoader, logger);
                var clonedDocument = clonedElement.ownerDocument;

                if (backgroundColor === stack.container.style.background.backgroundColor) {
                    stack.container.style.background.backgroundColor = Color_1.TRANSPARENT;
                }

                return resourceLoader.ready().then(function (imageStore) {
                    var fontMetrics = new Font.FontMetrics(clonedDocument);
                    var renderOptions = {
                        backgroundColor: backgroundColor,
                        fontMetrics: fontMetrics,
                        imageStore: imageStore,
                        logger: logger,
                        scale: options.scale,
                        x: options.x,
                        y: options.y,
                        width: options.width,
                        height: options.height
                    };

                    if (Array.isArray(options.target)) {
                        return Promise.all(options.target.map(function (target) {
                            var renderer = new _Renderer2.default(target, renderOptions);
                            return renderer.render(stack);
                        }));
                    } else {
                        var renderer = new _Renderer2.default(options.target, renderOptions);
                        var canvas = renderer.render(stack);
                        if (options.removeContainer === true) {
                            if (container.parentNode) {
                                container.parentNode.removeChild(container);
                            } else {}
                        }

                        return canvas;
                    }
                });
            });
        });
    };
});

unwrapExports(Window);

var npm = createCommonjsModule(function (module) {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var _CanvasRenderer2 = _interopRequireDefault(CanvasRenderer_1);

    var _Logger2 = _interopRequireDefault(Logger_1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var html2canvas = function html2canvas(element, conf) {
        var config = conf || {};
        var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
        logger.log('html2canvas ' + "$npm_package_version");

        if ("production" !== 'production' && typeof config.onrendered === 'function') {
            logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
        }

        var ownerDocument = element.ownerDocument;
        if (!ownerDocument) {
            return Promise.reject('Provided element is not within a Document');
        }
        var defaultView = ownerDocument.defaultView;

        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;

        var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

        var _ref = isDocument ? (Bounds_1.parseDocumentSize)(ownerDocument) : (Bounds_1.parseBounds)(element, scrollX, scrollY),
            width = _ref.width,
            height = _ref.height,
            left = _ref.left,
            top = _ref.top;

        var defaultOptions = {
            async: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            imageTimeout: 15000,
            logging: true,
            proxy: null,
            removeContainer: true,
            foreignObjectRendering: false,
            scale: defaultView.devicePixelRatio || 1,
            target: new _CanvasRenderer2.default(config.canvas),
            useCORS: false,
            x: left,
            y: top,
            width: Math.ceil(width),
            height: Math.ceil(height),
            windowWidth: defaultView.innerWidth,
            windowHeight: defaultView.innerHeight,
            scrollX: defaultView.pageXOffset,
            scrollY: defaultView.pageYOffset
        };

        var result = (Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

        return result;
    };

    html2canvas.CanvasRenderer = _CanvasRenderer2.default;

    module.exports = html2canvas;
});

var index = unwrapExports(npm);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var rgbcolor = createCommonjsModule$1(function (module) {
	/**
  * A class to parse color values
  * @author Stoyan Stefanov <sstoo@gmail.com>
  * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
  * @license Use it if you like it
  */

	(function (global) {

		function RGBColor(color_string) {
			this.ok = false;

			// strip any leading #
			if (color_string.charAt(0) == '#') {
				// remove # if any
				color_string = color_string.substr(1, 6);
			}

			color_string = color_string.replace(/ /g, '');
			color_string = color_string.toLowerCase();

			// before getting into regexps, try simple matches
			// and overwrite the input
			var channels,
			    channels,
			    simple_colors = {
				aliceblue: 'f0f8ff',
				antiquewhite: 'faebd7',
				aqua: '00ffff',
				aquamarine: '7fffd4',
				azure: 'f0ffff',
				beige: 'f5f5dc',
				bisque: 'ffe4c4',
				black: '000000',
				blanchedalmond: 'ffebcd',
				blue: '0000ff',
				blueviolet: '8a2be2',
				brown: 'a52a2a',
				burlywood: 'deb887',
				cadetblue: '5f9ea0',
				chartreuse: '7fff00',
				chocolate: 'd2691e',
				coral: 'ff7f50',
				cornflowerblue: '6495ed',
				cornsilk: 'fff8dc',
				crimson: 'dc143c',
				cyan: '00ffff',
				darkblue: '00008b',
				darkcyan: '008b8b',
				darkgoldenrod: 'b8860b',
				darkgray: 'a9a9a9',
				darkgreen: '006400',
				darkkhaki: 'bdb76b',
				darkmagenta: '8b008b',
				darkolivegreen: '556b2f',
				darkorange: 'ff8c00',
				darkorchid: '9932cc',
				darkred: '8b0000',
				darksalmon: 'e9967a',
				darkseagreen: '8fbc8f',
				darkslateblue: '483d8b',
				darkslategray: '2f4f4f',
				darkturquoise: '00ced1',
				darkviolet: '9400d3',
				deeppink: 'ff1493',
				deepskyblue: '00bfff',
				dimgray: '696969',
				dodgerblue: '1e90ff',
				feldspar: 'd19275',
				firebrick: 'b22222',
				floralwhite: 'fffaf0',
				forestgreen: '228b22',
				fuchsia: 'ff00ff',
				gainsboro: 'dcdcdc',
				ghostwhite: 'f8f8ff',
				gold: 'ffd700',
				goldenrod: 'daa520',
				gray: '808080',
				green: '008000',
				greenyellow: 'adff2f',
				honeydew: 'f0fff0',
				hotpink: 'ff69b4',
				indianred: 'cd5c5c',
				indigo: '4b0082',
				ivory: 'fffff0',
				khaki: 'f0e68c',
				lavender: 'e6e6fa',
				lavenderblush: 'fff0f5',
				lawngreen: '7cfc00',
				lemonchiffon: 'fffacd',
				lightblue: 'add8e6',
				lightcoral: 'f08080',
				lightcyan: 'e0ffff',
				lightgoldenrodyellow: 'fafad2',
				lightgrey: 'd3d3d3',
				lightgreen: '90ee90',
				lightpink: 'ffb6c1',
				lightsalmon: 'ffa07a',
				lightseagreen: '20b2aa',
				lightskyblue: '87cefa',
				lightslateblue: '8470ff',
				lightslategray: '778899',
				lightsteelblue: 'b0c4de',
				lightyellow: 'ffffe0',
				lime: '00ff00',
				limegreen: '32cd32',
				linen: 'faf0e6',
				magenta: 'ff00ff',
				maroon: '800000',
				mediumaquamarine: '66cdaa',
				mediumblue: '0000cd',
				mediumorchid: 'ba55d3',
				mediumpurple: '9370d8',
				mediumseagreen: '3cb371',
				mediumslateblue: '7b68ee',
				mediumspringgreen: '00fa9a',
				mediumturquoise: '48d1cc',
				mediumvioletred: 'c71585',
				midnightblue: '191970',
				mintcream: 'f5fffa',
				mistyrose: 'ffe4e1',
				moccasin: 'ffe4b5',
				navajowhite: 'ffdead',
				navy: '000080',
				oldlace: 'fdf5e6',
				olive: '808000',
				olivedrab: '6b8e23',
				orange: 'ffa500',
				orangered: 'ff4500',
				orchid: 'da70d6',
				palegoldenrod: 'eee8aa',
				palegreen: '98fb98',
				paleturquoise: 'afeeee',
				palevioletred: 'd87093',
				papayawhip: 'ffefd5',
				peachpuff: 'ffdab9',
				peru: 'cd853f',
				pink: 'ffc0cb',
				plum: 'dda0dd',
				powderblue: 'b0e0e6',
				purple: '800080',
				red: 'ff0000',
				rosybrown: 'bc8f8f',
				royalblue: '4169e1',
				saddlebrown: '8b4513',
				salmon: 'fa8072',
				sandybrown: 'f4a460',
				seagreen: '2e8b57',
				seashell: 'fff5ee',
				sienna: 'a0522d',
				silver: 'c0c0c0',
				skyblue: '87ceeb',
				slateblue: '6a5acd',
				slategray: '708090',
				snow: 'fffafa',
				springgreen: '00ff7f',
				steelblue: '4682b4',
				tan: 'd2b48c',
				teal: '008080',
				thistle: 'd8bfd8',
				tomato: 'ff6347',
				turquoise: '40e0d0',
				violet: 'ee82ee',
				violetred: 'd02090',
				wheat: 'f5deb3',
				white: 'ffffff',
				whitesmoke: 'f5f5f5',
				yellow: 'ffff00',
				yellowgreen: '9acd32'
			};
			for (var key in simple_colors) {
				if (color_string == key) {
					color_string = channels, simple_colors[key];
				}
			}
			// emd of simple type-in colors

			// array of color definition objects
			var color_defs = [{
				re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
				example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
				process: function process(bits) {
					return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
				}
			}, {
				re: /^(\w{2})(\w{2})(\w{2})$/,
				example: ['#00ff00', '336699'],
				process: function process(bits) {
					return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
				}
			}, {
				re: /^(\w{1})(\w{1})(\w{1})$/,
				example: ['#fb0', 'f0f'],
				process: function process(bits) {
					return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
				}
			}];

			// search through the definitions to find a match
			for (var i = 0; i < color_defs.length; i++) {
				var re = color_defs[i].re;
				var processor = color_defs[i].process;
				var bits = re.exec(color_string);
				if (bits) {
					channels = processor(bits);
					this.r = channels[0];
					this.g = channels[1];
					this.b = channels[2];
					this.ok = true;
				}
			}

			// validate/cleanup values
			this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
			this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
			this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;

			// some getters
			this.toRGB = function () {
				return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
			};
			this.toHex = function () {
				var r = this.r.toString(16);
				var g = this.g.toString(16);
				var b = this.b.toString(16);
				if (r.length == 1) r = '0' + r;
				if (g.length == 1) g = '0' + g;
				if (b.length == 1) b = '0' + b;
				return '#' + r + g + b;
			};

			// help
			this.getHelpXML = function () {

				var examples = new Array();
				// add regexps
				for (var i = 0; i < color_defs.length; i++) {
					var example = color_defs[i].example;
					for (var j = 0; j < example.length; j++) {
						examples[examples.length] = example[j];
					}
				}
				// add type-in colors
				for (var sc in simple_colors) {
					examples[examples.length] = sc;
				}

				var xml = document.createElement('ul');
				xml.setAttribute('id', 'rgbcolor-examples');
				for (var i = 0; i < examples.length; i++) {
					try {
						var list_item = document.createElement('li');
						var list_color = new RGBColor(examples[i]);
						var example_div = document.createElement('div');
						example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
						example_div.appendChild(document.createTextNode('test'));
						var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
						list_item.appendChild(example_div);
						list_item.appendChild(list_item_value);
						xml.appendChild(list_item);
					} catch (e) {}
				}
				return xml;
			};
		}

		// export as AMD...
		if (typeof undefined !== 'undefined' && undefined.amd) {
			undefined(function () {
				return RGBColor;
			});
		}

		// ...or as browserify
		else if ('object' !== 'undefined' && module.exports) {
				module.exports = RGBColor;
			}

		global.RGBColor = RGBColor;
	})(typeof window !== 'undefined' ? window : commonjsGlobal);
});

var StackBlur = createCommonjsModule$1(function (module) {
	/*
 
 StackBlur - a fast almost Gaussian Blur For Canvas
 
 Version: 	0.5
 Author:		Mario Klingemann
 Contact: 	mario@quasimondo.com
 Website:	http://www.quasimondo.com/StackBlurForCanvas
 Twitter:	@quasimondo
 
 In case you find this class useful - especially in commercial projects -
 I am not totally unhappy for a small donation to my PayPal account
 mario@quasimondo.de
 
 Or support me on flattr: 
 https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript
 
 Copyright (c) 2010 Mario Klingemann
 
 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:
 
 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */

	(function (global) {

		var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];

		var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

		function premultiplyAlpha(imageData) {
			var pixels = imageData.data;
			var size = imageData.width * imageData.height * 4;

			for (var i = 0; i < size; i += 4) {
				var a = pixels[i + 3] / 255;
				pixels[i] *= a;
				pixels[i + 1] *= a;
				pixels[i + 2] *= a;
			}
		}

		function unpremultiplyAlpha(imageData) {
			var pixels = imageData.data;
			var size = imageData.width * imageData.height * 4;

			for (var i = 0; i < size; i += 4) {
				var a = pixels[i + 3];
				if (a != 0) {
					a = 255 / a;
					pixels[i] *= a;
					pixels[i + 1] *= a;
					pixels[i + 2] *= a;
				}
			}
		}

		function stackBlurImage(imageID, canvasID, radius, blurAlphaChannel) {

			var img = document.getElementById(imageID);
			var w = img.naturalWidth;
			var h = img.naturalHeight;

			var canvas = document.getElementById(canvasID);

			canvas.style.width = w + "px";
			canvas.style.height = h + "px";
			canvas.width = w;
			canvas.height = h;

			var context = canvas.getContext("2d");
			context.clearRect(0, 0, w, h);
			context.drawImage(img, 0, 0);

			if (isNaN(radius) || radius < 1) return;

			if (blurAlphaChannel) stackBlurCanvasRGBA(canvasID, 0, 0, w, h, radius);else stackBlurCanvasRGB(canvasID, 0, 0, w, h, radius);
		}

		function stackBlurCanvasRGBA(id, top_x, top_y, width, height, radius) {
			if (isNaN(radius) || radius < 1) return;
			radius |= 0;

			var canvas = document.getElementById(id);
			var context = canvas.getContext("2d");
			var imageData;

			try {
				try {
					imageData = context.getImageData(top_x, top_y, width, height);
				} catch (e) {

					// NOTE: this part is supposedly only needed if you want to work with local files
					// so it might be okay to remove the whole try/catch block and just use
					// imageData = context.getImageData( top_x, top_y, width, height );
					try {
						netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
						imageData = context.getImageData(top_x, top_y, width, height);
					} catch (e) {
						alert("Cannot access local image");
						throw new Error("unable to access local image data: " + e);
						return;
					}
				}
			} catch (e) {
				alert("Cannot access image");
				throw new Error("unable to access image data: " + e);
			}

			premultiplyAlpha(imageData);

			var pixels = imageData.data;

			var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;

			var div = radius + radius + 1;
			var widthMinus1 = width - 1;
			var heightMinus1 = height - 1;
			var radiusPlus1 = radius + 1;
			var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

			var stackStart = new BlurStack();
			var stack = stackStart;
			for (i = 1; i < div; i++) {
				stack = stack.next = new BlurStack();
				if (i == radiusPlus1) var stackEnd = stack;
			}
			stack.next = stackStart;
			var stackIn = null;
			var stackOut = null;

			yw = yi = 0;

			var mul_sum = mul_table[radius];
			var shg_sum = shg_table[radius];

			for (y = 0; y < height; y++) {
				r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

				r_out_sum = radiusPlus1 * (pr = pixels[yi]);
				g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
				b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
				a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

				r_sum += sumFactor * pr;
				g_sum += sumFactor * pg;
				b_sum += sumFactor * pb;
				a_sum += sumFactor * pa;

				stack = stackStart;

				for (i = 0; i < radiusPlus1; i++) {
					stack.r = pr;
					stack.g = pg;
					stack.b = pb;
					stack.a = pa;
					stack = stack.next;
				}

				for (i = 1; i < radiusPlus1; i++) {
					p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
					r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
					g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
					b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
					a_sum += (stack.a = pa = pixels[p + 3]) * rbs;

					r_in_sum += pr;
					g_in_sum += pg;
					b_in_sum += pb;
					a_in_sum += pa;

					stack = stack.next;
				}

				stackIn = stackStart;
				stackOut = stackEnd;
				for (x = 0; x < width; x++) {
					pixels[yi] = r_sum * mul_sum >> shg_sum;
					pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
					pixels[yi + 2] = b_sum * mul_sum >> shg_sum;
					pixels[yi + 3] = a_sum * mul_sum >> shg_sum;

					r_sum -= r_out_sum;
					g_sum -= g_out_sum;
					b_sum -= b_out_sum;
					a_sum -= a_out_sum;

					r_out_sum -= stackIn.r;
					g_out_sum -= stackIn.g;
					b_out_sum -= stackIn.b;
					a_out_sum -= stackIn.a;

					p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;

					r_in_sum += stackIn.r = pixels[p];
					g_in_sum += stackIn.g = pixels[p + 1];
					b_in_sum += stackIn.b = pixels[p + 2];
					a_in_sum += stackIn.a = pixels[p + 3];

					r_sum += r_in_sum;
					g_sum += g_in_sum;
					b_sum += b_in_sum;
					a_sum += a_in_sum;

					stackIn = stackIn.next;

					r_out_sum += pr = stackOut.r;
					g_out_sum += pg = stackOut.g;
					b_out_sum += pb = stackOut.b;
					a_out_sum += pa = stackOut.a;

					r_in_sum -= pr;
					g_in_sum -= pg;
					b_in_sum -= pb;
					a_in_sum -= pa;

					stackOut = stackOut.next;

					yi += 4;
				}
				yw += width;
			}

			for (x = 0; x < width; x++) {
				g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

				yi = x << 2;
				r_out_sum = radiusPlus1 * (pr = pixels[yi]);
				g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
				b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
				a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

				r_sum += sumFactor * pr;
				g_sum += sumFactor * pg;
				b_sum += sumFactor * pb;
				a_sum += sumFactor * pa;

				stack = stackStart;

				for (i = 0; i < radiusPlus1; i++) {
					stack.r = pr;
					stack.g = pg;
					stack.b = pb;
					stack.a = pa;
					stack = stack.next;
				}

				yp = width;

				for (i = 1; i <= radius; i++) {
					yi = yp + x << 2;

					r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
					g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
					b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
					a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;

					r_in_sum += pr;
					g_in_sum += pg;
					b_in_sum += pb;
					a_in_sum += pa;

					stack = stack.next;

					if (i < heightMinus1) {
						yp += width;
					}
				}

				yi = x;
				stackIn = stackStart;
				stackOut = stackEnd;
				for (y = 0; y < height; y++) {
					p = yi << 2;
					pixels[p] = r_sum * mul_sum >> shg_sum;
					pixels[p + 1] = g_sum * mul_sum >> shg_sum;
					pixels[p + 2] = b_sum * mul_sum >> shg_sum;
					pixels[p + 3] = a_sum * mul_sum >> shg_sum;

					r_sum -= r_out_sum;
					g_sum -= g_out_sum;
					b_sum -= b_out_sum;
					a_sum -= a_out_sum;

					r_out_sum -= stackIn.r;
					g_out_sum -= stackIn.g;
					b_out_sum -= stackIn.b;
					a_out_sum -= stackIn.a;

					p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;

					r_sum += r_in_sum += stackIn.r = pixels[p];
					g_sum += g_in_sum += stackIn.g = pixels[p + 1];
					b_sum += b_in_sum += stackIn.b = pixels[p + 2];
					a_sum += a_in_sum += stackIn.a = pixels[p + 3];

					stackIn = stackIn.next;

					r_out_sum += pr = stackOut.r;
					g_out_sum += pg = stackOut.g;
					b_out_sum += pb = stackOut.b;
					a_out_sum += pa = stackOut.a;

					r_in_sum -= pr;
					g_in_sum -= pg;
					b_in_sum -= pb;
					a_in_sum -= pa;

					stackOut = stackOut.next;

					yi += width;
				}
			}

			unpremultiplyAlpha(imageData);

			context.putImageData(imageData, top_x, top_y);
		}

		function stackBlurCanvasRGB(id, top_x, top_y, width, height, radius) {
			if (isNaN(radius) || radius < 1) return;
			radius |= 0;

			var canvas = document.getElementById(id);
			var context = canvas.getContext("2d");
			var imageData;

			try {
				try {
					imageData = context.getImageData(top_x, top_y, width, height);
				} catch (e) {

					// NOTE: this part is supposedly only needed if you want to work with local files
					// so it might be okay to remove the whole try/catch block and just use
					// imageData = context.getImageData( top_x, top_y, width, height );
					try {
						netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
						imageData = context.getImageData(top_x, top_y, width, height);
					} catch (e) {
						alert("Cannot access local image");
						throw new Error("unable to access local image data: " + e);
						return;
					}
				}
			} catch (e) {
				alert("Cannot access image");
				throw new Error("unable to access image data: " + e);
			}

			var pixels = imageData.data;

			var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, r_out_sum, g_out_sum, b_out_sum, r_in_sum, g_in_sum, b_in_sum, pr, pg, pb, rbs;

			var div = radius + radius + 1;
			var widthMinus1 = width - 1;
			var heightMinus1 = height - 1;
			var radiusPlus1 = radius + 1;
			var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

			var stackStart = new BlurStack();
			var stack = stackStart;
			for (i = 1; i < div; i++) {
				stack = stack.next = new BlurStack();
				if (i == radiusPlus1) var stackEnd = stack;
			}
			stack.next = stackStart;
			var stackIn = null;
			var stackOut = null;

			yw = yi = 0;

			var mul_sum = mul_table[radius];
			var shg_sum = shg_table[radius];

			for (y = 0; y < height; y++) {
				r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

				r_out_sum = radiusPlus1 * (pr = pixels[yi]);
				g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
				b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

				r_sum += sumFactor * pr;
				g_sum += sumFactor * pg;
				b_sum += sumFactor * pb;

				stack = stackStart;

				for (i = 0; i < radiusPlus1; i++) {
					stack.r = pr;
					stack.g = pg;
					stack.b = pb;
					stack = stack.next;
				}

				for (i = 1; i < radiusPlus1; i++) {
					p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
					r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
					g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
					b_sum += (stack.b = pb = pixels[p + 2]) * rbs;

					r_in_sum += pr;
					g_in_sum += pg;
					b_in_sum += pb;

					stack = stack.next;
				}

				stackIn = stackStart;
				stackOut = stackEnd;
				for (x = 0; x < width; x++) {
					pixels[yi] = r_sum * mul_sum >> shg_sum;
					pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
					pixels[yi + 2] = b_sum * mul_sum >> shg_sum;

					r_sum -= r_out_sum;
					g_sum -= g_out_sum;
					b_sum -= b_out_sum;

					r_out_sum -= stackIn.r;
					g_out_sum -= stackIn.g;
					b_out_sum -= stackIn.b;

					p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;

					r_in_sum += stackIn.r = pixels[p];
					g_in_sum += stackIn.g = pixels[p + 1];
					b_in_sum += stackIn.b = pixels[p + 2];

					r_sum += r_in_sum;
					g_sum += g_in_sum;
					b_sum += b_in_sum;

					stackIn = stackIn.next;

					r_out_sum += pr = stackOut.r;
					g_out_sum += pg = stackOut.g;
					b_out_sum += pb = stackOut.b;

					r_in_sum -= pr;
					g_in_sum -= pg;
					b_in_sum -= pb;

					stackOut = stackOut.next;

					yi += 4;
				}
				yw += width;
			}

			for (x = 0; x < width; x++) {
				g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

				yi = x << 2;
				r_out_sum = radiusPlus1 * (pr = pixels[yi]);
				g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
				b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

				r_sum += sumFactor * pr;
				g_sum += sumFactor * pg;
				b_sum += sumFactor * pb;

				stack = stackStart;

				for (i = 0; i < radiusPlus1; i++) {
					stack.r = pr;
					stack.g = pg;
					stack.b = pb;
					stack = stack.next;
				}

				yp = width;

				for (i = 1; i <= radius; i++) {
					yi = yp + x << 2;

					r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
					g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
					b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;

					r_in_sum += pr;
					g_in_sum += pg;
					b_in_sum += pb;

					stack = stack.next;

					if (i < heightMinus1) {
						yp += width;
					}
				}

				yi = x;
				stackIn = stackStart;
				stackOut = stackEnd;
				for (y = 0; y < height; y++) {
					p = yi << 2;
					pixels[p] = r_sum * mul_sum >> shg_sum;
					pixels[p + 1] = g_sum * mul_sum >> shg_sum;
					pixels[p + 2] = b_sum * mul_sum >> shg_sum;

					r_sum -= r_out_sum;
					g_sum -= g_out_sum;
					b_sum -= b_out_sum;

					r_out_sum -= stackIn.r;
					g_out_sum -= stackIn.g;
					b_out_sum -= stackIn.b;

					p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;

					r_sum += r_in_sum += stackIn.r = pixels[p];
					g_sum += g_in_sum += stackIn.g = pixels[p + 1];
					b_sum += b_in_sum += stackIn.b = pixels[p + 2];

					stackIn = stackIn.next;

					r_out_sum += pr = stackOut.r;
					g_out_sum += pg = stackOut.g;
					b_out_sum += pb = stackOut.b;

					r_in_sum -= pr;
					g_in_sum -= pg;
					b_in_sum -= pb;

					stackOut = stackOut.next;

					yi += width;
				}
			}

			context.putImageData(imageData, top_x, top_y);
		}

		function BlurStack() {
			this.r = 0;
			this.g = 0;
			this.b = 0;
			this.a = 0;
			this.next = null;
		}

		var stackBlur = {
			image: stackBlurImage,
			canvasRGBA: stackBlurCanvasRGBA,
			canvasRGB: stackBlurCanvasRGB
		};

		// export as AMD...
		if (typeof undefined !== 'undefined' && undefined.amd) {
			undefined(function () {
				return stackBlur;
			});
		}

		// ...or as browserify
		else if ('object' !== 'undefined' && module.exports) {
				module.exports = stackBlur;
			}

		global.stackBlur = stackBlur;
	})(typeof window !== 'undefined' ? window : commonjsGlobal);
});

var canvg = createCommonjsModule$1(function (module) {
	/*
  * canvg.js - Javascript SVG parser and renderer on Canvas
  * MIT Licensed
  * Gabe Lerner (gabelerner@gmail.com)
  * http://code.google.com/p/canvg/
  *
  * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
  */
	(function (global, factory) {

		'use strict';

		// export as AMD...

		if (typeof undefined !== 'undefined' && undefined.amd) {
			undefined('canvgModule', ['rgbcolor', 'stackblur'], factory);
		}

		// ...or as browserify
		else if ('object' !== 'undefined' && module.exports) {
				module.exports = factory(rgbcolor, StackBlur);
			}

		global.canvg = factory(global.RGBColor, global.stackBlur);
	})(typeof window !== 'undefined' ? window : commonjsGlobal, function (RGBColor, stackBlur) {

		// canvg(target, s)
		// empty parameters: replace all 'svg' elements on page with 'canvas' elements
		// target: canvas element or the id of a canvas element
		// s: svg string, url to svg file, or xml document
		// opts: optional hash of options
		//		 ignoreMouse: true => ignore mouse events
		//		 ignoreAnimation: true => ignore animations
		//		 ignoreDimensions: true => does not try to resize canvas
		//		 ignoreClear: true => does not clear canvas
		//		 offsetX: int => draws at a x offset
		//		 offsetY: int => draws at a y offset
		//		 scaleWidth: int => scales horizontally to width
		//		 scaleHeight: int => scales vertically to height
		//		 renderCallback: function => will call the function after the first render is completed
		//		 forceRedraw: function => will call the function on every frame, if it returns true, will redraw
		var canvg = function canvg(target, s, opts) {
			// no parameters
			if (target == null && s == null && opts == null) {
				var svgTags = document.querySelectorAll('svg');
				for (var i = 0; i < svgTags.length; i++) {
					var svgTag = svgTags[i];
					var c = document.createElement('canvas');
					c.width = svgTag.clientWidth;
					c.height = svgTag.clientHeight;
					svgTag.parentNode.insertBefore(c, svgTag);
					svgTag.parentNode.removeChild(svgTag);
					var div = document.createElement('div');
					div.appendChild(svgTag);
					canvg(c, div.innerHTML);
				}
				return;
			}

			if (typeof target == 'string') {
				target = document.getElementById(target);
			}

			// store class on canvas
			if (target.svg != null) target.svg.stop();
			var svg = build(opts || {});
			// on i.e. 8 for flash canvas, we can't assign the property so check for it
			if (!(target.childNodes.length == 1 && target.childNodes[0].nodeName == 'OBJECT')) target.svg = svg;

			var ctx = target.getContext('2d');
			if (typeof s.documentElement != 'undefined') {
				// load from xml doc
				svg.loadXmlDoc(ctx, s);
			} else if (s.substr(0, 1) == '<') {
				// load from xml string
				svg.loadXml(ctx, s);
			} else {
				// load from url
				svg.load(ctx, s);
			}
		};

		// see https://developer.mozilla.org/en-US/docs/Web/API/Element.matches
		var matchesSelector;
		if (typeof Element.prototype.matches != 'undefined') {
			matchesSelector = function matchesSelector(node, selector) {
				return node.matches(selector);
			};
		} else if (typeof Element.prototype.webkitMatchesSelector != 'undefined') {
			matchesSelector = function matchesSelector(node, selector) {
				return node.webkitMatchesSelector(selector);
			};
		} else if (typeof Element.prototype.mozMatchesSelector != 'undefined') {
			matchesSelector = function matchesSelector(node, selector) {
				return node.mozMatchesSelector(selector);
			};
		} else if (typeof Element.prototype.msMatchesSelector != 'undefined') {
			matchesSelector = function matchesSelector(node, selector) {
				return node.msMatchesSelector(selector);
			};
		} else if (typeof Element.prototype.oMatchesSelector != 'undefined') {
			matchesSelector = function matchesSelector(node, selector) {
				return node.oMatchesSelector(selector);
			};
		} else {
			// requires Sizzle: https://github.com/jquery/sizzle/wiki/Sizzle-Documentation
			// or jQuery: http://jquery.com/download/
			// or Zepto: http://zeptojs.com/#
			// without it, this is a ReferenceError

			if (typeof jQuery === 'function' || typeof Zepto === 'function') {
				matchesSelector = function matchesSelector(node, selector) {
					return $(node).is(selector);
				};
			}

			if (typeof matchesSelector === 'undefined') {
				matchesSelector = Sizzle.matchesSelector;
			}
		}

		// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
		var attributeRegex = /(\[[^\]]+\])/g;
		var idRegex = /(#[^\s\+>~\.\[:]+)/g;
		var classRegex = /(\.[^\s\+>~\.\[:]+)/g;
		var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
		var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
		var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
		var elementRegex = /([^\s\+>~\.\[:]+)/g;
		function getSelectorSpecificity(selector) {
			var typeCount = [0, 0, 0];
			var findMatch = function findMatch(regex, type) {
				var matches = selector.match(regex);
				if (matches == null) {
					return;
				}
				typeCount[type] += matches.length;
				selector = selector.replace(regex, ' ');
			};

			selector = selector.replace(/:not\(([^\)]*)\)/g, '     $1 ');
			selector = selector.replace(/{[\s\S]*/gm, ' ');
			findMatch(attributeRegex, 1);
			findMatch(idRegex, 0);
			findMatch(classRegex, 1);
			findMatch(pseudoElementRegex, 2);
			findMatch(pseudoClassWithBracketsRegex, 1);
			findMatch(pseudoClassRegex, 1);
			selector = selector.replace(/[\*\s\+>~]/g, ' ');
			selector = selector.replace(/[#\.]/g, ' ');
			findMatch(elementRegex, 2);
			return typeCount.join('');
		}

		function build(opts) {
			var svg = { opts: opts };

			svg.FRAMERATE = 30;
			svg.MAX_VIRTUAL_PIXELS = 30000;

			svg.log = function (msg) {};
			if (svg.opts['log'] == true && typeof console != 'undefined') {
				svg.log = function (msg) {
					console.log(msg);
				};
			}

			// globals
			svg.init = function (ctx) {
				var uniqueId = 0;
				svg.UniqueId = function () {
					uniqueId++;return 'canvg' + uniqueId;
				};
				svg.Definitions = {};
				svg.Styles = {};
				svg.StylesSpecificity = {};
				svg.Animations = [];
				svg.Images = [];
				svg.ctx = ctx;
				svg.ViewPort = new function () {
					this.viewPorts = [];
					this.Clear = function () {
						this.viewPorts = [];
					};
					this.SetCurrent = function (width, height) {
						this.viewPorts.push({ width: width, height: height });
					};
					this.RemoveCurrent = function () {
						this.viewPorts.pop();
					};
					this.Current = function () {
						return this.viewPorts[this.viewPorts.length - 1];
					};
					this.width = function () {
						return this.Current().width;
					};
					this.height = function () {
						return this.Current().height;
					};
					this.ComputeSize = function (d) {
						if (d != null && typeof d == 'number') return d;
						if (d == 'x') return this.width();
						if (d == 'y') return this.height();
						return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
					};
				}();
			};
			svg.init();

			// images loaded
			svg.ImagesLoaded = function () {
				for (var i = 0; i < svg.Images.length; i++) {
					if (!svg.Images[i].loaded) return false;
				}
				return true;
			};

			// trim
			svg.trim = function (s) {
				return s.replace(/^\s+|\s+$/g, '');
			};

			// compress spaces
			svg.compressSpaces = function (s) {
				return s.replace(/[\s\r\t\n]+/gm, ' ');
			};

			// ajax
			svg.ajax = function (url) {
				var AJAX;
				if (window.XMLHttpRequest) {
					AJAX = new XMLHttpRequest();
				} else {
					AJAX = new ActiveXObject('Microsoft.XMLHTTP');
				}
				if (AJAX) {
					AJAX.open('GET', url, false);
					AJAX.send(null);
					return AJAX.responseText;
				}
				return null;
			};

			// parse xml
			svg.parseXml = function (xml) {
				if (typeof Windows != 'undefined' && typeof Windows.Data != 'undefined' && typeof Windows.Data.Xml != 'undefined') {
					var xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();
					var settings = new Windows.Data.Xml.Dom.XmlLoadSettings();
					settings.prohibitDtd = false;
					xmlDoc.loadXml(xml, settings);
					return xmlDoc;
				} else if (window.DOMParser) {
					try {
						var parser = new DOMParser();
						return parser.parseFromString(xml, 'image/svg+xml');
					} catch (e) {
						parser = new DOMParser();
						return parser.parseFromString(xml, 'text/xml');
					}
				} else {
					xml = xml.replace(/<!DOCTYPE svg[^>]*>/, '');
					var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
					xmlDoc.async = 'false';
					xmlDoc.loadXML(xml);
					return xmlDoc;
				}
			};

			svg.Property = function (name, value) {
				this.name = name;
				this.value = value;
			};
			svg.Property.prototype.getValue = function () {
				return this.value;
			};

			svg.Property.prototype.hasValue = function () {
				return this.value != null && this.value !== '';
			};

			// return the numerical value of the property
			svg.Property.prototype.numValue = function () {
				if (!this.hasValue()) return 0;

				var n = parseFloat(this.value);
				if ((this.value + '').match(/%$/)) {
					n = n / 100.0;
				}
				return n;
			};

			svg.Property.prototype.valueOrDefault = function (def) {
				if (this.hasValue()) return this.value;
				return def;
			};

			svg.Property.prototype.numValueOrDefault = function (def) {
				if (this.hasValue()) return this.numValue();
				return def;
			};

			// color extensions
			// augment the current color value with the opacity
			svg.Property.prototype.addOpacity = function (opacityProp) {
				var newValue = this.value;
				if (opacityProp.value != null && opacityProp.value != '' && typeof this.value == 'string') {
					// can only add opacity to colors, not patterns
					var color = new RGBColor(this.value);
					if (color.ok) {
						newValue = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + opacityProp.numValue() + ')';
					}
				}
				return new svg.Property(this.name, newValue);
			};

			// definition extensions
			// get the definition from the definitions table
			svg.Property.prototype.getDefinition = function () {
				var name = this.value.match(/#([^\)'"]+)/);
				if (name) {
					name = name[1];
				}
				if (!name) {
					name = this.value;
				}
				return svg.Definitions[name];
			};

			svg.Property.prototype.isUrlDefinition = function () {
				return this.value.indexOf('url(') == 0;
			};

			svg.Property.prototype.getFillStyleDefinition = function (e, opacityProp) {
				var def = this.getDefinition();

				// gradient
				if (def != null && def.createGradient) {
					return def.createGradient(svg.ctx, e, opacityProp);
				}

				// pattern
				if (def != null && def.createPattern) {
					if (def.getHrefAttribute().hasValue()) {
						var pt = def.attribute('patternTransform');
						def = def.getHrefAttribute().getDefinition();
						if (pt.hasValue()) {
							def.attribute('patternTransform', true).value = pt.value;
						}
					}
					return def.createPattern(svg.ctx, e);
				}

				return null;
			};

			// length extensions
			svg.Property.prototype.getDPI = function (viewPort) {
				return 96.0; // TODO: compute?
			};

			svg.Property.prototype.getEM = function (viewPort) {
				var em = 12;

				var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
				if (fontSize.hasValue()) em = fontSize.toPixels(viewPort);

				return em;
			};

			svg.Property.prototype.getUnits = function () {
				var s = this.value + '';
				return s.replace(/[0-9\.\-]/g, '');
			};

			// get the length as pixels
			svg.Property.prototype.toPixels = function (viewPort, processPercent) {
				if (!this.hasValue()) return 0;
				var s = this.value + '';
				if (s.match(/em$/)) return this.numValue() * this.getEM(viewPort);
				if (s.match(/ex$/)) return this.numValue() * this.getEM(viewPort) / 2.0;
				if (s.match(/px$/)) return this.numValue();
				if (s.match(/pt$/)) return this.numValue() * this.getDPI(viewPort) * (1.0 / 72.0);
				if (s.match(/pc$/)) return this.numValue() * 15;
				if (s.match(/cm$/)) return this.numValue() * this.getDPI(viewPort) / 2.54;
				if (s.match(/mm$/)) return this.numValue() * this.getDPI(viewPort) / 25.4;
				if (s.match(/in$/)) return this.numValue() * this.getDPI(viewPort);
				if (s.match(/%$/)) return this.numValue() * svg.ViewPort.ComputeSize(viewPort);
				var n = this.numValue();
				if (processPercent && n < 1.0) return n * svg.ViewPort.ComputeSize(viewPort);
				return n;
			};

			// time extensions
			// get the time as milliseconds
			svg.Property.prototype.toMilliseconds = function () {
				if (!this.hasValue()) return 0;
				var s = this.value + '';
				if (s.match(/s$/)) return this.numValue() * 1000;
				if (s.match(/ms$/)) return this.numValue();
				return this.numValue();
			};

			// angle extensions
			// get the angle as radians
			svg.Property.prototype.toRadians = function () {
				if (!this.hasValue()) return 0;
				var s = this.value + '';
				if (s.match(/deg$/)) return this.numValue() * (Math.PI / 180.0);
				if (s.match(/grad$/)) return this.numValue() * (Math.PI / 200.0);
				if (s.match(/rad$/)) return this.numValue();
				return this.numValue() * (Math.PI / 180.0);
			};

			// text extensions
			// get the text baseline
			var i,
			    i,
			    textBaselineMapping = {
				'baseline': 'alphabetic',
				'before-edge': 'top',
				'text-before-edge': 'top',
				'middle': 'middle',
				'central': 'middle',
				'after-edge': 'bottom',
				'text-after-edge': 'bottom',
				'ideographic': 'ideographic',
				'alphabetic': 'alphabetic',
				'hanging': 'hanging',
				'mathematical': 'alphabetic'
			};
			svg.Property.prototype.toTextBaseline = function () {
				if (!this.hasValue()) return null;
				return textBaselineMapping[this.value];
			};

			// fonts
			svg.Font = new function () {
				this.Styles = 'normal|italic|oblique|inherit';
				this.Variants = 'normal|small-caps|inherit';
				this.Weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';

				this.CreateFont = function (fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
					var f = inherit != null ? this.Parse(inherit) : this.CreateFont('', '', '', '', '', svg.ctx.font);
					return {
						fontFamily: fontFamily || f.fontFamily,
						fontSize: fontSize || f.fontSize,
						fontStyle: fontStyle || f.fontStyle,
						fontWeight: fontWeight || f.fontWeight,
						fontVariant: fontVariant || f.fontVariant,
						toString: function toString() {
							return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(' ');
						}
					};
				};

				var that = this;
				this.Parse = function (s) {
					var f = {};
					var d = svg.trim(svg.compressSpaces(s || '')).split(' ');
					var set = { fontSize: false, fontStyle: false, fontWeight: false, fontVariant: false };
					var ff = '';
					for (var i = 0; i < d.length; i++) {
						if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) {
							if (d[i] != 'inherit') f.fontStyle = d[i];set.fontStyle = true;
						} else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) {
							if (d[i] != 'inherit') f.fontVariant = d[i];set.fontStyle = set.fontVariant = true;
						} else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {
							if (d[i] != 'inherit') f.fontWeight = d[i];set.fontStyle = set.fontVariant = set.fontWeight = true;
						} else if (!set.fontSize) {
							if (d[i] != 'inherit') f.fontSize = d[i].split('/')[0];set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true;
						} else {
							if (d[i] != 'inherit') ff += d[i];
						}
					}if (ff != '') f.fontFamily = ff;
					return f;
				};
			}();

			// points and paths
			svg.ToNumberArray = function (s) {
				var a = svg.trim(svg.compressSpaces((s || '').replace(/,/g, ' '))).split(' ');
				for (var i = 0; i < a.length; i++) {
					a[i] = parseFloat(a[i]);
				}
				return a;
			};
			svg.Point = function (x, y) {
				this.x = x;
				this.y = y;
			};
			svg.Point.prototype.angleTo = function (p) {
				return Math.atan2(p.y - this.y, p.x - this.x);
			};

			svg.Point.prototype.applyTransform = function (v) {
				var xp = this.x * v[0] + this.y * v[2] + v[4];
				var yp = this.x * v[1] + this.y * v[3] + v[5];
				this.x = xp;
				this.y = yp;
			};

			svg.CreatePoint = function (s) {
				var a = svg.ToNumberArray(s);
				return new svg.Point(a[0], a[1]);
			};
			svg.CreatePath = function (s) {
				var a = svg.ToNumberArray(s);
				var path = [];
				for (var i = 0; i < a.length; i += 2) {
					path.push(new svg.Point(a[i], a[i + 1]));
				}
				return path;
			};

			// bounding box
			svg.BoundingBox = function (x1, y1, x2, y2) {
				// pass in initial points if you want
				this.x1 = Number.NaN;
				this.y1 = Number.NaN;
				this.x2 = Number.NaN;
				this.y2 = Number.NaN;

				this.x = function () {
					return this.x1;
				};
				this.y = function () {
					return this.y1;
				};
				this.width = function () {
					return this.x2 - this.x1;
				};
				this.height = function () {
					return this.y2 - this.y1;
				};

				this.addPoint = function (x, y) {
					if (x != null) {
						if (isNaN(this.x1) || isNaN(this.x2)) {
							this.x1 = x;
							this.x2 = x;
						}
						if (x < this.x1) this.x1 = x;
						if (x > this.x2) this.x2 = x;
					}

					if (y != null) {
						if (isNaN(this.y1) || isNaN(this.y2)) {
							this.y1 = y;
							this.y2 = y;
						}
						if (y < this.y1) this.y1 = y;
						if (y > this.y2) this.y2 = y;
					}
				};
				this.addX = function (x) {
					this.addPoint(x, null);
				};
				this.addY = function (y) {
					this.addPoint(null, y);
				};

				this.addBoundingBox = function (bb) {
					this.addPoint(bb.x1, bb.y1);
					this.addPoint(bb.x2, bb.y2);
				};

				this.addQuadraticCurve = function (p0x, p0y, p1x, p1y, p2x, p2y) {
					var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
					var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
					var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
					var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
					this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
				};

				this.addBezierCurve = function (p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
					// from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
					var p0 = [p0x, p0y],
					    p1 = [p1x, p1y],
					    p2 = [p2x, p2y],
					    p3 = [p3x, p3y];
					this.addPoint(p0[0], p0[1]);
					this.addPoint(p3[0], p3[1]);

					for (i = 0; i <= 1; i++) {
						var f = function f(t) {
							return Math.pow(1 - t, 3) * p0[i] + 3 * Math.pow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * Math.pow(t, 2) * p2[i] + Math.pow(t, 3) * p3[i];
						};

						var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
						var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
						var c = 3 * p1[i] - 3 * p0[i];

						if (a == 0) {
							if (b == 0) continue;
							var t = -c / b;
							if (0 < t && t < 1) {
								if (i == 0) this.addX(f(t));
								if (i == 1) this.addY(f(t));
							}
							continue;
						}

						var b2ac = Math.pow(b, 2) - 4 * c * a;
						if (b2ac < 0) continue;
						var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
						if (0 < t1 && t1 < 1) {
							if (i == 0) this.addX(f(t1));
							if (i == 1) this.addY(f(t1));
						}
						var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
						if (0 < t2 && t2 < 1) {
							if (i == 0) this.addX(f(t2));
							if (i == 1) this.addY(f(t2));
						}
					}
				};

				this.isPointInBox = function (x, y) {
					return this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2;
				};

				this.addPoint(x1, y1);
				this.addPoint(x2, y2);
			};

			// transforms
			svg.Transform = function (v) {
				var that = this;
				this.Type = {};

				// translate
				this.Type.translate = function (s) {
					this.p = svg.CreatePoint(s);
					this.apply = function (ctx) {
						ctx.translate(this.p.x || 0.0, this.p.y || 0.0);
					};
					this.unapply = function (ctx) {
						ctx.translate(-1.0 * this.p.x || 0.0, -1.0 * this.p.y || 0.0);
					};
					this.applyToPoint = function (p) {
						p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
					};
				};

				// rotate
				this.Type.rotate = function (s) {
					var a = svg.ToNumberArray(s);
					this.angle = new svg.Property('angle', a[0]);
					this.cx = a[1] || 0;
					this.cy = a[2] || 0;
					this.apply = function (ctx) {
						ctx.translate(this.cx, this.cy);
						ctx.rotate(this.angle.toRadians());
						ctx.translate(-this.cx, -this.cy);
					};
					this.unapply = function (ctx) {
						ctx.translate(this.cx, this.cy);
						ctx.rotate(-1.0 * this.angle.toRadians());
						ctx.translate(-this.cx, -this.cy);
					};
					this.applyToPoint = function (p) {
						var a = this.angle.toRadians();
						p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
						p.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
						p.applyTransform([1, 0, 0, 1, -this.p.x || 0.0, -this.p.y || 0.0]);
					};
				};

				this.Type.scale = function (s) {
					this.p = svg.CreatePoint(s);
					this.apply = function (ctx) {
						ctx.scale(this.p.x || 1.0, this.p.y || this.p.x || 1.0);
					};
					this.unapply = function (ctx) {
						ctx.scale(1.0 / this.p.x || 1.0, 1.0 / this.p.y || this.p.x || 1.0);
					};
					this.applyToPoint = function (p) {
						p.applyTransform([this.p.x || 0.0, 0, 0, this.p.y || 0.0, 0, 0]);
					};
				};

				this.Type.matrix = function (s) {
					this.m = svg.ToNumberArray(s);
					this.apply = function (ctx) {
						ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
					};
					this.unapply = function (ctx) {
						var a = this.m[0];
						var b = this.m[2];
						var c = this.m[4];
						var d = this.m[1];
						var e = this.m[3];
						var f = this.m[5];
						var g = 0.0;
						var h = 0.0;
						var i = 1.0;
						var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
						ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
					};
					this.applyToPoint = function (p) {
						p.applyTransform(this.m);
					};
				};

				this.Type.SkewBase = function (s) {
					this.base = that.Type.matrix;
					this.base(s);
					this.angle = new svg.Property('angle', s);
				};
				this.Type.SkewBase.prototype = new this.Type.matrix();

				this.Type.skewX = function (s) {
					this.base = that.Type.SkewBase;
					this.base(s);
					this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0];
				};
				this.Type.skewX.prototype = new this.Type.SkewBase();

				this.Type.skewY = function (s) {
					this.base = that.Type.SkewBase;
					this.base(s);
					this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0];
				};
				this.Type.skewY.prototype = new this.Type.SkewBase();

				this.transforms = [];

				this.apply = function (ctx) {
					for (var i = 0; i < this.transforms.length; i++) {
						this.transforms[i].apply(ctx);
					}
				};

				this.unapply = function (ctx) {
					for (var i = this.transforms.length - 1; i >= 0; i--) {
						this.transforms[i].unapply(ctx);
					}
				};

				this.applyToPoint = function (p) {
					for (var i = 0; i < this.transforms.length; i++) {
						this.transforms[i].applyToPoint(p);
					}
				};

				var data = svg.trim(svg.compressSpaces(v)).replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
				for (var i = 0; i < data.length; i++) {
					var type = svg.trim(data[i].split('(')[0]);
					var s = data[i].split('(')[1].replace(')', '');
					var transformType = this.Type[type];
					if (typeof transformType != 'undefined') {
						var transform = new transformType(s);
						transform.type = type;
						this.transforms.push(transform);
					}
				}
			};

			// aspect ratio
			svg.AspectRatio = function (ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
				// aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
				aspectRatio = svg.compressSpaces(aspectRatio);
				aspectRatio = aspectRatio.replace(/^defer\s/, ''); // ignore defer
				var align = aspectRatio.split(' ')[0] || 'xMidYMid';
				var meetOrSlice = aspectRatio.split(' ')[1] || 'meet';

				// calculate scale
				var scaleX = width / desiredWidth;
				var scaleY = height / desiredHeight;
				var scaleMin = Math.min(scaleX, scaleY);
				var scaleMax = Math.max(scaleX, scaleY);
				if (meetOrSlice == 'meet') {
					desiredWidth *= scaleMin;desiredHeight *= scaleMin;
				}
				if (meetOrSlice == 'slice') {
					desiredWidth *= scaleMax;desiredHeight *= scaleMax;
				}

				refX = new svg.Property('refX', refX);
				refY = new svg.Property('refY', refY);
				if (refX.hasValue() && refY.hasValue()) {
					ctx.translate(-scaleMin * refX.toPixels('x'), -scaleMin * refY.toPixels('y'));
				} else {
					// align
					if (align.match(/^xMid/) && (meetOrSlice == 'meet' && scaleMin == scaleY || meetOrSlice == 'slice' && scaleMax == scaleY)) ctx.translate(width / 2.0 - desiredWidth / 2.0, 0);
					if (align.match(/YMid$/) && (meetOrSlice == 'meet' && scaleMin == scaleX || meetOrSlice == 'slice' && scaleMax == scaleX)) ctx.translate(0, height / 2.0 - desiredHeight / 2.0);
					if (align.match(/^xMax/) && (meetOrSlice == 'meet' && scaleMin == scaleY || meetOrSlice == 'slice' && scaleMax == scaleY)) ctx.translate(width - desiredWidth, 0);
					if (align.match(/YMax$/) && (meetOrSlice == 'meet' && scaleMin == scaleX || meetOrSlice == 'slice' && scaleMax == scaleX)) ctx.translate(0, height - desiredHeight);
				}

				// scale
				if (align == 'none') ctx.scale(scaleX, scaleY);else if (meetOrSlice == 'meet') ctx.scale(scaleMin, scaleMin);else if (meetOrSlice == 'slice') ctx.scale(scaleMax, scaleMax);

				// translate
				ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);
			};

			// elements
			svg.Element = {};

			svg.EmptyProperty = new svg.Property('EMPTY', '');

			svg.Element.ElementBase = function (node) {
				this.attributes = {};
				this.styles = {};
				this.stylesSpecificity = {};
				this.children = [];

				// get or create attribute
				this.attribute = function (name, createIfNotExists) {
					var a = this.attributes[name];
					if (a != null) return a;

					if (createIfNotExists == true) {
						a = new svg.Property(name, '');this.attributes[name] = a;
					}
					return a || svg.EmptyProperty;
				};

				this.getHrefAttribute = function () {
					for (var a in this.attributes) {
						if (a == 'href' || a.match(/:href$/)) {
							return this.attributes[a];
						}
					}
					return svg.EmptyProperty;
				};

				// get or create style, crawls up node tree
				this.style = function (name, createIfNotExists, skipAncestors) {
					var s = this.styles[name];
					if (s != null) return s;

					var a = this.attribute(name);
					if (a != null && a.hasValue()) {
						this.styles[name] = a; // move up to me to cache
						return a;
					}

					if (skipAncestors != true) {
						var p = this.parent;
						if (p != null) {
							var ps = p.style(name);
							if (ps != null && ps.hasValue()) {
								return ps;
							}
						}
					}

					if (createIfNotExists == true) {
						s = new svg.Property(name, '');this.styles[name] = s;
					}
					return s || svg.EmptyProperty;
				};

				// base render
				this.render = function (ctx) {
					// don't render display=none
					if (this.style('display').value == 'none') return;

					// don't render visibility=hidden
					if (this.style('visibility').value == 'hidden') return;

					ctx.save();
					if (this.style('mask').hasValue()) {
						// mask
						var mask = this.style('mask').getDefinition();
						if (mask != null) mask.apply(ctx, this);
					} else if (this.style('filter').hasValue()) {
						// filter
						var filter = this.style('filter').getDefinition();
						if (filter != null) filter.apply(ctx, this);
					} else {
						this.setContext(ctx);
						this.renderChildren(ctx);
						this.clearContext(ctx);
					}
					ctx.restore();
				};

				// base set context
				this.setContext = function (ctx) {}
				// OVERRIDE ME!


				// base clear context
				;this.clearContext = function (ctx) {}
				// OVERRIDE ME!


				// base render children
				;this.renderChildren = function (ctx) {
					for (var i = 0; i < this.children.length; i++) {
						this.children[i].render(ctx);
					}
				};

				this.addChild = function (childNode, create) {
					var child = childNode;
					if (create) child = svg.CreateElement(childNode);
					child.parent = this;
					if (child.type != 'title') {
						this.children.push(child);
					}
				};

				this.addStylesFromStyleDefinition = function () {
					// add styles
					for (var selector in svg.Styles) {
						if (selector[0] != '@' && matchesSelector(node, selector)) {
							var styles = svg.Styles[selector];
							var specificity = svg.StylesSpecificity[selector];
							if (styles != null) {
								for (var name in styles) {
									var existingSpecificity = this.stylesSpecificity[name];
									if (typeof existingSpecificity == 'undefined') {
										existingSpecificity = '000';
									}
									if (specificity > existingSpecificity) {
										this.styles[name] = styles[name];
										this.stylesSpecificity[name] = specificity;
									}
								}
							}
						}
					}
				};

				// Microsoft Edge fix
				var allUppercase = new RegExp("^[A-Z-]+$");
				var normalizeAttributeName = function normalizeAttributeName(name) {
					if (allUppercase.test(name)) {
						return name.toLowerCase();
					}
					return name;
				};

				if (node != null && node.nodeType == 1) {
					//ELEMENT_NODE
					// add attributes
					for (var i = 0; i < node.attributes.length; i++) {
						var attribute = node.attributes[i];
						var nodeName = normalizeAttributeName(attribute.nodeName);
						this.attributes[nodeName] = new svg.Property(nodeName, attribute.value);
					}

					this.addStylesFromStyleDefinition();

					// add inline styles
					if (this.attribute('style').hasValue()) {
						var styles = this.attribute('style').value.split(';');
						for (var i = 0; i < styles.length; i++) {
							if (svg.trim(styles[i]) != '') {
								var style = styles[i].split(':');
								var name = svg.trim(style[0]);
								var value = svg.trim(style[1]);
								this.styles[name] = new svg.Property(name, value);
							}
						}
					}

					// add id
					if (this.attribute('id').hasValue()) {
						if (svg.Definitions[this.attribute('id').value] == null) {
							svg.Definitions[this.attribute('id').value] = this;
						}
					}

					// add children
					for (var i = 0; i < node.childNodes.length; i++) {
						var childNode = node.childNodes[i];
						if (childNode.nodeType == 1) this.addChild(childNode, true); //ELEMENT_NODE
						if (this.captureTextNodes && (childNode.nodeType == 3 || childNode.nodeType == 4)) {
							var text = childNode.value || childNode.text || childNode.textContent || '';
							if (svg.compressSpaces(text) != '') {
								this.addChild(new svg.Element.tspan(childNode), false); // TEXT_NODE
							}
						}
					}
				}
			};

			svg.Element.RenderedElementBase = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.setContext = function (ctx) {
					// fill
					if (this.style('fill').isUrlDefinition()) {
						var fs = this.style('fill').getFillStyleDefinition(this, this.style('fill-opacity'));
						if (fs != null) ctx.fillStyle = fs;
					} else if (this.style('fill').hasValue()) {
						var fillStyle = this.style('fill');
						if (fillStyle.value == 'currentColor') fillStyle.value = this.style('color').value;
						if (fillStyle.value != 'inherit') ctx.fillStyle = fillStyle.value == 'none' ? 'rgba(0,0,0,0)' : fillStyle.value;
					}
					if (this.style('fill-opacity').hasValue()) {
						var fillStyle = new svg.Property('fill', ctx.fillStyle);
						fillStyle = fillStyle.addOpacity(this.style('fill-opacity'));
						ctx.fillStyle = fillStyle.value;
					}

					// stroke
					if (this.style('stroke').isUrlDefinition()) {
						var fs = this.style('stroke').getFillStyleDefinition(this, this.style('stroke-opacity'));
						if (fs != null) ctx.strokeStyle = fs;
					} else if (this.style('stroke').hasValue()) {
						var strokeStyle = this.style('stroke');
						if (strokeStyle.value == 'currentColor') strokeStyle.value = this.style('color').value;
						if (strokeStyle.value != 'inherit') ctx.strokeStyle = strokeStyle.value == 'none' ? 'rgba(0,0,0,0)' : strokeStyle.value;
					}
					if (this.style('stroke-opacity').hasValue()) {
						var strokeStyle = new svg.Property('stroke', ctx.strokeStyle);
						strokeStyle = strokeStyle.addOpacity(this.style('stroke-opacity'));
						ctx.strokeStyle = strokeStyle.value;
					}
					if (this.style('stroke-width').hasValue()) {
						var newLineWidth = this.style('stroke-width').toPixels();
						ctx.lineWidth = newLineWidth == 0 ? 0.001 : newLineWidth; // browsers don't respect 0
					}
					if (this.style('stroke-linecap').hasValue()) ctx.lineCap = this.style('stroke-linecap').value;
					if (this.style('stroke-linejoin').hasValue()) ctx.lineJoin = this.style('stroke-linejoin').value;
					if (this.style('stroke-miterlimit').hasValue()) ctx.miterLimit = this.style('stroke-miterlimit').value;
					if (this.style('paint-order').hasValue()) ctx.paintOrder = this.style('paint-order').value;
					if (this.style('stroke-dasharray').hasValue() && this.style('stroke-dasharray').value != 'none') {
						var gaps = svg.ToNumberArray(this.style('stroke-dasharray').value);
						if (typeof ctx.setLineDash != 'undefined') {
							ctx.setLineDash(gaps);
						} else if (typeof ctx.webkitLineDash != 'undefined') {
							ctx.webkitLineDash = gaps;
						} else if (typeof ctx.mozDash != 'undefined' && !(gaps.length == 1 && gaps[0] == 0)) {
							ctx.mozDash = gaps;
						}

						var offset = this.style('stroke-dashoffset').numValueOrDefault(1);
						if (typeof ctx.lineDashOffset != 'undefined') {
							ctx.lineDashOffset = offset;
						} else if (typeof ctx.webkitLineDashOffset != 'undefined') {
							ctx.webkitLineDashOffset = offset;
						} else if (typeof ctx.mozDashOffset != 'undefined') {
							ctx.mozDashOffset = offset;
						}
					}

					// font
					if (typeof ctx.font != 'undefined') {
						ctx.font = svg.Font.CreateFont(this.style('font-style').value, this.style('font-variant').value, this.style('font-weight').value, this.style('font-size').hasValue() ? this.style('font-size').toPixels() + 'px' : '', this.style('font-family').value).toString();
					}

					// transform
					if (this.style('transform', false, true).hasValue()) {
						var transform = new svg.Transform(this.style('transform', false, true).value);
						transform.apply(ctx);
					}

					// clip
					if (this.style('clip-path', false, true).hasValue()) {
						var clip = this.style('clip-path', false, true).getDefinition();
						if (clip != null) clip.apply(ctx);
					}

					// opacity
					if (this.style('opacity').hasValue()) {
						ctx.globalAlpha = this.style('opacity').numValue();
					}
				};
			};
			svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase();

			svg.Element.PathElementBase = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.path = function (ctx) {
					if (ctx != null) ctx.beginPath();
					return new svg.BoundingBox();
				};

				this.renderChildren = function (ctx) {
					this.path(ctx);
					svg.Mouse.checkPath(this, ctx);
					if (ctx.fillStyle != '') {
						if (this.style('fill-rule').valueOrDefault('inherit') != 'inherit') {
							ctx.fill(this.style('fill-rule').value);
						} else {
							ctx.fill();
						}
					}
					if (ctx.strokeStyle != '') ctx.stroke();

					var markers = this.getMarkers();
					if (markers != null) {
						if (this.style('marker-start').isUrlDefinition()) {
							var marker = this.style('marker-start').getDefinition();
							marker.render(ctx, markers[0][0], markers[0][1]);
						}
						if (this.style('marker-mid').isUrlDefinition()) {
							var marker = this.style('marker-mid').getDefinition();
							for (var i = 1; i < markers.length - 1; i++) {
								marker.render(ctx, markers[i][0], markers[i][1]);
							}
						}
						if (this.style('marker-end').isUrlDefinition()) {
							var marker = this.style('marker-end').getDefinition();
							marker.render(ctx, markers[markers.length - 1][0], markers[markers.length - 1][1]);
						}
					}
				};

				this.getBoundingBox = function () {
					return this.path();
				};

				this.getMarkers = function () {
					return null;
				};
			};
			svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase();

			// svg element
			svg.Element.svg = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.baseClearContext = this.clearContext;
				this.clearContext = function (ctx) {
					this.baseClearContext(ctx);
					svg.ViewPort.RemoveCurrent();
				};

				this.baseSetContext = this.setContext;
				this.setContext = function (ctx) {
					// initial values and defaults
					ctx.strokeStyle = 'rgba(0,0,0,0)';
					ctx.lineCap = 'butt';
					ctx.lineJoin = 'miter';
					ctx.miterLimit = 4;
					if (typeof ctx.font != 'undefined' && typeof window.getComputedStyle != 'undefined') {
						ctx.font = window.getComputedStyle(ctx.canvas).getPropertyValue('font');
					}

					this.baseSetContext(ctx);

					// create new view port
					if (!this.attribute('x').hasValue()) this.attribute('x', true).value = 0;
					if (!this.attribute('y').hasValue()) this.attribute('y', true).value = 0;
					ctx.translate(this.attribute('x').toPixels('x'), this.attribute('y').toPixels('y'));

					var width = svg.ViewPort.width();
					var height = svg.ViewPort.height();

					if (!this.attribute('width').hasValue()) this.attribute('width', true).value = '100%';
					if (!this.attribute('height').hasValue()) this.attribute('height', true).value = '100%';
					if (typeof this.root == 'undefined') {
						width = this.attribute('width').toPixels('x');
						height = this.attribute('height').toPixels('y');

						var x = 0;
						var y = 0;
						if (this.attribute('refX').hasValue() && this.attribute('refY').hasValue()) {
							x = -this.attribute('refX').toPixels('x');
							y = -this.attribute('refY').toPixels('y');
						}

						if (this.attribute('overflow').valueOrDefault('hidden') != 'visible') {
							ctx.beginPath();
							ctx.moveTo(x, y);
							ctx.lineTo(width, y);
							ctx.lineTo(width, height);
							ctx.lineTo(x, height);
							ctx.closePath();
							ctx.clip();
						}
					}
					svg.ViewPort.SetCurrent(width, height);

					// viewbox
					if (this.attribute('viewBox').hasValue()) {
						var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
						var minX = viewBox[0];
						var minY = viewBox[1];
						width = viewBox[2];
						height = viewBox[3];

						svg.AspectRatio(ctx, this.attribute('preserveAspectRatio').value, svg.ViewPort.width(), width, svg.ViewPort.height(), height, minX, minY, this.attribute('refX').value, this.attribute('refY').value);

						svg.ViewPort.RemoveCurrent();
						svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
					}
				};
			};
			svg.Element.svg.prototype = new svg.Element.RenderedElementBase();

			// rect element
			svg.Element.rect = function (node) {
				this.base = svg.Element.PathElementBase;
				this.base(node);

				this.path = function (ctx) {
					var x = this.attribute('x').toPixels('x');
					var y = this.attribute('y').toPixels('y');
					var width = this.attribute('width').toPixels('x');
					var height = this.attribute('height').toPixels('y');
					var rx = this.attribute('rx').toPixels('x');
					var ry = this.attribute('ry').toPixels('y');
					if (this.attribute('rx').hasValue() && !this.attribute('ry').hasValue()) ry = rx;
					if (this.attribute('ry').hasValue() && !this.attribute('rx').hasValue()) rx = ry;
					rx = Math.min(rx, width / 2.0);
					ry = Math.min(ry, height / 2.0);
					if (ctx != null) {
						ctx.beginPath();
						ctx.moveTo(x + rx, y);
						ctx.lineTo(x + width - rx, y);
						ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
						ctx.lineTo(x + width, y + height - ry);
						ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
						ctx.lineTo(x + rx, y + height);
						ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
						ctx.lineTo(x, y + ry);
						ctx.quadraticCurveTo(x, y, x + rx, y);
						ctx.closePath();
					}

					return new svg.BoundingBox(x, y, x + width, y + height);
				};
			};
			svg.Element.rect.prototype = new svg.Element.PathElementBase();

			// circle element
			svg.Element.circle = function (node) {
				this.base = svg.Element.PathElementBase;
				this.base(node);

				this.path = function (ctx) {
					var cx = this.attribute('cx').toPixels('x');
					var cy = this.attribute('cy').toPixels('y');
					var r = this.attribute('r').toPixels();

					if (ctx != null) {
						ctx.beginPath();
						ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
						ctx.closePath();
					}

					return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
				};
			};
			svg.Element.circle.prototype = new svg.Element.PathElementBase();

			// ellipse element
			svg.Element.ellipse = function (node) {
				this.base = svg.Element.PathElementBase;
				this.base(node);

				this.path = function (ctx) {
					var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
					var rx = this.attribute('rx').toPixels('x');
					var ry = this.attribute('ry').toPixels('y');
					var cx = this.attribute('cx').toPixels('x');
					var cy = this.attribute('cy').toPixels('y');

					if (ctx != null) {
						ctx.beginPath();
						ctx.moveTo(cx, cy - ry);
						ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
						ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
						ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
						ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
						ctx.closePath();
					}

					return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
				};
			};
			svg.Element.ellipse.prototype = new svg.Element.PathElementBase();

			// line element
			svg.Element.line = function (node) {
				this.base = svg.Element.PathElementBase;
				this.base(node);

				this.getPoints = function () {
					return [new svg.Point(this.attribute('x1').toPixels('x'), this.attribute('y1').toPixels('y')), new svg.Point(this.attribute('x2').toPixels('x'), this.attribute('y2').toPixels('y'))];
				};

				this.path = function (ctx) {
					var points = this.getPoints();

					if (ctx != null) {
						ctx.beginPath();
						ctx.moveTo(points[0].x, points[0].y);
						ctx.lineTo(points[1].x, points[1].y);
					}

					return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
				};

				this.getMarkers = function () {
					var points = this.getPoints();
					var a = points[0].angleTo(points[1]);
					return [[points[0], a], [points[1], a]];
				};
			};
			svg.Element.line.prototype = new svg.Element.PathElementBase();

			// polyline element
			svg.Element.polyline = function (node) {
				this.base = svg.Element.PathElementBase;
				this.base(node);

				this.points = svg.CreatePath(this.attribute('points').value);
				this.path = function (ctx) {
					var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);
					if (ctx != null) {
						ctx.beginPath();
						ctx.moveTo(this.points[0].x, this.points[0].y);
					}
					for (var i = 1; i < this.points.length; i++) {
						bb.addPoint(this.points[i].x, this.points[i].y);
						if (ctx != null) ctx.lineTo(this.points[i].x, this.points[i].y);
					}
					return bb;
				};

				this.getMarkers = function () {
					var markers = [];
					for (var i = 0; i < this.points.length - 1; i++) {
						markers.push([this.points[i], this.points[i].angleTo(this.points[i + 1])]);
					}
					if (markers.length > 0) {
						markers.push([this.points[this.points.length - 1], markers[markers.length - 1][1]]);
					}
					return markers;
				};
			};
			svg.Element.polyline.prototype = new svg.Element.PathElementBase();

			// polygon element
			svg.Element.polygon = function (node) {
				this.base = svg.Element.polyline;
				this.base(node);

				this.basePath = this.path;
				this.path = function (ctx) {
					var bb = this.basePath(ctx);
					if (ctx != null) {
						ctx.lineTo(this.points[0].x, this.points[0].y);
						ctx.closePath();
					}
					return bb;
				};
			};
			svg.Element.polygon.prototype = new svg.Element.polyline();

			// path element
			svg.Element.path = function (node) {
				this.base = svg.Element.PathElementBase;
				this.base(node);

				var d = this.attribute('d').value;
				// TODO: convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF
				d = d.replace(/,/gm, ' '); // get rid of all commas
				// As the end of a match can also be the start of the next match, we need to run this replace twice.
				for (var i = 0; i < 2; i++) {
					d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, '$1 $2');
				} // suffix commands with spaces
				d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, '$1 $2'); // prefix commands with spaces
				d = d.replace(/([0-9])([+\-])/gm, '$1 $2'); // separate digits on +- signs
				// Again, we need to run this twice to find all occurances
				for (var i = 0; i < 2; i++) {
					d = d.replace(/(\.[0-9]*)(\.)/gm, '$1 $2');
				} // separate digits when they start with a comma
				d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, '$1 $3 $4 '); // shorthand elliptical arc path syntax
				d = svg.compressSpaces(d); // compress multiple spaces
				d = svg.trim(d);
				this.PathParser = new function (d) {
					this.tokens = d.split(' ');

					this.reset = function () {
						this.i = -1;
						this.command = '';
						this.previousCommand = '';
						this.start = new svg.Point(0, 0);
						this.control = new svg.Point(0, 0);
						this.current = new svg.Point(0, 0);
						this.points = [];
						this.angles = [];
					};

					this.isEnd = function () {
						return this.i >= this.tokens.length - 1;
					};

					this.isCommandOrEnd = function () {
						if (this.isEnd()) return true;
						return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
					};

					this.isRelativeCommand = function () {
						switch (this.command) {
							case 'm':
							case 'l':
							case 'h':
							case 'v':
							case 'c':
							case 's':
							case 'q':
							case 't':
							case 'a':
							case 'z':
								return true;
								break;
						}
						return false;
					};

					this.getToken = function () {
						this.i++;
						return this.tokens[this.i];
					};

					this.getScalar = function () {
						return parseFloat(this.getToken());
					};

					this.nextCommand = function () {
						this.previousCommand = this.command;
						this.command = this.getToken();
					};

					this.getPoint = function () {
						var p = new svg.Point(this.getScalar(), this.getScalar());
						return this.makeAbsolute(p);
					};

					this.getAsControlPoint = function () {
						var p = this.getPoint();
						this.control = p;
						return p;
					};

					this.getAsCurrentPoint = function () {
						var p = this.getPoint();
						this.current = p;
						return p;
					};

					this.getReflectedControlPoint = function () {
						if (this.previousCommand.toLowerCase() != 'c' && this.previousCommand.toLowerCase() != 's' && this.previousCommand.toLowerCase() != 'q' && this.previousCommand.toLowerCase() != 't') {
							return this.current;
						}

						// reflect point
						var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
						return p;
					};

					this.makeAbsolute = function (p) {
						if (this.isRelativeCommand()) {
							p.x += this.current.x;
							p.y += this.current.y;
						}
						return p;
					};

					this.addMarker = function (p, from, priorTo) {
						// if the last angle isn't filled in because we didn't have this point yet ...
						if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length - 1] == null) {
							this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(priorTo);
						}
						this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
					};

					this.addMarkerAngle = function (p, a) {
						this.points.push(p);
						this.angles.push(a);
					};

					this.getMarkerPoints = function () {
						return this.points;
					};
					this.getMarkerAngles = function () {
						for (var i = 0; i < this.angles.length; i++) {
							if (this.angles[i] == null) {
								for (var j = i + 1; j < this.angles.length; j++) {
									if (this.angles[j] != null) {
										this.angles[i] = this.angles[j];
										break;
									}
								}
							}
						}
						return this.angles;
					};
				}(d);

				this.path = function (ctx) {
					var pp = this.PathParser;
					pp.reset();

					var bb = new svg.BoundingBox();
					if (ctx != null) ctx.beginPath();
					while (!pp.isEnd()) {
						pp.nextCommand();
						switch (pp.command) {
							case 'M':
							case 'm':
								var p = pp.getAsCurrentPoint();
								pp.addMarker(p);
								bb.addPoint(p.x, p.y);
								if (ctx != null) ctx.moveTo(p.x, p.y);
								pp.start = pp.current;
								while (!pp.isCommandOrEnd()) {
									var p = pp.getAsCurrentPoint();
									pp.addMarker(p, pp.start);
									bb.addPoint(p.x, p.y);
									if (ctx != null) ctx.lineTo(p.x, p.y);
								}
								break;
							case 'L':
							case 'l':
								while (!pp.isCommandOrEnd()) {
									var c = pp.current;
									var p = pp.getAsCurrentPoint();
									pp.addMarker(p, c);
									bb.addPoint(p.x, p.y);
									if (ctx != null) ctx.lineTo(p.x, p.y);
								}
								break;
							case 'H':
							case 'h':
								while (!pp.isCommandOrEnd()) {
									var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
									pp.addMarker(newP, pp.current);
									pp.current = newP;
									bb.addPoint(pp.current.x, pp.current.y);
									if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
								}
								break;
							case 'V':
							case 'v':
								while (!pp.isCommandOrEnd()) {
									var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
									pp.addMarker(newP, pp.current);
									pp.current = newP;
									bb.addPoint(pp.current.x, pp.current.y);
									if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
								}
								break;
							case 'C':
							case 'c':
								while (!pp.isCommandOrEnd()) {
									var curr = pp.current;
									var p1 = pp.getPoint();
									var cntrl = pp.getAsControlPoint();
									var cp = pp.getAsCurrentPoint();
									pp.addMarker(cp, cntrl, p1);
									bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
									if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
								}
								break;
							case 'S':
							case 's':
								while (!pp.isCommandOrEnd()) {
									var curr = pp.current;
									var p1 = pp.getReflectedControlPoint();
									var cntrl = pp.getAsControlPoint();
									var cp = pp.getAsCurrentPoint();
									pp.addMarker(cp, cntrl, p1);
									bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
									if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
								}
								break;
							case 'Q':
							case 'q':
								while (!pp.isCommandOrEnd()) {
									var curr = pp.current;
									var cntrl = pp.getAsControlPoint();
									var cp = pp.getAsCurrentPoint();
									pp.addMarker(cp, cntrl, cntrl);
									bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
									if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
								}
								break;
							case 'T':
							case 't':
								while (!pp.isCommandOrEnd()) {
									var curr = pp.current;
									var cntrl = pp.getReflectedControlPoint();
									pp.control = cntrl;
									var cp = pp.getAsCurrentPoint();
									pp.addMarker(cp, cntrl, cntrl);
									bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
									if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
								}
								break;
							case 'A':
							case 'a':
								while (!pp.isCommandOrEnd()) {
									var curr = pp.current;
									var rx = pp.getScalar();
									var ry = pp.getScalar();
									var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
									var largeArcFlag = pp.getScalar();
									var sweepFlag = pp.getScalar();
									var cp = pp.getAsCurrentPoint();

									// Conversion from endpoint to center parameterization
									// http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
									// x1', y1'
									var currp = new svg.Point(Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0, -Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0);
									// adjust radii
									var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
									if (l > 1) {
										rx *= Math.sqrt(l);
										ry *= Math.sqrt(l);
									}
									// cx', cy'
									var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
									if (isNaN(s)) s = 0;
									var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
									// cx, cy
									var centp = new svg.Point((curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
									// vector magnitude
									var m = function m(v) {
										return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
									};
									// ratio between two vectors
									var r = function r(u, v) {
										return (u[0] * v[0] + u[1] * v[1]) / (m(u) * m(v));
									};
									// angle between two vectors
									var a = function a(u, v) {
										return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(r(u, v));
									};
									// initial angle
									var a1 = a([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]);
									// angle delta
									var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
									var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
									var ad = a(u, v);
									if (r(u, v) <= -1) ad = Math.PI;
									if (r(u, v) >= 1) ad = 0;

									// for markers
									var dir = 1 - sweepFlag ? 1.0 : -1.0;
									var ah = a1 + dir * (ad / 2.0);
									var halfWay = new svg.Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
									pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
									pp.addMarkerAngle(cp, ah - dir * Math.PI);

									bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
									if (ctx != null) {
										var r = rx > ry ? rx : ry;
										var sx = rx > ry ? 1 : rx / ry;
										var sy = rx > ry ? ry / rx : 1;

										ctx.translate(centp.x, centp.y);
										ctx.rotate(xAxisRotation);
										ctx.scale(sx, sy);
										ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
										ctx.scale(1 / sx, 1 / sy);
										ctx.rotate(-xAxisRotation);
										ctx.translate(-centp.x, -centp.y);
									}
								}
								break;
							case 'Z':
							case 'z':
								if (ctx != null) ctx.closePath();
								pp.current = pp.start;
						}
					}

					return bb;
				};

				this.getMarkers = function () {
					var points = this.PathParser.getMarkerPoints();
					var angles = this.PathParser.getMarkerAngles();

					var markers = [];
					for (var i = 0; i < points.length; i++) {
						markers.push([points[i], angles[i]]);
					}
					return markers;
				};
			};
			svg.Element.path.prototype = new svg.Element.PathElementBase();

			// pattern element
			svg.Element.pattern = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.createPattern = function (ctx, element) {
					var width = this.attribute('width').toPixels('x', true);
					var height = this.attribute('height').toPixels('y', true);

					// render me using a temporary svg element
					var tempSvg = new svg.Element.svg();
					tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
					tempSvg.attributes['width'] = new svg.Property('width', width + 'px');
					tempSvg.attributes['height'] = new svg.Property('height', height + 'px');
					tempSvg.attributes['transform'] = new svg.Property('transform', this.attribute('patternTransform').value);
					tempSvg.children = this.children;

					var c = document.createElement('canvas');
					c.width = width;
					c.height = height;
					var cctx = c.getContext('2d');
					if (this.attribute('x').hasValue() && this.attribute('y').hasValue()) {
						cctx.translate(this.attribute('x').toPixels('x', true), this.attribute('y').toPixels('y', true));
					}
					// render 3x3 grid so when we transform there's no white space on edges
					for (var x = -1; x <= 1; x++) {
						for (var y = -1; y <= 1; y++) {
							cctx.save();
							tempSvg.attributes['x'] = new svg.Property('x', x * c.width);
							tempSvg.attributes['y'] = new svg.Property('y', y * c.height);
							tempSvg.render(cctx);
							cctx.restore();
						}
					}
					var pattern = ctx.createPattern(c, 'repeat');
					return pattern;
				};
			};
			svg.Element.pattern.prototype = new svg.Element.ElementBase();

			// marker element
			svg.Element.marker = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.baseRender = this.render;
				this.render = function (ctx, point, angle) {
					ctx.translate(point.x, point.y);
					if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(angle);
					if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
					ctx.save();

					// render me using a temporary svg element
					var tempSvg = new svg.Element.svg();
					tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
					tempSvg.attributes['refX'] = new svg.Property('refX', this.attribute('refX').value);
					tempSvg.attributes['refY'] = new svg.Property('refY', this.attribute('refY').value);
					tempSvg.attributes['width'] = new svg.Property('width', this.attribute('markerWidth').value);
					tempSvg.attributes['height'] = new svg.Property('height', this.attribute('markerHeight').value);
					tempSvg.attributes['fill'] = new svg.Property('fill', this.attribute('fill').valueOrDefault('black'));
					tempSvg.attributes['stroke'] = new svg.Property('stroke', this.attribute('stroke').valueOrDefault('none'));
					tempSvg.children = this.children;
					tempSvg.render(ctx);

					ctx.restore();
					if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
					if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(-angle);
					ctx.translate(-point.x, -point.y);
				};
			};
			svg.Element.marker.prototype = new svg.Element.ElementBase();

			// definitions element
			svg.Element.defs = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.render = function (ctx) {
					// NOOP
				};
			};
			svg.Element.defs.prototype = new svg.Element.ElementBase();

			// base for gradients
			svg.Element.GradientBase = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.stops = [];
				for (var i = 0; i < this.children.length; i++) {
					var child = this.children[i];
					if (child.type == 'stop') this.stops.push(child);
				}

				this.getGradient = function () {
					// OVERRIDE ME!
				};

				this.gradientUnits = function () {
					return this.attribute('gradientUnits').valueOrDefault('objectBoundingBox');
				};

				this.attributesToInherit = ['gradientUnits'];

				this.inheritStopContainer = function (stopsContainer) {
					for (var i = 0; i < this.attributesToInherit.length; i++) {
						var attributeToInherit = this.attributesToInherit[i];
						if (!this.attribute(attributeToInherit).hasValue() && stopsContainer.attribute(attributeToInherit).hasValue()) {
							this.attribute(attributeToInherit, true).value = stopsContainer.attribute(attributeToInherit).value;
						}
					}
				};

				this.createGradient = function (ctx, element, parentOpacityProp) {
					var stopsContainer = this;
					if (this.getHrefAttribute().hasValue()) {
						stopsContainer = this.getHrefAttribute().getDefinition();
						this.inheritStopContainer(stopsContainer);
					}

					var addParentOpacity = function addParentOpacity(color) {
						if (parentOpacityProp.hasValue()) {
							var p = new svg.Property('color', color);
							return p.addOpacity(parentOpacityProp).value;
						}
						return color;
					};

					var g = this.getGradient(ctx, element);
					if (g == null) return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length - 1].color);
					for (var i = 0; i < stopsContainer.stops.length; i++) {
						g.addColorStop(stopsContainer.stops[i].offset, addParentOpacity(stopsContainer.stops[i].color));
					}

					if (this.attribute('gradientTransform').hasValue()) {
						// render as transformed pattern on temporary canvas
						var rootView = svg.ViewPort.viewPorts[0];

						var rect = new svg.Element.rect();
						rect.attributes['x'] = new svg.Property('x', -svg.MAX_VIRTUAL_PIXELS / 3.0);
						rect.attributes['y'] = new svg.Property('y', -svg.MAX_VIRTUAL_PIXELS / 3.0);
						rect.attributes['width'] = new svg.Property('width', svg.MAX_VIRTUAL_PIXELS);
						rect.attributes['height'] = new svg.Property('height', svg.MAX_VIRTUAL_PIXELS);

						var group = new svg.Element.g();
						group.attributes['transform'] = new svg.Property('transform', this.attribute('gradientTransform').value);
						group.children = [rect];

						var tempSvg = new svg.Element.svg();
						tempSvg.attributes['x'] = new svg.Property('x', 0);
						tempSvg.attributes['y'] = new svg.Property('y', 0);
						tempSvg.attributes['width'] = new svg.Property('width', rootView.width);
						tempSvg.attributes['height'] = new svg.Property('height', rootView.height);
						tempSvg.children = [group];

						var c = document.createElement('canvas');
						c.width = rootView.width;
						c.height = rootView.height;
						var tempCtx = c.getContext('2d');
						tempCtx.fillStyle = g;
						tempSvg.render(tempCtx);
						return tempCtx.createPattern(c, 'no-repeat');
					}

					return g;
				};
			};
			svg.Element.GradientBase.prototype = new svg.Element.ElementBase();

			// linear gradient element
			svg.Element.linearGradient = function (node) {
				this.base = svg.Element.GradientBase;
				this.base(node);

				this.attributesToInherit.push('x1');
				this.attributesToInherit.push('y1');
				this.attributesToInherit.push('x2');
				this.attributesToInherit.push('y2');

				this.getGradient = function (ctx, element) {
					var bb = this.gradientUnits() == 'objectBoundingBox' ? element.getBoundingBox() : null;

					if (!this.attribute('x1').hasValue() && !this.attribute('y1').hasValue() && !this.attribute('x2').hasValue() && !this.attribute('y2').hasValue()) {
						this.attribute('x1', true).value = 0;
						this.attribute('y1', true).value = 0;
						this.attribute('x2', true).value = 1;
						this.attribute('y2', true).value = 0;
					}

					var x1 = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('x1').numValue() : this.attribute('x1').toPixels('x');
					var y1 = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('y1').numValue() : this.attribute('y1').toPixels('y');
					var x2 = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('x2').numValue() : this.attribute('x2').toPixels('x');
					var y2 = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('y2').numValue() : this.attribute('y2').toPixels('y');

					if (x1 == x2 && y1 == y2) return null;
					return ctx.createLinearGradient(x1, y1, x2, y2);
				};
			};
			svg.Element.linearGradient.prototype = new svg.Element.GradientBase();

			// radial gradient element
			svg.Element.radialGradient = function (node) {
				this.base = svg.Element.GradientBase;
				this.base(node);

				this.attributesToInherit.push('cx');
				this.attributesToInherit.push('cy');
				this.attributesToInherit.push('r');
				this.attributesToInherit.push('fx');
				this.attributesToInherit.push('fy');

				this.getGradient = function (ctx, element) {
					var bb = element.getBoundingBox();

					if (!this.attribute('cx').hasValue()) this.attribute('cx', true).value = '50%';
					if (!this.attribute('cy').hasValue()) this.attribute('cy', true).value = '50%';
					if (!this.attribute('r').hasValue()) this.attribute('r', true).value = '50%';

					var cx = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('cx').numValue() : this.attribute('cx').toPixels('x');
					var cy = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('cy').numValue() : this.attribute('cy').toPixels('y');

					var fx = cx;
					var fy = cy;
					if (this.attribute('fx').hasValue()) {
						fx = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('fx').numValue() : this.attribute('fx').toPixels('x');
					}
					if (this.attribute('fy').hasValue()) {
						fy = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('fy').numValue() : this.attribute('fy').toPixels('y');
					}

					var r = this.gradientUnits() == 'objectBoundingBox' ? (bb.width() + bb.height()) / 2.0 * this.attribute('r').numValue() : this.attribute('r').toPixels();

					return ctx.createRadialGradient(fx, fy, 0, cx, cy, r);
				};
			};
			svg.Element.radialGradient.prototype = new svg.Element.GradientBase();

			// gradient stop element
			svg.Element.stop = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.offset = this.attribute('offset').numValue();
				if (this.offset < 0) this.offset = 0;
				if (this.offset > 1) this.offset = 1;

				var stopColor = this.style('stop-color', true);
				if (stopColor.value === '') stopColor.value = '#000';
				if (this.style('stop-opacity').hasValue()) stopColor = stopColor.addOpacity(this.style('stop-opacity'));
				this.color = stopColor.value;
			};
			svg.Element.stop.prototype = new svg.Element.ElementBase();

			// animation base element
			svg.Element.AnimateBase = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				svg.Animations.push(this);

				this.duration = 0.0;
				this.begin = this.attribute('begin').toMilliseconds();
				this.maxDuration = this.begin + this.attribute('dur').toMilliseconds();

				this.getProperty = function () {
					var attributeType = this.attribute('attributeType').value;
					var attributeName = this.attribute('attributeName').value;

					if (attributeType == 'CSS') {
						return this.parent.style(attributeName, true);
					}
					return this.parent.attribute(attributeName, true);
				};

				this.initialValue = null;
				this.initialUnits = '';
				this.removed = false;

				this.calcValue = function () {
					// OVERRIDE ME!
					return '';
				};

				this.update = function (delta) {
					// set initial value
					if (this.initialValue == null) {
						this.initialValue = this.getProperty().value;
						this.initialUnits = this.getProperty().getUnits();
					}

					// if we're past the end time
					if (this.duration > this.maxDuration) {
						// loop for indefinitely repeating animations
						if (this.attribute('repeatCount').value == 'indefinite' || this.attribute('repeatDur').value == 'indefinite') {
							this.duration = 0.0;
						} else if (this.attribute('fill').valueOrDefault('remove') == 'freeze' && !this.frozen) {
							this.frozen = true;
							this.parent.animationFrozen = true;
							this.parent.animationFrozenValue = this.getProperty().value;
						} else if (this.attribute('fill').valueOrDefault('remove') == 'remove' && !this.removed) {
							this.removed = true;
							this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue;
							return true;
						}
						return false;
					}
					this.duration = this.duration + delta;

					// if we're past the begin time
					var updated = false;
					if (this.begin < this.duration) {
						var newValue = this.calcValue(); // tween

						if (this.attribute('type').hasValue()) {
							// for transform, etc.
							var type = this.attribute('type').value;
							newValue = type + '(' + newValue + ')';
						}

						this.getProperty().value = newValue;
						updated = true;
					}

					return updated;
				};

				this.from = this.attribute('from');
				this.to = this.attribute('to');
				this.values = this.attribute('values');
				if (this.values.hasValue()) this.values.value = this.values.value.split(';');

				// fraction of duration we've covered
				this.progress = function () {
					var ret = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
					if (this.values.hasValue()) {
						var p = ret.progress * (this.values.value.length - 1);
						var lb = Math.floor(p),
						    ub = Math.ceil(p);
						ret.from = new svg.Property('from', parseFloat(this.values.value[lb]));
						ret.to = new svg.Property('to', parseFloat(this.values.value[ub]));
						ret.progress = (p - lb) / (ub - lb);
					} else {
						ret.from = this.from;
						ret.to = this.to;
					}
					return ret;
				};
			};
			svg.Element.AnimateBase.prototype = new svg.Element.ElementBase();

			// animate element
			svg.Element.animate = function (node) {
				this.base = svg.Element.AnimateBase;
				this.base(node);

				this.calcValue = function () {
					var p = this.progress();

					// tween value linearly
					var newValue = p.from.numValue() + (p.to.numValue() - p.from.numValue()) * p.progress;
					return newValue + this.initialUnits;
				};
			};
			svg.Element.animate.prototype = new svg.Element.AnimateBase();

			// animate color element
			svg.Element.animateColor = function (node) {
				this.base = svg.Element.AnimateBase;
				this.base(node);

				this.calcValue = function () {
					var p = this.progress();
					var from = new RGBColor(p.from.value);
					var to = new RGBColor(p.to.value);

					if (from.ok && to.ok) {
						// tween color linearly
						var r = from.r + (to.r - from.r) * p.progress;
						var g = from.g + (to.g - from.g) * p.progress;
						var b = from.b + (to.b - from.b) * p.progress;
						return 'rgb(' + parseInt(r, 10) + ',' + parseInt(g, 10) + ',' + parseInt(b, 10) + ')';
					}
					return this.attribute('from').value;
				};
			};
			svg.Element.animateColor.prototype = new svg.Element.AnimateBase();

			// animate transform element
			svg.Element.animateTransform = function (node) {
				this.base = svg.Element.AnimateBase;
				this.base(node);

				this.calcValue = function () {
					var p = this.progress();

					// tween value linearly
					var from = svg.ToNumberArray(p.from.value);
					var to = svg.ToNumberArray(p.to.value);
					var newValue = '';
					for (var i = 0; i < from.length; i++) {
						newValue += from[i] + (to[i] - from[i]) * p.progress + ' ';
					}
					return newValue;
				};
			};
			svg.Element.animateTransform.prototype = new svg.Element.animate();

			// font element
			svg.Element.font = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.horizAdvX = this.attribute('horiz-adv-x').numValue();

				this.isRTL = false;
				this.isArabic = false;
				this.fontFace = null;
				this.missingGlyph = null;
				this.glyphs = [];
				for (var i = 0; i < this.children.length; i++) {
					var child = this.children[i];
					if (child.type == 'font-face') {
						this.fontFace = child;
						if (child.style('font-family').hasValue()) {
							svg.Definitions[child.style('font-family').value] = this;
						}
					} else if (child.type == 'missing-glyph') this.missingGlyph = child;else if (child.type == 'glyph') {
						if (child.arabicForm != '') {
							this.isRTL = true;
							this.isArabic = true;
							if (typeof this.glyphs[child.unicode] == 'undefined') this.glyphs[child.unicode] = [];
							this.glyphs[child.unicode][child.arabicForm] = child;
						} else {
							this.glyphs[child.unicode] = child;
						}
					}
				}
			};
			svg.Element.font.prototype = new svg.Element.ElementBase();

			// font-face element
			svg.Element.fontface = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.ascent = this.attribute('ascent').value;
				this.descent = this.attribute('descent').value;
				this.unitsPerEm = this.attribute('units-per-em').numValue();
			};
			svg.Element.fontface.prototype = new svg.Element.ElementBase();

			// missing-glyph element
			svg.Element.missingglyph = function (node) {
				this.base = svg.Element.path;
				this.base(node);

				this.horizAdvX = 0;
			};
			svg.Element.missingglyph.prototype = new svg.Element.path();

			// glyph element
			svg.Element.glyph = function (node) {
				this.base = svg.Element.path;
				this.base(node);

				this.horizAdvX = this.attribute('horiz-adv-x').numValue();
				this.unicode = this.attribute('unicode').value;
				this.arabicForm = this.attribute('arabic-form').value;
			};
			svg.Element.glyph.prototype = new svg.Element.path();

			// text element
			svg.Element.text = function (node) {
				this.captureTextNodes = true;
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.baseSetContext = this.setContext;
				this.setContext = function (ctx) {
					this.baseSetContext(ctx);

					var textBaseline = this.style('dominant-baseline').toTextBaseline();
					if (textBaseline == null) textBaseline = this.style('alignment-baseline').toTextBaseline();
					if (textBaseline != null) ctx.textBaseline = textBaseline;
				};

				this.getBoundingBox = function () {
					var x = this.attribute('x').toPixels('x');
					var y = this.attribute('y').toPixels('y');
					var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
					return new svg.BoundingBox(x, y - fontSize, x + Math.floor(fontSize * 2.0 / 3.0) * this.children[0].getText().length, y);
				};

				this.renderChildren = function (ctx) {
					this.x = this.attribute('x').toPixels('x');
					this.y = this.attribute('y').toPixels('y');
					if (this.attribute('dx').hasValue()) this.x += this.attribute('dx').toPixels('x');
					if (this.attribute('dy').hasValue()) this.y += this.attribute('dy').toPixels('y');
					this.x += this.getAnchorDelta(ctx, this, 0);
					for (var i = 0; i < this.children.length; i++) {
						this.renderChild(ctx, this, this, i);
					}
				};

				this.getAnchorDelta = function (ctx, parent, startI) {
					var textAnchor = this.style('text-anchor').valueOrDefault('start');
					if (textAnchor != 'start') {
						var width = 0;
						for (var i = startI; i < parent.children.length; i++) {
							var child = parent.children[i];
							if (i > startI && child.attribute('x').hasValue()) break; // new group
							width += child.measureTextRecursive(ctx);
						}
						return -1 * (textAnchor == 'end' ? width : width / 2.0);
					}
					return 0;
				};

				this.renderChild = function (ctx, textParent, parent, i) {
					var child = parent.children[i];
					if (child.attribute('x').hasValue()) {
						child.x = child.attribute('x').toPixels('x') + textParent.getAnchorDelta(ctx, parent, i);
						if (child.attribute('dx').hasValue()) child.x += child.attribute('dx').toPixels('x');
					} else {
						if (child.attribute('dx').hasValue()) textParent.x += child.attribute('dx').toPixels('x');
						child.x = textParent.x;
					}
					textParent.x = child.x + child.measureText(ctx);

					if (child.attribute('y').hasValue()) {
						child.y = child.attribute('y').toPixels('y');
						if (child.attribute('dy').hasValue()) child.y += child.attribute('dy').toPixels('y');
					} else {
						if (child.attribute('dy').hasValue()) textParent.y += child.attribute('dy').toPixels('y');
						child.y = textParent.y;
					}
					textParent.y = child.y;

					child.render(ctx);

					for (var i = 0; i < child.children.length; i++) {
						textParent.renderChild(ctx, textParent, child, i);
					}
				};
			};
			svg.Element.text.prototype = new svg.Element.RenderedElementBase();

			// text base
			svg.Element.TextElementBase = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.getGlyph = function (font, text, i) {
					var c = text[i];
					var glyph = null;
					if (font.isArabic) {
						var arabicForm = 'isolated';
						if ((i == 0 || text[i - 1] == ' ') && i < text.length - 2 && text[i + 1] != ' ') arabicForm = 'terminal';
						if (i > 0 && text[i - 1] != ' ' && i < text.length - 2 && text[i + 1] != ' ') arabicForm = 'medial';
						if (i > 0 && text[i - 1] != ' ' && (i == text.length - 1 || text[i + 1] == ' ')) arabicForm = 'initial';
						if (typeof font.glyphs[c] != 'undefined') {
							glyph = font.glyphs[c][arabicForm];
							if (glyph == null && font.glyphs[c].type == 'glyph') glyph = font.glyphs[c];
						}
					} else {
						glyph = font.glyphs[c];
					}
					if (glyph == null) glyph = font.missingGlyph;
					return glyph;
				};

				this.renderChildren = function (ctx) {
					var customFont = this.parent.style('font-family').getDefinition();
					if (customFont != null) {
						var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
						var fontStyle = this.parent.style('font-style').valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle);
						var text = this.getText();
						if (customFont.isRTL) text = text.split("").reverse().join("");

						var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
						for (var i = 0; i < text.length; i++) {
							var glyph = this.getGlyph(customFont, text, i);
							var scale = fontSize / customFont.fontFace.unitsPerEm;
							ctx.translate(this.x, this.y);
							ctx.scale(scale, -scale);
							var lw = ctx.lineWidth;
							ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;
							if (fontStyle == 'italic') ctx.transform(1, 0, .4, 1, 0, 0);
							glyph.render(ctx);
							if (fontStyle == 'italic') ctx.transform(1, 0, -.4, 1, 0, 0);
							ctx.lineWidth = lw;
							ctx.scale(1 / scale, -1 / scale);
							ctx.translate(-this.x, -this.y);

							this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / customFont.fontFace.unitsPerEm;
							if (typeof dx[i] != 'undefined' && !isNaN(dx[i])) {
								this.x += dx[i];
							}
						}
						return;
					}
					if (ctx.paintOrder == "stroke") {
						if (ctx.strokeStyle != '') ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
						if (ctx.fillStyle != '') ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
					} else {
						if (ctx.fillStyle != '') ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
						if (ctx.strokeStyle != '') ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
					}
				};

				this.getText = function () {
					// OVERRIDE ME
				};

				this.measureTextRecursive = function (ctx) {
					var width = this.measureText(ctx);
					for (var i = 0; i < this.children.length; i++) {
						width += this.children[i].measureTextRecursive(ctx);
					}
					return width;
				};

				this.measureText = function (ctx) {
					var customFont = this.parent.style('font-family').getDefinition();
					if (customFont != null) {
						var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
						var measure = 0;
						var text = this.getText();
						if (customFont.isRTL) text = text.split("").reverse().join("");
						var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
						for (var i = 0; i < text.length; i++) {
							var glyph = this.getGlyph(customFont, text, i);
							measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
							if (typeof dx[i] != 'undefined' && !isNaN(dx[i])) {
								measure += dx[i];
							}
						}
						return measure;
					}

					var textToMeasure = svg.compressSpaces(this.getText());
					if (!ctx.measureText) return textToMeasure.length * 10;

					ctx.save();
					this.setContext(ctx);
					var width = ctx.measureText(textToMeasure).width;
					ctx.restore();
					return width;
				};
			};
			svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase();

			// tspan
			svg.Element.tspan = function (node) {
				this.captureTextNodes = true;
				this.base = svg.Element.TextElementBase;
				this.base(node);

				this.text = svg.compressSpaces(node.value || node.text || node.textContent || '');
				this.getText = function () {
					// if this node has children, then they own the text
					if (this.children.length > 0) {
						return '';
					}
					return this.text;
				};
			};
			svg.Element.tspan.prototype = new svg.Element.TextElementBase();

			// tref
			svg.Element.tref = function (node) {
				this.base = svg.Element.TextElementBase;
				this.base(node);

				this.getText = function () {
					var element = this.getHrefAttribute().getDefinition();
					if (element != null) return element.children[0].getText();
				};
			};
			svg.Element.tref.prototype = new svg.Element.TextElementBase();

			// a element
			svg.Element.a = function (node) {
				this.base = svg.Element.TextElementBase;
				this.base(node);

				this.hasText = node.childNodes.length > 0;
				for (var i = 0; i < node.childNodes.length; i++) {
					if (node.childNodes[i].nodeType != 3) this.hasText = false;
				}

				// this might contain text
				this.text = this.hasText ? node.childNodes[0].value : '';
				this.getText = function () {
					return this.text;
				};

				this.baseRenderChildren = this.renderChildren;
				this.renderChildren = function (ctx) {
					if (this.hasText) {
						// render as text element
						this.baseRenderChildren(ctx);
						var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
						svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.toPixels('y'), this.x + this.measureText(ctx), this.y));
					} else if (this.children.length > 0) {
						// render as temporary group
						var g = new svg.Element.g();
						g.children = this.children;
						g.parent = this;
						g.render(ctx);
					}
				};

				this.onclick = function () {
					window.open(this.getHrefAttribute().value);
				};

				this.onmousemove = function () {
					svg.ctx.canvas.style.cursor = 'pointer';
				};
			};
			svg.Element.a.prototype = new svg.Element.TextElementBase();

			// image element
			svg.Element.image = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				var href = this.getHrefAttribute().value;
				if (href == '') {
					return;
				}
				var isSvg = href.match(/\.svg$/);

				svg.Images.push(this);
				this.loaded = false;
				if (!isSvg) {
					this.img = document.createElement('img');
					if (svg.opts['useCORS'] == true) {
						this.img.crossOrigin = 'Anonymous';
					}
					var self = this;
					this.img.onload = function () {
						self.loaded = true;
					};
					this.img.onerror = function () {
						svg.log('ERROR: image "' + href + '" not found');self.loaded = true;
					};
					this.img.src = href;
				} else {
					this.img = svg.ajax(href);
					this.loaded = true;
				}

				this.renderChildren = function (ctx) {
					var x = this.attribute('x').toPixels('x');
					var y = this.attribute('y').toPixels('y');

					var width = this.attribute('width').toPixels('x');
					var height = this.attribute('height').toPixels('y');
					if (width == 0 || height == 0) return;

					ctx.save();
					if (isSvg) {
						ctx.drawSvg(this.img, x, y, width, height);
					} else {
						ctx.translate(x, y);
						svg.AspectRatio(ctx, this.attribute('preserveAspectRatio').value, width, this.img.width, height, this.img.height, 0, 0);
						ctx.drawImage(this.img, 0, 0);
					}
					ctx.restore();
				};

				this.getBoundingBox = function () {
					var x = this.attribute('x').toPixels('x');
					var y = this.attribute('y').toPixels('y');
					var width = this.attribute('width').toPixels('x');
					var height = this.attribute('height').toPixels('y');
					return new svg.BoundingBox(x, y, x + width, y + height);
				};
			};
			svg.Element.image.prototype = new svg.Element.RenderedElementBase();

			// group element
			svg.Element.g = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.getBoundingBox = function () {
					var bb = new svg.BoundingBox();
					for (var i = 0; i < this.children.length; i++) {
						bb.addBoundingBox(this.children[i].getBoundingBox());
					}
					return bb;
				};
			};
			svg.Element.g.prototype = new svg.Element.RenderedElementBase();

			// symbol element
			svg.Element.symbol = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.render = function (ctx) {
					// NO RENDER
				};
			};
			svg.Element.symbol.prototype = new svg.Element.RenderedElementBase();

			// style element
			svg.Element.style = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				// text, or spaces then CDATA
				var css = '';
				for (var i = 0; i < node.childNodes.length; i++) {
					css += node.childNodes[i].data;
				}
				css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ''); // remove comments
				css = svg.compressSpaces(css); // replace whitespace
				var cssDefs = css.split('}');
				for (var i = 0; i < cssDefs.length; i++) {
					if (svg.trim(cssDefs[i]) != '') {
						var cssDef = cssDefs[i].split('{');
						var cssClasses = cssDef[0].split(',');
						var cssProps = cssDef[1].split(';');
						for (var j = 0; j < cssClasses.length; j++) {
							var cssClass = svg.trim(cssClasses[j]);
							if (cssClass != '') {
								var props = svg.Styles[cssClass] || {};
								for (var k = 0; k < cssProps.length; k++) {
									var prop = cssProps[k].indexOf(':');
									var name = cssProps[k].substr(0, prop);
									var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);
									if (name != null && value != null) {
										props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
									}
								}
								svg.Styles[cssClass] = props;
								svg.StylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
								if (cssClass == '@font-face') {
									var fontFamily = props['font-family'].value.replace(/"/g, '');
									var srcs = props['src'].value.split(',');
									for (var s = 0; s < srcs.length; s++) {
										if (srcs[s].indexOf('format("svg")') > 0) {
											var urlStart = srcs[s].indexOf('url');
											var urlEnd = srcs[s].indexOf(')', urlStart);
											var url = srcs[s].substr(urlStart + 5, urlEnd - urlStart - 6);
											var doc = svg.parseXml(svg.ajax(url));
											var fonts = doc.getElementsByTagName('font');
											for (var f = 0; f < fonts.length; f++) {
												var font = svg.CreateElement(fonts[f]);
												svg.Definitions[fontFamily] = font;
											}
										}
									}
								}
							}
						}
					}
				}
			};
			svg.Element.style.prototype = new svg.Element.ElementBase();

			// use element
			svg.Element.use = function (node) {
				this.base = svg.Element.RenderedElementBase;
				this.base(node);

				this.baseSetContext = this.setContext;
				this.setContext = function (ctx) {
					this.baseSetContext(ctx);
					if (this.attribute('x').hasValue()) ctx.translate(this.attribute('x').toPixels('x'), 0);
					if (this.attribute('y').hasValue()) ctx.translate(0, this.attribute('y').toPixels('y'));
				};

				var element = this.getHrefAttribute().getDefinition();

				this.path = function (ctx) {
					if (element != null) element.path(ctx);
				};

				this.getBoundingBox = function () {
					if (element != null) return element.getBoundingBox();
				};

				this.renderChildren = function (ctx) {
					if (element != null) {
						var tempSvg = element;
						if (element.type == 'symbol') {
							// render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
							tempSvg = new svg.Element.svg();
							tempSvg.type = 'svg';
							tempSvg.attributes['viewBox'] = new svg.Property('viewBox', element.attribute('viewBox').value);
							tempSvg.attributes['preserveAspectRatio'] = new svg.Property('preserveAspectRatio', element.attribute('preserveAspectRatio').value);
							tempSvg.attributes['overflow'] = new svg.Property('overflow', element.attribute('overflow').value);
							tempSvg.children = element.children;
						}
						if (tempSvg.type == 'svg') {
							// if symbol or svg, inherit width/height from me
							if (this.attribute('width').hasValue()) tempSvg.attributes['width'] = new svg.Property('width', this.attribute('width').value);
							if (this.attribute('height').hasValue()) tempSvg.attributes['height'] = new svg.Property('height', this.attribute('height').value);
						}
						var oldParent = tempSvg.parent;
						tempSvg.parent = null;
						tempSvg.render(ctx);
						tempSvg.parent = oldParent;
					}
				};
			};
			svg.Element.use.prototype = new svg.Element.RenderedElementBase();

			// mask element
			svg.Element.mask = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.apply = function (ctx, element) {
					// render as temp svg
					var x = this.attribute('x').toPixels('x');
					var y = this.attribute('y').toPixels('y');
					var width = this.attribute('width').toPixels('x');
					var height = this.attribute('height').toPixels('y');

					if (width == 0 && height == 0) {
						var bb = new svg.BoundingBox();
						for (var i = 0; i < this.children.length; i++) {
							bb.addBoundingBox(this.children[i].getBoundingBox());
						}
						var x = Math.floor(bb.x1);
						var y = Math.floor(bb.y1);
						var width = Math.floor(bb.width());
						var height = Math.floor(bb.height());
					}

					// temporarily remove mask to avoid recursion
					var mask = element.attribute('mask').value;
					element.attribute('mask').value = '';

					var cMask = document.createElement('canvas');
					cMask.width = x + width;
					cMask.height = y + height;
					var maskCtx = cMask.getContext('2d');
					this.renderChildren(maskCtx);

					var c = document.createElement('canvas');
					c.width = x + width;
					c.height = y + height;
					var tempCtx = c.getContext('2d');
					element.render(tempCtx);
					tempCtx.globalCompositeOperation = 'destination-in';
					tempCtx.fillStyle = maskCtx.createPattern(cMask, 'no-repeat');
					tempCtx.fillRect(0, 0, x + width, y + height);

					ctx.fillStyle = tempCtx.createPattern(c, 'no-repeat');
					ctx.fillRect(0, 0, x + width, y + height);

					// reassign mask
					element.attribute('mask').value = mask;
				};

				this.render = function (ctx) {
					// NO RENDER
				};
			};
			svg.Element.mask.prototype = new svg.Element.ElementBase();

			// clip element
			svg.Element.clipPath = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.apply = function (ctx) {
					var oldBeginPath = CanvasRenderingContext2D.prototype.beginPath;
					CanvasRenderingContext2D.prototype.beginPath = function () {};

					var oldClosePath = CanvasRenderingContext2D.prototype.closePath;
					CanvasRenderingContext2D.prototype.closePath = function () {};

					oldBeginPath.call(ctx);
					for (var i = 0; i < this.children.length; i++) {
						var child = this.children[i];
						if (typeof child.path != 'undefined') {
							var transform = null;
							if (child.style('transform', false, true).hasValue()) {
								transform = new svg.Transform(child.style('transform', false, true).value);
								transform.apply(ctx);
							}
							child.path(ctx);
							CanvasRenderingContext2D.prototype.closePath = oldClosePath;
							if (transform) {
								transform.unapply(ctx);
							}
						}
					}
					oldClosePath.call(ctx);
					ctx.clip();

					CanvasRenderingContext2D.prototype.beginPath = oldBeginPath;
					CanvasRenderingContext2D.prototype.closePath = oldClosePath;
				};

				this.render = function (ctx) {
					// NO RENDER
				};
			};
			svg.Element.clipPath.prototype = new svg.Element.ElementBase();

			// filters
			svg.Element.filter = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.apply = function (ctx, element) {
					// render as temp svg
					var bb = element.getBoundingBox();
					var x = Math.floor(bb.x1);
					var y = Math.floor(bb.y1);
					var width = Math.floor(bb.width());
					var height = Math.floor(bb.height());

					// temporarily remove filter to avoid recursion
					var filter = element.style('filter').value;
					element.style('filter').value = '';

					var px = 0,
					    py = 0;
					for (var i = 0; i < this.children.length; i++) {
						var efd = this.children[i].extraFilterDistance || 0;
						px = Math.max(px, efd);
						py = Math.max(py, efd);
					}

					var c = document.createElement('canvas');
					c.width = width + 2 * px;
					c.height = height + 2 * py;
					var tempCtx = c.getContext('2d');
					tempCtx.translate(-x + px, -y + py);
					element.render(tempCtx);

					// apply filters
					for (var i = 0; i < this.children.length; i++) {
						if (typeof this.children[i].apply == 'function') {
							this.children[i].apply(tempCtx, 0, 0, width + 2 * px, height + 2 * py);
						}
					}

					// render on me
					ctx.drawImage(c, 0, 0, width + 2 * px, height + 2 * py, x - px, y - py, width + 2 * px, height + 2 * py);

					// reassign filter
					element.style('filter', true).value = filter;
				};

				this.render = function (ctx) {
					// NO RENDER
				};
			};
			svg.Element.filter.prototype = new svg.Element.ElementBase();

			svg.Element.feMorphology = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.apply = function (ctx, x, y, width, height) {
					// TODO: implement
				};
			};
			svg.Element.feMorphology.prototype = new svg.Element.ElementBase();

			svg.Element.feComposite = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.apply = function (ctx, x, y, width, height) {
					// TODO: implement
				};
			};
			svg.Element.feComposite.prototype = new svg.Element.ElementBase();

			svg.Element.feColorMatrix = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				var matrix = svg.ToNumberArray(this.attribute('values').value);
				switch (this.attribute('type').valueOrDefault('matrix')) {// http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
					case 'saturate':
						var s = matrix[0];
						matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
						break;
					case 'hueRotate':
						var a = matrix[0] * Math.PI / 180.0;
						var c = function c(m1, m2, m3) {
							return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
						};
						matrix = [c(0.213, 0.787, -0.213), c(0.715, -0.715, -0.715), c(0.072, -0.072, 0.928), 0, 0, c(0.213, -0.213, 0.143), c(0.715, 0.285, 0.140), c(0.072, -0.072, -0.283), 0, 0, c(0.213, -0.213, -0.787), c(0.715, -0.715, 0.715), c(0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
						break;
					case 'luminanceToAlpha':
						matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
						break;
				}

				function imGet(img, x, y, width, height, rgba) {
					return img[y * width * 4 + x * 4 + rgba];
				}

				function imSet(img, x, y, width, height, rgba, val) {
					img[y * width * 4 + x * 4 + rgba] = val;
				}

				function m(i, v) {
					var mi = matrix[i];
					return mi * (mi < 0 ? v - 255 : v);
				}

				this.apply = function (ctx, x, y, width, height) {
					// assuming x==0 && y==0 for now
					var srcData = ctx.getImageData(0, 0, width, height);
					for (var y = 0; y < height; y++) {
						for (var x = 0; x < width; x++) {
							var r = imGet(srcData.data, x, y, width, height, 0);
							var g = imGet(srcData.data, x, y, width, height, 1);
							var b = imGet(srcData.data, x, y, width, height, 2);
							var a = imGet(srcData.data, x, y, width, height, 3);
							imSet(srcData.data, x, y, width, height, 0, m(0, r) + m(1, g) + m(2, b) + m(3, a) + m(4, 1));
							imSet(srcData.data, x, y, width, height, 1, m(5, r) + m(6, g) + m(7, b) + m(8, a) + m(9, 1));
							imSet(srcData.data, x, y, width, height, 2, m(10, r) + m(11, g) + m(12, b) + m(13, a) + m(14, 1));
							imSet(srcData.data, x, y, width, height, 3, m(15, r) + m(16, g) + m(17, b) + m(18, a) + m(19, 1));
						}
					}
					ctx.clearRect(0, 0, width, height);
					ctx.putImageData(srcData, 0, 0);
				};
			};
			svg.Element.feColorMatrix.prototype = new svg.Element.ElementBase();

			svg.Element.feGaussianBlur = function (node) {
				this.base = svg.Element.ElementBase;
				this.base(node);

				this.blurRadius = Math.floor(this.attribute('stdDeviation').numValue());
				this.extraFilterDistance = this.blurRadius;

				this.apply = function (ctx, x, y, width, height) {
					if (typeof stackBlur.canvasRGBA == 'undefined') {
						svg.log('ERROR: StackBlur.js must be included for blur to work');
						return;
					}

					// StackBlur requires canvas be on document
					ctx.canvas.id = svg.UniqueId();
					ctx.canvas.style.display = 'none';
					document.body.appendChild(ctx.canvas);
					stackBlur.canvasRGBA(ctx.canvas.id, x, y, width, height, this.blurRadius);
					document.body.removeChild(ctx.canvas);
				};
			};
			svg.Element.feGaussianBlur.prototype = new svg.Element.ElementBase();

			// title element, do nothing
			svg.Element.title = function (node) {};
			svg.Element.title.prototype = new svg.Element.ElementBase();

			// desc element, do nothing
			svg.Element.desc = function (node) {};
			svg.Element.desc.prototype = new svg.Element.ElementBase();

			svg.Element.MISSING = function (node) {
				svg.log('ERROR: Element \'' + node.nodeName + '\' not yet implemented.');
			};
			svg.Element.MISSING.prototype = new svg.Element.ElementBase();

			// element factory
			svg.CreateElement = function (node) {
				var className = node.nodeName.replace(/^[^:]+:/, ''); // remove namespace
				className = className.replace(/\-/g, ''); // remove dashes
				var e = null;
				if (typeof svg.Element[className] != 'undefined') {
					e = new svg.Element[className](node);
				} else {
					e = new svg.Element.MISSING(node);
				}

				e.type = node.nodeName;
				return e;
			};

			// load from url
			svg.load = function (ctx, url) {
				svg.loadXml(ctx, svg.ajax(url));
			};

			// load from xml
			svg.loadXml = function (ctx, xml) {
				svg.loadXmlDoc(ctx, svg.parseXml(xml));
			};

			svg.loadXmlDoc = function (ctx, dom) {
				svg.init(ctx);

				var mapXY = function mapXY(p) {
					var e = ctx.canvas;
					while (e) {
						p.x -= e.offsetLeft;
						p.y -= e.offsetTop;
						e = e.offsetParent;
					}
					if (window.scrollX) p.x += window.scrollX;
					if (window.scrollY) p.y += window.scrollY;
					return p;
				};

				// bind mouse
				if (svg.opts['ignoreMouse'] != true) {
					ctx.canvas.onclick = function (e) {
						var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
						svg.Mouse.onclick(p.x, p.y);
					};
					ctx.canvas.onmousemove = function (e) {
						var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
						svg.Mouse.onmousemove(p.x, p.y);
					};
				}

				var e = svg.CreateElement(dom.documentElement);
				e.root = true;
				e.addStylesFromStyleDefinition();

				// render loop
				var isFirstRender = true;
				var draw = function draw() {
					svg.ViewPort.Clear();
					if (ctx.canvas.parentNode) svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);

					if (svg.opts['ignoreDimensions'] != true) {
						// set canvas size
						if (e.style('width').hasValue()) {
							ctx.canvas.width = e.style('width').toPixels('x');
							ctx.canvas.style.width = ctx.canvas.width + 'px';
						}
						if (e.style('height').hasValue()) {
							ctx.canvas.height = e.style('height').toPixels('y');
							ctx.canvas.style.height = ctx.canvas.height + 'px';
						}
					}
					var cWidth = ctx.canvas.clientWidth || ctx.canvas.width;
					var cHeight = ctx.canvas.clientHeight || ctx.canvas.height;
					if (svg.opts['ignoreDimensions'] == true && e.style('width').hasValue() && e.style('height').hasValue()) {
						cWidth = e.style('width').toPixels('x');
						cHeight = e.style('height').toPixels('y');
					}
					svg.ViewPort.SetCurrent(cWidth, cHeight);

					if (svg.opts['offsetX'] != null) e.attribute('x', true).value = svg.opts['offsetX'];
					if (svg.opts['offsetY'] != null) e.attribute('y', true).value = svg.opts['offsetY'];
					if (svg.opts['scaleWidth'] != null || svg.opts['scaleHeight'] != null) {
						var xRatio = null,
						    yRatio = null,
						    viewBox = svg.ToNumberArray(e.attribute('viewBox').value);

						if (svg.opts['scaleWidth'] != null) {
							if (e.attribute('width').hasValue()) xRatio = e.attribute('width').toPixels('x') / svg.opts['scaleWidth'];else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / svg.opts['scaleWidth'];
						}

						if (svg.opts['scaleHeight'] != null) {
							if (e.attribute('height').hasValue()) yRatio = e.attribute('height').toPixels('y') / svg.opts['scaleHeight'];else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / svg.opts['scaleHeight'];
						}

						if (xRatio == null) {
							xRatio = yRatio;
						}
						if (yRatio == null) {
							yRatio = xRatio;
						}

						e.attribute('width', true).value = svg.opts['scaleWidth'];
						e.attribute('height', true).value = svg.opts['scaleHeight'];
						e.style('transform', true, true).value += ' scale(' + 1.0 / xRatio + ',' + 1.0 / yRatio + ')';
					}

					// clear and render
					if (svg.opts['ignoreClear'] != true) {
						ctx.clearRect(0, 0, cWidth, cHeight);
					}
					e.render(ctx);
					if (isFirstRender) {
						isFirstRender = false;
						if (typeof svg.opts['renderCallback'] == 'function') svg.opts['renderCallback'](dom);
					}
				};

				var waitingForImages = true;
				if (svg.ImagesLoaded()) {
					waitingForImages = false;
					draw();
				}
				svg.intervalID = setInterval(function () {
					var needUpdate = false;

					if (waitingForImages && svg.ImagesLoaded()) {
						waitingForImages = false;
						needUpdate = true;
					}

					// need update from mouse events?
					if (svg.opts['ignoreMouse'] != true) {
						needUpdate = needUpdate | svg.Mouse.hasEvents();
					}

					// need update from animations?
					if (svg.opts['ignoreAnimation'] != true) {
						for (var i = 0; i < svg.Animations.length; i++) {
							needUpdate = needUpdate | svg.Animations[i].update(1000 / svg.FRAMERATE);
						}
					}

					// need update from redraw?
					if (typeof svg.opts['forceRedraw'] == 'function') {
						if (svg.opts['forceRedraw']() == true) needUpdate = true;
					}

					// render if needed
					if (needUpdate) {
						draw();
						svg.Mouse.runEvents(); // run and clear our events
					}
				}, 1000 / svg.FRAMERATE);
			};

			svg.stop = function () {
				if (svg.intervalID) {
					clearInterval(svg.intervalID);
				}
			};

			svg.Mouse = new function () {
				this.events = [];
				this.hasEvents = function () {
					return this.events.length != 0;
				};

				this.onclick = function (x, y) {
					this.events.push({ type: 'onclick', x: x, y: y,
						run: function run(e) {
							if (e.onclick) e.onclick();
						}
					});
				};

				this.onmousemove = function (x, y) {
					this.events.push({ type: 'onmousemove', x: x, y: y,
						run: function run(e) {
							if (e.onmousemove) e.onmousemove();
						}
					});
				};

				this.eventElements = [];

				this.checkPath = function (element, ctx) {
					for (var i = 0; i < this.events.length; i++) {
						var e = this.events[i];
						if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) this.eventElements[i] = element;
					}
				};

				this.checkBoundingBox = function (element, bb) {
					for (var i = 0; i < this.events.length; i++) {
						var e = this.events[i];
						if (bb.isPointInBox(e.x, e.y)) this.eventElements[i] = element;
					}
				};

				this.runEvents = function () {
					svg.ctx.canvas.style.cursor = '';

					for (var i = 0; i < this.events.length; i++) {
						var e = this.events[i];
						var element = this.eventElements[i];
						while (element) {
							e.run(element);
							element = element.parent;
						}
					}

					// done running, clear
					this.events = [];
					this.eventElements = [];
				};
			}();

			return svg;
		}

		if (typeof CanvasRenderingContext2D != 'undefined') {
			CanvasRenderingContext2D.prototype.drawSvg = function (s, dx, dy, dw, dh, opts) {
				var cOpts = {
					ignoreMouse: true,
					ignoreAnimation: true,
					ignoreDimensions: true,
					ignoreClear: true,
					offsetX: dx,
					offsetY: dy,
					scaleWidth: dw,
					scaleHeight: dh
				};

				for (var prop in opts) {
					if (opts.hasOwnProperty(prop)) {
						cOpts[prop] = opts[prop];
					}
				}
				canvg(this.canvas, s, cOpts);
			};
		}

		return canvg;
	});
});

/* MIT https://github.com/kenwheeler/cash */
"use strict";

var doc = document;
var win = window;
var _Array$prototype = Array.prototype;
var filter = _Array$prototype.filter;
var indexOf = _Array$prototype.indexOf;
var map = _Array$prototype.map;
var push = _Array$prototype.push;
var reverse = _Array$prototype.reverse;
var slice = _Array$prototype.slice;
var splice = _Array$prototype.splice;
var idRe = /^#[\w-]*$/;
var classRe = /^\.[\w-]*$/;
var htmlRe = /<.+>/;
var tagRe = /^\w+$/; // @require ./variables.js

function find(selector, context) {
  if (context === void 0) {
    context = doc;
  }

  return classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
} // @require ./find.js
// @require ./variables.js


function Cash(selector, context) {
  if (context === void 0) {
    context = doc;
  }

  if (!selector) return;
  if (selector.__cash) return selector;
  var eles = selector;

  if (isString(selector)) {
    if (context.__cash) context = context[0];
    eles = idRe.test(selector) ? context.getElementById(selector.slice(1)) : htmlRe.test(selector) ? parseHTML(selector) : find(selector, context);
    if (!eles) return;
  } else if (isFunction(selector)) {
    return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
  }

  if (eles.nodeType || eles === win) eles = [eles];
  this.length = eles.length;

  for (var i = 0, l = this.length; i < l; i++) {
    this[i] = eles[i];
  }
}

function cash(selector, context) {
  return new Cash(selector, context);
}
/* PROTOTYPE */

var fn = cash.fn = cash.prototype = Cash.prototype = {
  constructor: cash,
  __cash: true,
  length: 0,
  splice: splice // Ensures a cash collection gets printed as array-like in Chrome

}; // @require core/cash.js
// @require core/variables.js

fn.get = function (index) {
  if (index === undefined) return slice.call(this);
  return this[index < 0 ? index + this.length : index];
}; // @require core/cash.js
// @require ./get.js


fn.eq = function (index) {
  return cash(this.get(index));
}; // @require core/cash.js
// @require ./eq.js


fn.first = function () {
  return this.eq(0);
}; // @require core/cash.js
// @require ./eq.js


fn.last = function () {
  return this.eq(-1);
}; // @require core/cash.js
// @require core/variables.js


fn.map = function (callback) {
  return cash(map.call(this, function (ele, i) {
    return callback.call(ele, i, ele);
  }));
}; // @require core/cash.js
// @require core/variables.js


fn.slice = function () {
  return cash(slice.apply(this, arguments));
}; // @require ./cash.js


var camelCaseRe = /(?:^\w|[A-Z]|\b\w)/g;
var camelCaseWhitespaceRe = /[\s-_]+/g;

function camelCase(str) {
  return str.replace(camelCaseRe, function (letter, index) {
    return letter[!index ? 'toLowerCase' : 'toUpperCase']();
  }).replace(camelCaseWhitespaceRe, '');
}


cash.camelCase = camelCase; // @require ./cash.js

function each(arr, callback) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (callback.call(arr[i], arr[i], i, arr) === false) break;
  }
}

cash.each = each; // @require core/cash.js
// @require core/each.js

fn.each = function (callback) {
  each(this, function (ele, i) {
    return callback.call(ele, i, ele);
  });
  return this;
}; // @require core/cash.js
// @require collection/each.js


fn.removeProp = function (prop) {
  return this.each(function (i, ele) {
    delete ele[prop];
  });
}; // @require ./cash.js


function extend(target) {
  if (target === void 0) {
    target = this;
  }

  var args = arguments,
      length = args.length;

  for (var i = length < 2 ? 0 : 1; i < length; i++) {
    for (var key in args[i]) {
      target[key] = args[i][key];
    }
  }

  return target;
}


cash.extend = fn.extend = extend; // @require ./cash.js

var guid = 1;
cash.guid = guid; // @require ./cash.js

function matches(ele, selector) {
  var matches = ele && (ele.matches || ele.webkitMatchesSelector || ele.mozMatchesSelector || ele.msMatchesSelector || ele.oMatchesSelector);
  return !!matches && matches.call(ele, selector);
}

cash.matches = matches; // @require ./cash.js

function isFunction(x) {
  return typeof x === 'function';
}

cash.isFunction = isFunction;

function isString(x) {
  return typeof x === 'string';
}

cash.isString = isString;

function isNumeric(x) {
  return !isNaN(parseFloat(x)) && isFinite(x);
}

cash.isNumeric = isNumeric;
var isArray = Array.isArray;
cash.isArray = isArray; // @require core/cash.js
// @require core/type_checking.js
// @require collection/each.js

fn.prop = function (prop, value) {
  if (!prop) return;

  if (isString(prop)) {
    if (arguments.length < 2) return this[0] && this[0][prop];
    return this.each(function (i, ele) {
      ele[prop] = value;
    });
  }

  for (var key in prop) {
    this.prop(key, prop[key]);
  }

  return this;
}; // @require ./matches.js
// @require ./type_checking.js


function getCompareFunction(selector) {
  return isString(selector) ? function (i, ele) {
    return matches(ele, selector);
  } : selector.__cash ? function (i, ele) {
    return selector.is(ele);
  } : function (i, ele, selector) {
    return ele === selector;
  };
} // @require core/cash.js
// @require core/get_compare_function.js
// @require core/type_checking.js
// @require core/variables.js
// @require collection/get.js


fn.filter = function (selector) {
  if (!selector) return cash();
  var comparator = isFunction(selector) ? selector : getCompareFunction(selector);
  return cash(filter.call(this, function (ele, i) {
    return comparator.call(ele, i, ele, selector);
  }));
}; // @require ./type_checking.js


var splitValuesRe = /\S+/g;

function getSplitValues(str) {
  return isString(str) ? str.match(splitValuesRe) || [] : [];
} // @require core/cash.js
// @require core/get_split_values.js
// @require collection/each.js


fn.hasClass = function (cls) {
  var classes = getSplitValues(cls);
  var check = false;

  if (classes.length) {
    this.each(function (i, ele) {
      check = ele.classList.contains(classes[0]);
      return !check;
    });
  }

  return check;
}; // @require core/cash.js
// @require core/get_split_values.js
// @require collection/each.js


fn.removeAttr = function (attr) {
  var attrs = getSplitValues(attr);
  if (!attrs.length) return this;
  return this.each(function (i, ele) {
    each(attrs, function (a) {
      ele.removeAttribute(a);
    });
  });
}; // @require core/cash.js
// @require core/type_checking.js
// @require collection/each.js
// @require ./remove_attr.js


fn.attr = function (attr, value) {
  if (!attr) return;

  if (isString(attr)) {
    if (arguments.length < 2) {
      if (!this[0]) return;

      var _value = this[0].getAttribute(attr);

      return _value === null ? undefined : _value;
    }

    if (value === null) return this.removeAttr(attr);
    return this.each(function (i, ele) {
      ele.setAttribute(attr, value);
    });
  }

  for (var key in attr) {
    this.attr(key, attr[key]);
  }

  return this;
}; // @require core/cash.js
// @require core/each.js
// @require core/get_split_values.js
// @require collection/each.js


fn.toggleClass = function (cls, force) {
  var classes = getSplitValues(cls),
      isForce = force !== undefined;
  if (!classes.length) return this;
  return this.each(function (i, ele) {
    each(classes, function (c) {
      if (isForce) {
        force ? ele.classList.add(c) : ele.classList.remove(c);
      } else {
        ele.classList.toggle(c);
      }
    });
  });
}; // @require core/cash.js
// @require ./toggle_class.js


fn.addClass = function (cls) {
  return this.toggleClass(cls, true);
}; // @require core/cash.js
// @require ./attr.js
// @require ./toggle_class.js


fn.removeClass = function (cls) {
  return !arguments.length ? this.attr('class', '') : this.toggleClass(cls, false);
}; // @optional ./add_class.js
// @optional ./attr.js
// @optional ./has_class.js
// @optional ./prop.js
// @optional ./remove_attr.js
// @optional ./remove_class.js
// @optional ./remove_prop.js
// @optional ./toggle_class.js
// @require ./cash.js
// @require ./variables.js
// @require ./type_checking.js


var fragment;

function initFragment() {
  if (fragment) return;
  fragment = doc.implementation.createHTMLDocument('');
  var base = fragment.createElement('base');
  base.href = doc.location.href;
  fragment.head.appendChild(base);
}

function parseHTML(html) {
  //FIXME: `<tr></tr>` can't be parsed with this
  initFragment();
  if (!isString(html)) html = '';
  fragment.body.innerHTML = html;
  return slice.call(fragment.body.childNodes);
}

cash.parseHTML = parseHTML; // @require ./cash.js

function unique(arr) {
  return arr.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
}

cash.unique = unique; // @require core/cash.js
// @require core/unique.js
// @require ./get.js

fn.add = function (selector, context) {
  return cash(unique(this.get().concat(cash(selector, context).get())));
}; // @optional ./camel_case.js
// @optional ./each.js
// @optional ./export_window.js
// @optional ./extend.js
// @optional ./find.js
// @optional ./get_compare_function.js
// @optional ./get_split_values.js
// @optional ./guid.js
// @optional ./matches.js
// @optional ./parse_html.js
// @optional ./unique.js
// @optional ./variables.js
// @require ./cash.js
// @require ./type_checking.js
// @require core/variables.js


function computeStyle(ele, prop, isVariable) {
  if (ele.nodeType !== 1) return;
  var style = win.getComputedStyle(ele, null);
  return prop ? isVariable ? style.getPropertyValue(prop) : style[prop] : style;
} // @require ./compute_style.js


function computeStyleInt(ele, prop) {
  return parseInt(computeStyle(ele, prop), 10) || 0;
}

var cssVariableRe = /^--/; // @require ./variables.js

function isCSSVariable(prop) {
  return cssVariableRe.test(prop);
} // @require core/camel_case.js
// @require core/cash.js
// @require core/each.js
// @require core/variables.js
// @require ./is_css_variable.js


var prefixedProps = {};
var _doc$createElement = doc.createElement('div');
var style = _doc$createElement.style;
var vendorsPrefixes = ['webkit', 'moz', 'ms', 'o'];

function getPrefixedProp(prop, isVariable) {
  if (isVariable === void 0) {
    isVariable = isCSSVariable(prop);
  }

  if (isVariable) return prop;

  if (!prefixedProps[prop]) {
    var propCC = camelCase(prop),
        propUC = "" + propCC.charAt(0).toUpperCase() + propCC.slice(1),
        props = (propCC + " " + vendorsPrefixes.join(propUC + " ") + propUC).split(' ');
    each(props, function (p) {
      if (p in style) {
        prefixedProps[prop] = p;
        return false;
      }
    });
  }

  return prefixedProps[prop];
}


cash.prefixedProp = getPrefixedProp; // @require core/type_checking.js
// @require ./is_css_variable.js

var numericProps = {
  animationIterationCount: true,
  columnCount: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true
};

function getSuffixedValue(prop, value, isVariable) {
  if (isVariable === void 0) {
    isVariable = isCSSVariable(prop);
  }

  return !isVariable && !numericProps[prop] && isNumeric(value) ? value + "px" : value;
} // @require core/cash.js
// @require core/type_checking.js
// @require collection/each.js
// @require ./helpers/compute_style.js
// @require ./helpers/get_prefixed_prop.js
// @require ./helpers/get_suffixed_value.js
// @require ./helpers/is_css_variable.js


fn.css = function (prop, value) {
  if (isString(prop)) {
    var isVariable = isCSSVariable(prop);
    prop = getPrefixedProp(prop, isVariable);
    if (arguments.length < 2) return this[0] && computeStyle(this[0], prop, isVariable);
    if (!prop) return this;
    value = getSuffixedValue(prop, value, isVariable);
    return this.each(function (i, ele) {
      if (ele.nodeType !== 1) return;

      if (isVariable) {
        ele.style.setProperty(prop, value);
      } else {
        ele.style[prop] = value;
      }
    });
  }

  for (var key in prop) {
    this.css(key, prop[key]);
  }

  return this;
}; // @optional ./css.js


var dataNamespace = '__cashData';
var dataAttributeRe = /^data-(.*)/; // @require core/cash.js
// @require ./helpers/variables.js

cash.hasData = function (ele) {
  return dataNamespace in ele;
}; // @require ./variables.js


function getDataCache(ele) {
  return ele[dataNamespace] = ele[dataNamespace] || {};
} // @require attributes/attr.js
// @require ./get_data_cache.js


function getData(ele, key) {
  var cache = getDataCache(ele);

  if (key) {
    if (!(key in cache)) {
      var value = ele.dataset ? ele.dataset[key] || ele.dataset[camelCase(key)] : cash(ele).attr("data-" + key);

      if (value !== undefined) {
        try {
          value = JSON.parse(value);
        } catch (e) {}

        cache[key] = value;
      }
    }

    return cache[key];
  }

  return cache;
} // @require ./variables.js
// @require ./get_data_cache.js


function removeData(ele, key) {
  if (key === undefined) {
    delete ele[dataNamespace];
  } else {
    delete getDataCache(ele)[key];
  }
} // @require ./get_data_cache.js


function setData(ele, key, value) {
  getDataCache(ele)[key] = value;
} // @require core/cash.js
// @require core/type_checking.js
// @require collection/each.js
// @require ./helpers/get_data.js
// @require ./helpers/set_data.js
// @require ./helpers/variables.js


fn.data = function (name, value) {
  var _this = this;

  if (!name) {
    if (!this[0]) return;
    each(this[0].attributes, function (attr) {
      var match = attr.name.match(dataAttributeRe);
      if (!match) return;

      _this.data(match[1]);
    });
    return getData(this[0]);
  }

  if (isString(name)) {
    if (value === undefined) return this[0] && getData(this[0], name);
    return this.each(function (i, ele) {
      return setData(ele, name, value);
    });
  }

  for (var key in name) {
    this.data(key, name[key]);
  }

  return this;
}; // @require core/cash.js
// @require collection/each.js
// @require ./helpers/remove_data.js


fn.removeData = function (key) {
  return this.each(function (i, ele) {
    return removeData(ele, key);
  });
}; // @optional ./data.js
// @optional ./remove_data.js
// @require css/helpers/compute_style_int.js


function getExtraSpace(ele, xAxis) {
  return computeStyleInt(ele, "border" + (xAxis ? 'Left' : 'Top') + "Width") + computeStyleInt(ele, "padding" + (xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding" + (xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border" + (xAxis ? 'Right' : 'Bottom') + "Width");
} // @require core/cash.js
// @require core/each.js
// @require core/variables.js


each(['Width', 'Height'], function (prop) {
  fn["inner" + prop] = function () {
    if (!this[0]) return;
    if (this[0] === win) return win["inner" + prop];
    return this[0]["client" + prop];
  };
}); // @require core/camel_case.js
// @require core/cash.js
// @require core/each.js
// @require core/variables.js
// @require css/helpers/compute_style.js
// @require css/helpers/get_suffixed_value.js
// @require ./helpers/get_extra_space.js

each(['width', 'height'], function (prop, index) {
  fn[prop] = function (value) {
    if (!this[0]) return value === undefined ? undefined : this;

    if (!arguments.length) {
      if (this[0] === win) return this[0][camelCase("outer-" + prop)];
      return this[0].getBoundingClientRect()[prop] - getExtraSpace(this[0], !index);
    }

    value = parseInt(value, 10);
    return this.each(function (i, ele) {
      if (ele.nodeType !== 1) return;
      var boxSizing = computeStyle(ele, 'boxSizing');
      ele.style[prop] = getSuffixedValue(prop, value + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
    });
  };
}); // @require core/cash.js
// @require core/each.js
// @require core/variables.js
// @require css/helpers/compute_style_int.js

each(['Width', 'Height'], function (prop, index) {
  fn["outer" + prop] = function (includeMargins) {
    if (!this[0]) return;
    if (this[0] === win) return win["outer" + prop];
    return this[0]["offset" + prop] + (includeMargins ? computeStyleInt(this[0], "margin" + (!index ? 'Left' : 'Top')) + computeStyleInt(this[0], "margin" + (!index ? 'Right' : 'Bottom')) : 0);
  };
}); // @optional ./inner.js
// @optional ./normal.js
// @optional ./outer.js

function hasNamespaces(ns1, ns2) {
  for (var i = 0, l = ns2.length; i < l; i++) {
    if (ns1.indexOf(ns2[i]) < 0) return false;
  }

  return true;
} // @require core/each.js


function removeEventListeners(cache, ele, name) {
  each(cache[name], function (_ref) {
    var namespaces = _ref[0],
        callback = _ref[1];
    ele.removeEventListener(name, callback);
  });
  delete cache[name];
}

var eventsNamespace = '__cashEvents';
var eventsNamespacesSeparator = '.'; // @require ./variables.js

function getEventsCache(ele) {
  return ele[eventsNamespace] = ele[eventsNamespace] || {};
} // @require core/guid.js
// @require events/helpers/get_events_cache.js


function addEvent(ele, name, namespaces, callback) {
  callback.guid = callback.guid || guid++;
  var eventCache = getEventsCache(ele);
  eventCache[name] = eventCache[name] || [];
  eventCache[name].push([namespaces, callback]);
  ele.addEventListener(name, callback);
} // @require ./variables.js


function parseEventName(eventName) {
  var parts = eventName.split(eventsNamespacesSeparator);
  return [parts[0], parts.slice(1).sort()]; // [name, namespaces]
} // @require core/guid.js
// @require ./get_events_cache.js
// @require ./has_namespaces.js
// @require ./parse_event_name.js
// @require ./remove_event_listeners.js


function removeEvent(ele, name, namespaces, callback) {
  var cache = getEventsCache(ele);

  if (!name) {
    if (!namespaces || !namespaces.length) {
      for (name in cache) {
        removeEventListeners(cache, ele, name);
      }
    } else {
      for (name in cache) {
        removeEvent(ele, name, namespaces, callback);
      }
    }
  } else {
    var eventCache = cache[name];
    if (!eventCache) return;
    if (callback) callback.guid = callback.guid || guid++;
    cache[name] = eventCache.filter(function (_ref2) {
      var ns = _ref2[0],
          cb = _ref2[1];
      if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces)) return true;
      ele.removeEventListener(name, cb);
    });
  }
} // @require core/cash.js
// @require core/each.js
// @require collection/each.js
// @require ./helpers/parse_event_name.js
// @require ./helpers/remove_event.js


fn.off = function (eventFullName, callback) {
  var _this2 = this;

  if (eventFullName === undefined) {
    this.each(function (i, ele) {
      return removeEvent(ele);
    });
  } else {
    each(getSplitValues(eventFullName), function (eventFullName) {
      var _parseEventName = parseEventName(eventFullName),
          name = _parseEventName[0],
          namespaces = _parseEventName[1];

      _this2.each(function (i, ele) {
        return removeEvent(ele, name, namespaces, callback);
      });
    });
  }

  return this;
}; // @require core/cash.js
// @require core/get_split_values.js
// @require core/guid.js
// @require core/matches.js
// @require core/type_checking.js
// @require collection/each.js
// @require ./helpers/variables.js
// @require ./helpers/add_event.js
// @require ./helpers/has_namespaces.js
// @require ./helpers/parse_event_name.js
// @require ./helpers/remove_event.js


fn.on = function (eventFullName, selector, callback, _one) {
  var _this3 = this;

  if (!isString(eventFullName)) {
    for (var key in eventFullName) {
      this.on(key, selector, eventFullName[key]);
    }

    return this;
  }

  if (isFunction(selector)) {
    callback = selector;
    selector = false;
  }

  each(getSplitValues(eventFullName), function (eventFullName) {
    var _parseEventName2 = parseEventName(eventFullName),
        name = _parseEventName2[0],
        namespaces = _parseEventName2[1];

    _this3.each(function (i, ele) {
      var finalCallback = function finalCallback(event) {
        if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
        var thisArg = ele;

        if (selector) {
          var target = event.target;

          while (!matches(target, selector)) {
            if (target === ele) return;
            target = target.parentNode;
            if (!target) return;
          }

          thisArg = target;
        }

        event.namespace = event.namespace || '';
        var returnValue = callback.call(thisArg, event, event.data);

        if (_one) {
          removeEvent(ele, name, namespaces, finalCallback);
        }

        if (returnValue === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      };

      finalCallback.guid = callback.guid = callback.guid || guid++;
      addEvent(ele, name, namespaces, finalCallback);
    });
  });
  return this;
}; // @require core/cash.js
// @require ./on.js


fn.one = function (eventFullName, delegate, callback) {
  return this.on(eventFullName, delegate, callback, true);
}; // @require core/cash.js
// @require core/variables.js


fn.ready = function (callback) {
  var finalCallback = function finalCallback() {
    return callback(cash);
  };

  if (doc.readyState !== 'loading') {
    setTimeout(finalCallback);
  } else {
    doc.addEventListener('DOMContentLoaded', finalCallback);
  }

  return this;
}; // @require core/cash.js
// @require core/type_checking.js
// @require core/variables.js
// @require collection/each.js
// @require ./helpers/parse_event_name.js
// @require ./helpers/variables.js


fn.trigger = function (eventFullName, data) {
  var evt = eventFullName;

  if (isString(eventFullName)) {
    var _parseEventName3 = parseEventName(eventFullName),
        name = _parseEventName3[0],
        namespaces = _parseEventName3[1];

    evt = doc.createEvent('HTMLEvents');
    evt.initEvent(name, true, true);
    evt.namespace = namespaces.join(eventsNamespacesSeparator);
  }

  evt.data = data;
  return this.each(function (i, ele) {
    ele.dispatchEvent(evt);
  });
}; // @optional ./off.js
// @optional ./on.js
// @optional ./one.js
// @optional ./ready.js
// @optional ./trigger.js
// @require core/each.js


function getValueSelectMultiple(ele) {
  var values = [];
  each(ele.options, function (option) {
    if (option.selected && !option.disabled && !option.parentNode.disabled) {
      values.push(option.value);
    }
  });
  return values;
}

function getValueSelectSingle(ele) {
  return ele.selectedIndex < 0 ? null : ele.options[ele.selectedIndex].value;
} // @require ./get_value_select_single.js
// @require ./get_value_select_multiple.js


var selectOneRe = /select-one/i;
var selectMultipleRe = /select-multiple/i;

function getValue(ele) {
  var type = ele.type;
  if (selectOneRe.test(type)) return getValueSelectSingle(ele);
  if (selectMultipleRe.test(type)) return getValueSelectMultiple(ele);
  return ele.value;
}

var queryEncodeSpaceRe = /%20/g;

function queryEncode(prop, value) {
  return "&" + encodeURIComponent(prop) + "=" + encodeURIComponent(value).replace(queryEncodeSpaceRe, '+');
} // @require core/cash.js
// @require core/each.js
// @require core/type_checking.js
// @require ./helpers/get_value.js
// @require ./helpers/query_encode.js


var skippableRe = /file|reset|submit|button|image/i;
var checkableRe = /radio|checkbox/i;

fn.serialize = function () {
  var query = '';
  this.each(function (i, ele) {
    each(ele.elements || [ele], function (ele) {
      if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET') return;
      if (skippableRe.test(ele.type)) return;
      if (checkableRe.test(ele.type) && !ele.checked) return;
      var value = getValue(ele);
      if (value === undefined) return;
      var values = isArray(value) ? value : [value];
      each(values, function (value) {
        query += queryEncode(ele.name, value);
      });
    });
  });
  return query.substr(1);
}; // @require core/cash.js
// @require core/each.js
// @require core/type_checking.js
// @require collection/each.js
// @require ./helpers/get_value.js


fn.val = function (value) {
  if (value === undefined) return this[0] && getValue(this[0]);
  return this.each(function (i, ele) {
    if (selectMultipleRe.test(ele.type) && isArray(value)) {
      each(ele.options, function (option) {
        option.selected = value.indexOf(option.value) >= 0;
      });
    } else {
      ele.value = value;
    }
  });
}; // @optional ./serialize.js
// @optional ./val.js
// @require core/cash.js
// @require collection/map.js


fn.clone = function () {
  return this.map(function (i, ele) {
    return ele.cloneNode(true);
  });
}; // @require core/cash.js
// @require collection/each.js


fn.detach = function () {
  return this.each(function (i, ele) {
    if (ele.parentNode) {
      ele.parentNode.removeChild(ele);
    }
  });
};

function insertElement(ele, child, prepend) {
  if (prepend) {
    ele.insertBefore(child, ele.childNodes[0]);
  } else {
    ele.appendChild(child);
  }
} // @require core/each.js
// @require core/type_checking.js
// @require ./insert_element.js


function insertContent(parent, child, prepend) {
  var isStr = isString(child);

  if (!isStr && child.length) {
    each(child, function (ele) {
      return insertContent(parent, ele, prepend);
    });
  } else {
    each(parent, isStr ? function (ele) {
      ele.insertAdjacentHTML(prepend ? 'afterbegin' : 'beforeend', child);
    } : function (ele, index) {
      return insertElement(ele, !index ? child : child.cloneNode(true), prepend);
    });
  }
} // @require core/cash.js
// @require core/each.js
// @require ./helpers/insert_content.js


fn.append = function () {
  var _this4 = this;

  each(arguments, function (content) {
    insertContent(_this4, content);
  });
  return this;
}; // @require core/cash.js
// @require ./helpers/insert_content.js


fn.appendTo = function (parent) {
  insertContent(cash(parent), this);
  return this;
}; // @require core/cash.js
// @require collection/each.js


fn.html = function (content) {
  if (content === undefined) return this[0] && this[0].innerHTML;
  var source = content.nodeType ? content[0].outerHTML : content;
  return this.each(function (i, ele) {
    ele.innerHTML = source;
  });
}; // @require core/cash.js
// @require ./html.js


fn.empty = function () {
  return this.html('');
}; // @require core/cash.js
// @require collection/each.js


fn.insertAfter = function (content) {
  var _this5 = this;

  cash(content).each(function (index, ele) {
    var parent = ele.parentNode;

    _this5.each(function (i, e) {
      parent.insertBefore(!index ? e : e.cloneNode(true), ele.nextSibling);
    });
  });
  return this;
}; // @require core/cash.js
// @require core/each.js
// @require core/variables.js
// @require collection/slice.js
// @require ./insert_after.js


fn.after = function () {
  var _this6 = this;

  each(reverse.apply(arguments), function (content) {
    reverse.apply(cash(content).slice()).insertAfter(_this6);
  });
  return this;
}; // @require core/cash.js
// @require collection/each.js


fn.insertBefore = function (selector) {
  var _this7 = this;

  cash(selector).each(function (index, ele) {
    var parent = ele.parentNode;

    _this7.each(function (i, e) {
      parent.insertBefore(!index ? e : e.cloneNode(true), ele);
    });
  });
  return this;
}; // @require core/cash.js
// @require core/each.js
// @require ./insert_before.js


fn.before = function () {
  var _this8 = this;

  each(arguments, function (content) {
    cash(content).insertBefore(_this8);
  });
  return this;
}; // @require core/cash.js
// @require core/each.js
// @require ./helpers/insert_content.js


fn.prepend = function () {
  var _this9 = this;

  each(arguments, function (content) {
    insertContent(_this9, content, true);
  });
  return this;
}; // @require core/cash.js
// @require core/variables.js
// @require collection/slice.js
// @require ./helpers/insert_content.js


fn.prependTo = function (parent) {
  insertContent(cash(parent), reverse.apply(this.slice()), true);
  return this;
}; // @require core/cash.js
// @require events/off.js
// @require ./detach.js


fn.remove = function () {
  return this.detach().off();
}; // @require core/cash.js
// @require collection/each.js
// @require collection/slice.js
// @require ./after.js
// @require ./remove.js


fn.replaceWith = function (content) {
  var _this10 = this;

  return this.each(function (i, ele) {
    var parent = ele.parentNode;
    if (!parent) return;
    var $eles = i ? cash(content).clone() : cash(content);

    if (!$eles[0]) {
      _this10.remove();

      return false;
    }

    parent.replaceChild($eles[0], ele);
    cash($eles[0]).after($eles.slice(1));
  });
}; // @require core/cash.js
// @require ./replace_with.js


fn.replaceAll = function (content) {
  cash(content).replaceWith(this);
  return this;
}; // @require core/cash.js
// @require collection/each.js


fn.text = function (content) {
  if (content === undefined) return this[0] ? this[0].textContent : '';
  return this.each(function (i, ele) {
    ele.textContent = content;
  });
}; // @optional ./after.js
// @optional ./append.js
// @optional ./append_to.js
// @optional ./before.js
// @optional ./clone.js
// @optional ./detach.js
// @optional ./empty.js
// @optional ./html.js
// @optional ./insert_after.js
// @optional ./insert_before.js
// @optional ./prepend.js
// @optional ./prepend_to.js
// @optional ./remove.js
// @optional ./replace_all.js
// @optional ./replace_with.js
// @optional ./text.js
// @require core/cash.js
// @require core/variables.js


var docEle = doc.documentElement;

fn.offset = function () {
  var ele = this[0];
  if (!ele) return;
  var rect = ele.getBoundingClientRect();
  return {
    top: rect.top + win.pageYOffset - docEle.clientTop,
    left: rect.left + win.pageXOffset - docEle.clientLeft
  };
}; // @require core/cash.js


fn.offsetParent = function () {
  return cash(this[0] && this[0].offsetParent);
}; // @require core/cash.js


fn.position = function () {
  var ele = this[0];
  if (!ele) return;
  return {
    left: ele.offsetLeft,
    top: ele.offsetTop
  };
}; // @optional ./offset.js
// @optional ./offset_parent.js
// @optional ./position.js
// @require core/cash.js
// @require core/matches.js
// @require core/unique.js
// @require collection/each.js
// @require collection/filter.js


fn.children = function (selector) {
  var result = [];
  this.each(function (i, ele) {
    push.apply(result, ele.children);
  });
  result = cash(unique(result));
  if (!selector) return result;
  return result.filter(function (i, ele) {
    return matches(ele, selector);
  });
}; // @require core/cash.js
// @require core/unique.js
// @require collection/each.js


fn.contents = function () {
  var result = [];
  this.each(function (i, ele) {
    push.apply(result, ele.tagName === 'IFRAME' ? [ele.contentDocument] : ele.childNodes);
  });
  return cash(result.length && unique(result));
}; // @require core/cash.js
// @require core/unique.js
// @require core/find.js
// @require core/variables.js


fn.find = function (selector) {
  var result = [];

  for (var i = 0, l = this.length; i < l; i++) {
    var found = find(selector, this[i]);

    if (found.length) {
      push.apply(result, found);
    }
  }

  return cash(result.length && unique(result));
}; // @require core/cash.js
// @require core/find.js
// @require core/type_checking.js
// @require collection/filter.js


fn.has = function (selector) {
  var comparator = isString(selector) ? function (i, ele) {
    return !!find(selector, ele).length;
  } : function (i, ele) {
    return ele.contains(selector);
  };
  return this.filter(comparator);
}; // @require core/cash.js
// @require core/get_compare_function.js
// @require collection/each.js


fn.is = function (selector) {
  if (!selector || !this[0]) return false;
  var comparator = getCompareFunction(selector);
  var check = false;
  this.each(function (i, ele) {
    check = comparator(i, ele, selector);
    return !check;
  });
  return check;
}; // @require core/cash.js


fn.next = function () {
  return cash(this[0] && this[0].nextElementSibling);
}; // @require core/cash.js
// @require core/get_compare_function.js
// @require collection/filter.js


fn.not = function (selector) {
  if (!selector || !this[0]) return this;
  var comparator = getCompareFunction(selector);
  return this.filter(function (i, ele) {
    return !comparator(i, ele, selector);
  });
}; // @require core/cash.js
// @require core/unique.js
// @require collection/each.js


fn.parent = function () {
  var result = [];
  this.each(function (i, ele) {
    if (ele && ele.parentNode) {
      result.push(ele.parentNode);
    }
  });
  return cash(unique(result));
}; // @require core/cash.js
// @require core/variables.js
// @require traversal/children.js
// @require traversal/parent.js
// @require ./get.js
//FIXME Ugly file name, is there a better option?


fn.index = function (ele) {
  var child = ele ? cash(ele)[0] : this[0],
      collection = ele ? this : cash(child).parent().children();
  return indexOf.call(collection, child);
}; // @optional ./add.js
// @optional ./each.js
// @optional ./eq.js
// @optional ./filter.js
// @optional ./first.js
// @optional ./get.js
// @optional ./indexFn.js
// @optional ./last.js
// @optional ./map.js
// @optional ./slice.js
// @require core/cash.js
// @require collection/filter.js
// @require ./is.js
// @require ./parent.js


fn.closest = function (selector) {
  if (!selector || !this[0]) return cash();
  if (this.is(selector)) return this.filter(selector);
  return this.parent().closest(selector);
}; // @require core/cash.js
// @require core/matches.js
// @require core/unique.js
// @require core/variables.js
// @require collection/each.js


fn.parents = function (selector) {
  var result = [];
  var last;
  this.each(function (i, ele) {
    last = ele;

    while (last && last.parentNode && last !== doc.body.parentNode) {
      last = last.parentNode;

      if (!selector || selector && matches(last, selector)) {
        result.push(last);
      }
    }
  });
  return cash(unique(result));
}; // @require core/cash.js


fn.prev = function () {
  return cash(this[0] && this[0].previousElementSibling);
}; // @require core/cash.js
// @require collection/filter.js
// @require ./children.js
// @require ./parent.js


fn.siblings = function () {
  var ele = this[0];
  return this.parent().children().filter(function (i, child) {
    return child !== ele;
  });
}; // @optional ./children.js

/**
 * This module exports front_screenshot, which includes the methods detailed below,
 * plus bundled builds of {@link HTML2Canvas} and {@link Canvg}
 * @module front_screenshot
 */

/**
 * The options that can be passed to every method. Not all of them are needed nor used on every function
 * @typedef {Object} FSOptions
 * @property {Number} [quality=0.8] - level of quality (higher is better) of the image to generate
 * @property {string} [selector='svg'] - Cash/jQuery selector on which to operate e.g. 'svg', '.canvg'
 * @property {boolean} [adjust_styles=true] - if true, sets the styles for typical c3 graphics
 * @property {boolean} [useCORS=true] - tell html2canvas to try to use CORS on external URLs
 * @property {boolean} [allowTaint=false] - either to allow or not tainted objects
 * @property {boolean} [clone=false[] - if true, clone the node to capture and apply html2canvas on the clone
 * @property {Boolean} [logging=false] - if true, log the results of html2canvas or canvg
 * @property {boolean} [clone=false] - if true, clone the node either to adjust styles or to capture with html2canvas
 * @property {boolean} [ignoreMouse=true] - if true, canvg will ignore mouse events
 * @property {boolean} [ignoreAnimation=true] - if true, canvg will ignore svg animations
 * @property {boolean} [hideSVG=true] - if true, hide the svg selector after canvg has converted it to image or canvas
 */

/**
 * Sets the default options.
 *
 * @param  {FSOptions}  options  The options
 * @return {FSOptions}  options with default properties set
 */
function setDefaultOptions(options) {

	if (!options) {
		options = {};
	}
	if (options.quality === undefined) {
		options.quality = 0.8;
	}

	if (options.logging === undefined) {
		options.logging = false;
	}
	if (options.selector === undefined) {
		options.selector = 'svg';
	}

	if (options.hideSVG === undefined) {
		options.hideSVG = true;
	}

	if (options.adjust_styles === undefined) {
		options.adjust_styles = true;
	}

	if (options.useCORS === undefined) {
		options.useCORS = true;
	}

	if (options.allowTaint === undefined) {
		options.allowTaint = false;
	}

	if (options.clone === undefined) {
		options.clone = false;
	}
	if (options.svgContainer === undefined) {
		options.svgContainer = '.canvg';
	}

	if (options.ignoreMouse === undefined) {
		options.ignoreMouse = true;
	}

	if (options.ignoreAnimation === undefined) {
		options.ignoreAnimation = true;
	}

	options.log = options.logging;
	return options;
}

/**
 * Adjust common C3 styles to avoid distorted images. This function won't modify
 * elements with class `keepstyle` not its children
 *
 * @param  {Cash|jQuery|HTMLElement}  jqContainer  The SVG element on which to apply the
 *                                 modifications
 * @param  {FSOptions}       opts   The options, in particular, it will check if `clone` is true
 * @return {Cash|jQuery}  a clone of the original svg element with modified
 *                        styles
 */
function adjustStyles(jqContainer, opts) {

	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}

	var clone = opts.clone ? jqContainer.clone() : jqContainer;

	clone.find('g').removeAttr('clip-path');
	clone.find('g.c3-regions').remove();

	clone.find('path').not('.keepstyle').attr('fill', 'none');

	clone.find('.tick line, path.domain').not('.keepstyle').attr('stroke', 'black');

	clone.find('.c3-axis').not('.keepstyle').find('.tick').not('.keepstyle').find('text').css({
		'font-size': '10px',
		'font-weight': '400',
		'font-family': 'sans-serif'
	});

	clone.find('.c3-chart-arc').not('.keepstyle').find('text').css({
		'font-size': '13px',
		'font-weight': '400',
		'font-family': 'sans-serif'
	});

	clone.find('.c3-legend-item').not('.keepstyle').find('text').css({
		'font-size': '12px',
		'font-weight': '400',
		'font-family': 'sans-serif'
	});

	return clone;
}

/**
 * Wrapper around html2canvas to accept either a DOMNode or a Cash/jQuery selector
 *
 * @param  {HTMLElement|Cash|jQuery}  jqContainer  The element
 * @param  {FSOptions}  options  The options
 *
 * @returns {HTMLCanvasElement}  Canvas element
 */
function html2canvas(jqContainer, options) {

	var opts = setDefaultOptions(options);

	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}

	if (opts.adjust_styles === true) {
		adjustStyles(jqContainer, opts);
	}

	var element = jqContainer[0];

	return new Promise(function (resolve, reject) {
		window.setTimeout(function () {
			index(element, opts).then(function (canvas) {
				resolve(canvas);
			}).catch(function (err) {
				reject(err);
			});
		}, 300);
	});
}

/**
 * Takes a jQuery container, finds its contained SVG, transforms it into a canvas
 *
 * @param      {HTMLElement|Cash|jQuery}    jqContainer  container of an SVG element to transform into canvas
 * @param {FSOptions} options - options to pass to canvg
 *
 * @returns {Promise<HTMLCanvasElement>}  a promise that unfolds to a Canvas element
 */
function svgToCanvas(jqContainer, options) {

	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}
	var the_svg,
	    opts = setDefaultOptions(options);

	if (jqContainer.is('svg')) {
		the_svg = jqContainer;
		jqContainer = the_svg.parent();
	} else {
		the_svg = jqContainer.find(opts.selector);
	}

	var canvas = document.createElement("canvas");
	jqContainer.find('.temporary_element').remove();
	canvas.className = 'temporary_element';

	if (the_svg.length === 0) {
		console.warn('Requested selector ' + opts.selector + ' not found in document');
		return Promise.resolve(canvas);
	}

	var clone = the_svg;
	if (opts.adjust_styles === true) {
		clone = adjustStyles(the_svg, opts);
	}

	var tooltip = jqContainer.find('.c3-tooltip-container').detach();

	var svgData;
	if (clone.is('svg')) {
		svgData = new XMLSerializer().serializeToString(clone[0]);
	} else {
		console.warn('Requested element is not an SVG');
		return Promise.resolve(canvas);
	}

	jqContainer[0].appendChild(canvas);
	if (tooltip && tooltip.length) {
		jqContainer.append(tooltip);
	}
	if (opts.hideSVG) {
		the_svg.data('display', the_svg.css('display')).css('display', 'none');
	}

	return new Promise(function (resolve, reject) {

		opts.renderCallback = function (dom) {

			resolve(canvas);
		};
		canvg(canvas, svgData, opts);
	});
}
/**
 * Takes a jQuery container, finds its contained SVG, transforms it into an image
 *
 * @param      {HTMLElement|Cash|jQuery}    jqContainer  container of an SVG element to transform into image
 * @param      {FSOptions} [options] options
 *
 * @returns {Promise<HTMLImageElement>} a promise than resolves to an Image element
 */
function svgToImg(jqContainer, options) {

	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}
	// kept for retrocompatibility
	if (typeof options === 'number') {
		var quality = options;
		options = {
			quality: quality
		};
	}

	var opts = setDefaultOptions(options);
	var laimg = new Image();

	return svgToCanvas(jqContainer, opts).then(function (the_canvas) {
		laimg.className = 'temporary_element';
		if (!the_canvas) {
			return Promise.resolve(laimg);
		}

		return new Promise(function (resolve, reject) {

			laimg.onload = function () {

				jqContainer[0].removeChild(the_canvas);
				resolve(laimg);
			};
			jqContainer[0].appendChild(laimg);
			laimg.src = the_canvas.toDataURL("image/png", opts.quality);
		});
	}).catch(function (err) {
		console.warn(err);
		return Promise.resolve(laimg);
	});
}

/**
 * Creates a hidden clone of a Cash/jQuery selector and appends it to the screen
 * (allows to capture sections that are hidden due to scrolling behavior)
 *
 * @param      {HTMLElement|Cash|jQuery}  jqContainer  The Cash/jQuery selector of the original container
 * @return     {HTMLElement} the DOM node of the clone
 */
function hiddenClone(jqContainer) {

	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}

	var clone = jqContainer[0].cloneNode(true);

	// Position element relatively within the
	// body but still out of the viewport
	var style = clone.style;
	style.position = 'relative';
	style['box-sizing'] = 'content-box';
	style.width = jqContainer.width() + 'px';
	style.height = jqContainer.height() + 'px';
	style.top = window.innerHeight + 'px';
	style.left = 0;

	// Append clone to body and return the clone
	document.body.appendChild(clone);
	return clone;
}

/**
 * Given a jQuery container, takes a screenshot of it and returns it as an HTMLCanvasElement
 * (it can capture the container contents even if they are hidden due to overlay hidden, auto or scroll CSS properties)
 *
 * @param      {HTMLElement|Cash|jQuery}  jqContainer  Cash/jQuery selector of the element to transform into canvas
 * @param      {FSOptions} [options] options to pass to canvg and html2canvas
 * @return     {Promise<HTMLCanvasElement>}  a promise that unfolds to a {@link HTMLCanvasElement}
 */
var infoScreenShot = function infoScreenShot(jqContainer, options) {

	var container,
	    opts = setDefaultOptions(options);

	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}

	jqContainer.find(opts.svgContainer).each(function () {
		svgToImg(cash(this), options);
	});

	if (opts.clone) {
		container = hiddenClone(jqContainer);
	} else {
		container = jqContainer[0];
	}

	return html2canvas(container, {
		useCORS: opts.useCORS,
		allowTaint: opts.allowTaint,
		logging: opts.logging
	}).then(function (canvas) {
		if (opts.clone) {
			document.body.removeChild(container);
		}
		jqContainer.find(opts.svgContainer).each(function () {
			cash(this).find('.temporary_element').remove();
			var the_svg = cash(this).find('svg');
			the_svg.css('display', the_svg.data('display') || 'block');
		});
		return canvas;
	}).catch(function (err) {
		console.log('Error on html2canvas', err);
		return null;
	});
};

/**
 * Transforms all contents of `selector` nodes found in `jqContainer`
 * from SVG to images with classname `.temporary_element`. Original SVG element is hidden
 *
 * @param {HTMLElement|Cash|jQuery}  jqContainer  Cash/jQuery selector that contains N nodes with the specified selector
 * @param {string}  selector a CSS selector like `.className` or `#id`
 */
var selectorToImg = function selectorToImg(jqContainer, selector) {
	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}
	var elements = selector ? jqContainer.find(selector) : jqContainer;
	elements.each(function () {
		svgToImg(cash(this));
	});
};

/**
 * Removes all childs from  `selector` nodes found in `jqContainer`
 * removing elements with classname `.temporary_element` and showing the original SVG
 *
 * @param {HTMLElement|Cash|jQuery}  jqContainer  Cash/jQuery selector that contains N nodes with the specified selector
 * @param {string}  selector a CSS selector like `.className` or `#id`
 */
var selectorToSVG = function selectorToSVG(jqContainer, selector) {
	if (jqContainer instanceof HTMLElement) {
		jqContainer = cash(jqContainer);
	}
	var elements = selector ? jqContainer.find(selector) : jqContainer;
	elements.each(function () {
		cash(this).find('.temporary_element').remove();
		cash(this).find('svg').show();
	});
};

var ig_screenshot = {
	html2canvas: html2canvas,
	infoScreenShot: infoScreenShot,
	canvg: canvg,
	hiddenClone: hiddenClone,
	svgToImg: svgToImg,
	svgToCanvas: svgToCanvas,
	selectorToImg: selectorToImg,
	selectorToSVG: selectorToSVG
};

exports.html2canvas = html2canvas;
exports.infoScreenShot = infoScreenShot;
exports.canvg = canvg;
exports.hiddenClone = hiddenClone;
exports.svgToImg = svgToImg;
exports.svgToCanvas = svgToCanvas;
exports.selectorToImg = selectorToImg;
exports.selectorToSVG = selectorToSVG;
exports['default'] = ig_screenshot;

Object.defineProperty(exports, '__esModule', { value: true });

})));
