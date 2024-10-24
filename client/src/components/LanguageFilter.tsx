import React, { useState } from "react";

interface LanguageFilterProps {
  languages: string[];
  onFilterChange: (language: string) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
  languages,
  onFilterChange,
}) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  const handleFilterChange = (language: string) => {
    setActiveLanguage(language);
    onFilterChange(language);
  };

  return (
    <div className="language-filter mb-4 flex justify-center">
      <div className="flex flex-wrap justify-center">
        <button
          className={`m-2 px-4 py-2 rounded-lg transition duration-300 ${
            activeLanguage === ""
              ? "bg-gray-600 text-white"
              : "bg-gray-500 text-white"
          }`}
          onClick={() => handleFilterChange("")}
          style={{ width: "150px" }} 
        >
          All
        </button>
        {languages.map((language) => (
          <button
            key={language}
            className={`m-2 px-4 py-2 rounded-lg transition duration-300 ${
              activeLanguage === language
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleFilterChange(language)}
            style={{ width: "150px" }} 
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageFilter;
