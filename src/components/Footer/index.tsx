import * as React from 'react';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import { WhiteLogoIcon, ContactEmailIcon } from '../icons';

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100px;
  background: #142132;
  .content {
    width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer-logo {
    width: 106px;
  }
  .copyright {
    font-family: 'ABeeZee';
    font-size: 14px;
    flex: 1;
    text-align: center;
  }

  .icon-email {
    margin-left: 15px;
    cursor: pointer;
  }
`


export default function Footer() {
  return (
    <FooterContainer>
      <div className='content'>
        <a href="https://3analytics.ai/" target="_blank"><WhiteLogoIcon/></a>
        <span className="copyright">© MyBitData Ltd. All rights reserved</span>
        <span>
          Contact Us
          <Tooltip title="contact@3analytics.io">
            <span className='icon-email'><ContactEmailIcon/></span>
          </Tooltip>
       </span>
      </div>
    </FooterContainer>
  );
}
