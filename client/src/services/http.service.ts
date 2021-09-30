import axios from 'axios'
import { IHttpService, IPricingTable } from '../interfaces'

class HttpService implements IHttpService {
  apiHost = process.env.REACT_APP_API_HOST

  async getPricingTable(): Promise<IPricingTable> {
    const { data: pricingTable } = await axios.get(`${this.apiHost}/pricing-table`)
    return pricingTable
  }
}

// expose singleton of service
export default new HttpService()
