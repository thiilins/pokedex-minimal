import React from 'react'
import { SwitcherProps } from '../../types/layout'

import * as S from './styles'

const Switcher = ({ ...props }: SwitcherProps) => {
  return (
    <S.Label>
      <input type="checkbox" {...props} />
      <span className="slider"></span>
    </S.Label>
  )
}

export default Switcher
