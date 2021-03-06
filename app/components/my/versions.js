import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

const versionData = [
	{
		version: '1.2.0',
		con: ['支持锁仓查询','集成节点系统']
	},
	{
		version: '1.1.0',
		con: ['BUG修复']
	},
	{
		version: '1.0.1',
		con: ['修正一些问题']
	},
	{
		version: '1.0.0',
		con: [ '正式版本发布']
	}
];

export class Versions extends Component {
	_keyExtractor = (item, index) => item;
	render() {
		return (
			<View style={styles.versionsPage}>
				<ScrollView>
					<FlatList
						data={versionData}
						renderItem={({ item }) => (
							<View style={styles.version}>
								<Text style={styles.versionTitle}>{item.version}</Text>
								<FlatList
									data={item.con}
									keyExtractor={this._keyExtractor}
									renderItem={({ item }) => (
										<View style={styles.versionDescrCon}>
											<Text style={styles.versionDescr}>* {item}</Text>
										</View>
									)}
								/>
							</View>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default withNavigation(Versions);

const styles = StyleSheet.create({
	versionsPage: {
		flex: 1,
		backgroundColor: 'white',
		paddingLeft: 15
	},
	version: {
		borderBottomWidth: 1,
		borderColor: '#eee',
		backgroundColor: 'white',
		paddingBottom: 15
	},
	versionTitle: {
		fontSize: 28,
		lineHeight: 40
	},
	versionDescrCon: {},
	versionDescr: {
		height: 30,
		lineHeight: 30,
		fontSize: 15
	}
});
