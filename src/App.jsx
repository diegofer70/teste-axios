import axios from 'axios'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('chamei o useEffect')

    const realizarRequest = async () => {
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/todos/1')
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    realizarRequest()
  }, [])

  return (
    <>
    <h1>Teste</h1>
    <div>imagem</div>
    <div style={{ color: 'red' }}>titulo</div>
    <div style={{ color: 'blue' }}>artista</div>

    <div>
      <div>tag 1</div>
      <div>tag 2</div>
    </div>
    </>
  )
}

export default App
