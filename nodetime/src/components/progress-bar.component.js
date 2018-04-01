import React from 'react';
import { Card } from 'react-native-elements';
import * as Progress from 'react-native-progress';

class ProgressBar extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
            <Progress.Bar
                {...this.props}
                />
            </Card>
        );
    }
}

export default ProgressBar