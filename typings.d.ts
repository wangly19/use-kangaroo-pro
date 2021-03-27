declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

/** [type]: 定义define中可能用到的类型变量 */

declare const INTERFACE_URL: string; // 接口请求地址

declare const OSS_URL: string; // OSS资源地址

declare const APP_SELECT_KEY: string; // 系统调用密钥
