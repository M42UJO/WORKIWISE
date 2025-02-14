import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { tkState } from "../MainRecoil"; 

interface Tag {
  value: string;
  label: string;
}

export default function TagsSearch() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  

  const tkmstate = useRecoilValue(tkState);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get("https://bsv-th-authorities.com/test_intern/api/Workspace/GetAllTags", {
          headers: {
            Authorization: `Bearer ${tkmstate.mtk}`,
          },
        });
  
        console.log("API Response:", response.data); 
  
        const formattedTags = response.data.map((tag: any) => ({
          value: tag.tags_id.toString(),
          label: tag.tags_name,
        }));
        setTags(formattedTags);
      } catch (error: any) {
        console.error("Error fetching tags:", error);
        if (error.response) {
          console.error("Server Response:", error.response.data); 
        }
      }
    };
  
    fetchTags();
  }, [tkmstate]); 
  
 
  const recommendedTags = tags.slice(0, 4);

  // จัดการการเลือก tags
  const handleTagChange = (selectedOptions: any) => {
    setSelectedTags(selectedOptions || []);
  };

  // ลบ tag เมื่อกดปุ่ม
  const removeTag = (tagValue: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.value !== tagValue));
  };

  // กดปุ่ม Recommended Tags เพื่อเพิ่ม
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
        onChange={handleTagChange}
        value={selectedTags}
        className="mb-4"
      />

      <div className="flex flex-wrap gap-2 mt-4">
        {selectedTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => removeTag(tag.value)}
            className="px-[21px] py-2 text-xs rounded-lg bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
          >
            {tag.label}
          </button>
        ))}
      </div>

      <p className="text-sm font-bold p-1 mt-4">Recommended Tags:</p>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {recommendedTags.map((tag, index) => (
          <button
            key={index}
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
