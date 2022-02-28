import { FC, ReactElement } from 'react'

type PropsType {
  content: ReactElement;
  children?:never;
}

export const ContentView:FC<PropsType> = ({ content }): ReactElement => {
  return (<>
    <main>{content}</main>
  </>)
}
