import { useEffect, useState } from 'react'
import { IPricingTable } from '../../interfaces'
import httpService from '../../services/http.service'
import PricingTable from './PricingTable'
import LoadingSpinner from '../common/loadingSpinner'
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
  return (
    <>
      {!pricingTable.length && !isError && <LoadingSpinner />}
      {!!pricingTable.length && <PricingTable tableData={pricingTable} />}
      {/* Simple error handling for user */}
      {isError && <div>Sorry, error occured...</div>}
    </>
  )
}

export default PricingTableContainer
