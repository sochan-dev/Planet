import React, { VFC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../stores/slices/authStatusSlice'
import { ActionButton, InputText } from '../atoms/UIkit'
import Styles from '../../../styles/sass/signUpForm.module.scss'
import Blanks from '../../../styles/sass/blanks.module.scss'

const SignUpForm: VFC = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleOnClick = () => {
    dispatch(signUp({ userName: name, email: email, password: password }))
  }

  return (
    <div className={Styles.root}>
      l:
      <InputText
        type={'text'}
        w={80}
        value={name}
        label={'ユーザー名'}
        onChange={inputName}
      />
      <div className={Blanks.blank_56} />
      <InputText
        type={'text'}
        w={80}
        value={email}
        label={'メールアドレス'}
        onChange={inputEmail}
      />
      <div className={Blanks.blank_56} />
      <InputText
        type={'text'}
        w={80}
        value={password}
        label={'パスワード'}
        onChange={inputPassword}
      />
      <div className={Blanks.blank_80} />
      <ActionButton onClick={handleOnClick} label={'テスト'} />
    </div>
  )
}
export default SignUpForm

/**
 * <ColorTextBox
              type={'password'}
              w={80}
              value={password}
              label={'パスワード'}
              onChange={inputPassword}
            />
 * 
 * */
