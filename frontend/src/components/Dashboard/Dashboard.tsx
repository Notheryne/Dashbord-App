import { map } from "lodash"
import DashboardHeader from "./DashboardHeader"

interface DashboardProps {
	text: string
}

const Dashboard = ({ text }: DashboardProps) => {
	const widgets = [
		{
			name: "1",
			placement: { x: 1, y: 1, width: 9, height: 3 }
		},
		{
			name: "2",
			placement: { x: 1, y: 5, width: 4, height: 3 }
		},
		{
			name: "3",
			placement: { x: 5, y: 5, width: 5, height: 3 }
		},
		{
			name: "4",
			placement: { x: 2, y: 8, width: 6, height: 3 }
		},
		{
			name: "5",
			placement: { x: 1, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 2, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 3, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 4, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 5, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 6, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 7, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 8, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 9, y: 11, width: 1, height: 1 }
		},
		{
			name: "5",
			placement: { x: 10, y: 11, width: 1, height: 1 }
		}
	]
	return (
		<div className={"p-5"}>
			<DashboardHeader />

			<div className={"dashboard"}>
				{map(widgets, (widget, i) => {
					const {
						name,
						placement: { x, y, width, height }
					} = widget

					return (
						<div
							style={{
								gridColumn: `${x} / ${x + width}`,
								gridRow: `${y} / ${y + height}`,
								border: "1px solid red"
							}}
						>
							{name}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Dashboard
