import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput(formProps){
        const { input, label, meta } = formProps;
        console.log(meta);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div className="ui text red">{meta.error}</div>
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){   
        console.log(this.props);     
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title: " />
                <Field name="description" component={this.renderInput} label="Enter descripiton: " />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        // only ran if user did not enter title
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);