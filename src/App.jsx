import { useState } from 'react'
import { teams as teamsMocked } from './mock/teams'
import Banner from './components/Banner/Banner'
import Form from './components/Form/Form'
import Team from './components/Team/Team'

function App() {

  const [card, setCard] = useState([])
  const [teams, setTeam] = useState(teamsMocked)

  const removeMember = (id) => {
    setCard(card.filter((member) => member.id !== id))
  }

  const addNewCard = (newCard) => {
    setCard([...card, newCard])
  }

  const addNewTeam = (newTeam) => {
    setTeam([...teams, newTeam])
  }

  return (
      <div>
        <Banner />
        <Form 
          teams={teams.map((team) => team.name)} 
          newCard={addNewCard}
          newTeam={addNewTeam}
        />
        {teams.map((team) => {
          return <Team 
            key={team.name} 
            teamName={team.name} 
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor} 
            members={card.filter((cardMember) => cardMember.team === team.name)}
            remove={removeMember}
          /> 
        })}
      </div>
  )
}

export default App
