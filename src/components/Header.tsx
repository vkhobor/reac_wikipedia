import { FunctionComponent } from "react"
import CatIcon from "~icons/mdi/cat"
import { tokens } from "../ciTokens"

const Header: FunctionComponent<EmptyInterface> = () => {
  return (
    <header className="sticky top-0 z-10 bg-materialBlue shadow-material h-14 p-3 flex justify-between items-center flex-row">
      <div className="text-sm">
        {tokens.commitHash !== "#{COMMIT_HASH}#" && (
          <>
            <div className="flex flex-col">
              <span className="opacity-70 font-bold">commit</span>
              <span>{tokens.commitHash}</span>
            </div>
          </>
        )}
      </div>

      <CatIcon className="hover:text-black text-white h-full w-auto" />
    </header>
  )
}

export default Header
