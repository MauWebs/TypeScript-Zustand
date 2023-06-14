import { useEffect } from 'react';
import { useCounterStore } from './store/counterStore';
import { shallow } from 'zustand/shallow';

function App() {

  // STATE (Store)
  const { count, title, posts } = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
    posts: state.posts
  }), shallow);

  // ACTION (Store)
  const { increment, getPost, clearStore, multiply } = useCounterStore();

  // useEffect (React)
  useEffect(() => {
    getPost();
  }, []);

  return (

    <>

      <h2>Clean All</h2>

      <button onClick={() => clearStore()}>clean</button>

      <hr />

      <h2>{title}: {count}</h2>

      <button onClick={() => { increment(1) }}>
        Increment
      </button>

      <button onClick={() => { multiply(2) }}>
        Multiply x 2
      </button>

      <hr />

      {JSON.stringify((posts))}

    </>

  );

};

export default App;