"use client";

import useGetBlogs from "@/hooks/blog/blog";
import { useState } from "react";

const BlogList = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isPending } = useGetBlogs({ page });

  const onChangePage = (page: number) => {
    setPage(page);
  };

  if (isPending) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!data) {
    return <h1 className="text-center"> Data</h1>;
  }
  return (
    <div className="">
      <h1></h1>
    </div>
  );
};

export default BlogList;
