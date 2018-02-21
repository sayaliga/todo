import React from 'react';
import { connect } from 'react-redux';

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this._handleOnChange = this._handleOnChange.bind(this);
    }
    _handleOnChange(event) {
        this.props.changeFilter(event.target.value);
    }
    render() {
        return (
            <input placeHolder="Search a todo" className="searchbar" type="text" size="50" onChange={this._handleOnChange}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (filter) => {
            dispatch({
                type: 'FILTER',
                filter
            });
        }
    };
};

FilterBar = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBar;