import React, { useState } from 'react'
import PropTypes from 'prop-types';
// import { PropTypes } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handelChangeEvent = (e) => {
        setText(e.target.value);
        console.log(text);
    }
    const handelUpEvent = () => {
        let val = text.toUpperCase();
        props.showAlert("Uppercase Processed", "success")
        setText(val);
    }
    const handelLwEvent = () => {
        let val = text.toLowerCase();
        props.showAlert("Lowercase Processed", "success")
        setText(val);
    }
    const handelRSEvent = () => {
        // console.log("Remove Spaces Clicked");
        props.showAlert("All Spaces Has Been Removed", "success")
        let val = text;
        const valus = val.split(' ').join('');
        setText(valus)
    }
    const handelCopyEvent = () => {
        var copyText = document.querySelector("textarea");
        props.showAlert("Text Has Been Copied", "success")
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value)
    }
    const handelCLEvent = () => {
        let val = document.getElementById("myBox").innerHTML = "";
        props.showAlert("Box Has Been Cleaned Processed", "danger")
        // let val = text.value("");
        setText(val);
    }
    return (
        <>
            <div className='container' style={{
                color: props.mode === 'light' ? 'black' : 'white'
            }}>
                <div className="mb-3">
                    <h2 className='my-3' > {props.heading} </h2>
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} value={text} placeholder="Enter Text Here..." onChange={handelChangeEvent} id="myBox" rows="5"></textarea>
                </div>
                <div className="btns">
                    <button disabled={text.length == 0} onClick={handelUpEvent} className="my-1 mx-2 btn btn-primary">Convert To UpperCase</button>
                    <button disabled={text.length === 0} onClick={handelLwEvent} className="my-1 mx-2 btn btn-secondary">Convert To LowerCase</button>
                    <button disabled={text.length === 0} onClick={handelRSEvent} className="my-1 mx-2 btn btn-warning">Remove All Spaces</button>
                    <button disabled={text.length === 0} onClick={handelCopyEvent} className="my-1 mx-2 btn btn-success">Copy All Text</button>
                    <button disabled={text.length === 0} onClick={handelCLEvent} className="my-1 mx-2 btn btn-danger">Clear Box</button>
                </div>
            </div>
            <div className="container mt-4" style={{
                color: props.mode === 'light' ? 'black' : 'white'
            }}>
                <h1>Your Summary...</h1>
                <p>{text.split(/\s/).filter((e) => { return e.length != 0 }).length} Words, {text.split("").length} Characters, {Math.floor((text.split(" ").length) / 2.0833333)}S Takes To Read...</p>
                <h1 className='mt-1'>Overview Of Your Text...</h1>
                <p>{text.length > 0?text:"Nothing To Preview..."}</p>
            </div>
        </>
    )
}
