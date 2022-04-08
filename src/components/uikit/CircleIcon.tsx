import { Icon } from '@chakra-ui/react';
import { ComponentProps } from 'react';

import { IconType } from 'react-icons';

import { Flex } from './Flex';

interface CircleIconProps extends ComponentProps<typeof Flex> {
  icon: IconType;
}

export const CircleIcon = ({ icon, ref, ...props }: CircleIconProps) => {
  return (
    <Flex
      w='20px'
      h='20px'
      as='button'
      justifyContent='center'
      alignItems='center'
      borderRadius='28px'
      backgroundColor='kaiser.gray5'
      cursor='pointer'
      border='none'
      {...props}
    >
      <Icon
        color='kaiser.gray50'
        as={icon}
        strokeWidth='4px'
        h='12px'
        w='12px'
      />
    </Flex>
  );
};
