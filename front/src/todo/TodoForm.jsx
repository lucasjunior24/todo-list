import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { changeDescription } from './TodoActions'

const TodoForm = (props) => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'> 
            <div className='row'>
                <Grid cols='12 9 10' >
                    <input id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        onChange={props.changeDescription}
                        onKeyUp={keyHandler}
                        value={props.description}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton styles='primary' icon='plus'
                        onClick={props.handleAdd}
                    />
                    <IconButton styles='info' icon='search'
                        onClick={props.handleSearch}
                    />
                    <IconButton icon='close' className='gray'
                        onClick={props.handleClear}
                    />
                </Grid>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatToProps)(TodoForm)
