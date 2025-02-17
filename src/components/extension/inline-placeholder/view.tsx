import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import { memo } from "react";
const View = ({node, updateAttributes }: NodeViewProps) => {
    const { type, value, placeholder } = node.attrs
    // 当输入变化时更新 value 属性
    const handleInput = (e: React.FormEvent) => {
        const inputElement = e.target as HTMLInputElement;
        const newValue = inputElement.value || '';
        console.log('newValue', newValue)
        updateAttributes({ value: newValue })
    };

    return (
        <NodeViewWrapper as="span" onKeyDown={() => {

        }}>
            <NodeViewContent
                as="input"
                className="outline-none"
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