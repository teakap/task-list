import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        };
    }
    render(props) {
        return (
            <>
                <h1>{`Task List`}</h1>
                <ul>
                    {this.state.items.map(item => (
                        <ListItem item={item} key={item.id} />
                    ))}
                </ul>
            </>
        )
    }
}

export default List;
