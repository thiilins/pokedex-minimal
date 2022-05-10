import React from 'react'

export type ContentProps = {
  children: React.ReactNode
}
export type SwitcherProps = InputHTMLAttributes
export type HeaderProps = {
  toogleTheme: () => void
  themeName: string
}
