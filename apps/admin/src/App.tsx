import { useState } from "react";
import { apps } from "./config";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>main app</div>
      <div>{count}</div>
      <button onClick={() => setCount((a) => a + 1)}>hidden</button>
      {count % 2 == 0 && (
        <micro-app
          name={apps.home.name}
          url={apps.home.origin + apps.home.basePath}
          inline
          disablesandbox
        ></micro-app>
      )}
    </div>
  );
}

export default App;
