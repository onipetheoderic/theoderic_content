import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import WebFont from 'webfontloader';
import allFonts from './allfont'
/**/
WebFont.load({
  google: {
    families: allFonts,
  }
});

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    paddingTop: PropTypes.number,
    paddingBottom: PropTypes.number,
    fontStyle: PropTypes.string,
    smallCaps: PropTypes.bool,
    googleFont: PropTypes.string
  }

  render() {
    const {text} = this.props
    console.log(this.props.size)
    let caps = this.props.smallCaps;
    caps = true ? "small-caps" : "normal";


    return (
      <div style={{marginTop: this.props.marginTop, marginRight: this.props.marginRight, marginBottom: this.props.marginBottom, marginLeft: this.props.marginRight}}>
        <p style={{fontFamily:this.props.googleFont, fontVariant: caps, fontStyle: this.props.fontStyle, fontSize: this.props.size, paddingBottom: this.props.paddingBottom, paddingLeft: this.props.paddingLeft, paddingRight: this.props.paddingRight, paddingTop: this.props.paddingTop}}>
        {this.props.text}</p>

      </div>
    )
  }
}
