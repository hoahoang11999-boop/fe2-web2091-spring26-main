import { Layout } from "antd";

import UserTable from "./table";

const { Header, Content, Footer } = Layout;

export default function Page() {
    return (
        <Layout>
            <Header style={{ color: "white" }}>Chào mừng bạn !</Header>
            <Content style={{ padding: 20 }}>
                <UserTable />


            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}