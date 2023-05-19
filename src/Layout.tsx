import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Outlet, useNavigate } from "react-router-dom";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal, useWeb3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig, useAccount } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import { formatAddress } from '@/utils';
import { setCookie, removeCookie } from '@/utils/cookies';
import { WALLET_ADDRESS } from '@/const';
import {
  isDesktop,
  isMobile
} from 'react-device-detect';
import { MyProfileIcon, DisconnectIcon } from '@/components/icons';
import Footer from '@/components/Footer';
import './global.css';

const chains = [arbitrum, mainnet, polygon];
const projectId: string = String(process.env.REACT_APP_WALLET_PROJECT_ID);

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)


const AppContainer = styled.main`
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 48px;
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  background: #20344E;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .user {
    position: relative;
    .connect {
      padding: 6px 12px;
      background: #3765EF;
      border-radius: 4px;
      font-size: 13px;
      font-weight: bold;
    }

    .user-menu {
      position: absolute;
      background: #243B59;
      border: 1px solid rgba(17, 17, 18, 0.1);
      border-radius: 4px;
      z-index: 10;
      right: 0;
      margin-top: 2px;

      li {
        display: flex;
        align-items: center;
        padding: 12px 8px;
        border-bottom: 1px solid rgba(118, 134, 171, 0.15);
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
        span {
          margin-left: 10px;
        }
      }
    }
  }
`


export default function Layout() {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const handleConnect = () => {
    if (!isConnected) {
      open();
    } else {
      setUserMenuVisible(!userMenuVisible);
    }
  }

  const handleDisConnect = () => {
    open();
    setUserMenuVisible(false);
  }

  useEffect(() => {
    if (address) {
      setCookie(WALLET_ADDRESS, address)
    } else {
      removeCookie(WALLET_ADDRESS);
    }
    return () => {
      removeCookie(WALLET_ADDRESS);
    }
  }, [address])

  return (
    <AppContainer>
      <WagmiConfig client={wagmiClient}>
        <HeaderContainer>
          <img src='./logo.svg' onClick={() => {
            navigate('/');
            setUserMenuVisible(false);
          }} />
          <div className="user">
            <div className="connect" onClick={handleConnect}>{address ? formatAddress(address) : 'Connect'}</div>
            {userMenuVisible && (
              <ul className="user-menu">
                <li onClick={() => {
                  navigate('/user');
                  setUserMenuVisible(false);
                }}><MyProfileIcon /><span>My profile</span></li>
                <li onClick={handleDisConnect}><DisconnectIcon /><span>Disconnect</span></li>
              </ul>
            )}
          </div>
        </HeaderContainer>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <Outlet />
      {/* <Footer/> */}
    </AppContainer>
  );
}
