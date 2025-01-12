// import React from "react";
// import Header from "../components/header/Header";

// type Props = {
//   children?: React.ReactNode;
// };

// export default function Layout({ children }: Props) {
//   return (
//     <div className="min-h-screen text-black dark:text-white-bg dark:bg-black">
//       <div className="sticky top-0 z-50">
//         <Header />
//       </div>
//       <main className="flex-grow relative pt-[4.5rem]">
//         <div className="max-w-[100%] mx-auto ">{children}</div>
//       </main>
//     </div>
//   );
// }
import React from "react";
import Header from "../components/header/Header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen text-black dark:text-white-bg dark:bg-black">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-grow relative pt-[4.5rem]">
        <div className="w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}