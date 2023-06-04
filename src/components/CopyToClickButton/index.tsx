import * as React from 'react';
import styled from '@emotion/styled';
import { Snackbar } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react'


const CopyContainer = styled.span`
    cursor: pointer;
    color: #3d68e3;
`

const CopyToClipboardButton = ({ text = ''}: { text?: string }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(text)
    }
    
    return (
        <>
          <CopyContainer onClick={handleClick}><ContentCopyIcon /></CopyContainer>
          <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={1500}
            message="Copied to clipboard"
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          />
        </>
    )
}

export default CopyToClipboardButton
