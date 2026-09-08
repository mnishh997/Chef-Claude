import styles from "./MainContent.module.css";

export default function () {
  return (
    <main>
      <form className={styles.addIngredientForm}>
        <input
          type="text"
          placeholder="eg. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
}
