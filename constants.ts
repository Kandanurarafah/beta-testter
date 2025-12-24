import { Coin } from './types';

export const FALLBACK_COINS: Coin[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    current_price: 64230.50,
    market_cap: 1200000000000,
    market_cap_rank: 1,
    price_change_percentage_24h: 2.5,
    total_volume: 35000000000,
    high_24h: 65000,
    low_24h: 63000
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    current_price: 3450.20,
    market_cap: 400000000000,
    market_cap_rank: 2,
    price_change_percentage_24h: 1.2,
    total_volume: 15000000000,
    high_24h: 3500,
    low_24h: 3350
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    current_price: 1.00,
    market_cap: 103000000000,
    market_cap_rank: 3,
    price_change_percentage_24h: 0.01,
    total_volume: 45000000000,
    high_24h: 1.01,
    low_24h: 0.99
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    current_price: 590.10,
    market_cap: 87000000000,
    market_cap_rank: 4,
    price_change_percentage_24h: -0.5,
    total_volume: 1200000000,
    high_24h: 600,
    low_24h: 580
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    current_price: 145.50,
    market_cap: 65000000000,
    market_cap_rank: 5,
    price_change_percentage_24h: 5.4,
    total_volume: 3000000000,
    high_24h: 150,
    low_24h: 138
  },
  // Adding placeholders for others to ensure UI looks full if API fails
  { id: "usdc", symbol: "usdc", name: "USDC", image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png", current_price: 1.0, market_cap: 32000000000, market_cap_rank: 6, price_change_percentage_24h: 0, total_volume: 2000000000, high_24h: 1, low_24h: 1 },
  { id: "xrp", symbol: "xrp", name: "XRP", image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", current_price: 0.62, market_cap: 34000000000, market_cap_rank: 7, price_change_percentage_24h: 1.1, total_volume: 1000000000, high_24h: 0.63, low_24h: 0.60 },
  { id: "dogecoin", symbol: "doge", name: "Dogecoin", image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png", current_price: 0.16, market_cap: 23000000000, market_cap_rank: 8, price_change_percentage_24h: -2.3, total_volume: 800000000, high_24h: 0.17, low_24h: 0.15 },
  { id: "toncoin", symbol: "ton", name: "Toncoin", image: "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png", current_price: 7.20, market_cap: 18000000000, market_cap_rank: 9, price_change_percentage_24h: 3.2, total_volume: 500000000, high_24h: 7.5, low_24h: 6.9 },
  { id: "cardano", symbol: "ada", name: "Cardano", image: "https://assets.coingecko.com/coins/images/975/large/cardano.png", current_price: 0.45, market_cap: 16000000000, market_cap_rank: 10, price_change_percentage_24h: 0.5, total_volume: 400000000, high_24h: 0.46, low_24h: 0.44 },
];