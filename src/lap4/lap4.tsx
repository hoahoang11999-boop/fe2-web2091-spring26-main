import { Button, Checkbox, Input, Form } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

type TStory = {
    title: string;
    description: string;
    active: boolean;
};

export function StoryForm() {

    const mutation = useMutation({
        mutationFn: async (value: TStory) => {
            const response = await axios.post(`http://localhost:3000/products`, value);
            return response.data;
        },

        onSuccess: () => {
            toast.success("Thêm sản phẩm thành công");
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onFinish = (value: TStory) => {
        console.log("success", value);
        mutation.mutate(value);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="title" name="title">
                <Input />
            </Form.Item>

            <Form.Item label="description" name="description">
                <Input />
            </Form.Item>

            <Form.Item name="active" valuePropName="checked">
                <Checkbox>Active</Checkbox>
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                loading={mutation.isPending}
            >
                thêm
            </Button>
        </Form>
    );
}
//