const http = require("http");

const {
        addUser,
        checkUser
} = require("./controller/userController");

const server = http.createServer((request, res) => {
        console.log(request.url);
        console.log(request.method);
        console.log(request.headers);
        if (request.url === "/api/add/user" && request.method == "OPTIONS") {
                addUser(request, res);
        } else if (request.url === "/api/login" && request.method == "OPTIONS") {
                checkUser(request, res);
        }
        else {
                console.log("Something Went Wrong...");
        }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));