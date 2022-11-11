const db = require('../database/data');

async function addOneUser(phoneNumber, userName, password) {
        // console.log("we r in model now");
        const result = await db.query(
                `insert into userInfo values("${userName}","${phoneNumber}","${password}")`
        );

        return result[0];
}

async function fetchUserInfo(phoneNumber, password) {
        // console.log("we r in model now");
        const result = await db.query(
                `select * from userinfo 
            where 
            phoneNumber ="${phoneNumber}" 
            and 
            password = "${password}"`
        );

        return result[0];
}

module.exports = {
        addOneUser,
        fetchUserInfo
}