import readline from 'readline';

async function api() {
    const url = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await url.json();
    console.log(data);
    return data;
}

const data = await api();



function main() {
    listUsers(data);

    console.log("1. List Users");
    console.log("2. Create User");
    console.log("3. Exit");
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                listUsers(data);
                break;
            case "2":
                // Create 
                break;
            case "3":
                console.log("Exiting...");
                process.exit(0);
            default:
                console.log("Invalid choice");
        }
        rl.close();
    });
}

main();

function listUsers(users) {
    users.forEach(user => {
        console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
        console.log("-----------------------------");
    });
}

async function createUser(value) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(value)
        }
    )

    const result = await response.json()
    console.log(result);
    return result
}
