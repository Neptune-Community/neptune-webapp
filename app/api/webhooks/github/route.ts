/**
 * GitHub Webhook Handler
 *
 * This endpoint handles GitHub webhook events for repository activities.
 * Processes events like pushes, pull requests, and issues.
 *
 * Usage patterns:
 * - Repository push notifications
 * - Pull request status updates
 * - Issue creation/updates
 * - Deployment status updates
 *
 * Example usage:
 * - Push event: POST /api/webhooks/github
 * - PR opened: POST /api/webhooks/github
 * - Issue created: POST /api/webhooks/github
 */

import crypto from "node:crypto";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logging";

export async function POST(request: NextRequest) {
    try {
        const body = await request.text();
        const headersList = await headers();
        const signature = headersList.get("x-hub-signature-256");

        if (!signature) {
            logger.error("Missing GitHub signature");
            return NextResponse.json(
                { error: "Missing signature" },
                { status: 400 }
            );
        }

        // Verify webhook signature
        const webhookSecret = process.env.GITHUB_WEBHOOK_SECRET;
        if (!webhookSecret) {
            return new Response("Webhook secret not configured", {
                status: 500,
            });
        }

        const expectedSignature = `sha256=${crypto
            .createHmac("sha256", webhookSecret)
            .update(body)
            .digest("hex")}`;

        if (signature !== expectedSignature) {
            logger.error("Invalid GitHub signature");
            return NextResponse.json(
                { error: "Invalid signature" },
                { status: 401 }
            );
        }

        const event = JSON.parse(body);
        const eventType = headersList.get("x-github-event");

        logger.info("GitHub webhook received", {
            type: eventType,
            action: event.action,
            repository: event.repository?.full_name,
        });

        // Handle different event types
        switch (eventType) {
            case "push":
                await handlePushEvent(event);
                break;

            case "pull_request":
                await handlePullRequestEvent(event);
                break;

            case "issues":
                await handleIssueEvent(event);
                break;

            case "deployment_status":
                await handleDeploymentStatusEvent(event);
                break;

            default:
                logger.info("Unhandled GitHub event type", { type: eventType });
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        logger.error("GitHub webhook error", error as Error);
        return NextResponse.json({ error: "Webhook error" }, { status: 400 });
    }
}

/**
 * Handle push events
 */
async function handlePushEvent(event: {
    repository: { full_name: string };
    ref: string;
    commits: unknown[];
}) {
    logger.info("Repository push", {
        repository: event.repository.full_name,
        branch: event.ref,
        commits: event.commits.length,
    });
    // Trigger CI/CD pipeline
    // Update deployment status
    // Send notifications
}

/**
 * Handle pull request events
 */
async function handlePullRequestEvent(event: {
    action: string;
    pull_request: { title: string; html_url: string; number: number };
}) {
    logger.info("Pull request event", {
        action: event.action,
        number: event.pull_request.number,
        title: event.pull_request.title,
    });
    // Update PR status
    // Run tests
    // Send notifications
}

/**
 * Handle issue events
 */
async function handleIssueEvent(event: {
    action: string;
    issue: { title: string; html_url: string; number: number };
}) {
    logger.info("Issue event", {
        action: event.action,
        number: event.issue.number,
        title: event.issue.title,
    });
    // Update issue tracking
    // Send notifications
    // Update project management tools
}

/**
 * Handle deployment status events
 */
async function handleDeploymentStatusEvent(event: {
    deployment_status: { state: string };
    deployment: { environment: string };
}) {
    logger.info("Deployment status", {
        state: event.deployment_status.state,
        environment: event.deployment.environment,
    });
    // Update deployment tracking
    // Send status notifications
    // Update monitoring systems
}
