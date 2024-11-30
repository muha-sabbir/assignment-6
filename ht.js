const phonePaly = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  console.log(data);
  const phone = data.posts;
  console.log(phone);
  palyRow(phone);
};

const palyRow = (phone) => {
  // console.log(phone);
  const phot = document.getElementById("roto");
  phone.forEach((phones) => {
    console.log(phones);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card`;
    phoneCard.innerHTML = `
             <div class="card-header">
            <div class=""></div>
              <span><img class="fp" src="${phones.image}" alt=""></span>
            <div class="card-info">
              <span class="category"> ${phones.category}</span>
              <span class="author">${phones.author.name}</span>
            </div>
          </div>
          <div class="card-title">
            ${phones.title}
          </div>
          <div class="card-description">
              ${phones.description}
          </div>
          <div class="card-footer">
            <div class="stats">
              <span><img src="" />Comments  ${phones.comment_count}</span>
              <span><img src="" />Views  ${phones.view_count}</span>
              <span><img src="" alt="Time" />${phones.posted_time} min </span>
            </div>
            <div class="share">
              <button onclick="photer(' ${phones.title}','${phones.view_count}')" class="tor">button</button>
            </div>
          </div>
        
    `;
    phot.appendChild(phoneCard);
  });
};

const photer = (name, view) => {
  // console.log(name, view);
  const sectr = document.getElementById("cart");
  // console.log(sectr);
  const div = document.createElement("div");
  div.classList.add("cart-info");
  div.innerHTML = `
       <h2>${name}</h2>
        <h2>${view}</h2>
  `;
  sectr.appendChild(div);
};
phonePaly();
