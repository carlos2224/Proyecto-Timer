import React from "react";

function ProgressBar({value}) {
    return (
    <div className="progress-bar">
      <div 
      className="progress-bar__fill"
      style={{width: `${(1 - value) * 100}%` }}></div>
    </div>
    );
} 

export default ProgressBar;