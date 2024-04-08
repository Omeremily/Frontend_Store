import { useState } from 'react';
import { User } from '../types/userTypes';

export default function EditDetails({ user }: { user: User }) {
    const [editedUser, setEditedUser] = useState<User>({ ...user });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // כאן תמשיך עם הלוגיקה לעדכון המשתמש בלוקאל סטוראג ובשרת, לדוגמה:
        // updateUserDetails(editedUser);
        console.log('Updated user details:', editedUser);
    };

    return (
        <div>
            <h3>Edit Details</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={editedUser.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                        disabled // אין לשנות את כתובת האימייל
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={editedUser.password}
                        onChange={handleChange}
                    />
                </div>
                {/* כאן תוכל להוסיף שדות נוספים לעריכה על פי הטיפוס של User */}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}
