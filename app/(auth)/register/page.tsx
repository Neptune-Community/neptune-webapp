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
 * Register Page
 *
 * This page is accessible at /register due to the (auth) route group.
 */
export default function RegisterPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>
                    Enter your information to create a new account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

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
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <Button type="submit">Create Account</Button>
                </form>

                <p>
                    Already have an account? <Link href="/login">Sign in</Link>
                </p>
            </CardContent>
        </Card>
    );
}
