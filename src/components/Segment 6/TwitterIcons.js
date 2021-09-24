import {FaTwitter} from "react-icons/fa"
import {IconContext} from "react-icons"

const TwitterIcons = (props) => {
    return (
     <IconContext.Provider value={{style:{color: 'white', fontSize: '20px'}}}>
      <div class="pt-2">
        <a href={props.handle}><FaTwitter /></a>
      </div>
     </IconContext.Provider>
    )
  }

  export default TwitterIcons;
