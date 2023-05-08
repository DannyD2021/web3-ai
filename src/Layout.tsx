import * as React from 'react';
import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import { Web3Button } from '@web3modal/react';
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
`

const HeaderContainer = styled.main`
  background: #20344E;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.05);
  padding: 5px 16px;
`


export default function Layout() {
  return (
    <AppContainer>
      <WagmiConfig client={wagmiClient}>
        <HeaderContainer className="flex justify-between">
          <img src='./logo.svg' />
          <Web3Button />
        </HeaderContainer>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </AppContainer>
  );
}
