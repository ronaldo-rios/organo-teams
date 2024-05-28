import './ColorField.css'   

const ColorField = (props) => {

    const handleInput = (event) => {
        props.modified(event.target.value)
    }
    
    return (
        <div className="color-piker">
            <label>
                {props.label}
            </label>
            <input 
                type="color"
                value={props.inputValue} 
                onChange={handleInput}
                required={props.required} 
            />
        </div>
    )
}

export default ColorField