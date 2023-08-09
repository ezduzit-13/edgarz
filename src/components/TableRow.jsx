import React from 'react'

const TableRow = ({children}) => {
  return (
    <tr>
      <td>
        <div className='center-here'>
          {children}
        </div>
      </td>
    </tr>
  )
}

export default TableRow