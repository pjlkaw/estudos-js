import inquirer from 'inquirer';

async function api() {
    const url = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await url.json();
    console.log(data);
    return data;
}

let data = await api();

async function main() {
    listUsers(data);

    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Choose an option:',
            choices: [
                { name: 'List Users', value: '1' },
                { name: 'Create User', value: '2' },
                { name: 'Delete User', value: '3' },
                { name: 'Exit', value: '4' }
            ]
        }
    ]);

    switch (choice) {
        case "1":
            listUsers(data);
            break;

        case "2":
            // Create 
            const { name, email } = await inquirer.prompt([
                { type: 'input', name: 'name', message: 'Name: ' },
                { type: 'input', name: 'email', message: 'Email: ' }
            ]);

            createUser({name: name, email: email}).then(user => {
                data.push(user);
                listUsers(data);
            });
            break;

        case "3":
            // delete user
            const { id } = await inquirer.prompt({type:'input', name: 'id', message: "Enter user ID to delete: "})
            deleteUser(id).then(result => {
                data = result;
                listUsers(data);
            });
            break;

        case "4":
            console.log("Exiting...");
            process.exit(0);

        default:
            console.log("Invalid choice");
    }
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

async function deleteUser(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+id, 
        {
            method: 'DELETE'
        }
    )
    if (response.ok) {
        return data.filter(user => user.id !=id)
    }
}
