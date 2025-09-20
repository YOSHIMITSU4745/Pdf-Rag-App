"use client";

import React, { useState } from "react";
import { FileUpload } from "./uploadfile";
import { usePostFileMutation } from "../services/apiSlice";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [postFile, { isLoading, error }] = usePostFileMutation();

  const handleFileUpload = async (files: File[]) => {
    setFiles(files);
    console.log("Selected files:", files);

    if (files.length > 0) {
      const formData = new FormData();
      formData.append("pdf", files[0]); // Assuming you only upload the first file

      try {
        const response = await postFile(formData).unwrap(); // Unwrap for RTK Query
        console.log("Upload response:", response);
      } catch (err) {
        console.error("Error posting file to server:", err);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
      <FileUpload onChange={handleFileUpload} />
      {isLoading && <p>Uploading...</p>}
      {error && <p className="text-red-500">Upload failed!</p>}
      {files.length > 0 && (
        <div className="mt-4">
          <p>Selected file: {files[0].name}</p>
        </div>
      )}
    </div>
  );
}
