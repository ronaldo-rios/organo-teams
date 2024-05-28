import TextField from '../TextField/TextField'
import DropdownList from '../DropdownList/DropdownList'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'
import ColorField from '../ColorField/ColorField'
import './Form.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = (props) => {
    
    const id = uuidv4()
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [primaryColor, setPrimaryColor] = useState('')
    const [secondaryColor, setSecondaryColor] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.newCard({
            id: id,
            name: name,
            role: role,
            image: image,
            team: team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    const createTeam = (event) => {
        event.preventDefault()
        props.newTeam({
            id: id,
            name: nameTeam,
            primaryColor: primaryColor,
            secondaryColor: secondaryColor
        })
        setNameTeam('')
        setPrimaryColor('')
        setSecondaryColor('')
    }

    return (
        <section className="formclass">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar um novo card</h2>
                <TextField 
                    inputValue={name} 
                    modified={inputValue => setName(inputValue)}
                    required={true} 
                    label="Nome:" 
                    placeholder="Digite o nome" 
                />
                <TextField 
                    inputValue={role} 
                    modified={inputValue => setRole(inputValue)}
                    required={true} 
                    label="Cargo:" 
                    placeholder="Digite o cargo" 
                />
                <TextField 
                    inputValue={image}
                    modified={inputValue => setImage(inputValue)} 
                    required={true} 
                    label="Imagem:" 
                    placeholder="Digite a url da imagem" 
                />
                <DropdownList 
                    optionValue={team} 
                    modified={optionValue => setTeam(optionValue)}
                    required={true} 
                    label="Time:" 
                    itens={props.teams}
                />
                <ButtonSubmit>
                    <img src="/images/disk-save.png" alt="Ícone de um disquete" />
                    Criar Card
                </ButtonSubmit>
            </form>
            
            <form onSubmit={createTeam}>
                <h2>Preencha os dados para criar um novo time</h2>
                <TextField 
                    inputValue={nameTeam} 
                    modified={inputValue => setNameTeam(inputValue)}
                    required={true} 
                    label="Nome do Time:" 
                    placeholder="Digite o nome do time" 
                />
                <ColorField
                    inputValue={primaryColor}
                    modified={inputValue => setPrimaryColor(inputValue)}
                    required={true} 
                    label="Cor Primária:"
                />
                <ColorField
                    inputValue={secondaryColor}
                    modified={inputValue => setSecondaryColor(inputValue)}
                    required={true} 
                    label="Cor Secundária:" 
                />
                <ButtonSubmit>
                    <img src="/images/disk-save.png" alt="Ícone de um disquete" />
                    Criar Time
                </ButtonSubmit>
            </form>
        </section>
    )
}

export default Form