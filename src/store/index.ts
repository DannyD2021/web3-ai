import { useState } from 'react';
import { createGlobalStore } from 'hox';
import { WALLET_ADDRESS } from '@/const';
import { getCookie, setCookie } from '@/utils/cookies';

export const [useAccountStore, getAccountStore] = createGlobalStore(() => {
  const [address, setAddress] = useState(getCookie(WALLET_ADDRESS) || '');
  const setAccountAddress = (address: string) => {
    setAddress(address);
    setCookie(WALLET_ADDRESS, address);
  }

  return {
    address,
    setAccountAddress
  }
})
