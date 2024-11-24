
const TableBody = ({ columns, rows, selectProps, setSelectedRows, selectedRows, getVarient }:any) => {

	return <tbody>
		{rows.map((row:any, index:any) => {
			return <tr className="bg-white" key={'table-row' + index} style={{border:'1px solid #E9E9E9'}}>
				{columns.map((col:any, index:any) => {
					return <td  style={{maxWidth: '300px'}}key={'table-row' + index} className={`${getVarient()} ${col?.color || ''}`}>{col.renderLogic(row)}</td>
				})}
			</tr>
		})}
	</tbody>
}

export default TableBody;
