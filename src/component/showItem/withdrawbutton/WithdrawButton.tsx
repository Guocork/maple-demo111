import { useState } from "react";
import "./WithdrawButton.css"

const WithdrawButton = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100); // 恢复原始状态
    };

    return (
        <div>
            <button className={`connect-wallet-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick}>提现</button>
        </div>
    )
}

export default WithdrawButton