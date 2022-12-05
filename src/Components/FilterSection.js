import React from "react";

export default function FilterSection({ filter }) {
  return (
    <div className="flex flex-wrap items-center justify-center my-6">
      <ul className="inline-flex flex-wrap shadow-md rounded-lg hover:shadow-lg focus:shadow-lg">
        <button
          onClick={() => filter("nature")}
          className="py-2 px-4 cursor-pointer text-md border transition-colors rounded-l-lg border-gray-200 hover:bg-[rgba(0,0,0,0.75)] hover:text-white hover:border-[rgba(0,0,0,0.75)]"
        >
          Nature
        </button>
        <button
          onClick={() => filter("food")}
          className="py-2 px-4 cursor-pointer text-md border transition-colors border-gray-200 hover:bg-[rgba(0,0,0,0.75)] hover:text-white hover:border-[rgba(0,0,0,0.75)]"
        >
          Food
        </button>
        <button
          onClick={() => filter("abstract")}
          className="py-2 px-4 cursor-pointer text-md border transition-colors  border-gray-200 hover:bg-[rgba(0,0,0,0.75)] hover:text-white hover:border-[rgba(0,0,0,0.75)]"
        >
          Abstract
        </button>
        <button
          onClick={() => filter("animal")}
          className="py-2 px-4 cursor-pointer text-md border transition-colors rounded-r-lg border-gray-200 hover:bg-[rgba(0,0,0,0.75)] hover:text-white hover:border-[rgba(0,0,0,0.75)]"
        >
          Animal
        </button>
      </ul>
    </div>
  );
}
