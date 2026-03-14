import { Form, Input, Button, InputNumber } from "antd";

function LogiForm() {
    function onFinish(values: any) {
        console.log("Form data:", values);
    }
    return (
        <>
            <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "0 auto" }}   >

                <Form.Item label="name" name="name" rules={[
                    { required: true, message: "nhập tên vào đi" }
                ]} >
                    <Input placeholder="nhập tên" />
                </Form.Item>

                <Form.Item label="email" name="email" rules={[
                    { required: true, message: "bắt buộc nhập email" }
                ]} >
                    <Input placeholder="nhập email" />
                </Form.Item>

                <Form.Item label="password" name="password" rules={[
                    { required: true, message: "bắt buộc nhập" },
                    { min: 4, message: "mật khẩu phải lớn hơn 4 kí tự" }
                ]}   >
                    <Input.Password placeholder="nhập mật khẩu" />
                </Form.Item>

                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="confirm"
                    dependencies={["password"]}
                    rules={[
                        { required: true, message: "Nhập lại mật khẩu" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (value === getFieldValue("password")) {
                                    return Promise.resolve();
                                }
                                return Promise.reject("Mật khẩu không trùng");
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>

                <Form.Item label="phone" name="phone" rules={[
                    { required: true, message: "bắt buộc nhập" },
                    { min: 10, message: "số điện thoại phải lớn hơn 10" },
                    { type: "number", message: "kí tự phải là số" }
                ]}   >
                    <InputNumber placeholder="nhập số điện thoại" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Đăng nhập</Button>
                </Form.Item>
            </Form >


        </>
    )
}
export default LogiForm;