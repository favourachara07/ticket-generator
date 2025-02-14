export default function Button({title, secondary, onClick, header}) {
  return (
    <div className="space-x-3 w-full">
      <button
      onClick={onClick}
        type="submit"
        className={` w-full  ${secondary ? 'bg-transparent border border-[#24A0B5] text-[#24A0B5]': 'bg-[#24A0B5]'}  focus:ring-4 focus:outline-none  font-light rounded-lg text-sm px-5 py-2.5 text-center ${header ? 'bg-white text-black': 'text-white '}`}
      >
        {title}
        
      </button>
    </div>
  );
}
