import React from 'react'
import { CSVLink } from 'react-csv'

const csvHeaders = [
    { label:"Coin", key:"coin"},
    { label:"Address", key:"address"},
    { label:"Balance", key:"balance"},
  ]

const CSVDownload = ({data}) => {
    return (
        <CSVLink className="download" filename="balance" headers={csvHeaders} data={data}>Download CSV</CSVLink>
    )
}

export default CSVDownload
