import { Background, Controls, MiniMap, ReactFlow, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import './overview.css';

import { nodes as initialNodes } from './initial-elements';

const minimapStyle = {
  height: 120,
};

// const nodeTypes = {
//   custom: CustomNode,
// };

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes); 

  return (
    <ReactFlow nodes={nodes} fitView attributionPosition="top-right">
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  )
}

export default App
