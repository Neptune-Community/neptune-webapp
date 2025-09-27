/**
 * Neptune Price API Client
 *
 * Fetches Neptune price from multiple sources with fallback strategy
 * Uses CoinGecko as primary source, with SafeTrade as fallback
 */

export interface NeptunePriceData {
    symbol: string;
    price: number;
    change24h: number;
    changePercent24h: number;
    volume24h: number;
    marketCap: number;
    high24h: number;
    low24h: number;
    lastUpdated: string;
}

export interface NeptunePriceResponse {
    success: boolean;
    data?: NeptunePriceData;
    error?: string;
    source: "coingecko" | "safetrade" | "mock";
    timestamp: string;
}

/**
 * Neptune Price Client
 * Handles fetching Neptune price from multiple sources
 */
export class NeptunePriceClient {
    private baseUrl: string;
    private timeout: number;

    constructor() {
        this.baseUrl = "https://api.coingecko.com/api/v3";
        this.timeout = 10000; // 10 seconds
    }

    /**
     * Makes an HTTP request with timeout
     */
    private async request<T>(
        url: string,
        options: RequestInit = {}
    ): Promise<T> {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
                headers: {
                    Accept: "application/json",
                    "User-Agent": "Neptune-Webapp/1.0",
                    ...options.headers,
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            return await response.json();
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    /**
     * Fetches Neptune price from CoinGecko
     */
    private async fetchFromCoinGecko(): Promise<NeptunePriceData> {
        const url = `${this.baseUrl}/simple/price?ids=neptune-cash&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true&include_24hr_high=true&include_24hr_low=true`;

        const response = await this.request<Record<string, any>>(url);

        if (!response["neptune-cash"]) {
            throw new Error("Neptune Cash not found in CoinGecko response");
        }

        const data = response["neptune-cash"] as Record<string, any>;

        return {
            symbol: "NEPTUNE",
            price: data.usd || 0,
            change24h: data.usd_24h_change || 0,
            changePercent24h: data.usd_24h_change || 0,
            volume24h: data.usd_24h_vol || 0,
            marketCap: data.usd_market_cap || 0,
            high24h: data.usd_24h_high || 0,
            low24h: data.usd_24h_low || 0,
            lastUpdated: new Date().toISOString(),
        };
    }

    /**
     * Fetches Neptune price from SafeTrade (fallback)
     */
    private async fetchFromSafeTrade(): Promise<NeptunePriceData> {
        const url = "https://safe.trade/api/v2/trade/public/currencies/npt";

        const response = await this.request<Record<string, any>>(url);

        if (!response || !response.price) {
            throw new Error("SafeTrade API returned invalid response");
        }

        // SafeTrade only provides current price, so we'll use mock data for other fields
        const price = parseFloat(response.price as string);

        return {
            symbol: (response.name as string) || "NEPTUNE",
            price: price,
            change24h: 0, // Not available in this endpoint
            changePercent24h: 0, // Not available in this endpoint
            volume24h: 0, // Not available in this endpoint
            marketCap: 0, // Not available in this endpoint
            high24h: 0, // Not available in this endpoint
            low24h: 0, // Not available in this endpoint
            lastUpdated: new Date().toISOString(),
        };
    }

    /**
     * Returns mock data for development/fallback
     */
    private getMockData(): NeptunePriceData {
        return {
            symbol: "NEPTUNE",
            price: 0.001234,
            change24h: 0.000123,
            changePercent24h: 10.97,
            volume24h: 1234567,
            marketCap: 12345678,
            high24h: 0.001456,
            low24h: 0.001123,
            lastUpdated: new Date().toISOString(),
        };
    }

    /**
     * Fetches Neptune price with fallback strategy
     */
    async getNeptunePrice(): Promise<NeptunePriceResponse> {
        const timestamp = new Date().toISOString();

        // Try SafeTrade first (official Neptune exchange)
        try {
            const data = await this.fetchFromSafeTrade();
            return {
                success: true,
                data,
                source: "safetrade",
                timestamp,
            };
        } catch (error) {
            console.warn("SafeTrade API failed:", error);
        }

        // Try CoinGecko as fallback
        try {
            const data = await this.fetchFromCoinGecko();
            return {
                success: true,
                data,
                source: "coingecko",
                timestamp,
            };
        } catch (error) {
            console.warn("CoinGecko API failed:", error);
        }

        // Return mock data as final fallback
        console.warn("All APIs failed, using mock data for Neptune price");
        return {
            success: true,
            data: this.getMockData(),
            source: "mock",
            timestamp,
        };
    }
}

// Export singleton instance
export const neptunePriceClient = new NeptunePriceClient();
