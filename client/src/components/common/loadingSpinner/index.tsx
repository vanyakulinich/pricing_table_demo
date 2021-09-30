import Loader from 'react-loader-spinner'
import './styles.css'

const LoadingSpinner = () => (
  <div className='spinner-wrapper '>
    <Loader type='Puff' color='#00BFFF' height={50} width={50} />
  </div>
)

export default LoadingSpinner
