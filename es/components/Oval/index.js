var _templateObject;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
import React from "react";
import styled from "styled-components";
import { Rnd as Resizable } from "react-rnd";
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border: dashed 2px black;\n  border-radius: 100%;\n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n"])));
function Oval(props) {
  var onChange = props.onChange,
    onSubmit = props.onSubmit,
    annotation = props.annotation;
  var geometry = annotation.geometry,
    data = annotation.data,
    selection = annotation.selection;
  if (!geometry) return null;
  return /*#__PURE__*/React.createElement(Resizable, {
    className: props.className,
    style: _extends({
      border: "dashed 2px red",
      borderRadius: "100%",
      boxSizing: "border-box",
      transition: "box-shadow 0.21s ease-in-out",
      position: "absolute",
      backgroundColor: 'rgba(128, 0, 0, 0.5)',
      zIndex: 10
    }, props.style),
    bounds: "parent",
    size: {
      height: geometry.height + "%",
      width: geometry.width + "%"
    },
    onDragStop: function onDragStop(e, d, k) {
      if (!selection && (props.annotation.geometry.xPx !== d.x || props.annotation.geometry.yPx !== d.y)) {
        props.annotation.geometry.x = d.x * props.annotation.geometry.x / props.annotation.geometry.xPx;
        props.annotation.geometry.y = d.y * props.annotation.geometry.y / props.annotation.geometry.yPx;
        props.annotation.geometry.xPx = d.x;
        props.annotation.geometry.yPx = d.y;
        props.onChange(props.annotation);
        props.onSubmit();
      }
    },
    enableResizing: !selection ? {
      bottom: true,
      top: true,
      left: true,
      right: true
    } : false,
    onResizeStop: function onResizeStop(e, direction, ref, d) {
      if (!selection) {
        var newAnnotation = Object.assign({}, props.annotation);
        if (direction === "top" || direction === "left" || direction === "topLeft") {
          props.annotation.geometry.x = (newAnnotation.geometry.xPx - d.width) * props.annotation.geometry.x / props.annotation.geometry.xPx;
          props.annotation.geometry.y = (newAnnotation.geometry.yPx - d.height) * props.annotation.geometry.y / props.annotation.geometry.yPx;
          newAnnotation.geometry.xPx -= d.width;
          newAnnotation.geometry.yPx -= d.height;
        }
        newAnnotation.geometry.width = parseFloat(ref.style.width);
        newAnnotation.geometry.height = parseFloat(ref.style.height);
        props.onChange(newAnnotation);
        props.onSubmit();
      }
    },
    position: {
      x: geometry.xPx,
      y: geometry.yPx
    }
  });
}
Oval.defaultProps = {
  className: "",
  style: {}
};
export default Oval;