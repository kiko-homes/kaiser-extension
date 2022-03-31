import { useMemo, useState } from 'react';

import { ThemeProvider } from '@chakra-ui/react';
import createCache from '@emotion/cache';
import { CacheProvider, css, Global } from '@emotion/react';
import { theme } from 'components/theme/theme';
import { Box } from 'components/uikit';
import { MenuRouter } from './MenuRouter/MenuRouter';

import '../../../../locales/i18n';
import { StyleResetContainer } from './StyleResetContainer';

interface CapturerProps {
  rootEl: HTMLElement;
}

export const Capturer = (_: CapturerProps) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  const cache = useMemo(() => {
    if (!containerRef) {
      return;
    }

    return createCache({
      container: containerRef,
      key: 'kaiser',
    });
  }, [containerRef]);

  return (
    <StyleResetContainer ref={setContainerRef}>
      {cache && (
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <Global
              styles={css`
                * {
                  font-family: Roboto, -apple-system, BlinkMacSystemFont,
                    'Segoe UI', 'Helvetica Neue', Arial, sans-serif,
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                }
              `}
            />
            <Box position='fixed' bottom='16px' left='16px' zIndex='9999'>
              <MenuRouter />
            </Box>
          </ThemeProvider>
        </CacheProvider>
      )}
    </StyleResetContainer>
  );
};
