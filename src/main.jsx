import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobiles from './components/mobiles/Mobiles.jsx';
import Footer from './components/footer/Footer.jsx';
import Laptops from './components/lapptops/Laptops.jsx';
import User1 from './components/user1/User1.jsx';
import User2 from './components/user2/User2.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetails from './components/posts/PostDetails.jsx';
import Comments from './components/comments/Comments.jsx';
import DetailsComment from './components/comments/DetailsComment.jsx';

const dataPromise = fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index:true, Component: Home},
      {path:'mobiles', Component: Mobiles},
      {path:'laptops', Component: Laptops},
      {
        path:'user1', 
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User1
      },
      {
        path:'user2', 
        element: <Suspense fallback={<h2>Wait kor data aiyer</h2>}>
          <User2 dataPromise={dataPromise}></User2>
        </Suspense>
      },
      {
        path:'posts', 
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path:'posts/:postId',
        loader:({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(res=>res.json());
        },
        Component:PostDetails
      },
      {
        path: '/comments',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/comments'),
        Component: Comments
      },
      {
        path: '/comments/:commentId',
        loader: ({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`).then(res => res.json());
        },
        Component: DetailsComment
      }
    ]
  },
  {
    path: "home",
    element: <div>this is home</div>,
  },
  {
    path: "/footer",
    element: <div>hello footer</div>,
  },
  {
    path: 'app',
    Component: App
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
