var _templateObject, _templateObject2;
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
import React from 'react';
import styled from 'styled-components';
var Box = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background: rgba(18, 18, 18, 0.70);;\n  position: absolute;\n  cursor :crosshair\n"])));
var Container = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  zIndex:1000;\n"])));
function FancyRectangle(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  return /*#__PURE__*/React.createElement(Container, {
    className: props.className,
    style: props.style
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      height: geometry.y + "%",
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement(Box, {
    style: {
      top: geometry.y + "%",
      height: geometry.height + "%",
      width: geometry.x + "%"
    }
  }), /*#__PURE__*/React.createElement(Box, {
    style: {
      top: geometry.y + "%",
      left: geometry.x + geometry.width + "%",
      height: geometry.height + "%",
      width: 100 - (geometry.x + geometry.width) + "%"
    }
  }), /*#__PURE__*/React.createElement(Box, {
    style: {
      top: geometry.y + geometry.height + "%",
      height: 100 - (geometry.y + geometry.height) + "%",
      width: '100%'
    }
  }));
}
FancyRectangle.defaultProps = {
  className: '',
  style: {}
};
export default FancyRectangle;