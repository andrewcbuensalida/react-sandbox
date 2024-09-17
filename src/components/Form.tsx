import React, { useState } from "react";

interface Order {
	id: string;
	name: string;
	didConsent?: boolean;
	cut?: string;
	station?: string;
}

function Form() {
	const [name, setName] = useState("");
	const [didConsent, setDidConsent] = useState(false);
	const [cut, setCut] = useState("");
	const [station, setStation] = useState("");
	const [orders, setOrders] = useState<Order[]>([]);

	function handleSubmit(e: any) {
    // console.log(e.target.elements.consent.checked); // a different way to get the value of the input field
		e.preventDefault();
		setOrders((orders) => [
			...orders,
			{
				id: String(orders.length + 1),
				name,
				didConsent,
				cut,
				station,
			},
		]);
		setName("");
		setDidConsent(false);
		setCut("");
		setStation("");
	}
	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Name"
					/>
				</div>
				<div>
					<label htmlFor="consent">Consent:</label>
					<input
						type="checkbox"
						id="consent"
						checked={didConsent}
						onChange={(e) => setDidConsent(e.target.checked)}
					/>
				</div>
				<div>
					<label htmlFor="cut">Cut:</label>
					<select
						id="cut"
						value={cut}
						onChange={(e) => setCut(e.target.value)}
					>
						<option value="">Select a cut</option>
						<option value="rib-eye">rib-eye</option>
						<option value="filet mignon">filet mignon</option>
					</select>
				</div>
        <div>
          <label htmlFor="station">Station:</label>
          <div>
            <input
              type="radio"
              id="station-100"
              name="station"
              value="100"
              checked={station === "100"}
              onChange={(e) => setStation(e.target.value)}
            />
            <label htmlFor="station-100">100</label>
          </div>
          <div>
            <input
              type="radio"
              id="station-200"
              name="station"
              value="200"
              checked={station === "200"}
              onChange={(e) => setStation(e.target.value)}
            />
            <label htmlFor="station-200">200</label>
          </div>
        </div>
				<button type="submit">Submit</button>
			</form>
			<ul>
				{orders.map((o) => (
					<li key={o.id}>
						<>Name: {o.name},</>
						<>Consented: {o.didConsent ? "Yes" : "No"},</>
						<>Cut: {o.cut},</>
						<>Station: {o.station}</>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Form;
