import React from "react";

export default function TagsSearch() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const availableTags = ["API", "Finance", "Mobile", "Computer", "Computer", "API", "Finance", "Mobile", "API", "Finance", "Mobile", "Computer", "Computer", "API", "Finance", "Mobile"];

  const toggleTagSelection = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };
  return (
    <>
      <p className="text-sm font-bold p-1">Tags :</p>
      <input
        type="text"
        placeholder="Search"
        className="w-full border border-[#AFAFAF] rounded-lg p-3 text-sm px-4 mb-4"
      />
      <div className="flex flex-wrap gap-2 justify-center overflow-y-auto mt-4">
        {availableTags.map((tag, index) => (
          <button
            key={`${tag}-${index}`}
            onClick={() => toggleTagSelection(tag)}
            className={`px-[21px] py-2 text-xs rounded-lg border border-black ${selectedTags.includes(tag)
              ? "bg-black text-white"
              : "bg-white text-black border-black"
              } hover:bg-gray-200 transition-colors`}
          >
            {tag}
          </button>
        ))}

      </div>
    </>
  )
}

