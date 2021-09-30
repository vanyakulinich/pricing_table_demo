import { useEffect, useState } from 'react'
import { IPricingTable } from '../../interfaces'
import httpService from '../../services/http.service'
import PricingTable from './PricingTable'

/**
 * NOTE: we don't use Redux for this demo, since it actually doesn't make sence.
 * IN case of expending this demo, api call and table storing will be removed to redux store
 * and fetching table will be triggered via action call
 */

const PricingTableContainer = () => {
  const [pricingTable, setPricingTable] = useState<IPricingTable>([])
  const [isError, setIsError] = useState<Boolean>(false)

  // fetch table on mount
  useEffect(() => {
    ;(async () => {
      try {
        const pricingTable: IPricingTable = await httpService.getPricingTable()
        setPricingTable(pricingTable)
      } catch (err) {
        setIsError(true)
      }
    })()
  }, [])

  console.log({ pricingTable })
  return <PricingTable />
}

export default PricingTableContainer
