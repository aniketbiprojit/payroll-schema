const { getConnectionOptions, createConnection } = require('typeorm')

let connect = async () => {
	try {
		const connectionOptions = await getConnectionOptions()
		try {
			let connection = await createConnection(connectionOptions)
			return connection
		} catch (err) {
			if (err.errno === 1049) {
				let db = connectionOptions['database']
				delete connectionOptions['database']
				try {
					let connection = await createConnection(connectionOptions)
					await connection.query(`CREATE DATABASE ${db}`)
					return connection
				} catch (err) {
					console.error(err)
				}
			} else {
				console.log(err)
			}
		}
	} catch (err) {
		console.error('Most likely your connection options are missing or mysql is not installed.')
		console.error(err)
	}
}

module.exports = async () => {
	let connection = await connect()

	console.log('Connection OK => ', connection.driver.database)
}
