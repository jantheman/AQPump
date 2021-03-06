import React, { Component } from 'react';
import global from '../global.js';
const { arduinos } = global;

class AQStatus extends Component {

    onZero = () => {
        arduinos.forEach(arduino => {
            arduino.value = 0;
            arduino.invalidate()
        });
    }

    render() {
        return (
            <>
                <table>
                    <thead><tr><th>arduino</th><th>value</th><th>delta</th><th>output</th><th>response</th><th>remaining</th></tr></thead>
                    <tbody>
                        {arduinos.map((arduino, index) => (
                            <tr key={arduino.key}>
                                <th title={arduino.base}>{arduino.id}</th>
                                <td>{arduino.value}</td>
                                <td>{arduino.getValueDelta().toFixed(2)}</td>
                                <td>{arduino.action}</td>
                                <td>{arduino.actionStatus}</td>
                                <td>{(arduino.actionRemaining / 1000).toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id="statusButtons">
                    <button onClick={this.onZero}>reset values</button>
                </div>
            </>
        )
    }
}

export default AQStatus;