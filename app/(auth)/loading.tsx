import { Skeleton } from "@/components/ui/skeleton";

/**
 * Authentication Loading Component
 *
 * This loading component is specific to the (auth) route group.
 * It provides a consistent loading experience for authentication pages.
 */
export default function AuthLoading() {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
            <div className="max-w-md w-full space-y-6">
                {/* Header skeleton */}
                <div className="text-center space-y-2">
                    <Skeleton className="h-8 w-48 mx-auto" />
                    <Skeleton className="h-4 w-64 mx-auto" />
                </div>

                {/* Form skeleton */}
                <div className="bg-card rounded-lg border p-6 shadow-sm space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    <Skeleton className="h-10 w-full" />

                    <div className="text-center">
                        <Skeleton className="h-4 w-48 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
