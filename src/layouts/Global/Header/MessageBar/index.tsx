import { useState } from 'react';
import { Dropdown, Card, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import styles from './index.less';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];
function TabsCard() {
  const [key, setSelectKey] = useState('tab1');

  return (
    <Card tabList={tabList} activeTabKey={key} onTabChange={setSelectKey}>
      1111
    </Card>
  );
}

export default function MessgaeBar() {
  return (
    <div className={styles.messageBar}>
      <Dropdown overlay={<TabsCard />}>
        <Badge count={0}>
          <BellOutlined className={styles.icon} />
        </Badge>
      </Dropdown>
    </div>
  );
}
