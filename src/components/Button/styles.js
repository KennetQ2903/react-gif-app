import styled from '@emotion/styled'
import { Link as LinkWouter } from 'wouter'
export const Link = styled(LinkWouter)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
  fontSize: 1rem;
  padding: .5rem .5rem;
  :hover: {
    background-color: #63ccff;
  }
`

export const Button = Link.withComponent('button')
