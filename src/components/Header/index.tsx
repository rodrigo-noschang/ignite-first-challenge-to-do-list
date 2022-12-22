import { View, Image } from 'react-native';
import { styles } from './style';

import Logo from '../../assets/Logo.png';

const Header = () => {
    return(
        <View style = {styles.headerContainer}>
            <Image source = {Logo} />
        </View>
    )
}

export default Header;