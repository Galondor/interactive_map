import InteractionPane from "interactionpane";
import React, { useState } from "react";
import map from "../map.jpg";

function ZoomableMap() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <InteractionPane
      scale={scale}
      setScale={setScale}
      offset={offset}
      setOffset={setOffset}
    >
      <img
        src={map}
        width="200px"
        style={{ position: "absolute", left: "200px" }}
      />
    </InteractionPane>
  );
}

export default ZoomableMap;