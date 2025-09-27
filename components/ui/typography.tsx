import { cn } from "@/lib/utils";

/**
 * Typography Components
 *
 * Based on shadcn/ui typography patterns from https://ui.shadcn.com/docs/components/typography
 * These components provide consistent typography styling throughout the application.
 */

// H1 - Main page titles
export function TypographyH1({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
}

// H2 - Section headings
export function TypographyH2({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}

// H3 - Subsection headings
export function TypographyH3({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

// H4 - Minor headings
export function TypographyH4({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </h4>
    );
}

// Paragraph - Body text
export function TypographyP({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...props}
        >
            {children}
        </p>
    );
}

// Blockquote - Quoted text
export function TypographyBlockquote({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
    return (
        <blockquote
            className={cn("mt-6 border-l-2 pl-6 italic", className)}
            {...props}
        >
            {children}
        </blockquote>
    );
}

// Table - Data tables
export function TypographyTable({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableElement>) {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className={cn("w-full", className)} {...props}>
                {children}
            </table>
        </div>
    );
}

// Table Header
export function TypographyTableHeader({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
        <thead className={className} {...props}>
            {children}
        </thead>
    );
}

// Table Body
export function TypographyTableBody({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
        <tbody className={className} {...props}>
            {children}
        </tbody>
    );
}

// Table Row
export function TypographyTableRow({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
    return (
        <tr
            className={cn("even:bg-muted m-0 border-t p-0", className)}
            {...props}
        >
            {children}
        </tr>
    );
}

// Table Header Cell
export function TypographyTableHead({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
    return (
        <th
            className={cn(
                "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        >
            {children}
        </th>
    );
}

// Table Data Cell
export function TypographyTableCell({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
    return (
        <td
            className={cn(
                "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        >
            {children}
        </td>
    );
}

// List - Unordered lists
export function TypographyList({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <ul
            className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
            {...props}
        >
            {children}
        </ul>
    );
}

// Ordered List
export function TypographyOrderedList({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLOListElement>) {
    return (
        <ol
            className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
            {...props}
        >
            {children}
        </ol>
    );
}

// List Item
export function TypographyListItem({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li className={cn("", className)} {...props}>
            {children}
        </li>
    );
}

// Inline Code
export function TypographyInlineCode({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <code
            className={cn(
                "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className
            )}
            {...props}
        >
            {children}
        </code>
    );
}

// Lead - Introductory text
export function TypographyLead({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-muted-foreground text-xl", className)}
            {...props}
        >
            {children}
        </p>
    );
}

// Large - Large text
export function TypographyLarge({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("text-lg font-semibold", className)} {...props}>
            {children}
        </div>
    );
}

// Small - Small text
export function TypographySmall({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <small
            className={cn("text-sm leading-none font-medium", className)}
            {...props}
        >
            {children}
        </small>
    );
}

// Muted - Muted text
export function TypographyMuted({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        >
            {children}
        </p>
    );
}

// Link - Styled links
export function TypographyLink({
    children,
    className,
    href,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            href={href}
            className={cn(
                "text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </a>
    );
}
