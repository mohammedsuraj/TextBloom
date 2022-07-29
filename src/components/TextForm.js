import React,{useState} from 'react' 


export default function TextForm(props) {
    
const [text, setText] = useState('Enter Text!');

    const upClick = ()=>{
        // console.log('click');
        let newText = text.toUpperCase();
        
        setText(newText);

        props.toggleAlert("Converted to UPPERCASE", "success");
    }

    const loClick = ()=>{
        // console.log('click');
        let newText = text.toLowerCase();
        
        setText(newText);
        props.toggleAlert("Converted to lowercase", "success");
    }

    const clearClick = ()=>{
        // console.log('click');
        let newText = '';
        
        setText(newText);
        props.toggleAlert("Text cleared", "success");
    }

    const sentenceCaseClick = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);  
        setText(newText);

        props.toggleAlert("Converted to Sentence case", "success");
    }   
    const copyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

        props.toggleAlert("Text copied to clipboard", "success");
    }

    const handleOnChange = (event)=>{ 
        setText(event.target.value)
    }

    return (
        <>
        <div class = "container" style = {{color : props.mode==='dark'?'red ':'red'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {upClick}>
                Convert to UPPERCASE
            </button>
            <button className="btn btn-primary mx-2" onClick = {loClick}>        
                Convert to lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick = {clearClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-2" onClick = {sentenceCaseClick}>
                Sentence Case
            </button>
            <button className="btn btn-primary mx-2" onClick = {copyClick}>
                Copy Text
            </button>
        </div>

{/* text summary  */}

        <div className="container my-5 " style = {{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary :</h2>
            <p><strong> {text.split(" ").length } words and {text.length} characters. </strong></p>
        <h3 style = {{color : props.mode==='dark'?'red':'red'}}>Preview</h3>
        {text}
        </div>
        </>
    )
}
