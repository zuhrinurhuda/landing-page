import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Merges multiple class names into one, resolving Tailwind conflicts.
 * @param classes - A list of class names or conditions
 * @returns A single string with resolved class names
 */
export const mergeClassNames = (
  ...classes: (string | undefined | false | null)[]
) => {
  return twMerge(clsx(...classes));
};
