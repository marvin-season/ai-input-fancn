import { Node, mergeAttributes } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    inlinePlaceholder: {};
  }
}

interface InlinePlaceholderAttributes {
  placeholder: string;
  value: string;
  type: 'input';
  HTMLAttributes?: Record<string, any>;
}

const InlinePlaceholder = Node.create<InlinePlaceholderAttributes>({
  name: 'inlinePlaceholder',

  group: 'inline',

  inline: true,

  atom: true,
  addOptions() {
    return {
      HTMLAttributes: {
        style:
          'color: gray; font-size: 0.9em; padding: 2px 3px; margin: 0 1px; cursor: pointer;',
        'data-type': this.name,
        class: 'inlinePlaceholder',
      },
      placeholder: '请输入内容',
      type: 'input',
      value: '',
    };
  },

  addAttributes() {
    return {
      placeholder: {
        default: '',
        parseHTML: (element: HTMLElement) =>
          element.getAttribute('data-placeholder') || '',
        renderHTML: (attributes: InlinePlaceholderAttributes) => {
          return {
            'data-color': attributes.placeholder,
            style: `border-bottom: 1px solid blue`,
          };
        },
      },
      value: {
        default: '',
        // rendered: false,
        // 从 html 中解析 为 prosemirror 中的 state
        parseHTML: (element: HTMLElement) =>
          element.getAttribute('data-value') || '',
        renderHTML: (attributes: InlinePlaceholderAttributes) => {
          return {
            'data-value': attributes.value,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type=${this.name}]`,
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      'span',
      mergeAttributes(this.options.HTMLAttributes || {}, HTMLAttributes),
      node.attrs.placeholder,
    ];
  },
});

export default InlinePlaceholder;
