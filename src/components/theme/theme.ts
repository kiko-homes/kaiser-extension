import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { colors } from './colors';
import { font } from './font';

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'primary' }),
  {
    ...font,
    colors,
  },
);
