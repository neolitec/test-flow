import { Background, Controls, MiniMap, ReactFlow, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import styled from "styled-components";
import './overview.css';

const Container = styled.div`
  width: 800px;
  height: 600px;
`;


import CustomNode from "./CustomNode";
import { nodes as initialNodes } from './initial-elements';

const minimapStyle = {
  height: 120,
};

const nodeTypes = {
  custom: CustomNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes); 

  return (
    <Container>
      <ReactFlow nodes={nodes} fitView attributionPosition="top-right" nodeTypes={nodeTypes}>
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </Container>
  )
}

export default App
