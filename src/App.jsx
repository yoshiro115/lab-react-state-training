import "./App.css";
import { ClickablePicture } from "./components/clickablePicture";
import { Counter } from "./components/Counter";
import { Dice } from "./components/Dice";
import { LikeButton } from "./components/LikeButton";


function App() {
 
  return (
    <div className=" app">
      <h1> LAB | React Training</h1> 
      <LikeButton />
      <Counter />
      <ClickablePicture/>
      <Dice/>
    </div>

  ); 
}

export default App;
