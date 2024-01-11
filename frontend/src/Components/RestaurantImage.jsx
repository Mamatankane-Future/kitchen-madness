import React from 'react';
import restaurantImage from '../Assets/restaurant1.png'

function RestaurantImage(){
  function handleClick(){
    console.log("somethin is wrong");
    alert("Element clicked!😜")
  }

  const svgStyle = {
    background: `url('${restaurantImage}')`,
    backgroundRepeat: "no-repeat",
    width: "906px",
    height: "753px",
  };

  const shapeStyle = {
    cursor: "pointer",
  };

  return (
    <div className='d-flex justify-content-center'>
      <svg style={svgStyle}>
        <rect
          x="159.3333282470703"
          y="167.60416650772095"
          width="68"
          height="119"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_0"
          onClick={handleClick}
        />
        <rect
          x="238.3333282470703"
          y="171.60416650772095"
          width="68"
          height="119"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_1"
          onClick={handleClick}
        />
        <rect
          x="316.3333282470703"
          y="169.60416650772095"
          width="68"
          height="119"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_2"
          onClick={handleClick}
        />
        <rect
          x="506.3333282470703"
          y="231.60416650772095"
          width="145"
          height="285"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_3"
          onClick={handleClick}
        />
        <rect
          x="442.3333282470703"
          y="11.604166507720947"
          width="271"
          height="122"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_4"
          onClick={handleClick}
        />
        <rect
          x="721.3333282470703"
          y="14.604166507720947"
          width="159"
          height="121"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_5"
          onClick={handleClick}
        />
        <rect
          x="249.3333282470703"
          y="49.60416650772095"
          width="190"
          height="83"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_6"
          onClick={handleClick}
        />
        <rect
          x="30.333328247070312"
          y="246.60416650772095"
          width="118"
          height="172"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_7"
          onClick={handleClick}
        />
        <rect
          x="401.3333282470703"
          y="622.604166507721"
          width="180"
          height="113"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_8"
          onClick={handleClick}
        />
        <rect
          x="665.3333282470703"
          y="629.604166507721"
          width="185"
          height="84"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="rect_9"
          onClick={handleClick}
        />
        <circle
          cx="263.3333282470703"
          cy="492.9375"
          r="120"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="circle_0"
          onClick={handleClick}
        />
        <polygon
          points=" 23.333328247070312,726.6041870117188 27.333328247070312,595.6041870117188 90.33332824707031,595.6041870117188 95.33332824707031,642.6041870117188 112.33332824707031,665.6041870117188 159.3333282470703,666.6041870117188 159.3333282470703,723.6041870117188"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="poly_0"
          onClick={handleClick}
        />
        
        <polygon
          points=" 33.33332824707031,49.27082824707031 173.3333282470703,43.27082824707031 177.3333282470703,123.27082824707031 119.33332824707031,117.27082824707031 99.33332824707031,131.2708282470703 100.33332824707031,173.2708282470703 33.33332824707031,172.2708282470703"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="poly_1"
          onClick={handleClick}
        />
        
        <polygon
          points=" 659.3333282470703,214.60416793823242 719.3333282470703,213.60416793823242 718.3333282470703,140.60416793823242 878.3333282470703,140.60416793823242 891.3333282470703,599.2708435058594 663.3333282470703,595.2708435058594"
          opacity="0"
          className="shape"
          style={shapeStyle}
          id="poly_2"
          onClick={handleClick}
        />
        
      </svg>
    </div>
  )
}
export default RestaurantImage;

