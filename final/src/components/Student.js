import React from 'react';
import { useState } from 'react';
import useDeleteStd from '../hooks/customhook'

const Student = () => {
    const [students, studentsList, deletedStudent] = useDeleteStd();
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleDelete = () => {
        deletedStudent(name);
    }

    return (
        <div>
            学生一覧：[{studentsList.join(', ')}] <br/>
            削除する名前を入力してください。<br />
            <input type='text' value={name} onChange={handleChange}/> <br/>
            <button onClick={handleDelete}>確定</button><br/>
            削除する名前: {name} <br/>
            新しいー覧：[{students.join(', ')}]
        </div>
    )
}

export default Student
