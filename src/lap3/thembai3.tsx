import { Form, Input, Button, InputNumber } from "antd";

const AddProduct = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form.Item label="tên sản phẩm" name="name">
                <Input placeholder="nhập sản phẩm..." />
            </Form.Item>

            <Form.Item label="giá" name="price">
                <Input placeholder="nhập giá..." />
            </Form.Item>

            <Form.Item label="số lượng" name="quantity">
                <Input placeholder="nhập số lượng..." />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    thêm sản phẩm
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddProduct;