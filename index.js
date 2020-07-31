require('./server')().then(data=>{
    console.log('Connection OK => ',data.driver.database)
})