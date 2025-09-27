import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    TypographyH1,
    TypographySmall,
    TypographyMuted,
    TypographyLarge,
    TypographyLead,
} from "@/components/ui/typography";
import { BarChart3, Users, Settings, Activity } from "lucide-react";

/**
 * Dashboard Home Page
 *
 * This page is accessible at /dashboard due to the (dashboard) route group.
 */
export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <TypographyH1>Dashboard</TypographyH1>
                <TypographyLead>
                    Welcome to your dashboard. Here's an overview of your
                    account.
                </TypographyLead>
            </div>

            {/* Stats cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle>Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <TypographyLarge>2,350</TypographyLarge>
                        <TypographySmall>
                            +20.1% from last month
                        </TypographySmall>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle>Analytics</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <TypographyLarge>12,234</TypographyLarge>
                        <TypographySmall>+19% from last month</TypographySmall>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle>Activity</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <TypographyLarge>573</TypographyLarge>
                        <TypographySmall>+201 since last hour</TypographySmall>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle>Settings</CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <TypographyLarge>Active</TypographyLarge>
                        <TypographySmall>
                            All systems operational
                        </TypographySmall>
                    </CardContent>
                </Card>
            </div>

            {/* Recent activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                        Your recent activity and updates
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="flex-1 space-y-1">
                                <TypographySmall>
                                    System updated
                                </TypographySmall>
                                <TypographyMuted>2 minutes ago</TypographyMuted>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="flex-1 space-y-1">
                                <TypographySmall>
                                    New user registered
                                </TypographySmall>
                                <TypographyMuted>5 minutes ago</TypographyMuted>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="flex-1 space-y-1">
                                <TypographySmall>
                                    Maintenance scheduled
                                </TypographySmall>
                                <TypographyMuted>1 hour ago</TypographyMuted>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
