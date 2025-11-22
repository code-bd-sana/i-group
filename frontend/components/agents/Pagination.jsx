export default function Pagination({ showing }) {
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
      
      {/* Showing text */}
      <span>Showing {showing}</span>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-black">
          ‹ Previous
        </button>
        <button className="text-gray-400 hover:text-black">
          Next ›
        </button>
      </div>
    </div>
  );
}
