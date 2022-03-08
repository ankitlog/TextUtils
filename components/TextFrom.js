import React,{useState} from 'react'
 

export default function TextFrom(props){
    const handleUpClick = ()=>{
       // console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
}
const handleLoClick = ()=>{
    //console.log("Upper case was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
}
const handleClearClick = ()=>{
    //console.log("Upper case was clicked" + text)
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!","success");
}

    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);

}
const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    
}
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space!","success");
}
    const [text, setText] = useState('')

    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#2f4668'}}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control-file" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color :props.mode==='dark'?'white':'#2f4668'}} 
            id="myBox" rows="8" cols="150"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#2f4668'}} >
        <h2>Your text sumary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
    )
}