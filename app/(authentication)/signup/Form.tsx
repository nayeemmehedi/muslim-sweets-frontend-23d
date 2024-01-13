"use client";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ColorChange } from "../../utls/ColorChange";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { postData } from "@/app/fetch";
import { useState } from "react";
import {
  initialresponse,
  loading_true,
  responValue,
} from "@/app/extra/typescriptValue/Form_Typescript";

const inter = Dancing_Script({ subsets: ["latin"] });

function FormSignUp() {
  //state
  const [form] = Form.useForm();
  const [responseGet, setResponseGet] = useState<responValue>(initialresponse);

  //form response value
  const onFinish = async (values: any) => {
    setResponseGet(loading_true);

    //form data start
    const formDataToSend = new FormData();

    for (const [key, value] of Object.entries(values)) {
      if (key !== "imgUrl") formDataToSend.append(key, value);
    }

    formDataToSend.append("imgUrl", values.imgUrl.file.originFileObj);

    formDataToSend.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    //form data finsih

    //api call
    const value = await postData(formDataToSend);
    console.log("eij value", value);
    // setResponseGet(value);

    // console.log("//form data start", responseGet);
  };

  // loading state
  if (responseGet.loading) {
    return "Loading...";
  }

  return (
    <div className="my-10">
      <div className={inter.className}>
        <p className="text-center text-4xl font-bold text-red-600 my-4">
          Sign Up Form
        </p>
      </div>
      <div className="mx-20">
        <Form
          //   {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{}}
          //   style={{ maxWidth: 600 }}
          scrollToFirstError
          layout="vertical"
          encType="multipart/form-data"
        >
          <Form.Item
            name="nickname"
            label={<span className="signupTextColor">Nickname</span>}
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label={<ColorChange>E-mail</ColorChange>}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label={<ColorChange>password</ColorChange>}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label={<ColorChange>Confirm Password</ColorChange>}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="imgUrl"
            label={<ColorChange>Image Upload</ColorChange>}
            rules={[
              {
                required: true,
                message: "Please input Image!",
              },
            ]}
          >
            <Upload maxCount={1} listType="picture-card">
              <div>
                <ColorChange>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </ColorChange>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              {
                <ColorChange>
                  {" "}
                  I have read the <a href="">agreement</a>
                </ColorChange>
              }
            </Checkbox>
          </Form.Item>
          <div className="flex justify-between">
            <Form.Item>
              <Button
                className="text-red-700 border border-red-500 hover:text-green-700 hover:border-green-700"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
            <Link
              className="text-end text-xl text-red-700 underline "
              href="/login"
            >
              {" "}
              Go to login now!
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default FormSignUp;
