const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Header = () => {
  return <h1>Half Stack application development</h1>;
};
const Part = (prop) => {
  return (
    <p>
      {prop.name} {prop.exerciseCount}
    </p>
  );
};
const Content = () => {
  return (
    <div>
      <Part name={part1} exerciseCount={exercises1} />
      <Part name={part2} exerciseCount={exercises2} />
      <Part name={part3} exerciseCount={exercises3} />
    </div>
  );
};
const Total = () => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
