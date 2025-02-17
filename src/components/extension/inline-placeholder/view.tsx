import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react"

const View = ({ node, updateAttributes, deleteNode }: NodeViewProps) => {
    const { type, value, placeholder } = node.attrs
    console.log('node', node)
    // 当输入变化时更新 value 属性
    const handleInput = (e: React.FormEvent) => {
        const newValue = (e.target as HTMLElement).innerText || '';
        // 更新节点的 value 属性
        updateAttributes({ value: newValue });
    };
    return (
        <NodeViewWrapper as="span" onKeyDown={() => {

        }}>
            <NodeViewContent
                as="span"
                className="outline-none text-sm font-normal text-gray-70 leading-5"
                contentEditable
                suppressContentEditableWarning={true}
                data-node-type={type}
                onInput={handleInput}
            >
                {value || placeholder}
            </NodeViewContent>
        </NodeViewWrapper>
    )
}

export default View