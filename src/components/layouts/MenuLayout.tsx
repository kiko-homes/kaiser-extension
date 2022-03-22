import { Box } from 'components/uikit';
import { ReactNode } from 'react';
import { Menu } from './Menu';

interface MenuLayoutProps {
  menuContents: ReactNode;
}

export const MenuLayout = ({ menuContents }: MenuLayoutProps) => {
  return (
    <Box position='fixed' zIndex={9999}>
      <Menu>{menuContents}</Menu>
    </Box>
  );
};
