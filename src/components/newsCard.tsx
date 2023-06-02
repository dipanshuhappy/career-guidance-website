const NewsCard = ({ date, title }: { date: string, title: string }) => (
    <div className="border-2  border-gray-300 rounded-2xl w-full my-10">
        <div className="flex items-center justify-between">
            <p className="text-left m-6 font-bold  text-black">News</p>
            <div className="flex">
                <button className="btn btn-ghost text-black btn-xs ">{"<"}</button>

                <button className="btn btn-ghost text-black btn-xs ">{">"}</button>

            </div>
        </div>

        <div className="bg-slate-500 w-full h-[2px] rounded-2xl"></div>
        <div className="my-2 mx-4">
            <img className=" w-full h-44 object-cover" src="group_of_colleges/1.png" />
            <div></div>
            <p className="text-xs text-left ">
                {date}
            </p>
            <p className="text-left my-2 font-bold text-sm text-black">
                {title}
            </p>

        </div>
    </div>
)
export default NewsCard;