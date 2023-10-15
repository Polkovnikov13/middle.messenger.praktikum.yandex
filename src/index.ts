import { NotFound } from './pages/NotFound';
import { User } from './pages/User';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Chat } from './pages/Chat';
import { UserEditData } from './pages/UserEditData';
import { UserEditPassword } from './pages/UserEditPassword';
import { ErrorPage } from './pages/ErrorPage';

const ROUTES: Record<string, any> = {
  '/not-found': NotFound,
  '/not-working': ErrorPage,
  '/user': User,
  '/main': Chat,
  '/registration': Registration,
  '/': Login,
  '/user-edit-data': UserEditData,
  '/user-edit-password': UserEditPassword
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  if (root) {
    const ComponentConstructor = ROUTES[window.location.pathname] || NotFound;
    if (ComponentConstructor) {
      const component = new ComponentConstructor();
      root.appendChild(component.element);
      component.dispatchComponentDidMount();
    }
  }
});
