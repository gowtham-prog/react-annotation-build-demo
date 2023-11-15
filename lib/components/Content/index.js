"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _pointsUtils = require("../../utils/pointsUtils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\nbackground: white;\nborder-radius:6px; \nbox-shadow:\n  0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n  0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n  0px 3px 1px -2px rgba(0, 0, 0, 0.12);\npadding: 6px 10px; \nmargin-top: 8px;\nmargin-left: 8px;\ncolor: black; \nfont-weight: bold; \n\n"])));
function Content(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    style: _extends({
      position: 'absolute',
      left: "" + (geometry.type === 'POLYGON' ? (0, _pointsUtils.getHorizontallyCentralPoint)(geometry.points) + '%' : geometry.x + '%'),
      top: "" + (geometry.type === 'POLYGON' ? (0, _pointsUtils.getVerticallyLowestPoint)(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5) * (1 / 10000) + "%" : geometry.y + geometry.height + "%"),
      zIndex: 100
    }, props.style),
    className: props.className,
    geometry: geometry
  }, props.annotation.data && props.annotation.data.text);
}
Content.defaultProps = {
  style: {},
  className: ''
};
var _default = exports["default"] = Content;
module.exports = exports.default;