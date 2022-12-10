const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const findElem = document.querySelector("#ingredients");

ingredients.forEach((e) => {
  const newList = document.createElement("li");
  newList.textContent = e;
  findElem.append(newList);
  newList.classList.add("item");
  console.log(newList);
});
