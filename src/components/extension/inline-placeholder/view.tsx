import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import { useState } from "react";

const View = ({ node, updateAttributes }: NodeViewProps) => {
    const { type, placeholder } = node.attrs
    console.log('node', node)
    // 当输入变化时更新 value 属性
    const handleInput = (e: React.FormEvent) => {
        const newValue = (e.target as HTMLInputElement).value || '';
        setValue(newValue)
        // 更新节点的 value 属性
        updateAttributes({ value: newValue });
    };

    const [value, setValue] = useState('')
    return (
        <NodeViewWrapper as="span" onKeyDown={() => {

        }}>
            <NodeViewContent
                as="input"
                className="outline-none !w-['unset'] !max-w-[100px]"
                contentEditable={false}
                data-node-type={type}
                onChange={handleInput}
                placeholder={placeholder}
                value={value}
            >

            </NodeViewContent>
        </NodeViewWrapper>
    )
}

export default View