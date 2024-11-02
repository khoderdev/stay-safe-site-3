import { ScrollRotate } from './index';
import { useState } from "react";

export function FromTo() {
  let [from] = useState(90);
  let [to] = useState(270);

  return (
    <div className="h-screen overflow-y-scroll">
      {/* Add the class instead of target here */}
      <div className="from-to-demo">
        <ScrollRotate
          from={from}
          to={to}
          target={window} 
          animationDuration={0.3}
        >
          <img src='/public/images/Group66.svg' alt="Rotating Image" />
        </ScrollRotate>
      </div>
    </div>
  );
}
