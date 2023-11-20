function Todo(props) {
  const { title, details } = props;
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{details}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Todo;
