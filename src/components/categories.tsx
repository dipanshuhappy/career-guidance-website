const Categories = ({ categories }: { categories: string[] }) => (
    <ul className="menu h-fit text-slate-400  border-gray-200 place-items-center rounded-md border-2 w-56 bg-white" style={{
        gridArea: "category"
    }}>
        <li className="menu-title text-black">
            <span className="text-center">Browse Category</span>
        </li>
        {
            categories.map((category) => (<li><a>{category}</a></li>
            )
            )
        }

    </ul>
)
export default Categories;