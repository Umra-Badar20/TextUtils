import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("up clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () =>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))

  }

   const handleOnChange = (event) => {
    // console.log("onChange")
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={handleClearClick}>
          Clear All
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={handleExtraSpaces}>
         Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <ul>
        <li>{text.split(" ").length-1} words and {text.length} characters</li>
        <li>Takes {0.008*text.split(" ").length} minutes to read</li>
        </ul>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>
  );
}
