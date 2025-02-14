import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Markdown } from 'tiptap-markdown'
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
        ],
        content: `# hello world`,
    })

    return <>
        <EditorContent className="w-full h-full  editorforce" editor={editor} />
    </>
}