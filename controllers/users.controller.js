const UserService = require('../services/users.service');

class UsersController {
    //Creating a new user account
    async addUser(req, res) {
        const {user_id, firstName, lastName, email} = req.body;

        // Creates new user and sends a success message
        try {
         const newUser = await UserService.addUser({
            user_id: req.body.user_id,
            user_details: req.body})
         res.status(200).send({
            success: true,
            message: "User account created successfully",
            data: newUser
         });
        } catch (error) {
            res.send({
                error: error,
                message: error.message
            });
        }
    }


    //Updating a user account
    async patchUser(req, res) {
        const userId = req.params.id;
        const {userContent} = req.body;

        try {
            // Check if user account exists
            const existingUser = await UserService.getUser({_id: userId})

            // Sends a "user not found" message if user doesn't exist
            if(!existingUser){
                return res.status(404).send({
                    success: false,
                    messasge: "User does not exist!",
                })
            } else {
                // Update the User account if found
                const updatedUser = await UserService.patchUser({userContent})

                // Sends a success message
                return res.status(200).send({
                    success: true,
                    message: 'User details updated succesfully!',
                    data: updatedUser,
                })
            }
        } catch (error) {
            res.send({
                error: error,
                message: error.message
            })
        }
    }

    //Deleting a User account
    async deleteUser(req, res) {
        const user_id = req.params.id;

        // Check if user account exists
        try {
            const existingUser = await UserService.getUser({_id: user_id});

            // Throws a "Post not found" message if post doesn't exist
            if(!existingUser) {
                return res.status(404).send({
                    success: false,
                    message: "User does not exist",
                });
            } else {
                const deletedUser = await UserService.deleteUser(user_id);

                // Sends a sucess response message after post deletion
                res.status(200).send({
                    success: true,
                    message: "User account has been deleted successfully",
                    data: deletedUser,
                })
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            })
        }
    }

    // Fetching a Single User account details
    async getUser(req, res) {
        const user_id = req.params.id;

        try {
            const foundUser = await UserService.getUser({_id: post_id});

            if (!foundUser) {
                return res.status(404).send({
                    success: false,
                    message: "User account does not exist!",
                });
            } else {
                // Sends a success message with the User details
                res.status(200).send({
                    success: true,
                    message: "User details fetched successfully!",
                    data: foundUser,
                });
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            });
        }
    }

    // Fetching all posts
    async getUsers(req, res) {
        try {
            const foundUsers = await UserService.getUsers();

            // Sends a message if there are no users yet
            if(!foundUsers) {
                return res.status(404).send({
                    success: false,
                    message: "No users found on the app",
                })
            } else {
                // sends a success message and returns all user accounts
                return res.status(200).send({
                    success: true,
                    message: "Users fetched successfully",
                    data: foundUsers,
                })
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            });
        };
    };
};

module.exports = new UsersController;