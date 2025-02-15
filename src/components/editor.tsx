import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'
import Template from './extension/template'
export default function Editor() {
    const editor = useEditor({
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
            Template
        ],
        content: `<custom-inline type="workprogress" label="工作进展"></custom-inline>`,
        editorProps: {
            attributes: {
              class: 'prose-sm focus:outline-none',
            },
        },
    })

    return <>
        <EditorContent className="w-3/4 p-10 bg-white shadow rounded-[16px]" editor={editor} />
    </>
}