function Shape(props){
  const shapeStyle = {
      cursor: "pointer",
  };
    return (
        <>
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
            <circle
              points={props.points}
              opacity={props.opacity}
              style={shapeStyle}
            />
          )}
        </>
    );
}

export default Shape;