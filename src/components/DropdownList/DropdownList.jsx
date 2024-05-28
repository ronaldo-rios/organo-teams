import './DropdownList.css'

const DropdownList = (props) => {

    const handleInput = (event) => props.modified(event.target.value)
    
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.required} value={props.optionValue} onChange={handleInput} >
                <option value="">Selecione uma opção</option>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList