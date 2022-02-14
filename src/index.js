/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker'

// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/font-awesome/css/font-awesome.min.css";
// import "assets/scss/argon-design-system-react.scss?v1.1.0";

// import Index from "views/Index.js";
// import Landing from "views/examples/Landing.js";
// import Login from "views/examples/Login.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
import Welcome from "components/Welcome.js";

// // ** React Imports
// import { Suspense, lazy } from 'react'

// // ** Redux Imports
// import { Provider } from 'react-redux'
// import { store } from './redux/storeConfig/store'

// // ** Toast & ThemeColors Context
// import { ToastContainer } from 'react-toastify'
// import { ThemeContext } from './utility/context/ThemeColors'

// // ** Spinner (Splash Screen)
// import Spinner from './@core/components/spinner/Fallback-spinner'

// // ** Ripple Button
// import './@core/components/ripple-button'

// import { CookiesProvider } from "react-cookie";

// // ** PrismJS
// import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prismjs/components/prism-jsx.min'

// // ** React Perfect Scrollbar
// import 'react-perfect-scrollbar/dist/css/styles.css'

// // ** React Toastify
// import '@styles/react/libs/toastify/toastify.scss'

// // ** Core styles
// import './@core/assets/fonts/feather/iconfont.css'
// import './@core/scss/core.scss'
// import './assets/scss/style.scss'

// // ** Service Worker
// import * as serviceWorker from './serviceWorker'

// import UserProvider from './providers/UserProvider'

// import { hotjar } from 'react-hotjar'

// import GA4React from 'ga-4-react'

// // import i18n (needs to be bundled ;))
// import './i18n';

// try {
//     setTimeout((_) => {
//         const ga4react = new GA4React('G-XS3NGG7FZS')
//         ga4react.initialize()
//     }, 4000)
// } catch (err) {}

// hotjar.initialize(2563128, 6)
// // ** Lazy load app
// const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  // <CookiesProvider>
  //       <UserProvider>
  //           <Provider store={store}>
  //               <Suspense fallback={<Spinner />}>
  //                   <ThemeContext>
                    
  //                       <LazyApp />
  //                       <ToastContainer newestOnTop />
  //                   </ThemeContext>
  //               </Suspense>
  //           </Provider>
  //       </UserProvider>
  //   </CookiesProvider>,
  <BrowserRouter>
  <Route path="/" exact render={props => <Welcome {...props} />} />
       {/* <Route path="/" exact render={props => <Index {...props} />} />
      // <Route
      //   path="/landing-page"
      //   exact
      //   render={props => <Landing {...props} />}
      // />

      // <Route path="/login-page" exact render={props => <Login {...props} />} />
      // <Route
      //   path="/profile-page"
      //   exact
      //   render={props => <Profile {...props} />}
      // />
      // <Route
      //   path="/register-page"
      //   exact
      //   render={props => <Register {...props} />}
      // /> */}
       <Redirect to="/" />
   </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister()
