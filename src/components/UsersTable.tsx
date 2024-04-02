import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext } from 'react';
import { UsersContext } from '../context/usersContext';

export default function UsersTable() {
    const { users, editUser } = useContext<any>(UsersContext);

    return (
        <div>
            <h2>Users Table</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Password</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: { email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; fullName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; phoneNumber: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; password: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; isActive: any; }, index: Key | null | undefined) => (
                            <tr key={index}>
                                <td>{user.email}</td>
                                <td>{user.fullName}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.password}</td>
                                <td>{user.isActive ? 'Yes' : 'No'}</td>
                                <td>
                                    <button onClick={() => editUser(user)}>Edit</button>
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


