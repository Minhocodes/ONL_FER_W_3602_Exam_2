self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Write your code below!
 */
var Product = /*#__PURE__*/function () {
  function Product(name, price, inStock, quantity) {
    _classCallCheck(this, Product);
    this.name = name;
    this.price = price;
    this.inStock = inStock;
    this.quantity = quantity;
  }
  return _createClass(Product, [{
    key: "isInStock",
    value: function isInStock() {
      return this.inStock ? "Product available" : "Out of stock";
    }
  }, {
    key: "order",
    value: function order(quantity) {
      if (quantity > this.quantity) {
        return false;
      }
      var total = quantity * this.price;
      this.quantity -= quantity;
      if (this.quantity === 0) {
        this.inStock = false;
      }
      return total;
    }
  }]);
}();
var Shoes = /*#__PURE__*/function (_Product) {
  function Shoes(name, price, inStock, quantity) {
    var _this;
    _classCallCheck(this, Shoes);
    _this = _callSuper(this, Shoes, [name, price, inStock, quantity]);
    _this.colors = [];
    _this.sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
    return _this;
  }
  _inherits(Shoes, _Product);
  return _createClass(Shoes, [{
    key: "addColor",
    value: function addColor(color) {
      this.colors = [].concat(_toConsumableArray(this.colors), [color]);
    }
  }, {
    key: "removeSize",
    value: function removeSize(size) {
      this.sizes = this.sizes.filter(function (s) {
        return s !== size;
      });
    }
  }]);
}(Product);
var adidas = new Shoes("Adidas", 299.99, true, 40);
console.log(adidas.isInStock()); // Product available
console.log(adidas.order(30)); // 8999.7
console.log(adidas.order(30)); // false
console.log(adidas.order(10)); // 2999.9
console.log(adidas.isInStock()); // Out of stock

adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors); // ["red", "blue", "green"]

adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes); // [35, 36, 37, 39, 41, 42, 44]

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7972888593929d2463d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7QUFDL0JrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDakIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQmtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNqQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9Ca0IsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVqQ2tCLE1BQU0sQ0FBQ1IsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUN0QlEsTUFBTSxDQUFDUixRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3ZCUSxNQUFNLENBQUNSLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDeEJTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRTVCVyxNQUFNLENBQUNKLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDckJJLE1BQU0sQ0FBQ0osVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUNyQkksTUFBTSxDQUFDSixVQUFVLENBQUMsRUFBRSxDQUFDO0FBQ3JCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDVixLQUFLLENBQUMsQ0FBQyxDQUFDLCtCOzs7Ozs7OztVQ2xFM0Isc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wM19UYXNrXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFdyaXRlIHlvdXIgY29kZSBiZWxvdyFcclxuICovXHJcblxyXG5jbGFzcyBQcm9kdWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgaW5TdG9jaywgcXVhbnRpdHkpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLmluU3RvY2sgPSBpblN0b2NrO1xyXG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gIH1cclxuXHJcbiAgaXNJblN0b2NrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5TdG9jayA/IFwiUHJvZHVjdCBhdmFpbGFibGVcIiA6IFwiT3V0IG9mIHN0b2NrXCI7XHJcbiAgfVxyXG5cclxuICBvcmRlcihxdWFudGl0eSkge1xyXG4gICAgaWYgKHF1YW50aXR5ID4gdGhpcy5xdWFudGl0eSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWwgPSBxdWFudGl0eSAqIHRoaXMucHJpY2U7XHJcblxyXG4gICAgdGhpcy5xdWFudGl0eSAtPSBxdWFudGl0eTtcclxuXHJcbiAgICBpZiAodGhpcy5xdWFudGl0eSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmluU3RvY2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTaG9lcyBleHRlbmRzIFByb2R1Y3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBpblN0b2NrLCBxdWFudGl0eSkge1xyXG4gICAgc3VwZXIobmFtZSwgcHJpY2UsIGluU3RvY2ssIHF1YW50aXR5KTtcclxuXHJcbiAgICB0aGlzLmNvbG9ycyA9IFtdO1xyXG4gICAgdGhpcy5zaXplcyA9IFszNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NF07XHJcbiAgfVxyXG5cclxuICBhZGRDb2xvcihjb2xvcikge1xyXG4gICAgdGhpcy5jb2xvcnMgPSBbLi4udGhpcy5jb2xvcnMsIGNvbG9yXTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNpemUoc2l6ZSkge1xyXG4gICAgdGhpcy5zaXplcyA9IHRoaXMuc2l6ZXMuZmlsdGVyKChzKSA9PiBzICE9PSBzaXplKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkaWRhcyA9IG5ldyBTaG9lcyhcIkFkaWRhc1wiLCAyOTkuOTksIHRydWUsIDQwKTtcclxuXHJcbmNvbnNvbGUubG9nKGFkaWRhcy5pc0luU3RvY2soKSk7IC8vIFByb2R1Y3QgYXZhaWxhYmxlXHJcbmNvbnNvbGUubG9nKGFkaWRhcy5vcmRlcigzMCkpOyAvLyA4OTk5LjdcclxuY29uc29sZS5sb2coYWRpZGFzLm9yZGVyKDMwKSk7IC8vIGZhbHNlXHJcbmNvbnNvbGUubG9nKGFkaWRhcy5vcmRlcigxMCkpOyAvLyAyOTk5LjlcclxuY29uc29sZS5sb2coYWRpZGFzLmlzSW5TdG9jaygpKTsgLy8gT3V0IG9mIHN0b2NrXHJcblxyXG5hZGlkYXMuYWRkQ29sb3IoXCJyZWRcIik7XHJcbmFkaWRhcy5hZGRDb2xvcihcImJsdWVcIik7XHJcbmFkaWRhcy5hZGRDb2xvcihcImdyZWVuXCIpO1xyXG5jb25zb2xlLmxvZyhhZGlkYXMuY29sb3JzKTsgLy8gW1wicmVkXCIsIFwiYmx1ZVwiLCBcImdyZWVuXCJdXHJcblxyXG5hZGlkYXMucmVtb3ZlU2l6ZSgzOCk7XHJcbmFkaWRhcy5yZW1vdmVTaXplKDQwKTtcclxuYWRpZGFzLnJlbW92ZVNpemUoNDMpO1xyXG5jb25zb2xlLmxvZyhhZGlkYXMuc2l6ZXMpOyAvLyBbMzUsIDM2LCAzNywgMzksIDQxLCA0MiwgNDRdXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5NzI4ODg1OTM5MjlkMjQ2M2Q0XCIpIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJuYW1lIiwicHJpY2UiLCJpblN0b2NrIiwicXVhbnRpdHkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlzSW5TdG9jayIsIm9yZGVyIiwidG90YWwiLCJTaG9lcyIsIl9Qcm9kdWN0IiwiX3RoaXMiLCJfY2FsbFN1cGVyIiwiY29sb3JzIiwic2l6ZXMiLCJfaW5oZXJpdHMiLCJhZGRDb2xvciIsImNvbG9yIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicmVtb3ZlU2l6ZSIsInNpemUiLCJmaWx0ZXIiLCJzIiwiYWRpZGFzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=