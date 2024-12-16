import React from "react";
import Select from "react-select";

export default function TagsSearch() {
  const [selectedTags, setSelectedTags] = React.useState<any[]>([]);

  // ตัวเลือกทั้งหมดที่มีใน dropdown
  const availableTags = [
    { value: "API", label: "API" },
    { value: "Finance", label: "Finance" },
    { value: "Mobile", label: "Mobile" },
    { value: "Computer", label: "Computer" },
    { value: "Security", label: "Security" },
    { value: "Cloud", label: "Cloud" },
    { value: "AI", label: "AI" },
    { value: "IoT", label: "IoT" },
  ];

  // เลือก 4 ตัวที่จะแสดงเป็น Recommended Tags
  const recommendedTags = availableTags.slice(0, 4);

  // จัดการการเลือก tags
  const handleTagChange = (selectedOptions: any) => {
    setSelectedTags(selectedOptions || []);
  };

  // จัดการการลบ tag เมื่อคลิกปุ่ม
  const removeTag = (tagValue: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.value !== tagValue));
  };

  // จัดการการคลิกปุ่ม recommend
  const handleRecommendTag = (tag: any) => {
    setSelectedTags((prev) =>
      prev.some((t) => t.value === tag.value) ? prev : [...prev, tag]
    );
  };

  return (
    <>
      <p className="text-sm font-bold p-1">Tags :</p>
      {/* Dropdown ของ react-select */}
      <Select
        options={availableTags}
        isMulti
        placeholder="Search and Select Tags..."
        onChange={handleTagChange}
        value={selectedTags}
        className="mb-4"
      />

      {/* ปุ่มแสดง Tags ที่เลือก */}
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

      {/* ปุ่ม Recommended Tags (แสดงแค่ 4 ตัว) */}
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
