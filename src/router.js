// import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
// import App from "./App";
// import { indexLoader, showLoader } from "./loaders";
// import Index from "./pages/Index";
// import Show from "./pages/Show";
// import { createAction, updateAction, deleteAction } from "./actions";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import CreatePlaylistForm from "./components/CreatePlaylistForm";


// OLD CODE
// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path="/" element={<App/>}>
//       <Route path="" element={<WelcomePage/>} />
//       <Route path="/rhythmix" element={<NavbarMenu />} />
//       <Route path="/login" element={<LoginPage/>} />
//       <Route path="/signup" element={<SignupPage/>} />
//       <Route path="/playlist/create" element={<CreatePlaylistForm />} />
//       <Route path="/profile" element={<UserProfilePage/>} />
//       <Route path="create" action={createAction}/>
//       <Route path="update/:id" action={updateAction}/>
//       <Route path="delete/:id" action={deleteAction}/>
//   </Route>
//   )

// NEW CODE 
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<App />}>
  //         <Route path="" element={<Index />} loader={indexLoader} />
  //         <Route path="/login" element={LoginPage} />
  //         <Route path="/signup" element={SignupPage} />
  //         <Route path="post/:id" element={<Show />} loader={showLoader} />
  //         <Route path="create" action={createAction}/>
  //         <Route path="update/:id" action={updateAction}/>
  //         <Route path="delete/:id" action={deleteAction}/>
  //       </Route>
  //     </>
  //   )
  // );
  
  // export default router;


// CODE FROM CLASS 
  import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
  import App from "./App";
  import { indexLoader, showLoader } from "./loaders";
  import Index from "./pages/Index";
  import Show from "./pages/Show";
  import { createAction, updateAction, deleteAction } from "./actions";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="" element={<Index />} loader={indexLoader} />
          <Route path="post/:id" element={<Show />} loader={showLoader} />
          <Route path="create" action={createAction} />
          <Route path="update/:id" action={updateAction} />
          <Route path="delete/:id" action={deleteAction} />
        </Route>
      </>
    )
  );
  
  export default router;
 

