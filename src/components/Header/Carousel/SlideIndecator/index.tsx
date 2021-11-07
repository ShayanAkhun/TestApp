import React from "react";
import "./slideIndicatorStyles.css";

function SlideIndicator({ count, active, onSelect, color } : any) {
  let indicators = new Array(count).fill("");

  return (
    <React.Fragment>
      <div
        className="indicator-container"
        style={{
            //@ts-ignore
          "--color": color
        }}
      >
        {indicators.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`indicator-box ${active === idx ? "active" : ""}`}
              onClick={() => {
                onSelect(idx);
              }}
            >
              <div className="indicator" />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default SlideIndicator;
