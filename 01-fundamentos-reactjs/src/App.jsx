import { Header } from "./components/Header";
import {Post} from "./components/Post";

import styles from './App.module.css';

import './global.css';
import {Sidebar} from "./components/Sidebar";

export function App() {
  return (
    <div> 
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            title="Seja Água!"
            content="Água mole em pedra dura tanto bate até que fura."
            author="Raphael"
          />
          <Post 
            title="Seja Água!"
            content="Água mole em pedra dura tanto bate até que fura."
            author="Raphael"
          />
        </main>
      </div>
    </div>
  )
}
