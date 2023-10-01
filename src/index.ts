import { NotFound } from './pages/NotFound';
import { User } from './pages/User';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Main } from './pages/Main';
import { UserEditData } from './pages/UserEditData';
import { UserEditPassword } from './pages/UserEditPassword';
import { ErrorPage } from './pages/ErrorPage';

const ROUTES: Record<string, string> = {
  '/not-found': NotFound(),
  '/not-working': ErrorPage(),
  '/user': User(),
  '/main': Main(),
  '/registration': Registration(),
  '/': Login(),
  '/user-edit-data': UserEditData(),
  '/user-edit-password': UserEditPassword(),
}


window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[window.location.pathname] || NotFound();
    root.innerHTML = component;
  }
});
