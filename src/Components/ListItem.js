
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class ListItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    handleCheckboxChange = () => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked
        }));
    }

    render() {
        return (
            <>
                <li key={this.props.item.id} style={{
                    textDecoration: this.state.isChecked ? 'line-through' : 'none',
                }}>
                    <span >{this.props.item.name}</span>
                    <Checkbox
                        label={this.props.item.name}
                        onChange={this.handleCheckboxChange}
                    />
                </li>
            </>
        )
    }
}

export default ListItem;
