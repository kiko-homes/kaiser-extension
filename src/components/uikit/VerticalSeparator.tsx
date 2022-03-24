import { BoxProps } from '@chakra-ui/react';
import { Box } from './Box';

export const VerticalSeparator = (props: BoxProps) => {
  return (
    <Box height='32px' mx='16px' borderLeft='1px solid #e8e8e8' {...props} />
  );
};
