import styled, { css } from 'styled-components'
import { darken } from 'polished'
export const Label = styled.label`
  ${({ theme }) => css`
    /* --moon-mask: ; */
    font-size: 17px;
    position: relative;
    display: flex;
    align-items: center;
    width: 3.5em;
    height: 2em;

    /* Hide default HTML checkbox */
    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    & .slider {
      cursor: pointer;
      width: 5.7rem;
      height: 3.4rem;
      background-color: ${darken(0.25, theme.colors.header)};
      border: 1px solid ${darken(0.2, theme.colors.header)};
      transition: 0.4s;
      border-radius: 30px;
    }

    & .slider:before {
      position: absolute;
      content: '';
      height: 1.4em;
      width: 1.4em;
      border-radius: 20px;
      left: 0.3em;
      bottom: 0.3em;
      background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
      transition: 0.4s;
    }

    & input:checked + .slider {
      background-color: #303136;
    }

    & input:checked + .slider:before {
      transform: translateX(1.5em);
      background: #303136;
      box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
    }
  `}
`
