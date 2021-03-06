import await { dbCall } from "./db-connection.js";

export const createUser = async name => {
	command = `CREATE USER ${name}`;
	// This is a normal await, because it's in an async function
	await dbCall({ command });
}
