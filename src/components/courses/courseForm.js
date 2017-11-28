"use strict";

var React = require('react');
var Input = require('../common/textInput');
var AuthorDropDownList = require('../common/authorDropDownList');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
        
    },
    
    render: function() {
        return (
            <form>
                <h1>Manage Courses</h1>
                <Input
                    name="title"
                    label="Course Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange} 
                    error={this.props.errors.title} />
                    
                <AuthorDropDownList name="author" list={this.props.authors} course={this.props.course} value = {this.props.course.author.id} onChange={this.props.onChange} error={this.props.errors.author} />
                
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
            );
    }
});

module.exports = CourseForm;

                // <Input
                //     name="author"
                //     label="Course Author"
                //     value={this.props.course.author.name}
                //     onChange={this.props.onChange} 
                //     error={this.props.errors.author} />