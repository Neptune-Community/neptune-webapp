import {
    TypographyH2,
    TypographyP,
    TypographyBlockquote,
    TypographyOrderedList,
    TypographyListItem,
} from "@/components/ui/typography";

/**
 * War Cry Section Component
 *
 * A compelling call-to-action for the crypto community, breaking down the characteristics
 * of money and highlighting Neptune's quantum security advantage over other cryptocurrencies.
 */
export function WarCrySection() {
    return (
        <section className="space-y-6">
            <TypographyH2>The Quantum Threat is Real</TypographyH2>

            <TypographyP>
                While the crypto community debates scaling, adoption and full
                chain membership proofs, a silent revolution is brewing. Quantum
                computers are coming, and they will break everything that isn't
                quantum-secure.
            </TypographyP>

            <TypographyBlockquote>
                "The question isn't if quantum computers will break current
                cryptography—it's when. And when they do, every
                non-quantum-secure cryptocurrency will become worthless
                overnight."
            </TypographyBlockquote>

            <TypographyH2>Characteristics of Money</TypographyH2>
            <TypographyP>
                For any asset to function as money, it must meet seven
                fundamental characteristics. Let's examine how current
                cryptocurrencies stack up against the looming quantum threat:
            </TypographyP>

            <TypographyOrderedList>
                <TypographyListItem>
                    <strong>Durability</strong> - Must withstand the test of
                    time and technological advancement. Current cryptocurrencies
                    are already failing this test due to quantum vulnerability.
                </TypographyListItem>
                <TypographyListItem>
                    <strong>Portability</strong> - Easy to transfer and use
                    across different locations. Most cryptocurrencies have
                    achieved this.
                </TypographyListItem>
                <TypographyListItem>
                    <strong>Divisibility</strong> - Can be divided into smaller
                    units for transactions. This is well-established in most
                    cryptocurrencies.
                </TypographyListItem>
                <TypographyListItem>
                    <strong>Uniformity</strong> - Each unit is identical and
                    interchangeable. Standard in most cryptocurrency
                    implementations.
                </TypographyListItem>
                <TypographyListItem>
                    <strong>Limited Supply</strong> - Scarcity ensures value
                    retention over time. Most cryptocurrencies have implemented
                    this through various mechanisms.
                </TypographyListItem>
                <TypographyListItem>
                    <strong>Acceptability</strong> - Widely recognized and
                    accepted as a medium of exchange. This is growing but still
                    developing for most cryptocurrencies.
                </TypographyListItem>
                <TypographyListItem>
                    <strong>Fungibility</strong> - Each unit must be
                    interchangeable with any other unit of the same value. This
                    is crucial for privacy and prevents discrimination between
                    units based on their transaction history.
                </TypographyListItem>
            </TypographyOrderedList>

            <TypographyH2>The Durability Crisis</TypographyH2>
            <TypographyP>
                <strong>Durability</strong> is the most critical characteristic
                of any cryptocurrency. An asset that cannot withstand
                technological advancement is not durable—it's already obsolete.
            </TypographyP>

            <TypographyP>
                Current cryptocurrencies are already failing the durability
                test. They are vulnerable to quantum attacks and will become
                worthless when quantum computers arrive. They have no
                future-proofing against technological advancement and are built
                on cryptography that will be broken.
            </TypographyP>

            <TypographyP>
                Neptune Cash is truly durable. It features post-quantum
                cryptography from day one, is future-proof against quantum
                attacks, built to last through technological advancement, and is
                the only cryptocurrency that meets the durability requirement.
            </TypographyP>

            <TypographyH2>The Choice is Yours</TypographyH2>
            <TypographyP>
                You can continue building on foundations that will crumble, or
                you can join the revolution. Neptune Cash isn't just another
                cryptocurrency—it's the only cryptocurrency designed to survive
                the quantum age.
            </TypographyP>

            <TypographyP>
                The future of money is quantum-secure. The future is Neptune.
            </TypographyP>
        </section>
    );
}
