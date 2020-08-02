/**
 * Server module
 * @module server
 */

import { Connection } from 'typeorm'

const { getConnectionOptions, createConnection } = require('typeorm')

/**
 * Create a connection for the server to use.
 * Takes no parameter.
 * Expects ormconfig.json to be present with
 * data declared.
 * @returns {Connection} connection
 */
let connect = async ():Promise<Connection> => {
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

/** Return a function which returns the connection object.
 * Calls the connect function which is not exported.
 * Increases readability. */
module.exports =
	/** @returns {Connection} connection. */
	async (): Promise<Connection> => {
		let connection = await connect()
		console.log('Connection OK => ', connection.driver.database)
		return connection
	}
