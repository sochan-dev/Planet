import { NextPage, InferGetStaticPropsType } from 'next'
import Router from 'next/router'
import React, { useEffect } from 'react'
import { Sign_up_inTemplate } from '../components/templates'
import { auth } from '../../firebase'

type props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 30
  }
}

const SignIn: NextPage<props> = (props) => {
  useEffect(() => {
    console.log('認証')
    auth.onAuthStateChanged((user) => {
      user && Router.push('/')
    })
  }, [])

  return (
    <>
      <Sign_up_inTemplate />
    </>
  )
}

export default SignIn
