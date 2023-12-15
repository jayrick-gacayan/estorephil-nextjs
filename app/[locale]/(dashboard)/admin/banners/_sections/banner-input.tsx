export default function BannerInput() {
  return (
    <div className="space-y-3">
      <div>Upload Banner Images</div>
      <div className="bg-white w-[30rem] h-[3rem] flex items-center px-5 rounded-xl">
        <input
          type="file"
          className="text-sm text-stone-500
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700 "
        />
      </div>
    </div>
  );
}
