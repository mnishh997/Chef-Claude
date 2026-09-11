import { useState } from "react";
import styles from "./MainContent.module.css";

export default function MainContent() {
  const [ingredients, setIngredients] = useState([]);
  // console.log(ingredients);
  // const ingredientElements = ingredients.map((ingredient) => (
  //   <li key=>
  //     {ingredient}
  //     <button onClick={handleCross}>X</button>
  //   </li>
  // ));
  const reactIngredientList = [];
  for (let i = 0; i < ingredients.length; i++) {
    reactIngredientList.push(
      <li key={i}>
        {ingredients[i]} <button onClick={() => handleCross(i)}>X</button>
      </li>,
    );
  }
  function handleCross(index) {
    // console.log(`Button was clicked with index ${index}`);
    var updatedIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
      if (i == index) continue;
      updatedIngredients.push(ingredients[i]);
    }
    setIngredients(updatedIngredients);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.length) {
      setIngredients([...ingredients, newIngredient]);
      const inputField = document.getElementById("myInput");
      inputField.value = "";
    }
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className={styles.addIngredientForm}>
        <input
          id="myInput"
          type="text"
          placeholder="eg. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{reactIngredientList}</ul>
    </main>
  );
}
