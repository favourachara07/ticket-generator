export default function Button({title, secondary, onClick}) {
  return (
    <div className="space-x-3 w-full">
      <button
      onClick={onClick}
        type="submit"
        className={` w-full text-white ${secondary ? 'bg-transparent border border-[#24A0B5]': 'bg-[#24A0B5]'}  focus:ring-4 focus:outline-none  font-light rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        {title}
        
      </button>
    </div>
  );
}
