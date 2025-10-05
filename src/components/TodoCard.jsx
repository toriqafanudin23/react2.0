const TodoCard = ({ day, count }) => {
  return (
    <>
      <h2>
        {day} ({count})
      </h2>
      <ul>
        <li>Mandi</li>
        <li>Sarapan</li>
        <li>Coding</li>
      </ul>
    </>
  );
};

export default TodoCard;
