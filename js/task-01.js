const totalEl = document.querySelectorAll(".item");
console.log(`on the list ${totalEl.length} categories`);

const elementsArray = [...totalEl].map(categories => `category: ${categories.children[0].textContent} elements: ${categories.children[1].children.length}`)
.join('\n');
console.log(elementsArray);
