import { Table } from "antd";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const data: Product[] = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Phone", price: 500, category: "Electronics" },
    { id: 3, name: "Shirt", price: 50, category: "Clothing" },
    { id: 4, name: "Shoes", price: 120, category: "Fashion" },
    { id: 5, name: "Watch", price: 200, category: "Accessories" },
];

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Product Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Category",
        dataIndex: "category",
        key: "category",
    },
];

export default function ProductTable() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{ pageSize: 3 }}
        />
    );
}