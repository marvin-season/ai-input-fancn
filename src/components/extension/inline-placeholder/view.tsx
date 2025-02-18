import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import { memo } from "react";
const caculteWidth = (value: string) => {
    // 如果是英文的话，一个字符占用 0.5rem，中文占用 1rem
    // 英文的个数
    const englishCount = value.replace(/[\u4e00-\u9fa5@#]/g, '').length
    // 中文的个数
    const chineseCount = value.length - englishCount
    return englishCount * 0.5 + chineseCount * 0.9
}
const View = ({ node, updateAttributes }: NodeViewProps) => {
    const { type, value, placeholder } = node.attrs
    // 当输入变化时更新 value 属性
    const handleInput = (e: React.FormEvent) => {
        const inputElement = e.target as HTMLInputElement;
        const newValue = inputElement.value || '';
        console.log('newValue', newValue)
        updateAttributes({ value: newValue })
    };

    const count = caculteWidth(value ? value : placeholder);

    return (
        <NodeViewWrapper as="span">
            <NodeViewContent
                as="input"
                style={{ width: `${count}rem` }}
                className={`outline-none border-b border-blue-500 mx-2 box-border text-gray-500`}
                contentEditable={false}
                data-node-type={type}
                // onChange={handleInput}
                onInput={handleInput}
                placeholder={placeholder}
                defaultValue={value}
            >

            </NodeViewContent>
        </NodeViewWrapper>
    )
}

export default memo(View)