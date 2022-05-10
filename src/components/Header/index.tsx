import React from 'react'
import Switcher from '../Switcher'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'
import { HeaderProps } from '../../types/layout'

const Header = ({ toogleTheme, themeName }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <div className="logo">
        <img src={logo} />
        <span>Pokedex</span>
      </div>
      <Switcher onChange={() => toogleTheme()} checked={themeName === 'dark'} />
    </S.HeaderContainer>
  )
}

export default Header
