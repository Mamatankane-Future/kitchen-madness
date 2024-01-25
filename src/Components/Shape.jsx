import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const Shape= React.forwardRef((props, ref) => {
  const shapeStyle = {
    cursor: "pointer",
};


return (
  <OverlayTrigger trigger="click" placement="right" overlay={props.popover}>
    <g>
      {props.width && (
      <rect
          x={props.x}
          y={props.y}
          width={props.width}
          height={props.height}
          opacity={props.opacity}
          style={shapeStyle}
      />
      )}
      {props.r && (
      <circle
          cx={props.cx}
          cy={props.cy}
          r={props.r}
          opacity={props.opacity}
          style={shapeStyle}
      />
      )}
      {props.points && (
      <polygon
          points={props.points}
          opacity={props.opacity}
          style={shapeStyle}
      />
      )}
    </g>
  </OverlayTrigger>
);
})

export default Shape;