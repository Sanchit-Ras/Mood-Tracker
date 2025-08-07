import HappyTracker from './HappyTracker'
import HappyIncrementor from './HappyIncrementor'
import SadTracker from './SadTracker'
import SadIncrementor from './SadIncrementor'
import { ClearButton } from './ClearButton'

function App() {
  return (
    <>
      <HappyTracker/>
      <SadTracker/>
      <HappyIncrementor/>
      <SadIncrementor/>
      <ClearButton/>
    </>
  )
}

export default App
