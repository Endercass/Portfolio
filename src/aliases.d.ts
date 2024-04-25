/**
 * This is a replacement for using `{}` as a type.
 * When working with dreamland components it is
 * preferred to use `Record<string, never>` instead.
 */
type EmptyArgs = Record<string, never>;
