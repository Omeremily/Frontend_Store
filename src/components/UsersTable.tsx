import { useContext } from 'react';
import { UsersContext } from '../context/usersContext';
import AddUser from './AddUser'; 

export default function UsersTable() {
    const { users, editClient, deactivateClient, reactivateClient } = useContext<any>(UsersContext);

    const handleDeactivate = (email: string) => {
        deactivateClient(email);
    };

    const handleReactivate = (email: string) => {
        reactivateClient(email);
    };

    return (
        <div>
            <h2 className="text-center mt-5" style={{ fontWeight: 'bold', color: 'darkgreen' }}>Users Table</h2>
            <div className="table-responsive p-5">
                <table className="table table-bordered table-hover text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Img</th>
                            <th scope="col">Email</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Password</th>
                            <th scope="col">Active</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any, index: number) => (
                            <tr key={index}> 
                                <td><img src={user.img} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} /></td>
                                <td>{user.email}</td>
                                <td>{user.fullName}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.password}</td>
                                <td>{user.isActive ? 'Yes' : 'No'}</td>
                                <td>{user.address && user.address.city}, {user.address && user.address.street}, {user.address && user.address.houseNum}</td>
                                <td>
                                    {user.isActive ? (
                                        <button className="btn btn-danger mr-2" onClick={() => handleDeactivate(user.email)}>Deactivate</button>
                                    ) : (
                                        <button className="btn btn-success mr-2" onClick={() => handleReactivate(user.email)}>Reactivate</button>
                                    )}
                                    <button onClick={() => editClient(user)} className="btn edit-button"><i className="far fa-edit mr-2"></i>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddUser />
            </div>
        </div>
    );
}
