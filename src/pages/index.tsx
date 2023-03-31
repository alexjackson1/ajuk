import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 p-4 text-white/80 bg-sky-950 h-96">
        <h1 className="text-3xl font-semibold text-center">Alex Jackson</h1>
      </div>
      <div className="col-span-3 md:col-span-1 p-4 bg-sky-900 h-[70rem]">
        Second row, column 1
      </div>
      <div className="col-span-3 p-4 bg-sky-800 md:col-span-2 ">
        Second row, column 2
      </div>
      <div className="col-span-3 p-4 bg-sky-700 h-72">Third row</div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Alex Jackson</title>;
