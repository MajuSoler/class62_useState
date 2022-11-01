import "./App.css";

import { useState } from "react";

// Focus of this lecture
// 1- Understand that hooks are? Functions done by someone else.
// 2- Use useState ( First hook of the day)

function App() {
  // let number = 0;

  const [number, setNumber] = useState(0);
  const [favorite, setFavorite] = useState(false);

  //Use state is a hook that has 2 itens:
  // The first = A const that access the value
  // The second = A setter Functions that changes the value of the const.

  const increaseCounter = () => {
    // number++;
    // return number;
    setNumber(number + 1);
    // console.log(`this is my number: ${number}`);
  };

  const changeFavorite = () => {
    //Option 1
    setFavorite(favorite ? false : true);
    //Option 2
    // setFavorite(!favorite);
  };

  console.log(favorite);
  return (
    <div className="App">
      This is my app
      <div>Number {number} of Likes</div>
      <button onClick={increaseCounter}>Like</button>
      <div>
        {favorite ? <span>I like it</span> : <span>I don't like it</span>}
      </div>
      <button onClick={setFavorite(!favorite)}>Clicke me!</button>
    </div>
  );
}

export default App;
