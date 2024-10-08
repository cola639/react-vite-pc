import { Modal } from 'antd-mobile';
import { useEffect, useState } from 'react';

// 自定义 Hook 用于检查版本更新
const useCheckUpdate = () => {
  const currentVersion = import.meta.env.APP_VERSION;
  const interval = 30 * 1000; // 检查更新间隔，单位为毫秒

  useEffect(() => {
    const checkForUpdates = setInterval(() => {
      fetch('/version.json') // 获取public发布的版本号
        .then((response) => {
          console.log('🚀 >> .then >> response:', response);
          return response.json(); // 正确地解析 JSON 数据
        })
        .then((data) => {
          console.log('🚀 >> .then >> data:', data); // 打印 data 对象
          if (data.version !== currentVersion) {
            // 可以触发更新或请求新资源
            Modal.confirm({
              title: '系统更新提示',
              content: '系统后台有更新，请点击“立即刷新”刷新页面。',
              confirmText: '立即刷新',
              cancelText: '稍后提醒我',
              onConfirm: () => {
                window.location.reload();
              }
            });
          }
        })
        .catch((error) => {
          console.error('Failed to check for updates:', error);
        });
    }, interval); // 传入的时间间隔，默认为1分钟

    return () => clearInterval(checkForUpdates); // 清理定时器
  }, []);
};

export default useCheckUpdate;
