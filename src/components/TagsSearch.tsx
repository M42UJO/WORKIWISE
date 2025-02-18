import { useEffect, useState } from "react";
import Select from "react-select";
import { GetdataAPI_Get } from "../MainCall";

interface Tag {
  value: string;
  label: string;
}

export default function TagsSearch() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  async function fetchData() {
    try {
      const response = await GetdataAPI_Get("/api/Workspace/GetAllTags");

      if (Array.isArray(response)) {
        setTags(response);
      } else {
        console.warn("Data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const recommendedTags = tags.slice(0, 4);

  const handleTagChange = (selectedOptions: Tag[] | null) => {
    setSelectedTags(selectedOptions || []);
  };

  const removeTag = (tagValue: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.value !== tagValue));
  };

  const handleRecommendTag = (tag: Tag) => {
    setSelectedTags((prev) =>
      prev.some((t) => t.value === tag.value) ? prev : [...prev, tag]
    );
  };

  return (
    <>
      <p className="text-sm font-bold p-1">Tags :</p>
      <Select
        options={tags}
        isMulti
        placeholder="Search and Select Tags..."
        onChange={(selectedOptions) =>
          handleTagChange(selectedOptions as Tag[] | null)
        }
        value={selectedTags}
        className="mb-4"
      />

      <div className="flex flex-wrap gap-2 mt-4">
        {selectedTags.map((tag) => (
          <button
            key={tag.value}
            onClick={() => removeTag(tag.value)}
            className="px-[21px] py-2 text-xs rounded-lg bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
          >
            {tag.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {recommendedTags.map((tag) => (
          <button
            key={tag.value}
            onClick={() => handleRecommendTag(tag)}
            className={`px-[21px] py-2 text-xs rounded-lg border border-black ${
              selectedTags.some((t) => t.value === tag.value)
                ? "bg-black text-white"
                : "bg-white text-black"
            } hover:bg-black hover:text-white transition-colors`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </>
  );
}
