import { Form, Input, Button } from "antd";

export default function LogoutForm() {




    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Nhập email" }]}
            >
                <Input placeholder="nhập Email" />


            </Form.Item>

            <Form.Item
                name="name"
                rules={[{ required: true, message: "Nhập name" }]}
            >
                <Input placeholder=" nhập tên" />


            </Form.Item>
            {/*  */}
            <Form.Item
                name="password"
                rules={[{ required: true, message: "nhập password" }]}
            >
                <Input placeholder="nhập password" />


            </Form.Item>
            {/*  */}
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Nhập email" }]}
            >
                <Input placeholder="Email" />


            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Logout
                </Button>
            </Form.Item>
        </Form>
    );
}