import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Roboto', sans-serif'
  },
  '#container': {
    'width': [{ 'unit': 'px', 'value': 360 }],
    'margin': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#f7f7f7',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0,0,0, 0.1)' }]
  },
  'completed': {
    'color': 'gray',
    'textDecoration': 'line-through'
  },
  'h1': {
    'backgroundColor': '#2980b9',
    'color': 'white',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': 'normal'
  },
  'ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'background': '#fff',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'color': 'rgb(122, 121, 121)'
  },
  'li:nth-child(2n)': {
    'background': '#f7f7f7'
  },
  'input': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#f7f7f7',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 20 }],
    'boxSizing': 'border-box',
    'color': '#2980b9'
  },
  'input:focus': {
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2980b9' }],
    'outline': 'none'
  }
});
