/**
 * Neptune Price Component
 *
 * Displays the current Neptune price with 24h change
 * Used in the notice area to show real-time price data
 */

"use client";

import { AlertCircle, TrendingDown, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { TypographyP, TypographySmall } from "@/components/ui/typography";
import { useNeptunePrice } from "@/hooks/use-neptune-price";

interface NeptunePriceProps {
  className?: string;
  showChange?: boolean;
  showSymbol?: boolean;
  showSource?: boolean;
}

export default function NeptunePrice({
  className = "",
  showChange = true,
  showSymbol = true,
  showSource = false,
}: NeptunePriceProps) {
  const { data, isLoading, error } = useNeptunePrice();

  if (isLoading) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {showSymbol && <Skeleton className="h-4 w-16" />}
        <Skeleton className="h-4 w-20" />
        {showChange && <Skeleton className="h-4 w-12" />}
      </div>
    );
  }

  if (error || !data?.data) {
    return (
      <div
        className={`flex items-center space-x-2 text-muted-foreground ${className}`}
      >
        <AlertCircle className="h-4 w-4" />
        <TypographySmall>Price unavailable</TypographySmall>
      </div>
    );
  }

  const { price, changePercent24h, symbol } = data.data;
  const isPositive = changePercent24h >= 0;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showSymbol && (
        <TypographySmall className="font-medium text-foreground">
          {symbol}:
        </TypographySmall>
      )}

      <TypographyP className="text-sm font-mono text-foreground">
        ${price.toFixed(6)}
      </TypographyP>

      {showChange && (
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-600" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-600" />
          )}
          <TypographySmall
            className={`font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? "+" : ""}
            {changePercent24h.toFixed(2)}%
          </TypographySmall>
        </div>
      )}

      {showSource && (
        <TypographySmall className="text-muted-foreground">
          ({data.source})
        </TypographySmall>
      )}
    </div>
  );
}
