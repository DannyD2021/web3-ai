const isProd = process.env.NODE_ENV === 'production'

// export const ANALYTICS_HOST = isProd ? '//3analytics.ai' : '//test.3analytics.ai';
export const ANALYTICS_HOST = '//test.3analytics.ai';

export const WALLET_ADDRESS = 'WALLET_ADDRESS';
export const CHAT_COUNTS = 'CHAT_COUNTS';

export const  LOCKED_QA= [{
    title: 'How to get $WAI?',
    answer: `Ask me questions directly, via TG  or DC, then rate the answer to Earn $WAI, you may only be rewarded 5 times daily.
    Follow our twitter to earn 100 $WAI: https://twitter.com/web3_analytics
    Join our TG official group to earn 100 $WAI: https://t.me/web3analyitcs_official
    Join our DC official group to earn 100 $WAI: https://discord.com/invite/ZdWPpMG9bC
    We will airdrop additional $WAI based on $WAI balance at the end of Genesis Season: Oct.1, 2023.
    `
}];