import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
import { connect } from 'react-redux';
import {setTileContent, setCurrentPlayer} from '../store/actions'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapStateToProps  = (state) => {
    return {
        board: state.board,
        currentPlayer: state.currentPlayer,
    }
}
const mapDispatchToProps = {
    setTileContent,
    setCurrentPlayer,
}

const styles = StyleSheet.create({
    tileX: {
        fontSize: 60,
        color: 'red',
    },
    tileO: {
        fontSize: 60,
        color: 'green',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Tile extends Component {
    constructor(props) {
        super(props)
    }

    tilePressed = () => {
        let nextState  = {
            currentPlayer: this.props.currentPlayer, 
            row: this.props.row, 
            col: this.props.col,
            board: this.props.board
        }
        this.props.setTileContent(nextState);
        this.props.setCurrentPlayer(this.props.currentPlayer * -1);
    }

    renderIcon = (row, col) => {
        let value = this.props.board[row][col]
        switch(value) {
            case 1: {return <Icon name="circle-outline" style={styles.tileX}></Icon>}
            case -1: {return <Icon name="close" style={styles.tileO}></Icon>}
            default: {return <View />}
        }
    }
    render() {
        return (
            <TouchableOpacity style={[styles.center, this.props.style]} onPress={() => this.tilePressed()}>
                {this.renderIcon(this.props.row, this.props.col)}
            </TouchableOpacity>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tile)
