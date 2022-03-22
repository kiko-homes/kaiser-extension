import { Menu } from 'components/layouts/Menu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { CaptureMenu } from '../CaptureMenu/CaptureMenu';
import { useMenuRouter } from './useMenuRouter';

export const MenuRouter = () => {
  const { loggedIn } = useMenuRouter();

  const route = loggedIn ? <CaptureMenu /> : <AuthMenu />;

  return <Menu>{route}</Menu>;
};
