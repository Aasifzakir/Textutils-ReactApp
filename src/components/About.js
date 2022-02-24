import React from 'react';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: '#4e4e4e'
    // });
    
    let myStyle = {
      color: props.mode === "dark"?'white':'#4e4e4e',
      backgroundColor: props.mode === "dark"?'#4e4e4e':'white',
      // border: '1px solid',
      // borderColor: props.mode === "dark"?'white':'#4e4e4e'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    
    // let toggleStyle = () => {
    //   if(myStyle.color === 'white'){
    //       setMyStyle({
    //         color: '#4e4e4e',
    //         backgroundColor: 'white',
    //         border: '1px solid white'
    //     })
    //     setBtnText("Enable Dark Mode");
    //   }else {
    //       setMyStyle({
    //         color: 'white',
    //         backgroundColor: '#4e4e4e'
    //     })
    //     setBtnText("Disalble Dark Mode");
    //   }
    // }


    

  return (
  <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b className='h5'>Analyze your text</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Textutils gives you a way to analyze your text quickly and efficiently.</strong>Be it word count, character count or something else.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b className='h5'>Free to use</b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Textutis is a free character counter tool that provides instant character count & word count statistics for a given text.</strong> Textutils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b className='h5'>Browser compatible</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as <strong>Chrome, Firefox, Internet Explorer, Safari, Opera, etc....</strong> It suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
