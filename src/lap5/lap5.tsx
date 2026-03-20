import { Table, Image, Spin, Popconfirm, message, Input } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const StoryList = () => {
    const queryClient = useQueryClient();
    const [searchText, setSearchText] = useState("");

    // 👉 GET DATA
    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    // 👉 DELETE
    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/stories/${id}`);
            message.success("Xóa thành công");
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        } catch (error) {
            message.error("Xóa thất bại");
        }
    };

    // 👉 COLUMNS
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Created At",
            dataIndex: "date",
            render: (date: string) =>
                date
                    ? new Date(date).toLocaleDateString("vi-VN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })
                    : "",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (url: string) => <Image src={url} width={60} />,
        },
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Hành động",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Xóa truyện"
                    description="Bạn chắc chắn muốn xóa?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Xóa"
                    cancelText="Hủy"
                >
                    <button style={{ color: "red" }}>Xóa</button>
                </Popconfirm>
            ),
        },
    ];

    // 👉 SEARCH FILTER
    const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // 👉 LOADING
    if (isLoading) return <Spin />;

    // 👉 ERROR
    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return (
        <>
            {/* 👉 SEARCH INPUT */}
            <Input
                placeholder="Tìm theo tên truyện..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ marginBottom: 16, width: 300 }}
            />

            {/* 👉 TABLE */}
            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />
        </>
    );
};

export default StoryList;