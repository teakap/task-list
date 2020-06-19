
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class ListItem extends React.Component {

    handleCheckboxChange(option) {
        console.log('handlinggg')
    }


    render() {
        return (
            <>
                <li key={this.props.item.id} style={{
                    textDecoration: this.props.item.checked ? 'line-through' : 'none',
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
