import React from 'react'
import {sampleNames, sampleFileNames} from '../helpers'

export default class SoundBubble extends React.Component {
  static propTypes = {
    sampleID: React.PropTypes.number.isRequired,
    volume: React.PropTypes.number.isRequired,
    size: React.PropTypes.number.isRequired,
    active: React.PropTypes.bool.isRequired,
    volumeUp: React.PropTypes.func
  };

  render () {
    const sample = sampleNames[this.props.sampleID]
    const iconUrl = '/assets/icons/' + sampleFileNames[this.props.sampleID] + 'jpg'
    const scaleFactor = this.props.size * (1 + 0 * this.props.volume)

    const buttonProps = {
      style: {
        backgroundImage: 'url(' + iconUrl + ')',
        transform: 'scale(' + scaleFactor + ')'
      },
      value: this.props.sampleID,
      disabled: !this.props.active,
      onClick: this.props.volumeUp
    }

    return (
      <button {...buttonProps}>{sample + ': ' + this.props.volume}</button>
    )
  }
}
