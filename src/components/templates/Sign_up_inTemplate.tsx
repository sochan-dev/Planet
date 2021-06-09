import React, { VFC } from 'react'
import { SignUpForm } from '../organisms'
import Styles from '../../../styles/sass/signUp.module.scss'
import Blanks from '../../../styles/sass/blanks.module.scss'

const Sign_up_inTemplate: VFC = () => {
  return (
    <div className={Styles.root}>
      <div className={Blanks.blank_80} />
      <main className={Styles.main}>
        <div className={Styles.contentArea}>contentArea</div>
        <div className={Styles.formContent}>
          <SignUpForm />
        </div>
      </main>
    </div>
  )
}

export default Sign_up_inTemplate
