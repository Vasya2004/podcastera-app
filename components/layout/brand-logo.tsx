import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg shadow-sm ring-1 ring-border/70",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        className="h-full w-full object-cover"
        priority
      />
    </span>
  );
}

export function BrandLogo({
  email,
  compact = false,
}: {
  email?: string;
  compact?: boolean;
}) {
  return (
    <Link href="/dashboard" className="flex min-w-0 items-center gap-3">
      <BrandMark />
      <span className="min-w-0">
        <span className="block text-base font-semibold leading-tight tracking-tight">
          Podcastera
        </span>
        {!compact && email ? (
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
            {email}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
