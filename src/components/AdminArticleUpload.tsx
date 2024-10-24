import React, { useState } from "react";

const AdminArticleUpload: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement article upload logic here
    console.log("Uploading article:", { title, content, image });
    // Reset form after submission
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-2 font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-2 font-semibold">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          rows={6}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="image" className="block mb-2 font-semibold">
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload Article
      </button>
    </form>
  );
};

export default AdminArticleUpload;
