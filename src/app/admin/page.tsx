"use client";

import React from "react";
import AdminArticleUpload from "@/components/AdminArticleUpload";

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <AdminArticleUpload />
    </div>
  );
}