import React, { useState } from 'react'




export default function Textform(props) {
    const [text, setText] = useState("")
    const changeHandler = (event) => {
        // console.log("text update");
        setText(event.target.value);
    };
    const handleUpClick = () => {
        let upText = text.toUpperCase();
        // console.log(upText);
        setText(upText);
    };
    const handleLoClick = () => {
        let loText = text.toLowerCase();
        // console.log(upText);
        setText(loText);
    };
    const handleClearClick = () => {
        let  loText = "";
        // console.log(upText);
        setText(loText);
        props.showAlert("Text Cleared!","Success!");
    };
    const handleSentClick = () => {
        let  sentText  = text.charAt(0).toUpperCase() + text.slice(1);
        // console.log(upText);
        setText(sentText);
    };
    const handleCopyText = () => {
        var text =   document.getElementById("my-para")
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","Success!");
    };
    const handleExtraSpaces = () =>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));}
    return (
        <>
             <div className='container' style={{color:props.mode==="dark"?"white":"black"}} >
                <div className="mb-3 container my-5" style={{color:props.mode==="dark"?"white":"black"}}>
                    <h2>{props.heading}</h2>
                    <textarea className="form-control my-2" style={{backgroundColor:props.mode==="dark"?"#b6bdf2":"white"}} value={text} onChange={changeHandler}  id="my-para" rows="8"></textarea>
                    <button className='btn btn-primary mx-3 my-2' disabled={text.length===0} onClick={handleUpClick}>Change to Upper Case</button>
                    <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleLoClick}>Change to Lower Case</button>
                    <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleSentClick}>Change to Sentance Case</button>
                    <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleCopyText}>Copy Text</button>
                    <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>

            <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
                <h2>Text Summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <h2>Preview</h2>
                <p>{text<1?"Enter Text above to preview here":text}</p>
            </div>

        </>
    )
};