/**
 * Lightweight class name utility — merges truthy strings.
 */
export function clsx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
