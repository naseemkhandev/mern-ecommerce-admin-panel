import { useTable } from "react-table";

function TableHOC({ columns, data, containerClassName, title }) {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return function HOC() {
		<div className={containerClassName}>
			<h2>{title}</h2>

			<table className="w-full" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th key={column} {...column.getHeaderProps()}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps}>
					{rows.map((row) => {
						prepareRow();

						return (
							<tr key={row} {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td key={cell} {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>;
	};
}

export default TableHOC;
