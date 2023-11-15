function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { getCoordPercentage } from '../utils/offsetCoordinates';
var MARGIN = 6;
var marginToPercentage = function marginToPercentage(container) {
  return {
    marginX: MARGIN / container.width * 100,
    marginY: MARGIN / container.height * 100
  };
};
export function intersects(_ref, geometry, container) {
  var x = _ref.x,
    y = _ref.y;
  var _marginToPercentage = marginToPercentage(container),
    marginX = _marginToPercentage.marginX,
    marginY = _marginToPercentage.marginY;
  if (x < geometry.x - marginX) return false;
  if (y < geometry.y - marginY) return false;
  if (x > geometry.x + marginX) return false;
  if (y > geometry.y + marginY) return false;
  return true;
}
export function area(geometry, container) {
  var _marginToPercentage2 = marginToPercentage(container),
    marginX = _marginToPercentage2.marginX,
    marginY = _marginToPercentage2.marginY;
  return marginX * marginY;
}
export var TYPE = "POINT";
export var methods = {
  onClick: function onClick(annotation, e) {
    if (!annotation.geometry) {
      return _extends({}, annotation, {
        selection: _extends({}, annotation.selection, {
          showEditor: true,
          mode: 'EDITING'
        }),
        geometry: _extends({
          id: Math.random()
        }, annotation.geometry, getCoordPercentage(e), {
          width: 0,
          height: 0,
          type: TYPE
        })
      });
    } else {
      return {};
    }
  },
  onDragStop: function onDragStop(e, d, annotation) {
    console.log('MOVED');
  }
};
export default {
  TYPE: TYPE,
  intersects: intersects,
  area: area,
  methods: methods
};