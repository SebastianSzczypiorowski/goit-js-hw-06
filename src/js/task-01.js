const category = document.querySelector("#categories");

const countItems = category.querySelectorAll(".item");
console.log(`Number of categories: ${countItems.length}`);

countItems.forEach((e) => {
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelector("ul").childElementCount
    }`
  );
});
