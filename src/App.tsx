import { Details, Header } from "./components";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header name="Amir Ali" age={32} />
      <Details userData="He is a developer" />
      <Header name="Asad Ali" age={52} />
      <Details userData="He is a police officer" />
      <Header name="Raza Ali" age={72} />
      <Details userData="He is a army officer" />
    </div>
  );
};

export default App;
