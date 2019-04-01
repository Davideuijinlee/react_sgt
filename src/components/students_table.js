import React, {Component} from 'react';
import StudentRow from './student_row';

class StudentTable extends Component {

    render(){
        const {col = 's12', list} = this.props;
        const studentElements = list.map((student)=>{
            // return <StudentRow key={student.id} name ={student.name} course = {student.course} grade={student.grade}></StudentRow>
            return <StudentRow delete={this.props.delete} key={student.id} {...student}/>
        });

        return (
            <div className={`col ${col}`}>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Course</td>
                            <td>Grade</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                    {studentElements}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default StudentTable;