import React, { ComponentProps } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';

interface ThemeProviderProps extends ComponentProps<typeof ChakraProvider> {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ChakraProvider {...props} theme={theme}>
      {children}
    </ChakraProvider>
  );
};
