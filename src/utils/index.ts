// 我是 {{宫本武藏}}, 我的工作是 {{吃饭睡觉打拳击}} => `

import type { JSONContent } from '@tiptap/core';

export function deserialize(input: string) {
  const content: JSONContent['content'] = [];
  const regex = /{{(.*?)}}/g; // 匹配 {{...}} 占位符
  let lastIndex = 0;

  while (true) {
    const match = regex.exec(input);
    if (!match) {
      // 如果没有更多匹配，添加剩余的普通文本
      if (lastIndex < input.length) {
        content.push({
          type: 'text',
          text: input.slice(lastIndex),
        });
      }
      break;
    }

    const [full, value] = match;

    // 添加占位符前的普通文本
    if (lastIndex < match.index) {
      content.push({
        type: 'text',
        text: input.slice(lastIndex, match.index),
      });
    }

    // 添加占位符
    content.push({
      type: 'inlinePlaceholder',
      attrs: {
        placeholder: value,
        value: '',
      },
    });

    // 更新 lastIndex
    lastIndex = regex.lastIndex;
  }

  return {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content,
      },
    ],
  } satisfies JSONContent;
}
export const serialize = (str: string) => {};
