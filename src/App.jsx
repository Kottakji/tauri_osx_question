import "./App.css";
const { Command, open } = await import("@tauri-apps/api/shell");

function App() {
  const usingOpen = async () => {
    await open ("bin/osx/example.app");
  }
  const usingCommand = async () => {
    await new Command("example-app").spawn();
  }

  return (
    <div className="container">
      <button onClick={usingOpen}>Open using `open`</button>
      <button onClick={usingCommand}>Open using `command`</button>
    </div>
  );
}

export default App;
