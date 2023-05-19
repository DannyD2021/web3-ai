import * as React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  width: 100%;
  background: #142132;
  .bg {
    background: url('./footer-bg.png');
  }
`


export default function Footer() {
  return (
    <FooterContainer>
       <div className='bg'>

       </div>
    </FooterContainer>
  );
}
