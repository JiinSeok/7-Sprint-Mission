import './ProductList.css';

function ProductListItem({ item }) {
  const { name, price, images, favoriteCount } = item;

  return (
    <div className='ProductListItem'>
      <img src={images} alt={name} />
      <div>{name}</div>
      <div>{price}원</div>
      <div>💙 {favoriteCount}</div>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <div>
      <ul className='ProductList'>
        {items.map((item) => (
          <li key={item.id}>
            <ProductListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;