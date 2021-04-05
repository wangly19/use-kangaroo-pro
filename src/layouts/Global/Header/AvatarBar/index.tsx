import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from 'antd';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown = () => {
  const menu = true
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={ styles.avatarBar }>
      <Dropdown overlay={ menuHeaderDropdown }>
        <span className={ styles.avatarText }>
        <Avatar className={ styles.avatarImage } size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" />
        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </span>
      </Dropdown>
    </div>
  )
}

export default AvatarDropdown
