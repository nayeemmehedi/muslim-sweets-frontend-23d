import React from "react";

function Loading() {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col h-screen">
      <div className="pb-4">
        <h3>Just give us a second.</h3>
      </div>
      <div className="">
        <div className="w-16 h-16 border-4 border-blue-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Loading;
