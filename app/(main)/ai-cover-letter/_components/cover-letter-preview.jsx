"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Copy } from "lucide-react";  // Correct import for the copy icon
import { toast } from "sonner";

const CoverLetterPreview = ({ content }) => {
  const [copying, setCopying] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      // Show success toast after content is copied
      toast.success("Content copied successfully!");
    }).catch(() => {
      // Handle error if copy fails
      toast.error("Failed to copy content!");
    });
  };

  return (
    <div className="py-4">
      {/* Copy Icon */}
      <button
        onClick={handleCopy}
        title="Copy Content"
        className="absolute top-4 right-4 bg-gray-100 p-2 rounded-md shadow hover:bg-gray-200"
      >
        <Copy className="text-xl text-blue-500" />
      </button>

      {/* Markdown Editor Preview */}
      <MDEditor value={content} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
