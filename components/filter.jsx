
export default function Filter({mode,imageURL,mystyle,onclick,onchange}) {
  return (
    <div onClick={onclick}  className="dropdown">
  <button   className="dropbtn">
    Filter By region
    <img
      src={imageURL}
      alt=""
      width="30px"
      height="20px"
    />
  </button>
  <div   id="myDropdown" onClick={onchange} className="dropdown-content" style={{display:mystyle}} >
    <span href="#contact">All Countries</span>
    <span>America</span>
    <span href="#about">Africa</span>
    <span href="#contact">Europe</span>
    <span href="#contact">Asia</span>
    <span href="#contact">Oceania</span>
  </div>
</div>

  )
}
