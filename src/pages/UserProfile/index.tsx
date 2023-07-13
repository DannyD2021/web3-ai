import * as React from 'react';
import styled from '@emotion/styled';
import { useAccount } from 'wagmi';
import { formatAddress } from '@/utils';
import { isDesktop } from 'react-device-detect';
import Email from './components/Email';
import MyScore from './components/MyScore';

const UserProfileContainer = styled.div<{ isDesktop?: boolean }>`
  padding: 16px;
  margin: ${props => (props.isDesktop ? 'auto 50px' : '0')};
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    img {
      width: 30%;
      height: 30%;
    }
  }
`


export default function UserProfile() {
  const { address, isConnected } = useAccount();
  return (
    <UserProfileContainer isDesktop={isDesktop}>
       <div className="header">
          <img src='./my-profile-header.png'/>
          <span>Wallet Address: {address ? formatAddress(address) : '--'}</span>
        </div>
        <Email/>
        <MyScore/>
    </UserProfileContainer>
  );
}
