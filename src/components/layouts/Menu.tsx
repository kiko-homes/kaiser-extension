import { ComponentProps } from 'react';

import { Box } from '../uikit';

interface MenuProps extends ComponentProps<typeof Box> {}

export const Menu = ({ children, ...props }: MenuProps) => {
  return (
    <Box
      background='white'
      borderRadius='100px'
      py='12px'
      px='16px'
      alignItems='center'
      sx={{
        '> *:not(:last-child)': {
          mr: '16px',
        },
      }}
      boxShadow='0px 0px 1px 1px #ddd'
      {...props}
    >
      {children}
    </Box>
  );
};
