import { cn } from '@/lib/utils';

export function TiktokIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5', className)}
      {...props}
    >
      <path d="M12.52 3.65A5.62 5.62 0 0 1 18.06 9.3v5.43a3.8 3.8 0 0 1-3.8 3.8h0a3.8 3.8 0 0 1-3.8-3.8V1.5A2.12 2.12 0 0 0 8.35 3.62" />
      <path d="M12.52 3.65a5.62 5.62 0 0 0-5.4-5.4" />
      <path d="M18.06 9.3a5.62 5.62 0 0 1-5.54 5.54" />
    </svg>
  );
}
