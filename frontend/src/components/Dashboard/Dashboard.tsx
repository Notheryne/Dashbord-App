import { Button } from "@nextui-org/react"

type DashboardProps = {
	text: string
}

const Dashboard = ({ text }: DashboardProps) => {
	return (
		<div>
			Dashboard {text}
			<Button>NextUI test</Button>
		</div>
	)
}

export default Dashboard
