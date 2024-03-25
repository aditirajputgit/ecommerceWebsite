import React, { useState } from "react";
import "./App.css"; // Import your CSS file with styles

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      {/* Render the element that you want to apply hover effects */}
      <div
        className={`box ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && <span className="additional-text">Hover Text</span>}
        {/* Render the text inside the box */}
        <span className="box-text">Box</span>
        {/* Conditionally render additional text based on hover state */}
      </div>
    </div>
  );
}

export default App;


// {/* .box {
//   width: 200px;
//   height: 200px;
//   background-color: lightblue;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   cursor: pointer;
// }

// .box-text {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1; /* Ensure the text is above the additional text */
// }

// .additional-text {
//   position: absolute;
//   top: 100%;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   padding: 5px 10px;
//   border-radius: 5px;
//   display: none;
// }

// .box.hovered .additional-text {
//   display: block;
// }
// */}