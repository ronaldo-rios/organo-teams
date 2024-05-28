import './ButtonSubmit.css'

const ButtonSubmit = (props) => {
    return (
        <button className="button-submit">
            {props.children}
        </button>
    )
}

export default ButtonSubmit