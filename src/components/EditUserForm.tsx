import React, { useContext, useState } from 'react';
import { UsersContext } from '../context/usersContext';

const EditUserForm = ({ user, onSave, onClose }: any) => {
    const [editedUser, setEditedUser] = useState({ ...user });

    const { setUsers } = useContext(UsersContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser((prevUser: any) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsers((prevUsers: any) => {
            const updatedUsers = prevUsers.map((prevUser: any) =>
                prevUser.email === user.email ? editedUser : prevUser
            );
            return updatedUsers;
        });

        onSave(editedUser);
    };

    return (
        <div className="edit-user-form" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={editedUser.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={editedUser.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="street" className="form-label">Street:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="street"
                        name="address.street" // Use dot notation for nested objects
                        value={editedUser.address.street}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="address.city" // Use dot notation for nested objects
                        value={editedUser.address.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="houseNum" className="form-label">House Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="houseNum"
                        name="address.houseNum" // Use dot notation for nested objects
                        value={editedUser.address.houseNum}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditUserForm;

