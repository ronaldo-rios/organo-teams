import Member from '../Member/Member'
import './Team.css'

const Team = (props) => {
    return (
       <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{ borderColor: props.primaryColor }}>
                {props.teamName}
            </h3>
            <div className="members">
                {props.members.map((member) => {
                    return <Member 
                        key={member.name}
                        colorCard={props.primaryColor}
                        image={member.image}
                        name={member.name} 
                        role={member.role} 
                        remove={() => props.remove(member.id)}
                    />
                })}
            </div>
       </section>
    )
}

export default Team