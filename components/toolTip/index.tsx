import Tippy from '@tippyjs/react'
import { JSXElementConstructor, ReactElement } from 'react'
import 'tippy.js/dist/tippy.css' // optional

const ToolTip = ({
  text,
  children,
}: {
  text: string
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}) => {
  return (
    <Tippy
      content={text}
      interactive={true}
      interactiveBorder={20}
      delay={100}
      placement="bottom-start"
    >
      {children}
    </Tippy>
  )
}

export default ToolTip
