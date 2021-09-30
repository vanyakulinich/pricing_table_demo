import React, { ReactElement, useCallback, useMemo } from 'react'
import { IPricingTable } from '../../interfaces'

import './styles.css'

type Props = {
  tableData: IPricingTable
}

const PricingTable: React.FC<Props> = ({ tableData }) => {
  // for simplicity use simple math random, no need to load external lib, e.g. uuid
  const generateMemoizedKey = useCallback(() => Math.random(), [])

  const renderCell = (content: string): ReactElement => (content === 'X' ? <>&#10004;</> : <>{content}</>)

  return (
    <table className='table-wrapper'>
      <tbody>
        {tableData.map((row, idx) => {
          const isGroup: boolean = !row.Starter && !row.Advanced && !row.Enterprise
          return (
            <tr className={idx ? 'table-row' : 'table-row headers'} key={generateMemoizedKey()}>
              <td className={isGroup ? 'table-cell tiers group_headers' : 'table-cell tiers'}>{row.Tiers}</td>
              <td className='table-cell'>{renderCell(row.Starter)}</td>
              <td className='table-cell'>{renderCell(row.Advanced)}</td>
              <td className='table-cell'>{renderCell(row.Enterprise)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PricingTable
