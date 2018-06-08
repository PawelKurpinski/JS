import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#container': {
    'width': [{ 'unit': 'px', 'value': 360 }],
    'margin': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#f7f7f7',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0,0,0, 0.1)' }]
  },
  'completed': {
    'color': 'gray',
    'textDecoration': 'line-through'
  }
});
