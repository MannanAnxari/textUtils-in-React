import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function About(props) {


    // const [btnTextStyle, setbtnTextStyle] = useState({

    // })
    // const [btnText, setBtnText] = useState("Enable Light Mode")

    // const toggleStyle = () => {
    // if (btnStyle.color === "white") {
    // setbtnTextStyle({
    //     color: "black",
    //     backgroundColor: "white"
    // });
    // setBtnStyle({
    //     color: "black",
    //     backgroundColor: "white"
    // });
    // setBtnText("Enable Dark Mode");
    // body.backgroundColor = "#0e0e0e"

    // }
    // else {
    // setBtnStyle({
    //     color: "white",
    //     backgroundColor: "black"
    // });
    // setbtnTextStyle({
    //     color: "white",
    //     backgroundColor: "#010005d1"
    // });
    // setBtnText("Enable Light Mode");
    // }
    // }

    return (
        <div className='container' style={props.btnStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={props.btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" style={props.btnTextStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>

                            TextUtils gives you a way to analyze your text quickly and efficently. Be it word count, character count or ETC.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={props.btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" style={props.btnTextStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>
                                TextUtils is a free character counter tool that provides instant character count & word count statics for a given text. TextUtils reports the number of words and characters. This is suitable for writing text with word / character limit.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={props.btnStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" style={props.btnTextStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>
                                This word counter software works in any web browsers such as chrome, Firefor, Internet Explorer, Safari, Opera etc. It suits to count character in facebook, blog bopoks, excel document, pdf document, essays, etc...
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3"> */}

            {/* <button onClick={toggleStyle} className='btn btn-primary'>{btnText}</button> */}
            {/* </div> */}
        </div >
    )
}
