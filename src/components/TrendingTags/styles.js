import styled from '@emotion/styled'

const COLORS = ['#faad14', '#a0d911', '#eb2f96', '#722ed1', '#f5222d', '#13c2c2']

const multicolorTag = ({ index }) => {
  const NEED_WHITE = [1]
  const tagcolors = {}
  tagcolors.background = COLORS[index % 5 + 1]
  tagcolors.text = !NEED_WHITE.includes(index % 5 + 1) ? 'white' : 'black'
  return tagcolors
}

const bps = {
  desktop: '@media screen and (min-width: 55rem)'
}
export const Tag = styled.div(({ index }) => ({
  margin: '.3em',
  padding: '.3em',
  fontSize: 'calc(9px + 1vmin)',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all .5s ease-in-out',
  width: 'fit-content',
  backgroundColor: multicolorTag({ index }).background,
  color: multicolorTag({ index }).text
}))

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    ${bps.desktop}{
        justify-content: flex-end;
    }
  `

export const Title = styled.h5`
    font-weight: bold;
    margin: 0.5rem .3em;
    ${bps.desktop}{
        text-align: right;
    }
`
