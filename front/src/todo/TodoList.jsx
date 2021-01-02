import React from 'react'
import { connect } from 'react-redux'

import IconButtom from '../template/IconButton'

 const TodoList = (props) => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButtom styles='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButtom styles='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButtom styles='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}


const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)