import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import Layout from './pages/Layout';
import Notfound from './pages/Notfound';
import { useDispatch } from 'react-redux';
import { allPosts } from './redux/slices/posts';
import { allComments } from './redux/slices/comments';
import Comments from './components/panel/comments/Comments';
import Posts from './components/panel/posts/Posts';
import AddPost from './components/panel/posts/AddPost';
import AllPosts from './components/panel/posts/AllPosts';
import UpdatePost from './components/panel/posts/UpdatePost';
import AddComment from './components/panel/comments/AddComment';
import AllComments from './components/panel/comments/AllComments';
import UpdateComment from './components/panel/comments/UpdateComment';
import RequirAuth from './components/auth/RequirAuth';

const Landing = React.lazy(_ => import('./pages/Landing'));
const Panel = React.lazy(_ => import('./pages/Panel'));

function App() {
  const dispatchPost = useDispatch()
  const dispatchComment = useDispatch()

  useEffect(_ => {
    dispatchPost(allPosts());
    dispatchComment(allComments());
  },[])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route 
          path='/' 
          element={ 
           <React.Suspense fallback={<>...</>}>
              <Landing />
            </React.Suspense>} 
          />

          <Route element={<RequirAuth />} >
          <Route 
          path='panel' 
          element={ 
           <React.Suspense fallback={<>...</>}>
              <Panel />
            </React.Suspense>} >
            <Route path='posts' element={<Posts />} > 
              <Route path='control' element={<AddPost />} />
              <Route path='all' element={<AllPosts />} /> 
              <Route path='update/:postId' element={<UpdatePost />} />
            </Route>
            <Route path='comments' element={<Comments />} >
              <Route path='control' element={<AddComment />} />
              <Route path='all' element={<AllComments />} />
              <Route path='update/:commentId' element={<UpdateComment />} />
            </Route>
          </Route>

          </Route>

         

          </Route>
          
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
