import { Table, Tag, Button, Space } from "antd";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
    },
    {
        title: "Major",
        dataIndex: "major",
    },
];

const datas = [
    {
        id: 1,
        name: "John",
        age: 25,
        major: "FE1",
    },
    {
        id: 2,
        name: "Anna",
        age: 30,
        major: "FE2",
    },
    {
        id: 3,
        name: "David",
        age: 28,
        major: "FE3",
    },
    {
        id: 4,
        name: "Hoàng",
        age: 20,
        major: "FE4",
    },
    {
        id: 5,
        name: "Minh",
        age: 21,
        major: "CC",
    },
];

const data = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Phone", price: 500, category: "Electronics" },
    { id: 3, name: "Shirt", price: 50, category: "Clothing" },
    { id: 4, name: "Shoes", price: 120, category: "Fashion" },
    { id: 5, name: "Watch", price: 200, category: "Accessories" },
];

const column = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
];


// ---------------- BÀI 3 ----------------

const userColumns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (status: string) => (
            <Tag color={status === "active" ? "green" : "red"}>
                {status}
            </Tag>
        ),
    },
    {
        title: "Action",
        render: () => (
            <Space>
                <Button type="primary">Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        ),
    },
];

const userData = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        status: "active",
    },
    {
        id: 2,
        name: "Anna",
        email: "anna@gmail.com",
        status: "inactive",
    },
    {
        id: 3,
        name: "David",
        email: "david@gmail.com",
        status: "active",
    },
];

// ---------------------------------------

export function UserTable() {
    return (
        <>
            {/* Bài 2 */}
            <Table
                columns={column}
                dataSource={data}
                rowKey="id"
                pagination={{ pageSize: 3 }}
            />

            <Table
                columns={columns}
                dataSource={datas}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />

            {/* Bài 3 */}
            <Table
                columns={userColumns}
                dataSource={userData}
                rowKey="id"
            />
        </>
    );
}