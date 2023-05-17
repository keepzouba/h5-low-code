'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsProps } from 'antd';
import {
  paddingCss,
  paddingCssSchema,
  marginCss,
  marginCssSchema,
  fontCss,
  fontCssSchema,
  transformStyle
} from '@/views/editor';
import style from './index.module.scss';
import Image from 'next/image'

export function ImgTextTab({
  tabs, defaultActive, tabPosition, style: commonStyle
}:any) {
  const [activeKey, setActiveKey] = useState(defaultActive);

  useEffect(() => {
    setActiveKey(defaultActive);
  }, [defaultActive]);

  const items: TabsProps['items'] =tabs.map((tab:any,i: string) => {
    return {
      key: tab.name,
      label: tab.name,
      children: tab.items.map((item:any,j: string) => {
        return (
          <a
          key={i + '-' + j}
            className={style.itemWrapper}
            href={item.link}
          >
            <Image src={item.cover} alt={item.title} />
            <h1>{item.title}</h1>
          </a>
        );
      })
    }
  });
  

  return (
    <div className={style.wrapper} style={transformStyle(commonStyle)}>
      <Tabs
        tabPosition={tabPosition}
        activeKey={activeKey}
        onChange={setActiveKey}
      >
      </Tabs>
    </div>
  );
}

ImgTextTab.defaultProps = {
  defaultActive: '标签一',
  tabPosition: 'top',
  tabs: [
    {
      name: '标签一',
      items: [
        {
          cover:
            'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
          title: '为什么使用 Ramiko？',
          link: '/'
        },
        {
          cover:
            'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
          title: '为什么使用 Ramiko？',
          link: '/'
        }
      ]
    },
    {
      name: '标签二',
      items: [
        {
          cover:
            'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
          title: '为什么使用 Ramiko？',
          link: '/'
        },
        {
          cover:
            'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
          title: '为什么使用 Ramiko？',
          link: '/'
        }
      ]
    }
  ],
  style: {
    margin: marginCss,
    padding: paddingCss,
    font: fontCss
  }
};

(ImgTextTab as any).schema = {
  defaultActive: {
    title: '默认选中',
    type: 'text'
  },
  tabPosition: {
    title: '页签位置',
    type: 'radio',
    options: ['top', 'bottom', 'left', 'right']
  },
  tabs: {
    type: 'children',
    min: 2,
    title: '标签',
    schema: {
      name: {
        title: '标题',
        type: 'text'
      },
      items: {
        type: 'children',
        min: 1,
        title: '图文',
        schema: {
          cover: {
            title: '图片链接',
            type: 'img',
            width: 686,
            height: 180
          },
          title: {
            title: '文字',
            type: 'text'
          },
          link: {
            title: '跳转链接',
            type: 'text'
          }
        }
      }
    }
  },
  style: {
    type: 'children',
    title: '基本样式',
    schema: {
      margin: marginCssSchema,
      padding: paddingCssSchema,
      font: fontCssSchema
    }
  }
};
