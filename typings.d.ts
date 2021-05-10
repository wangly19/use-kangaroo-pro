import type { ReactNode } from 'react'
import type {
  BasicLayoutProps
} from '@ant-design/pro-layout';

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string
  export default url
}

/** [type]: 定义全局可能用到的类型变量 */
declare global {
  // #系统调用密钥
  const APP_SELECT_KEY: string
  // #OSS资源地址
  const OSS_URL: string
  // #接口请求地址
  const INTERFACE_URL: string
  // #字体图标资源
  const ICON_FONT_URL: string
  
  const MOCK_URL: string
}

export type AuthRoute = BasicLayoutProps['route'] & {
  icon?: ReactNode | string
  auth?: string[]
}
