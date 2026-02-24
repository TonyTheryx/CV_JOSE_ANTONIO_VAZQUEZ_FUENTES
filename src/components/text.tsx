import { useState } from "react"

type TextProps = {
  initialText: string
  initialTitle: String
}


export const Text = ({ initialText, initialTitle}: TextProps) => {
  const [text] = useState(initialText)
  const [title] = useState(initialTitle)

  return (
    <><h1 className="text-5xl">
          {title}
      </h1><p className="text-2xl">
              {text}
          </p></>
  )
}