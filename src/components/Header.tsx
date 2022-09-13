import { FunctionComponent } from "react"
import CatIcon from "~icons/mdi/cat"
import { tokens } from "../ciTokens"

const Header: FunctionComponent<EmptyInterface> = () => {
  return (
    <header className="sticky top-0 z-10 bg-materialBlue shadow-material h-14 p-3 flex justify-between items-center flex-row">
      <span className="text-sm">{tokens.commitHash}</span>
      <CatIcon className="hover:text-black text-white h-full w-auto" />
    </header>
  )
}

export default Header
