const posts = [
    {
      tag: "Tourism",
      description: "One",
      date: "June 6, 2019",
      author: "By Rickie Baroch",
      image: "./image1.png",
    },
    {
      tag: "Sport",
      description: "two",
      date: "June 6, 2019",
      author: "By Rickie Baroch",
      image: "./image2.png",
    },
    {
      tag: "Music",
      description: "Three",
      date: "June 6, 2019",
      author: "By Rickie Baroch",
      image: "./image3.png",
    },
    {
      tag: "Movie",
      description: "Something about this",
      date: "June 6, 2019",
      author: "By Rickie Baroch",
      image: "./image1.png",
    },
    {
      tag: "Game",
      description: "Anything else",
      date: "June 6, 2019",
      author: "By Rickie Baroch",
      image: "./image1.png",
    },
  ];
  // Get student container
const postsContainer = document.querySelector(".left-content__posts");

// Render
const render = (array, container) => {
  for (let index = 0; index < array.length; index++) {
    const post = array[index];

    const divContainer = document.createElement("div");
    divContainer.classList.add("posts-item");
    container.appendChild(divContainer);
    divContainer.innerHTML = `
      <img src="${post.image}" alt="bg" />
      <div class="post-tag">${post.tag}</div>
      <div class="post-des">
        ${post.description}
      </div>
      <div class="post-date">${post.date} By ${post.author}</div>
    `;
  }
};

// The first loading
render(posts, postsContainer);

// Searching
const inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("input", (event) => {
  // Clear older data
  let lastChild = postsContainer.lastElementChild;
  while (lastChild) {
    postsContainer.removeChild(lastChild);
    lastChild = postsContainer.lastElementChild;
  }

  // Get value to search
  const value = event.target.value;

  // Filter data by value
  const tempList = [...posts].filter((post) =>
    post.description.includes(value)
  ); // return array

  // Fill data to screen
  render(tempList, postsContainer);
});