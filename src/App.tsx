// src/App.tsx
import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import MainTable from './components/MainTable';
import LineGraph from './components/LineGraph';
import JobsTable from './components/JobsTable';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleRowClick = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: '#001529' }}>
        <Title style={{ color: 'white' }} level={2}>ML Engineer Salaries</Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <LineGraph />
        <MainTable onRowClick={handleRowClick} />
        <JobsTable year={selectedYear} />
      </Content>
    </Layout>
  );
};

export default App;