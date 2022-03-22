import { APP_HOST } from '../constants';
import { ComponentProps } from 'react';
import { Link } from './uikit';

interface LinkToAppProps extends ComponentProps<typeof Link> {}

export const LinkToApp = ({ href, ...props }: LinkToAppProps) => {
  return <Link {...props} href={APP_HOST.concat(href || '')} />;
};
