const navEmail = document.querySelector('.navbar-email');
const menuDestock = document.querySelector('.menu-desktop');
const menuIcon = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile');
const iconCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleMenuDestock);
menuIcon.addEventListener('click', toggleMenuMobile);
iconCar.addEventListener('click', toggleCarAside);

function toggleMenuDestock() {
  menuDestock.classList.toggle('inactive'); /*en los parentesis va la clase*/
  aside.classList.add('inactive');
}

function toggleMenuMobile() {
  menuMobile.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toggleCarAside() {
  aside.classList.toggle('inactive');
  menuMobile.classList.add('inactive');
  menuDestock.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Manzana',
  price: 800,
  image:
    'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Fresa',
  price: 800,
  image:
    'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Uva',
  price: 300,
  image:
    'https://images.pexels.com/photos/5946082/pexels-photo-5946082.jpeg?auto=compress&cs=tinysrgb&w=400"',
});

productList.push({
  name: 'Kiwi',
  price: 500,
  image:
    'https://images.pexels.com/photos/5946070/pexels-photo-5946070.jpeg?auto=compress&cs=tinysrgb&w=400',
});

productList.push({
  name: 'Manzana',
  price: 800,
  image:
    'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Fresa',
  price: 800,
  image:
    'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Uva',
  price: 300,
  image:
    'https://images.pexels.com/photos/5946082/pexels-photo-5946082.jpeg?auto=compress&cs=tinysrgb&w=400"',
});

productList.push({
  name: 'Kiwi',
  price: 500,
  image:
    'https://images.pexels.com/photos/5946070/pexels-photo-5946070.jpeg?auto=compress&cs=tinysrgb&w=400',
});

productList.push({
  name: 'Manzana',
  price: 800,
  image:
    'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Fresa',
  price: 800,
  image:
    'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Uva',
  price: 300,
  image:
    'https://images.pexels.com/photos/5946082/pexels-photo-5946082.jpeg?auto=compress&cs=tinysrgb&w=400"',
});

productList.push({
  name: 'Kiwi',
  price: 500,
  image:
    'https://images.pexels.com/photos/5946070/pexels-photo-5946070.jpeg?auto=compress&cs=tinysrgb&w=400',
});

productList.push({
  name: 'Manzana',
  price: 800,
  image:
    'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Fresa',
  price: 800,
  image:
    'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
  name: 'Uva',
  price: 300,
  image:
    'https://images.pexels.com/photos/5946082/pexels-photo-5946082.jpeg?auto=compress&cs=tinysrgb&w=400"',
});

productList.push({
  name: 'Kiwi',
  price: 500,
  image:
    'https://images.pexels.com/photos/5946070/pexels-photo-5946070.jpeg?auto=compress&cs=tinysrgb&w=400',
});
/*<div class="product-card">
          <img
            src="https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Manzanas"
          />
          <div class="product-info">
            <div>
              <p>Manzanas</p>
              <p>$1M</p>
            </div>
            <figure>
              <img src="./assets/icons/bt_add_to_cart.svg" alt="" />
            </figure>
          </div>*/

function renderProducts(arr) /*funcion creada para meter el forr y que pueda ser reutilizada*/ {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image); /*significa que va a modificar su propiedad src*/

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productInfoFigure = document.createElement('figure');

    const figureImage = document.createElement('img');
    figureImage.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(figureImage);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productInfo.appendChild(productInfoDiv), productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
