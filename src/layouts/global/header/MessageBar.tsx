import { Dropdown, Badge, List, Avatar } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import styles from './index.less';

const data = [
  {
    title: 'Ant Design Title 1',
    id: 1,
    email: '1'
  },
  {
    title: 'Ant Design Title 2',
    id: 2,
    email: '1'
  },
  {
    title: 'Ant Design Title 3',
    id: 3,
    email: '1'
  },
  {
    title: 'Ant Design Title 4',
    id: 4,
    email: '1'
  },
];

function MessageCard() {

  return (
    <div className={ styles.card }>
      <List
        size="small"
            dataSource={ data }
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="1"
                />
                <Badge count={25} />
              </List.Item>
            )}
          ></List>
  </div>
  );
}

export default function MessgaeBar() {
  return (
    <div className={styles.messageBar}>
      <Dropdown 
        overlay={<MessageCard />} 
        placement="bottomCenter"
      >
        <Badge count={25}>
          <BellOutlined className={styles.icon} />
        </Badge>
      </Dropdown>
    </div>
  );
}
