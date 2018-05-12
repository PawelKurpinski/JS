import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Hello extends React.Component{
    render() {
        return <h1>Hello, {this.props.name} {this.props.surname}</h1>
    }
};    
    
    
ReactDOM.render(
    <Hello name="Paweł" surname="Kozak" />,
    document.getElementById('app')
);
    
//--------------------------------------------------------------
    
      class Sum extends React.Component {
           render() {
                return <h1>{this.props.numbers.reduce((prev, next)=> {
                  return prev + next;
                })}
                </h1>;
      }
    }
    
        ReactDOM.render(
            <Sum numbers={[1, 2, 4, 6, 8]} />,
            document.getElementById('app')
        );
    
})

//---------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const menuItems = [
  {
    urL     :   '/',
    text    :   'Strona główna'
  },
  {
    urL     :   '/blog',
    text    :   'Blog'
  },
  {
    urL     :   '/pricing',
    text    :   'Cennik'
  },
  {
    urL     :   '/contact',
    text    :   'Kontakt'
  }]

  class Menu extends React.Component {
    render() {
      return <div><ul>
      {this.props.menu.map(element => {
        return <li>
        <a href={element.urL}>{element.text}</a>
        </li>
      })}
      </ul></div>;
    }
  }

  // function Menu(props){
  //     return <div><ul>
  //      {props.menu.map(element => {
  //        return <li>
  //        <a href={element.urL}>{element.text}</a>
  //        </li>
  //      })}
  //      </ul></div>;
  // }

document.addEventListener('DOMContentLoaded', function(){

  ReactDOM.render(
      <Menu menu={menuItems}/>,
      document.getElementById('app')
  );
});





