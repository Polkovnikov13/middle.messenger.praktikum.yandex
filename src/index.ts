import { NotFound } from './pages/NotFound';
import { User } from './pages/User';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Chat } from './pages/Chat';
import { UserEditData } from './pages/UserEditData';
import { UserEditPassword} from './pages/UserEditPassword';
import { ErrorPage } from './pages/ErrorPage';
import router from './core/Router';
import { AuthContoller } from './controllers/AuthController';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/user',
  Chat = '/messenger',
  NotFound = '/not-found',
  ErrorPage = '/error',
  UserEditData = '/user-edit-data',
  UserEditPassword = '/user-edit-password',
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, Login)
    .use(Routes.Register, Registration)
    .use(Routes.Profile, User)
    .use(Routes.Chat, Chat)
    .use(Routes.NotFound, NotFound)
    .use(Routes.ErrorPage, ErrorPage)
    .use(Routes.UserEditData, UserEditData)
    .use(Routes.UserEditPassword, UserEditPassword);

  let isProtectedRoute = true;

  const { pathname } = window.location;
  const legitPathNames = Object.values(Routes).map((p) => p.toString());

  if (!legitPathNames.includes(pathname)) {
    router.go(Routes.NotFound); 
  } else {
   
    switch (pathname) {
      case Routes.Index:
      case Routes.Register:
        isProtectedRoute = false;
        break;
    }

    try {
      await AuthContoller.fetchUser();
      router.start();

      if (!isProtectedRoute) {
        router.go(Routes.Profile);
      }
    } catch (e) {
      console.log(e, 'Here');
      router.start();

      if (isProtectedRoute) {
        router.go(Routes.Index);
      }
    }
  }
});

// import { NotFound } from './pages/NotFound';
// import { User } from './pages/User';
// import { Login } from './pages/Login';
// import { Registration } from './pages/Registration';
// import { Chat } from './pages/Chat';
// import { UserEditData } from './pages/UserEditData';
// import { UserEditPassword } from './pages/UserEditPassword';
// import { ErrorPage } from './pages/ErrorPage';
// import router from './core/Router';
// import { AuthContoller } from './controllers/AuthController';


// enum Routes {
//   Index = '/',
//   Register = '/registration',
//   Profile = '/user',
//   Chat = '/main',
//   NotFound = '/notfound',
//   ErrorPage = '/error',
//   UserEditData = '/user-edit-data',
//   UserEditPassword = '/user-edit-password',
// }

// window.addEventListener('DOMContentLoaded', async () => {
//   router
//     .use(Routes.Index, Login)
//     .use(Routes.Register, Registration)
//     .use(Routes.Profile, User)
//     .use(Routes.Chat, Chat)
//     .use(Routes.NotFound, NotFound)
//     .use(Routes.ErrorPage, ErrorPage)
//     .use(Routes.UserEditData, UserEditData)
//     .use(Routes.UserEditPassword, UserEditPassword)



//   let isProtectedRoute = true;

//   switch (window.location.pathname) {
//     case Routes.Index:
//     case Routes.Register:
//       isProtectedRoute = false;
//       break;
//   }

//   try {

//     await AuthContoller.fetchUser()

//     router.start();

//     if (!isProtectedRoute) {
//       router.go(Routes.Profile);
//     }
//   } catch (e) {
//     console.log(e, 'Here')
//     router.start();

//     if (isProtectedRoute) {
//       router.go(Routes.Index);
//     }
//   }
// });
