import { Comment } from './Comment';
import styles from './Post.module.css';

// props: {title, content, author}
export function Post() {
  return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="http://github.com/Raphael-GC.png" />
            <div className={styles.authorInfo}>
              <strong>Raphael</strong>
              <span>Desenvolvedor</span>
            </div>
          </div>

          <time 
            title="22 de Junho às 15:47" 
            dateTime="2024-06-22">
              Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa{' '}👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          
          <p>👉{' '}<a href="https://raphael-gc.github.io/doctorcare/">Raphael-GC/doctorcare</a></p>
          
          <p>
            <a href="https://github.com/Raphael-GC/doctorcare">#novoprojeto</a>{' '}
            <a href="">#nlw </a>{' '}
            <a href="">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder="Deixe um comentário" 
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
  )
}
  