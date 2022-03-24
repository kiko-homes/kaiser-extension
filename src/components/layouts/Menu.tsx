import { ComponentProps } from 'react';

import { Flex } from '../uikit';

interface MenuProps extends ComponentProps<typeof Flex> {}

export const Menu = ({ children, ...props }: MenuProps) => {
  return (
    <Flex
      flexDirection='row'
      background='white'
      borderRadius='100px'
      py='12px'
      px='16px'
      alignItems='center'
      sx={{
        '> *:not(:last-child)': {
          mr: '16px',
          flexShrink: 0,
        },
      }}
      boxShadow='0px 0px 1px 1px #ddd'
      {...props}
    >
      {children}
    </Flex>
  );
};
