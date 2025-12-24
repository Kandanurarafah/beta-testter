import { Coin } from '../types';
import { FALLBACK_COINS } from '../constants';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchCryptoData = async (): Promise<Coin[]> => {
  try {
    const params = new URLSearchParams({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '10',
      page: '1',
      sparkline: 'false',
    });

    const response = await fetch(`${API_URL}?${params.toString()}`);

    if (!response.ok) {
      if (response.status === 429) {
        console.warn("Rate limit hit. Using fallback data.");
        return FALLBACK_COINS;
      }
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    // Return fallback data if API fails (common with public CoinGecko API)
    return FALLBACK_COINS;
  }
};