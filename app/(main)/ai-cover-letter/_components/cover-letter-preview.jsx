"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Copy } from "lucide-react";  // Correct import for the copy icon
import { toast } from "sonner";

const CoverLetterPreview = ({ content }) => {

  return (
    <div className="py-4">
      {/* Markdown Editor Preview */}
      <MDEditor value={content} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
