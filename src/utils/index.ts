// 我是 {{宫本武藏}}, 我的工作是 {{吃饭睡觉打拳击}} => `

import type { JSONContent } from '@tiptap/core';

export function deserialize(input: string) {
  const result: JSONContent = {
    type: 'doc',
    content: [],
  };
  const regex = /{{(.*?)}}/g;
  let lastIndex = 0;
  while (true) {
    const match = regex.exec(input);
    if (!match) {
      break;
    }

    const [full, value] = match;
    console.log('aa', full, value);
    result.content?.push({
      type: 'text',
      text: input.slice(lastIndex, match.index),
    });
    result.content?.push({
      type: 'inlinePlaceholder',
      attrs: {
        placeholder: value,
        value: '',
      },
    });
    lastIndex = regex.lastIndex;
  }

  return result;
}

export const serialize = (str: string) => {};
