import { forwardRef, PropsWithChildren } from 'react';

export const StyleResetContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{}>
>(({ children }, ref) => (
  <>
    <style>
      {`
            #kaiser-container {
              all: initial;
              font-size: 14px;
            };
          `}
    </style>
    <div id='kaiser-container' ref={ref}>
      {children}
    </div>
  </>
));
