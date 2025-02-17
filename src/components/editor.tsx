import { EditorProviderProps, JSONContent, useCurrentEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'
import InlinePlaceholder from './extension/inline-placeholder'
import { serialize } from '../utils'

export const useEditorProps = (content: string | JSONContent) => {
    return {
        editorContainerProps: {
            className: 'w-full',
        },
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
        content,
        editorProps: {
            attributes: {
                class: 'w-full prose-sm focus:outline-none w-3/4 p-10 bg-white shadow rounded-[16px]',
            },
            handleKeyDown: (_, event) => {
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
    } satisfies EditorProviderProps
}

export default function Editor() {
    const { editor } = useCurrentEditor()
    return <>
        <button className='py-2 px-3 rounded-lg bg-blue-400 text-white' onClick={() => {
            const json = editor?.getJSON();
            if (!json) {
                return
            }
            console.log('result', serialize(json))

            alert(`${JSON.stringify(json, null, 2)}`)
        }}>提交</button>
    </>
}