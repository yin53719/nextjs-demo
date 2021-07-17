import React from "react";
import { Navbar,Messages,TestContext } from "../components/context";



export default function App111() {
  return (
	<TestContext.Provider 
		value={{
			username: 'superawesome',
		}}
	>
		<div className="test">
			<Navbar />
			<Messages />
		</div>
	</TestContext.Provider>
  );
}
