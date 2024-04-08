import { useState, useContext } from 'react';
import { UsersContext } from '../context/usersContext';

export default function AddUser() { // שינוי שם הקומפוננטה ל־AddUser
    const { registerUser } = useContext(UsersContext); // שינוי השימוש בפונקציה registerUser
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        img: '',
        email: '',
        fullName: '',
        phoneNumber: '',
        password: '',
        address: {
            city: '',
            street: '',
            houseNum: ''
        }
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        // בדיקה האם השדה שנשנה הוא שדה בכתובת
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1]; // קבלת שם השדה בכתובת (עיר, רחוב, מספר בית)
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }));
        } else {
            // אם לא, עדכון רגיל של הערך
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    
    const handleSubmit = () => {
        registerUser(formData); // שימוש ב־registerUser להוספת המשתמש
        setFormData({
            img: '',
            email: '',
            fullName: '',
            phoneNumber: '',
            password: '',
            address: {
                city: '',
                street: '',
                houseNum: ''
            }
        });
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Add User</button>
            {showForm && (
                <div>
                    <input type="text" name="img" value={formData.img} onChange={handleChange} placeholder="Image URL" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" />
                    <input type="text" name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Street" />
                    <input type="number" name="address.houseNum" value={formData.address.houseNum} onChange={handleChange} placeholder="House Number" /> {/* שינוי סוג השדה ל־number */}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
}
