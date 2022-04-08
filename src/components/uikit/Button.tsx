import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {}

export const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      borderRadius='100px'
      height='28px'
      border='none'
      cursor='pointer'
      px='12px'
      {...props}
    />
  );
};
