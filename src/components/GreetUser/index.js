import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [userName, setName] = useState('')
  const onChangeUserName = event => setName(event.target.value)
  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={onChangeUserName}
      />
      <MsgContent>
        Hello <NameText>{userName}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
