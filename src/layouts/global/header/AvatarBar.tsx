import { useModel } from '@/.umi/plugin-model/useModel';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from 'antd';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown = () => {

  const { initialState } = useModel('@@initialState')

  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>

      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.avatarBar}>
      <Dropdown overlay={menuHeaderDropdown} placement="bottomCenter">
        <span className={styles.avatarText}>
          <Avatar
            className={styles.avatarImage}
            size="small"
            src={ initialState?.user?.avatar }
            alt="avatar"
          />
          { initialState?.user?.name }
        </span>
      </Dropdown>
    </div>
  );
};

export default AvatarDropdown;
