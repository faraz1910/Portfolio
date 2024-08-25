import { GoArrowUpRight } from "react-icons/go";

const RecentWorkCard = ({title, tags=[], imgUrl, url}) => {
  return (
    <div className="h-96 bg-slate-150 sm:w-[48%] w-full rounded-xl mt-4">
      <div className="bg-slate-400 h-fit rounded-xl overflow-hidden">
        <img className="object-cover" src={imgUrl} alt="" />
      </div>
      <div>
        <div className="flex flex-start mt-4 gap-2">
        {tags.map((tag, index) => (
            <span
              key={index}
              className="py-1 px-2 uppercase font-bold text-[.6rem] border border-slate-700 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-3xl font-extrabold">{title}</span>
          <GoArrowUpRight size={30} className="cursor-pointer"/>
        </div>
      </div>

    </div>
  );
};

export default RecentWorkCard;
