import ConnectWallet from "../ConnectWallet/ConnectWallet"
import Icon from "../icon/Icon"
import "./NavBar.css"

const NavBar = () =>  {

    return (
      <div className="navbar">
        <Icon></Icon>
        <ConnectWallet></ConnectWallet>
      </div>
    )
  }
  
  export default NavBar