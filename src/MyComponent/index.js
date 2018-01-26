let SortableListView = require('react-native-sortable-listview');
let React = require('react')
let { View, Text, TouchableHighlight, FlatList } = require('react-native')

let data = {
  hello: { text: 'world' },
  how: { text: 'are you' },
  test: { text: 123 },
  this: { text: 'is' },
  a: { text: 'a' },
  real: { text: 'real' },
  drag: { text: 'drag and drop' },
  bb: { text: 'bb' },
  cc: { text: 'cc' },
  dd: { text: 'dd' },
  ee: { text: 'ee' },
  ff: { text: 'ff' },
  gg: { text: 'gg' },
  hh: { text: 'hh' },
  ii: { text: 'ii' },
  jj: { text: 'jj' },
  kk: { text: 'kk' },
}

let order = Object.keys(data) //Array of keys

class RowComponent extends React.Component {
  render() {
    return (
      <View style={{flex:1, borderColor:'red', borderWidth: 1}}>
        <TouchableHighlight
          underlayColor={'#eee'}
          style={{
            padding: 25,
            backgroundColor: '#F8F8F8',
            borderBottomWidth: 1,
            borderColor: '#eee',
          }}
          {...this.props.sortHandlers}
        >
          <View style={{borderColor:'black', borderWidth:1}}>
            <Text>{this.props.data.text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <SortableListView
        ListComponent={FlatList}
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
      />
    )
  }
}

export default MyComponent;
