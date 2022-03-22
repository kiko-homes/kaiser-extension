import { ThemeProvider } from '@chakra-ui/react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { theme } from 'components/theme/theme';
import { MenuRouter } from './MenuRouter/MenuRouter';

import '../../../../locales/i18n';

interface CapturerProps {
  rootEl: HTMLElement;
}

export const Capturer = ({ rootEl }: CapturerProps) => {
  const cache = createCache({
    container: rootEl,
    key: 'kaiser',
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <MenuRouter />
      </ThemeProvider>
    </CacheProvider>
  );
};
