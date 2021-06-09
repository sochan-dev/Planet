import React, { VFC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { getLoadingStatus } from '../../stores/slices/loadingStatusSlice'
import CircularProgress from '@material-ui/core/CircularProgress'
import Styles from '../../../styles/sass/fadeLayer.module.scss'

interface props {
  children: ReactNode
}

const FadeLayer: VFC<props> = ({ children }) => {
  const { isLoading, message } = useSelector(getLoadingStatus)

  return (
    <div className={!isLoading ? Styles.root : Styles.root_loading}>
      {isLoading && (
        <CircularProgress className={Styles.progress} color="secondary" />
      )}
      {children}
    </div>
  )
}

export default FadeLayer
