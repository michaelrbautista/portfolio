import Link from "next/link"

export type ItemType = {
    date: string,
    title: string,
    subtitle: string,
    navigateUrl?: string
}

const Item = ({
    item
}: {
    item: ItemType
}) => {
    if (item.navigateUrl) {
        return (
            <Link
                href={item.navigateUrl}
                className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-2 sm:gap-10 px-5 py-[10px] hover:bg-systemGray-6 cursor-ponter">
                <div className="w-[100px] shrink-0">
                    <p className="text-systemGray">{item.date}</p>
                </div>
                <div className="w-full">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-systemGray">{item.subtitle}</p>
                </div>
            </Link>
        )
    } else {
        return (
            <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-2 sm:gap-10 px-5 py-[10px]">
                <div className="w-[100px] shrink-0">
                    <p className="text-systemGray">{item.date}</p>
                </div>
                <div className="w-full">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-systemGray">{item.subtitle}</p>
                </div>
            </div>
        )
    }
}
export default Item