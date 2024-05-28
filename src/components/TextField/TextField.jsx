import './TextField.css'

const TextField = (props) => {

    const handleInput = (event) => {
        props.modified(event.target.value)
    }
    
    return (
        <div className="field-to-text">
            <label>
                {props.label}
            </label>
            <input 
                value={props.inputValue} 
                onChange={handleInput}
                required={props.required} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField