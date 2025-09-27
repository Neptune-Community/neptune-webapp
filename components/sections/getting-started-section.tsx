import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyInlineCode,
  TypographyListItem,
  TypographyOrderedList,
  TypographyP,
} from "@/components/ui/typography";

/**
 * Getting Started Section Component
 *
 * Provides instructions and guidance for users to get started with Neptune Cash.
 * Based on the official Neptune Cash Layer-1 blockchain protocol.
 */
export function GettingStartedSection() {
  return (
    <section className="space-y-6">
      <TypographyH2>Getting Started with Neptune Core</TypographyH2>

      <TypographyP>
        Neptune Core is an anonymous peer-to-peer cryptocurrency built in Rust.
        Follow the installation instructions below to get started with the
        Neptune network.
      </TypographyP>

      <TypographyBlockquote>
        "anonymous peer-to-peer cash" - Neptune Core enables private,
        decentralized transactions on a peer-to-peer network.
      </TypographyBlockquote>

      <Tabs defaultValue="cli" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="wallets">Wallets</TabsTrigger>
        </TabsList>

        <TabsContent value="cli" className="space-y-4">
          <Alert className="bg-primary/2">
            <AlertDescription>
              <strong>Windows Users:</strong> Follow the Windows installation
              instructions for Rust and Cargo. Installing cargo might require
              Visual Studio with C++ support, but the cargo installer should
              handle that.
            </AlertDescription>
          </Alert>

          <TypographyP>
            <strong>Installation:</strong> Install Rust and Cargo, then build
            Neptune Core.
          </TypographyP>
          <TypographyOrderedList>
            <TypographyListItem>
              <strong>Install Rust and Cargo:</strong> Download and install Rust
              from <TypographyInlineCode>rustup.rs</TypographyInlineCode>, which
              includes Cargo (Rust's package manager)
            </TypographyListItem>
            <TypographyListItem>
              <strong>Clone the Repository:</strong>{" "}
              <TypographyInlineCode>
                git clone https://github.com/Neptune-Crypto/neptune-core.git
              </TypographyInlineCode>
            </TypographyListItem>
            <TypographyListItem>
              <strong>Enter the Repository:</strong>{" "}
              <TypographyInlineCode>cd neptune-core</TypographyInlineCode>
            </TypographyListItem>
            <TypographyListItem>
              <strong>Checkout Release Branch:</strong>{" "}
              <TypographyInlineCode>git checkout release</TypographyInlineCode>{" "}
              for stable version (or use master for development)
            </TypographyListItem>
            <TypographyListItem>
              <strong>Build the Binaries:</strong>{" "}
              <TypographyInlineCode>
                cargo install --locked --path neptune-core
              </TypographyInlineCode>{" "}
              and{" "}
              <TypographyInlineCode>
                cargo install --locked --path neptune-cli
              </TypographyInlineCode>{" "}
              and{" "}
              <TypographyInlineCode>
                cargo install --locked --path neptune-dashboard
              </TypographyInlineCode>
            </TypographyListItem>
          </TypographyOrderedList>

          <TypographyP>
            <strong>Running & Connecting:</strong> Once installed, follow these
            steps to start using Neptune Core.
          </TypographyP>
          <TypographyOrderedList>
            <TypographyListItem>
              <strong>Generate a Wallet:</strong>{" "}
              <TypographyInlineCode>
                neptune-cli generate-wallet
              </TypographyInlineCode>
            </TypographyListItem>
            <TypographyListItem>
              <strong>Run Neptune Core Daemon:</strong>{" "}
              <TypographyInlineCode>neptune-core</TypographyInlineCode> with
              flags like{" "}
              <TypographyInlineCode>
                --peer 51.15.139.238:9798
              </TypographyInlineCode>
            </TypographyListItem>
            <TypographyListItem>
              <strong>Start Mining (Optional):</strong> Add{" "}
              <TypographyInlineCode>--compose --guess</TypographyInlineCode>{" "}
              flags to mine coins
            </TypographyListItem>
            <TypographyListItem>
              <strong>Launch Dashboard:</strong>{" "}
              <TypographyInlineCode>neptune-dashboard</TypographyInlineCode> to
              interact with your wallet and monitor the network
            </TypographyListItem>
            <TypographyListItem>
              <strong>Use CLI Commands:</strong>{" "}
              <TypographyInlineCode>neptune-cli --help</TypographyInlineCode> to
              see all available commands
            </TypographyListItem>
          </TypographyOrderedList>
          <TypographyP>
            <strong>Important:</strong> Any commit except the one tagged{" "}
            <TypographyInlineCode>release</TypographyInlineCode> is considered
            an <em>unstable development</em> commit and carries a higher risk of
            database corruption and/or loss of funds.
          </TypographyP>
        </TabsContent>

        <TabsContent value="wallets" className="space-y-4">
          <TypographyP>
            <strong>Desktop Wallet:</strong> Neptune's inaugural wallet program
            provides a user-friendly interface for managing your Neptune assets.
          </TypographyP>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <TypographyP className="font-semibold mb-2">
                VXB Neptune Wallet
              </TypographyP>
              <TypographyP className="text-sm text-muted-foreground mb-3">
                Neptune's inaugural desktop wallet application, committed to
                providing users with a secure and convenient digital asset
                management experience.
              </TypographyP>
              <div className="space-y-2">
                <TypographyP className="text-sm">
                  <strong>Features:</strong>
                </TypographyP>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Create and import wallets</li>
                  <li>• Send and receive Neptune tokens</li>
                  <li>• Transaction history tracking</li>
                  <li>• Accelerated sync via snapshots</li>
                  <li>• Multi-recipient transactions</li>
                  <li>• Network fee customization</li>
                </ul>
              </div>
              <div className="mt-4">
                <TypographyInlineCode>
                  <Link
                    href="https://github.com/VxBlocks/vxb_neptune_wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on GitHub
                  </Link>
                </TypographyInlineCode>
              </div>
            </div>

            <div className="p-4 border rounded-lg border-dashed">
              <div className="flex items-center gap-2 mb-2">
                <TypographyP className="font-semibold">
                  Neptune Community Wallet
                </TypographyP>
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  In Development
                </span>
              </div>
              <TypographyP className="text-sm text-muted-foreground mb-3">
                A community-driven wallet solution being developed by the
                Neptune community, designed to provide an open-source
                alternative with enhanced privacy features.
              </TypographyP>
              <div className="space-y-2">
                <TypographyP className="text-sm">
                  <strong>Planned Features:</strong>
                </TypographyP>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Enhanced privacy protection</li>
                  <li>• Community governance integration</li>
                  <li>• Open-source development</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Advanced transaction privacy</li>
                  <li>• Community-driven feature requests</li>
                </ul>
              </div>
              <div className="mt-4">
                <TypographyP className="text-sm text-muted-foreground">
                  <em>Coming soon - Stay tuned for updates!</em>
                </TypographyP>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
