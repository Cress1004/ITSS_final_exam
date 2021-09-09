import React, { useState } from 'react'
const useDeleteStd = () => {
    const studentsList = ['Huyen', 'Hoa', 'Hung', 'Long'];
    const [students, setNewList] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);
    
    const deletedStudent = (name) => {
        setNewList(students.filter(student => student !== name));
    }
    return [students, studentsList, deletedStudent];
}

export default useDeleteStd