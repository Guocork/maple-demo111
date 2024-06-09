import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWallet = () => {

    return (
        <div>
            <ConnectButton accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
            }} />
        </div>
    )
}

export default ConnectWallet