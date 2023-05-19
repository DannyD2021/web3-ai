import * as React from 'react';
import styled from '@emotion/styled';

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(118, 134, 171, 0.05);
  border: 1px solid rgba(118, 134, 171, 0.15);
  border-radius: 4px;
  padding: 16px;

  .email-text {
    color: rgba(118, 134, 171, 0.7);
    margin-right: 12px;
  }
  .verified-button {
    padding: 4px 12px;
    color: #F36B08;
    background: rgba(243, 107, 8, 0.1);
    border-radius: 4px;
  }
`


export default function Email() {
    return (
        <EmailContainer>
            <div>Email</div>
            <div>
                <span className='email-text'>example@xx.com</span>
                <span className='verified-button'>Verified</span>
            </div>
        </EmailContainer>
    );
}
