import React from  'react';
import PostCreate from './PostCreate';
import PostList from './PostList'

const App=  () =>{
    return <div className='container'>
        <h1 className='text-center'>Create post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>;
}

export default App;
