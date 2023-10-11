import React from "react";

const PropTypes = "pagename";

export default function Header({ setPage }) {
	return (
		<header>
			<h1>Vlads Schedule Page</h1>
			<img src="https://placekitten.com/150/150" alt="vlad" />
			<nav>
				<ul>
					<li>
						<button onClick={() => setPage("Summary")}>Summary</button>
					</li>
					<li>
						<button onClick={() => setPage("Sunday")}>Sunday</button>
					</li>
					<li>
						<button onClick={() => setPage("Monday")}>Monday</button>
					</li>
					<li>
						<button onClick={() => setPage("Tuesday")}>Tuesday</button>
					</li>
					<li>
						<button onClick={() => setPage("Wednesday")}>Wednesday</button>
					</li>
					<li>
						<button onClick={() => setPage("Thursday")}>Thursday</button>
					</li>
					<li>
						<button onClick={() => setPage("Friday")}>Friday</button>
					</li>
					<li>
						<button onClick={() => setPage("Saturday")}>Saturday</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

Header.propTypes = {
	setPage: PropTypes.toString.isRequired,
};
