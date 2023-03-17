import React from "react";

export default function ClassFirst() {
  return (
    <div>
      <div className="container">
        <div
          className="bg-warning p-4"
          onMouseUp={() => {
            console.log("Focused on input");
          }}
          placeholder="onFocus is triggered when you click this input."
        >
          BOX
        </div>
      </div>
    </div>
  );
}
