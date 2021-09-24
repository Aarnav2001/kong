import {FaTwitter, FaDiscord} from "react-icons/fa"
import {IconContext} from "react-icons"

export const Twitter = () => {
    return (
     <IconContext.Provider value={{style:{color: 'white', fontSize: '30px'}}}>
      <div class="pt-2">
        <a href="https://twitter.com/RumbleKongs"><FaTwitter /></a>
      </div>
     </IconContext.Provider>
    )
  }

export const Discord = () => {
  return (
    <IconContext.Provider value={{style:{color: 'white', fontSize: '30px'}}} >
    <div class="pt-2">
      <a href="https://discord.com/invite/PVeQeRdXYT"><FaDiscord /></a>
    </div>
    </IconContext.Provider>
  )
}


