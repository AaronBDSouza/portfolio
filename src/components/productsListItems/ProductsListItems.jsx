import './productsListItems.scss';

export default function ProductsListItems({id,title,active,setSelected}) {
    return (
    <li className={active ? "productList active": "productList"} onClick={() => setSelected(id)}>
        {title}
    </li>
    )
}
