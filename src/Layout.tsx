import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Outlet, useNavigate } from "react-router-dom";

import { ethers } from 'ethers';
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect } from 'wagmi';

import { formatAddress } from '@/utils';
import { isDesktop } from 'react-device-detect';
import { MyProfileIcon, DisconnectIcon } from '@/components/icons';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import Footer from '@/components/Footer';
import { getAccountStore } from '@/store';
import './global.css';


const AppContainer = styled.main`
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 48px;
`

const HeaderContainer = styled.div<{ isDesktop?: boolean }>`
  width: 100%;
  background: #242433;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.05);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .header-content {
    width: ${props => (props.isDesktop ? '800px' : '100%')};
    padding: 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .user {
    position: relative;
    .connect {
      padding: 6px 12px;
      background: #3765EF;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

    .user-menu {
      position: absolute;
      background: #243B59;
      border: 1px solid rgba(17, 17, 18, 0.1);
      border-radius: 4px;
      z-index: 20;
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

const WallectConnectContainer = styled.div`
  margin-top: 20px;
  .wallet-icon {
    width: 250px;
    cursor: pointer;
    &.metamask {
      padding-bottom: 15px;
      margin-left: 8px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(118, 134, 171, 0.15);
    }
    img {
      width: 100%;
    }
  }
`


export default function Layout() {
  const navigate = useNavigate();
  const { address, setAccountAddress } = getAccountStore() || {};
  const { address: walletConnectAddress, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const handleConnect = () => {
    if (!address) {
      setConnectModalOpen(true);
    } else {
      setUserMenuVisible(true);
    }
  }

  const handleDisConnect = () => {
    setAccountAddress?.('');
    disconnect();
    setUserMenuVisible(false);
  }

  useEffect(() => {
    if (walletConnectAddress) {
      setAccountAddress?.(walletConnectAddress);
    }
    // return () => {
    //   removeCookie(WALLET_ADDRESS);
    // }
  }, [walletConnectAddress]);

  const handleClose = () => {
    setConnectModalOpen(false);
  };

  const handleConnectMetamask = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);
      const activeAccount = accounts[0];
      setAccountAddress?.(activeAccount);
      handleClose();
    }
  }

  const handleConnectWalletConnect = () => {
      open();
      handleClose();
  }

  return (
    <AppContainer>
      <HeaderContainer isDesktop={isDesktop}>
        <div className='header-content'>
          <a href='https://3gpt.ai' target='_blank'>
            <img src='./logo.svg' />
          </a>
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
        </div>
      </HeaderContainer>
      <Outlet />
      <Dialog
        open={connectModalOpen}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Connect Wallet"}
        </DialogTitle>
        <DialogContent>
          <WallectConnectContainer>
            <div className='wallet-icon metamask' onClick={handleConnectMetamask}>
              <img src='wallet/metamask.png' />
            </div>
            <div className='wallet-icon' onClick={handleConnectWalletConnect}>
              <img src='wallet/walletconnect.png' />
            </div>
          </WallectConnectContainer>
        </DialogContent>
      </Dialog>
    </AppContainer>
  );
}
