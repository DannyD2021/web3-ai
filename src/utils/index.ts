import * as linkify from "linkifyjs";
import linkifyHtml from "linkify-html";

export const scrollIntoViewById = (idName: string) => {
    setTimeout(() => {
        document.getElementById(idName)?.scrollIntoView({ behavior: 'smooth'});
    })
}
// util helper to convert new lines to <br /> tags
export const convertNewLines = (text: string) => {
    const handleBr = text?.replace(/\n/gi, '<br/>') || '';
    const handleATagMsg = linkifyHtml(handleBr, { defaultProtocol: "https", target: '_blank', className: 'address-link'});
    return handleATagMsg;
}