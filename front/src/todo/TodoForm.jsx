import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { changeDescription, search } from './TodoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if(e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if(e.key === 'Escape') {
            this.props.handleClear()
        }
    }
    render() {
        return (
            <div role='form' className='todoForm'> 
                <div className='row'>
                    <Grid cols='12 9 10' >
                        <input id='description' className='form-control' 
                            placeholder='Adicione uma tarefa'
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description}/>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton styles='primary' icon='plus'
                            onClick={this.props.handleAdd}
                        />
                        <IconButton styles='info' icon='search'
                            onClick={this.props.handleSearch}
                        />
                        <IconButton icon='close' className='gray'
                            onClick={this.props.handleClear}
                        />
                    </Grid>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatToProps)(TodoForm)
