import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Roboto', sans-serif',
    'background': '#24C6DC',
    // fallback for old browsers
    'background': '-webkit-linear-gradient(to right, #514A9D, #24C6DC)',
    // Chrome 10-25, Safari 5.1-6
    'background': 'linear-gradient(to right, #514A9D, #24C6DC)',
    // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
  },
  '#container': {
    'width': [{ 'unit': 'px', 'value': 600 }],
    'margin': [{ 'unit': 'px', 'value': 300 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 300 }, { 'unit': 'string', 'value': 'auto' }],
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
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#f7f7f7',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 20 }],
    'boxSizing': 'border-box',
    'color': '#2980b9',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0)' }],
    // his will cover the problem with strange gap between the input and the list of LIs; Actually this border is invisible but it helps a lo
  },
  'input:focus': {
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2980b9' }],
    'outline': 'none'
  },
  'fa-plus': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'float': 'right'
  },
  'spantrash': {
    'backgroundColor': 'red',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'color': 'white',
    'width': [{ 'unit': 'px', 'value': 0 }],
    // we put 0 here because it will change on hover
    'display': 'inline-block',
    'opacity': '0'
  },
  'li:hover span': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'opacity': '1.0'
  }
});
