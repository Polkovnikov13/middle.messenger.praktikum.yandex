import { NotFound } from './pages/NotFound';
import { User } from './pages/User';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Main } from './pages/Main';

const ROUTES: Record<string, string> = {
  '/not-found': NotFound(),
  '/user': User(),
  '/main': Main(),
  '/registration': Registration(),
  '/': Login(),
}


window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[window.location.pathname] || NotFound();
    root.innerHTML = component;
  }
});
