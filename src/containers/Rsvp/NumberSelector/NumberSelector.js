import React from "react"

export default function (props) {
    const { label, value, numberChanged } = props
    return (
        <div className="numberSelector">
            <label>{label}</label>
            <select value={value} onChange={(el) => { numberChanged(el.target.value) }}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
            </select>
        </div>
    )
}