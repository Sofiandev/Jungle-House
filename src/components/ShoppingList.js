import { plantList } from "../datas/plantList";

function ShoppingList() {
  const categories = ["classique", "extérieur", "plante grasse"];
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isBestSale ? <span>🔥</span> : null}
            {/* factorisation :  // {plant.isBestSale && <span>X</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
