import React from 'react';
// import Icons from '../../icons/Icons';

const TableHeader = ({ tableHeaderCustomclasses = '', columns, sorting, selectProps = { isSelectAll: false }, allChecked, selectAllCb = () => { }, getVarient }:any) => {
	const { isSortable = false, onSortChangeCb } = sorting || {};

	return (
		<thead className={`bg-neutral-10 text-neutral-70 font-medium text-sm ${tableHeaderCustomclasses}`} > 
			<tr>
				{
					columns.map((col:any, index:any) => {
						return <React.Fragment key={"table-column-" + index} >
							{isSortable ? (
								<th scope="col" className={`text-left px-4 py-3`}>
									{col.label}
									{col.sort ? (
										<span
											className='inline-block ml-2'
											style={{cursor: 'pointer'}}
											onClick={() => onSortChangeCb(col.sort)}>
											{/* <Icons iconName="sortingIcon" /> */}
										</span>
									) : null}
								</th>) : (
								<th scope="col" className={`text-left px-4 py-3`}>
									{col.label}
								</th>
							)}
						</React.Fragment>
					})
				}
			</tr>
		</thead>
	)
}

export default TableHeader;
