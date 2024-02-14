"use client";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import React from "react";

function CustomButton() {
  return (
    <div>
      <Form.Item>
        <Button
          className="text-red-700 border border-red-500 hover:text-green-700 hover:border-green-700"
          htmlType="submit"
        >
          Register
        </Button>
      </Form.Item>
    </div>
  );
}

export default CustomButton;
