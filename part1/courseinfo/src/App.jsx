const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  );
};
const Part = (prop) => {
  const {name, exercises} = prop;
  return (
    <p>{name} {exercises}</p>
  );
};
const Content = (prop) => {
  const parts = prop.parts;
  return (
    parts.map(part => {
      const key = part.name;
      const name = part.name;
      const exercises = part.exercises;
      return <Part key={key} name={name} exercises={exercises} />
    })
  );
};
const Total = (prop) => {
  let total = 0;
  for (let i = 0; i < prop.parts.length; i++) {
    total += prop.parts[i].exercises;
  }
  return <p>Number of exercises {total}</p>;
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
