import React from 'react';
class MemberCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const currentState = this.state.visible;
    this.setState({visible: !currentState})
  }

  render() {

    const {name, description, img} = this.props;
    return (
      <div className={`simpson-card ${this.state.visible ? 'simpson-card--visible' : ''}`} onClick={this.handleClick}>
        <div className="simpson-card__details">
          <h2 className="simpson-card__name">{name}</h2>
          <div className="simpson-card__description">{description}</div>
        </div>
        <img className="simpson-card__image" src={`./img/${img}`} alt={name} />
      </div>
    );
  }
}

export {MemberCard};