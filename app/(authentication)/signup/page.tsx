import LottieReact from "../../utls/LottieReact.js";
import read from "../../..//public/illustration/read.json";
import FormSignUp from "./Form";

import dynamic from "next/dynamic";

const SignUp: React.FC = () => {


  return (
    <div className="bg-zinc-800 ">
      {/* <div className="h-[20px]"></div> */}
      <div className="grid grid-cols-2">
        <div>
          <div className="ms-10 ps-10">
            {" "}
            <FormSignUp></FormSignUp>
          </div>
        </div>
        <div>
          <LottieReact value={read}></LottieReact>
        </div>
      </div>
    </div>
  );
};
export default dynamic (() => Promise.resolve(SignUp), {ssr: false})


// export  {SignUp};
