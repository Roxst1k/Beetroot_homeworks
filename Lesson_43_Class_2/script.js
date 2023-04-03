class User {
    constructor(name, role) {
        if (!name || !role || (role !== "admin" && role !== "user")) {
            alert("Invalid user data");
        } else {
            this.name = name;
            this.role = role;
            this.isLoggedIn = false;
        }
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {
        this.isLoggedIn = true;
        console.log("User logged in");
    }

    logout() {
        this.isLoggedIn = false;
        console.log("User logged out");
    }

    changeName(newName) {
        this.name = newName;
        console.log(`User name changed to ${newName}`);
    }

    changePassword(newPassword) {
        console.log(`User password changed to ${newPassword}`);
    }
}

class Admin extends User {
    constructor(name) {
        super(name, "admin");
        this.users = [];
    }

    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
            console.log(`User ${user.getName()} added`);
        } else {
            alert("Invalid user data");
        }
    }

    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
            console.log(`User ${user.getName()} removed`);
        } else {
            alert("User not found");
        }
    }

    changeUserRole(user, newRole) {
        if (user instanceof User && (newRole === "admin" || newRole === "user")) {
            user.role = newRole;
            console.log(`User ${user.getName()} role changed to ${newRole}`);
        } else {
            alert("Invalid user data");
        }
    }

    getAllUsers() {
        console.log("All users:");
        for (const user of this.users) {
            console.log(user.getName());
        }
    }

    removeAllUsers() {
        this.users = [];
        console.log("All users removed");
    }
}

const user1 = new User("Petro", "user");
console.log(user1.getName()); // "Petro"
console.log(user1.getRole()); // "user"
user1.login(); // "User logged in"
user1.logout(); // "User logged out"
user1.changeName("Ivan"); // "User name changed to Ivan"
user1.changePassword("123456"); // "User password changed to 123456"

const admin = new Admin("Admin");
console.log(admin.getName()); // "Admin"
console.log(admin.getRole()); // "admin"
const user2 = new User("Mary", "user");
admin.addUser(user1); // "User Petro added"
admin.addUser(user2); // "User Mary added"
admin.removeUser(user1); // "User Petro removed"
admin.changeUserRole(user2, "admin"); // "User Mary role changed to admin"
admin.getAllUsers(); // "All users:\nMary"
admin.removeAllUsers(); // "All users removed"


