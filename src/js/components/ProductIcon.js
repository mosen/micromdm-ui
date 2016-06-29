import React, {Component, PropTypes} from 'react';
import PhoneIphone from 'material-ui/svg-icons/hardware/phone-iphone';
import TabletMac from 'material-ui/svg-icons/hardware/tablet-mac';
import LaptopMac from 'material-ui/svg-icons/hardware/laptop-mac';
import DesktopMac from 'material-ui/svg-icons/hardware/desktop-mac';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';

class ProductIcon extends Component {

  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: 'unknown'
  };

  render () {
    const {
      name
    } = this.props;

    var icon = <HelpOutline />;

    if (name.indexOf('iPhone') !== -1) {
      icon = <PhoneIphone />;
    } else if (name.indexOf('iMac') !== -1) {
      icon = <DesktopMac />;
    } else if (name.indexOf('iPad') !== -1) {
      icon = <TabletMac />;
    }

    return icon;
  }
}

export default ProductIcon;
