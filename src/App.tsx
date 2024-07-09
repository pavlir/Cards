import './App.css'
import { Cards } from './components/Cards'

function App() {

  return (
    <>
      <Cards src='https://picsum.photos/150'>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Cards>

      <hr/>

      <Cards>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Cards>

      <hr/>

      <Cards src='https://picsum.photos/150'>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Cards>
    </>
  )
}

export default App
