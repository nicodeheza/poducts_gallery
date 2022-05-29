export default function Options({edit}) {
	return (
		<>
			{!edit ? <option defaultValue>Any</option> : null}
			<option value="T-shirt">T-shirt</option>
			<option value="Shirt">Shirt</option>
			<option value="Trousers">Trousers</option>
			<option value="Jacket">Jacket</option>
			<option value="Shorts">Shorts</option>
		</>
	);
}
