import { useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

const AddStory = () => {
    const { register, handleSubmit, reset } = useForm();
    const queryClient = useQueryClient();

    const onSubmit = async (data: any) => {
        try {
            await axios.post("http://localhost:3000/stories", {
                ...data,
                date: new Date().toISOString(), // 🔥 QUAN TRỌNG
            });

            message.success("Thêm thành công");

            queryClient.invalidateQueries({ queryKey: ["stories"] });

            reset();
        } catch (error) {
            message.error("Thêm thất bại");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Tên truyện" {...register("title")} />
            <input placeholder="Tác giả" {...register("author")} />
            <input placeholder="Ảnh" {...register("image")} />
            <input placeholder="Mô tả" {...register("description")} />

            <button type="submit">Thêm</button>
        </form>
    );
};

export default AddStory;