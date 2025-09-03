import './PizzaMenu.scss';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function PizzaMenu() {
  return (
    <div className='pizza-menu'>
      <h2 className='pizza-menu__heading'>- Fast React Pizza CO. -</h2>
      <h3 className='pizza-menu__sub-heading'>Our Menu</h3>
      <p className='pizza-menu__text'>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className='pizza-menu__list-container'>
        {pizzaData.map(({ name, ingredients, price, photoName, soldOut }) => (
          <li
            key={name}
            className={`pizza-menu__list ${soldOut ? 'pizza-menu__list--sold-out' : ''}`}>
            <img src={photoName} alt={name} className='pizza-menu__img' />
            <div className='pizza-menu__list-content'>
              <div className='pizza-menu__list-text'>
                <h4 className='pizza-menu__name'>{name}</h4>
                <p className='pizza-menu__ingredients'>{ingredients}</p>
              </div>
              <p className='pizza-menu__price'>{price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='pizza-menu__footer'>
        We're open from 12:00 to 22:00. Come visit us or order online.
      </div>
      <button className='pizza-menu__cta'>Order</button>
    </div>
  );
}

export default PizzaMenu;
