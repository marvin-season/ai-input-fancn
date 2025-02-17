import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'
// import Template from './extension/template'
import InlinePlaceholder from './extension/inline-placeholder'
export default function Editor() {
    const editor = useEditor({
        autofocus: true,
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Markdown.configure({
                html: true,
                transformPastedText: true,
                transformCopiedText: true,
                breaks: true,
                linkify: true,
            }),
            InlinePlaceholder
        ],
        // content: `我是 <span data-type="inlinePlaceholder" data-placeholder="张三"></span>`,
        content: `我是 <span data-type="inlinePlaceholder" data-placeholder="张三"></span> , 我的工作是 <span data-type="inlinePlaceholder" data-placeholder="开发"></span>`,
        editorProps: {
            attributes: {
              class: 'prose-sm focus:outline-none',
            },
            handleKeyDown: (view, event) => {
                if (event.key === '@') {
                  alert('trigger @')
                  return true
                }
                // 监听键盘事件
                if (event.key === 'Enter' && !event.shiftKey) {
                    console.log('trigger Enter')
                  return true
                }
        
                return false // 返回 false 不拦截事件
              },
        },
    })

    return <>
        <button className='py-2 px-3 rounded-lg bg-blue-400 text-white' onClick={() => {
            const json = editor?.getJSON();
            console.log('json', json)
            alert(`${JSON.stringify(json, null, 2)}`)
        }}>提交</button>
        <EditorContent className="w-3/4 p-10 bg-white shadow rounded-[16px]" editor={editor} />
    </>
}