import * as React from 'react';
import styled from '@emotion/styled';

const Dot = styled.span`
    .dotting{
        display: inline-block; min-width: 2px; min-height: 2px;
        box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor; /* for IE9+, ..., 3个点 */
        animation: dot 4s infinite step-start both; /* for IE10+, ... */
    }
    .dotting:before { content: '...'; } /* for IE8. 若无需兼容IE8, 此行以及下一行删除*/
    .dotting::before { content: ''; } /* for IE9+ 覆盖 IE8 */
    :root .dotting { margin-right: 8px; } /* for IE9+,FF,CH,OP,SF 占据空间*/
    @keyframes dot {
        25% { box-shadow: none; }                                  /* 0个点 */
        50% { box-shadow: 2px 0 currentColor; }                    /* 1个点 */
        75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor;  /* 2个点 */ }
    }
`

export default function DotLoading({ text = 'loading' }: { text: string }) {
    return (
        <Dot>{text}<span className="dotting" /></Dot>
    );
}
