"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyP, TypographySmall } from "@/components/ui/typography";
import { useUIStore } from "@/stores";
import { Copy, Check, Heart } from "lucide-react";

/**
 * Donation Dialog Component
 *
 * A dialog that displays the Neptune donation address with copy functionality.
 * Allows users to easily copy the donation address to their clipboard.
 */
export function DonationDialog() {
    const { copied, setCopied, donationDialogOpen, setDonationDialogOpen } =
        useUIStore();

    // Neptune donation address - replace with actual address
    const donationAddress =
        "nolgam1ff92c3dgx6m66ft2cmcged8g367x63r37pwquky94dl0qwrmgx906c97samn7yn7tdzmvm24saz50dja60dck6sp0m60lnzc3gfl27g8ssxey8jszds2p39f76r094plq69vgt426f4wjfqn56t6rl9grwfhye9jm02hrfn6d47zpet7m5xnhjjlwergacar6umwagepac7g8z5t5a9dc2e78fxrs5ffg430ew2jwzelkaevqqpejjcfhhtd2vejmmgav0mmdv9fs4w5hdvxcnvmjj2x0w7x5tfm9nenwk45j448mg4p8ftlrt3kj5k5ykz95w86ne76vyu2ydtu2t5sslmh9v7w3hkfccmuyxzdmq6rk4ly76r0zfpempjulsrvdkxm7yw3vxw69k38lazg3jmlwmrg8zn90evz36crt5vl9v0ufveg8es9xrdma7xzyxwhys4rzm3g5f9jdamkunpjsl6plk4cqmjuh8ttckexnrga54jyunjusxxa3tfapch28042x5s8qwra4c3ttcvnp4nyn2f9m2wjjvqmg53nju80h7x5m4ujx7rvmgky3a85ygvxfvj8ywqdsstmpp2qdrw9ez5lvhtkz7pca9j03rgvy4ha0378skg4yh695ry5w89a6ew66l8rwaq57pk54d9k984e3ukpas7j7tt2s3wcsf8c95mwuuq5ng53ft8mmz3jmpx358eqtu0wcu09l6dkt3awe0nrknjp9kzp30k83kveaqtt3eejrn5hmdkf5avsa4wvxdtmhz7cf6ujg8gmzz90cck9kd8uen57fhjv7504l4pu42w4e45xngneh5x9fjuvymspzndy57f737ms4vljwclq9cjsdnhenry24hlz95xlya4k6kfgphd5f5jqtg7d5z5mtks6p8v7q9sarqy9qn7pkt5lp8rnrdapht6zys3vrsttp63a2nzknchypmgy7t93883tawyg30f8pqgzcg52ld4pejvj79g0j2a39t98jpfqxkry06v02g25v5repnlpzkd7mcf39z9uwvzv5mwrgt67wm8zwmcew570rjcnwmvz7na53rcfghm8f5kdjrwc6y8nsy59s6p8y4d3qt2q6jfte2m0j7ky6weww4pwew3sy5tm8t4pj60339ncnmpnqu9l6fq4lh5zhjxultc6qvvzm8u524daycl6dywree0l7p3wnjq7vt9ynhhjtpgvt0flnnyg3wffcyzgpxezxd54n22xtkjjfqzqleq9xuef388wxaqf5d3rzuzekqs76q3qrk8pfy3lc9p3u7fmzfudakm2pg7yeqhytpqwd9kl3lc9az3szqe2ly3h6gvs4hr95cnk4w6yrsl3jkwrvc8xjry2g3g9hvkq78sczsl4h6y43c2fhl4mmej0x4ru8rcqvwthqapw2xlsvttpf9sjtphl4z67kmu85m45jnrelttnfseqfdfsv7gm6x88rszzz4z2vmw0q7cguaxp5tk8wn8emg3y44lucla4e4ah5zl3v069em2cmrmv6h0p6n47rdrr7t2anmylhvz0edd2fpkda0etfccgergmacreg3mn7m5q2pahtxwc0rsdumkfxdcgc07lulmskkq8ugjncrwwjyz279mnlfp402xu4u74dzpxqr4hfvahpv50ffe0g0x80uz9vqdep85uqp40qn6q0n95pjrsace9xwekhglm8h4zshefp0ax7ytq7e2qv66e9r02tsqqawhndylj5cgf7h2c3vy9shevkuvmc3fhews9nsv27he89z0s0rqk3qw58lefu7nx5a2mz2gz5l6x77z5dm0ar7j4qpfpcjqjv6wxru5mklake057dk3n32svcfdvm9zqqc0rguw79n4v4r6r3rndzrqmxyz7kn6dwy3vu2maj70vkg94q9k0nu9gddlh3r2zle5h33qfy5fh29ptplq0zta30hrftfzxth466xtvc5asz3a507ma3q4r90wx87wul0n4kpw27ad32cyf6e20aukchzezgsz20ll6kvm49dld3su8gka8wq4qc8ly0pytk9drtvtrp9l0vwz9mne5qalg4djwcex3gkw6hv9he4ktglvjy629w7z9jx05afdduqefufxa6ne9jqcfly4cp76ffj4cr62pn3v9rclsx84ufyzlvkgsyafna3w0sfgj8mj80wrf2sr8tl44jq9cfqkgc8e8e3k66x7q2nhvx6j8qt5lemu4ddy0h9ec4z0v5fmr3jt2r6pux7a995v0fhqhj0p3dtrs322f4zn3s20znl2x5krkh030hjt88qxp4yk088kcrfkthzvy30dnud5a8sl0hapznwa503dcvdueuqujfj07pgk89gk6lz6xlly9ytflu43asqqupv0ek4tvrdwlf2lv4nt2kuv7v0f8207lferxn3yzpsk2c97vn2mx7hkpgww94rcfdprjyjda0qskw4grqqu28xzsgjrmn4xjwnvfhyj9709upcr74k84rl5qe5dx5uwztyjrmwvkm62z3awg0hkcm0qjrlc843dqj0mxhwzlya8wrm75w5fa699n0n6aahhyvftukam0j7gygpxlytj0r5c62krnyr2d44qkrq4vnuqkm54xmeuvcv99j89aznfhuj84jtv4wnqwnxnke3r390982hdnx4rykv8htl8phazf76hgxjp9uclf78rwutw983x5kvx6zq7mdz6s5u4kq9y4vpww4u678sa7eqfypa47wt769pevw9haunzrd9p249dykp49rv5uxqafgqj483ukc5mhqvfg8v4mve6l0z8y55ahf72gnc9fcx90k59c0z9pdtnsthrpx5an7c9qd44jyhffzy0aytlutz6scwntj7t4t7xjgwvas7g6vkkzqwzefxrv37vk5tm24qsk9wxnvdyc05dagw7va06270t5aamf7xn94qzjpm78wj5f0g409h5clgfzy2sf9t2yyjwkl2a9gykfwys6kjzeny686p3ascrtheeyg9m6akv8tmrrc9arr9ls6qa59hta8nn6lg3nmennsvsnjq30egp570lqf2tcswfw46ztff8y76zszm379map7d8gwxpusce4jt2hea48weqr6pft3cnjn80uvre7d7uj5yy299h7q47xaqfc73d0269he98c7w5kl9yxmsanc54hl9k5srnkmh89y8uc76kq7664t4je9nq546wzk5yn35z3p6c7gwcply65cmt8aqderhnr40ekpzq2tz3ss9feqv2fpncd3f8gmq86ejnz03mkk6aspp5mxs09p420yp0mfmcydxcwjn7j8m3dslq7m429fcpx82fmjtf4fq4pe8nzc3e5dxr88hdv03ce9c7gyke5hafllquzstdeqmnfr9xmppwd88fcgwk9zp5mcqy5ajm9z0nhz63e3l2";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(donationAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy address:", err);
        }
    };

    return (
        <Dialog open={donationDialogOpen} onOpenChange={setDonationDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    Donate
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-red-500" />
                        Support Neptune Community
                    </DialogTitle>
                    <DialogDescription>
                        Help support the development of Neptune ecosystem
                        projects and community initiatives.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="donation-address">
                            Neptune Donation Address
                        </Label>
                        <div className="flex gap-2">
                            <Input
                                id="donation-address"
                                value={donationAddress}
                                readOnly
                                className="font-mono text-sm"
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleCopy}
                                className="shrink-0"
                            >
                                {copied ? (
                                    <Check className="h-4 w-4 text-green-600" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-lg bg-primary/2 p-4 space-y-2">
                        <TypographySmall className="font-semibold">
                            How to Donate:
                        </TypographySmall>
                        <TypographyP className="text-sm text-muted-foreground">
                            1. Copy the donation address above
                        </TypographyP>
                        <TypographyP className="text-sm text-muted-foreground">
                            2. Open your Neptune wallet
                        </TypographyP>
                        <TypographyP className="text-sm text-muted-foreground">
                            3. Send NPT to the copied address
                        </TypographyP>
                    </div>

                    <div className="text-center">
                        <TypographySmall className="text-muted-foreground">
                            Thank you for supporting the Neptune community! 💙
                        </TypographySmall>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
