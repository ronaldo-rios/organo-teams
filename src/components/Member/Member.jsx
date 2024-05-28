import './Member.css'

const Member = ({ id, image, name, role, colorCard, remove }) => {
    return (
        <div className="member">
            <div className="remove-member" onClick={() => remove(id)}> X </div>
            <div className="header" style={{ backgroundColor: colorCard }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default Member