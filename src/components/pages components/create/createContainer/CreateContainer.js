import CreateMain from '../createMain/CreateMain';
import CreateSub from '../createSub/CreateSub';

function CreateContainer() {
  return (
    <div style={{display:'flex', gap:'20px'}}>
        <CreateMain />
        <CreateSub />
    </div>
  )
}

export default CreateContainer;