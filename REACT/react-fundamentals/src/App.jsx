function sum(a, b) {
  return a + b;
}

export default function App() {
  const tech = "Javascript";
  const status = true;

  return (
    <div>
      <h1>{tech} is awsome!</h1>
      <h2>It's easy, like 1 + 1 is {sum(1, 1)}</h2>
      <h2>Current status: {status ? "on" : "off"}</h2>
    </div>
  );
}
