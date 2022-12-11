import ListItem from "./ListItems/ListItem"
const Products = () =>{
    const items = [
        {
            id:0,
            discountedPrice : 340,
            price : 450,
            title:"Title of theis Item 1",
            thumbnail : "placeholder.png"
        },
        {
            id:1,
            discountedPrice : 80,
            price : 450,
            title:"Title of theis Item 1",
            thumbnail : "placeholder.png"
        },
    ]
    return (
        <div className="product-list">
            <div className="product-list--wrapper">
            <ListItem data={items[0]}></ListItem>
            <ListItem data={items[1]}></ListItem>
        </div>
        </div>
    )
}
export default Products