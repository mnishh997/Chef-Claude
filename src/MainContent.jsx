import { useState } from "react";
import styles from "./MainContent.module.css";

export default function MainContent() {
  const [ingredients, setIngredients] = useState([
    "Mango",
    "Curd",
    "Chia Seeds",
  ]);
  console.log(ingredients);
  const ingredientElements = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.length > 0) {
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
      <ul>{ingredientElements}</ul>
    </main>
  );
}
