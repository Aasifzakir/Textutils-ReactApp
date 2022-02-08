import React, {useState} from 'react';


export default function TextForm(props) {
  // for handling uppercase
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.", "success");
     }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    //text= "enter something here"; //wrong way to change the state
    // setText("enter something here"); //correct way to change the state
    // setText("updated text")

    //for handling lowercase
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase.", "success");
    }
    //for handling clear
    const handleClearClick = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Text has been cleared.", "success");
    }

    // for handling copy to Clipboard
    const handleCopyClick = () => {
      let text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard.", "success");
    }

    // for handling extra spaces
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces has been removed.", "success");
    }
  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    </div>;
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read.</p>
      <hr />
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textBox above to preview it here.'}</p>
    </div>
    </>
  )
  }
