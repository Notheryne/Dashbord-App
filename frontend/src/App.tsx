import type { ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import { NextUIProvider } from "@nextui-org/react"

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<NextUIProvider>
				<main className={"dark"}>
					<Dashboard text={"test"} />
				</main>
			</NextUIProvider>
		</BrowserRouter>
	)
}
