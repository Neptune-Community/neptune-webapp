import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

/**
 * Login Page
 *
 * This page is accessible at /login due to the (auth) route group.
 * The route group doesn't affect the URL structure.
 */
export default function LoginPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>
                    Enter your email and password to sign in to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <Button type="submit">Sign In</Button>
                </form>

                <p>
                    Don't have an account? <Link href="/register">Sign up</Link>
                </p>
            </CardContent>
        </Card>
    );
}
