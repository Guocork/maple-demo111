import { useState } from "react";
import "./Topupbutton.css"


const TopupButton = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100); // 恢复原始状态
    };

    return (
        <div>
            <button className={`connect-wallet-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick}>充值</button>
        </div>
    )
}

export default TopupButton