import * as React from 'react';
import styled from '@emotion/styled';
import { useAccount } from 'wagmi';
import { formatAddress } from '@/utils';

const UserProfileContainer = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    img {
      width: 50%;
      height: 50%;
    }
  }
`


export default function UserProfile() {
  const { address, isConnected } = useAccount();
  return (
    <UserProfileContainer>
       <div className="header">
          <img src='./my-profile-header.png'/>
          <span>Wallet Address: {address ? formatAddress(address) : '--'}</span>
        </div>
    </UserProfileContainer>
  );
}
