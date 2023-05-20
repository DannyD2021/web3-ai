import React, { FC, ReactElement } from 'react'
export type MessageType = 'info' | 'success' | 'danger' | 'warning'

export interface MessageProps {
  text: string;
  type: MessageType
}

const Message: FC<MessageProps> = (props: MessageProps) => {
  const { text, type } = props;

  return (
    <div className="message" data-testid="test-message">
      <div className="message-content">
        {/* <div className="icon">
        </div> */}
        <div className="text">
          {text}
        </div>
      </div>
    </div>
  )
}

export default Message