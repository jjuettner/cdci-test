// Runs once on first container start (only if the data volume is empty).
// Creates a dedicated app user with readWrite access to the app database.

db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.createUser({
	user: "appuser",
	pwd: "apppassword", // override via env in production
	roles: [{ role: "readWrite", db: process.env.MONGO_INITDB_DATABASE }],
});
