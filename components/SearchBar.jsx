
import { useContext } from 'react';
import { ModeContext } from './modecontext';
export default function SearchBar({imageURL,oninput}) {
  const {mode}=useContext(ModeContext)
  return (
    <div className="search">
  <img src={imageURL} alt="" width="50px" height="20px" />
  <input style={{ backgroundColor: mode ? "rgb(25,39,52)" : "white" }}  onChange={oninput} type="text" className="input" placeholder="Search for a Country..." />
</div>

  )
}
