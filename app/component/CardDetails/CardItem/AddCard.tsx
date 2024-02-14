"use client";
import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import food from "/public/food.jpg";
import { InputNumber } from "antd";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// image: "/chomchom.jpg",
// name: "Chomchom",
// banglaName: "কাটারী ভোগ",
// price: 40,
// rating: 4,
// available: "Unavailable",
// availableTime: "6AM-12PM",

interface MyComponentProps {
  value: {
    image: string;
    name: string;
    banglaName: string;
    price: number;
    rating: number;
    available: string;
    availableTime: string;
  };
}

const AddCard: React.FC<MyComponentProps> = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const [values, setValue] = useState({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: any
  ) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked) {
      setValue(value);
    }
    if (!checked) {
      setValue({});
    }
  }, [checked]);

  const onChangeValue = (value: number | null): void => {
  };

  return (
    <div className="p-10 m-5 bg-white">
      <div className="grid grid-cols-5">
        <div className="col-span-3 flex ">
          <div className="flex items-center">
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          <div>
            <Image src={food} width={70} height={70} alt="not found"></Image>
          </div>
          <div className="ms-5 flex items-center">
            <div>
              <p className="">
                {value.name}-{value.banglaName}-{value.rating}
              </p>
              <p className="text-orange-600">Price: ৳ {value.price}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center">Delete</div>

        <div className="col-span-1 flex items-center">
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChangeValue}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCard;
