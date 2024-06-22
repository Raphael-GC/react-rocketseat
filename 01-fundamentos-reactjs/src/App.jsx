import { Header } from "./components/Header";
import {Post} from "./Post";

import './global.css';

export function App() {
  return (
    <div> 
      <Header />
      <Post 
        title="Seja Água!"
        content="Água mole em pedra dura tanto bate até que fura."
        author="Raphael"
      />
      <Post 
        title="Pare o bonde!"
        content="Pare o bonde que Isabel caiu!"
        author="Yusuke Br"
      />
    </div>
  )
}
