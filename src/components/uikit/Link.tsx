import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

export const Link = (props: LinkProps) => {
  return <ChakraLink {...props} color='primary.500' />;
};
