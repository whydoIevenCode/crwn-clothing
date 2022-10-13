import Home from "./routes/home/home.route";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "./utils/firebase.utils";

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Shop</h1>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
