import React, { Component } from 'react'
import {View, StyleSheet } from 'react-native'
import Tile from './Tile'
import {connect} from 'react-redux'
import {setBoard} from '../store/actions'

/* const mapStateToProps = (state) => {
    return {
        board: state.board,
    }
}
 */
const mapDispatchToProps = {
    setBoard,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
    },
    tile: {
        borderWidth: 8,
        height: 100,
        width: 100,
        borderColor: 'darkgrey'
    },
    topTile: {
        borderTopWidth: 0
    },
    leftTile: {
        borderLeftWidth: 0
    },
    rightTile: {
        borderRightWidth: 0
    },
    bottomTile: {
        borderBottomWidth: 0
    }
});

class Home extends Component {

    componentDidMount() {
        this.props.setBoard([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Tile row={0} col={0} style={[styles.tile, styles.topTile, styles.leftTile]}></Tile>
                    <Tile row={0} col={1} style={[styles.tile, styles.topTile]}></Tile>
                    <Tile row={0} col={2} style={[styles.tile, styles.topTile, styles.rightTile]}></Tile>
                </View>
                <View style={styles.row}>
                    <Tile row={1} col={0} style={[styles.tile, styles.leftTile]}></Tile>
                    <Tile row={1} col={1} style={[styles.tile]}></Tile>
                    <Tile row={1} col={2} style={[styles.tile, styles.rightTile]}></Tile>
                </View>
                <View style={styles.row}>
                    <Tile row={2} col={0} style={[styles.tile, styles.bottomTile, styles.leftTile]}></Tile>
                    <Tile row={2} col={1} style={[styles.tile, styles.bottomTile]}></Tile>
                    <Tile row={2} col={2} style={[styles.tile, styles.bottomTile, styles.rightTile]}></Tile>
                </View>
            </View>
        )
    }
}

export default connect(null, mapDispatchToProps)(Home)

