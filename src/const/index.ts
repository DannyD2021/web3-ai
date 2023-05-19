const isProd = process.env.NODE_ENV === 'production'

export const ANALYTICS_HOST = isProd ? '//3analytics.ai' : '//test.3analytics.ai';

export const WALLET_ADDRESS = 'WALLET_ADDRESS';