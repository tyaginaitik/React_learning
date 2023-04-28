import "./App.css";
import { CakeSliceView } from "./features/cake/CakeSliceView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import { UserSliceView } from "./features/user/UserSliceView";

function App() {
  return (
    <>
      <CakeSliceView />
      <IceCreamView />
      <UserSliceView />
    </>
  );
}

export default App;
