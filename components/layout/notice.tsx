import NeptunePrice from "@/components/ui/neptune-price";
import { TypographyP, TypographySmall } from "@/components/ui/typography";

export default function Notice() {
    return (
        <div className="bg-muted/50 border-b">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-center space-x-4">
                    <TypographyP className="text-sm text-muted-foreground">
                        Live Neptune Price:
                    </TypographyP>
                    <NeptunePrice
                        showSymbol={false}
                        showChange={false}
                        showSource={false}
                    />
                    <TypographySmall className="text-xs text-muted-foreground">
                        (via SafeTrade)
                    </TypographySmall>
                </div>
            </div>
        </div>
    );
}
