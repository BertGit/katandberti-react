import React from "react"
import "./RadioButton.css"

export default function (props) {
    const { selected, label, clicked } = props
    return (
        <div className="radioButton" onClick={clicked}>
            <div className="radioButtonOuter">
                {
                    selected ?
                        <div className="radioButtonInner">

                        </div>
                        : null
                }
            </div>
            <label onClick={clicked}>{label}</label>
        </div>
    )
}