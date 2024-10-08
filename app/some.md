<div
className={clsx(
  "nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0  md:w-auto  w-full flex items-center px-5",
  {
    "top-[-100%]": toggle == false,
    "top-[30%]  bg-stone-800 text-white": toggle == true,
  }
)}
>
<div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
  {NavValue?.map((nav, i) => (
    <div key={i}>
      {/* <a className="hover:text-gray-500" href="#"> */}
      <Link
        className={`${
          pathname === nav?.link ? "text-yellow-500" : ""
        }`}
        href={nav?.link}
      >
        {" "}
        {nav?.name}
      </Link>

      <span className="text-xs font-thin text-amber-400 hover:text-red-600">
        +
      </span>
      {/* </a> */}
    </div>
  ))}
</div>
</div>