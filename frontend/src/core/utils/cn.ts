/**
 * @utility cn
 * @summary Utility function for merging class names
 * @domain core
 * @type utility-function
 * @category styling
 */

import { clsx, ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};
