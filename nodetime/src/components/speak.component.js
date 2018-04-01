import React from 'react';
import { Card, Icon } from 'react-native-elements';
import ProgressBar from './progress-bar.component';

class SpeakComponent extends React.PureComponent {
    
    render() {   
            <Card>
                <Icon 
                    name='modern-mic'
                />
                <ProgressBar />
            </Card>
    }
}

export default SpeakComponent