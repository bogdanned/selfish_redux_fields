import React from 'react';
import { Field } from 'redux-form';
import styled from "styled-components";
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css'


const Root = styled.div`
  width: 100%;
`


const EditButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0px;
  background-color: green;
`

const CancelButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0px;
  color: white;
  background-color: red;
`

const Value = styled.p`
  height: 40px;
  font-size: 16px;
  margin: 0px;
  border-color: none;
`

const Input = styled.input`
  height: 60px;
  width: 100%;
  font-size: 30px;
`

const renderInput = ({input, edit}) => {
  return(
    <div>
    {edit ? 
      <Input {...input}></Input>
    : <p>{input.value}</p>
    }
    </div>
  )
}

const renderDropdownList = ({ input, data, valueField, textField, edit }) => {
  return(
    <div>
    {edit ?
      <DropdownList {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />
      :
      <p>{input.value.color}</p>
    }
    
    </div>
  )
}



class EditableField extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
    this.onEdit = this.onEdit.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onEdit(e){
    e.preventDefault()
    this.setState({
      edit: true
    })
  }

  onSave(e){
    e.preventDefault()
    this.setState({
      edit: false
    })
    this.props.handleSubmit()
  }

  onCancel(e) {
    e.preventDefault()
    this.setState({
      edit: false
    })
  }


  render(){
    let { data, textField, fieldType, label, name, placeholder, handleSubmit, value } = this.props
    let {edit} = this.state
    return(
      <Root>
        <label>{label}</label>
          <div>
          {fieldType === "input" ? 
            <Field
              name={name}
              component={renderInput}
              type="text"
              placeholder={placeholder}
              edit={edit}
            />
          : null}
          {fieldType === "dropdown" ?
            <Field
              name={name}
              component={renderDropdownList}
              placeholder={placeholder}
              edit={edit}
              data={data}
              textField={textField}
            />
            : null}
            </div> 
        {edit ?
        <div>
            <CancelButton onClick={this.onCancel}>X</CancelButton >
            <EditButton onClick={this.onSave}>Save</EditButton>
        </div>
          : 
          <EditButton onClick={this.onEdit}>Edit</EditButton>
        }
      </Root>
    )
  }
}


export default EditableField