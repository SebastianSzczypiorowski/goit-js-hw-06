const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newList = document.createElement("li");
ingredients.forEach((e) => {
  newList.textContent = e;
  newList.classList.add("item");
  newList.after(ingredients);
  console.log(newList);
});
