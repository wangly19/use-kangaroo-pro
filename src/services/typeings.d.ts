// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CommonResult<T = any> = {
    data: T,
    code: string,
    showMessage: false | {
      method: 'message' | 'notification',
      type: 'success' | 'error' | 'info' | 'warning',
      message: string,
      description?: string
    }
  }

  type UserInfo = {
    name: string,
    avatar: string,
    uid: string,
    title: string,
    useMenuAuth: string[],
    usePageAuth: number[]
  }

  type GithubIssueItem = {
    url: string;
    id: number;
    number: number;
    title: string;
    labels: {
      name: string;
      color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
  };

  type TableRequestParams = {
    pageSize?: number | undefined;
    current?: number | undefined;
    keyword?: string | undefined;
  }
  
}
