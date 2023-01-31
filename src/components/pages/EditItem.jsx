import { useParams } from "react-router-dom"

export default function Edititem() {

	let { id } = useParams()

	return (
		<div>
			{id}
		</div>
	)
}