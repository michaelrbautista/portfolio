import Item, { ItemType } from "./Item"

const ItemList = ({
    items
}: {
    items: ItemType[]
}) => {
    return (
        <div className="flex flex-col">
            {items.map((item) => {
                return (
                    <Item
                        item={item}
                        key={item.title}
                    />
                )
            })}
        </div>
    )
}
export default ItemList