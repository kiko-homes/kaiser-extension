import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useMemo, useState } from 'react';
import { BaseProps } from './BaseProps';
import { ThemeProvider } from './theme';
import root from 'react-shadow';
import { createPortal } from 'react-dom';

export const Frame = ({ children }: BaseProps) => {
  const [contentRef, setContentRef] = useState<HTMLElement | null>(null);

  const cache = useMemo(() => {
    if (!contentRef) {
      return;
    }

    return createCache({
      key: 'iframe',
      container: contentRef,
    });
  }, [contentRef]);

  return (
    <root.main ref={setContentRef}>
      {contentRef &&
        cache &&
        createPortal(
          <CacheProvider value={cache}>
            <ThemeProvider>{children}</ThemeProvider>
          </CacheProvider>,
          contentRef,
        )}
    </root.main>
  );
};
