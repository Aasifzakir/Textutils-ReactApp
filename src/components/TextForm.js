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
      navigator.clipboard.writeText(text);
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
      <h1 className="mb-2" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>;
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read.</p>
      <hr />
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
  }
