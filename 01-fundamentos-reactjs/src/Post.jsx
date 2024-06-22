// props: {title, content, author}

export function Post(props) {
    return (
      <div>
        <h4> {props.title} </h4>
        <p> {props.content} </p>
        <strong> {props.author} </strong>
      </div>
        
    )
  }
  