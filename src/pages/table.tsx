import { Table } from "antd";


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
        dataIndex: "major"

    },
];

const data = [
    {
        id: 1,
        name: "John",
        age: 25,
        major: "FE1"
    },
    {
        id: 2,
        name: "Anna",
        age: 30,
        major: "FE2"
    },
    {

        id: 3,
        name: "David",
        age: 28,
        major: "FE3"
    },
    {
        id: 4,
        name: "hoàng",
        age: 20,
        major: "FE4"
    },
    {

        id: 4,
        name: "hoàng",
        age: 20,
        major: "tốp 1 thế giới"
    },
];

export default function UserTable() {
    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    );
}