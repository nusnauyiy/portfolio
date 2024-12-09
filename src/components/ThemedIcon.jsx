import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../contexts/useTheme';

export const ThemedIcon = ({ Icon, height = 65, isFA = true }) => {
    const { isDarkMode } = useTheme();
    const color = isDarkMode ? 'white' : 'black'
    if (isFA) {
        return <FontAwesomeIcon icon={Icon} size='4x' color={color} />
    } else {
        return <Icon height={height} color={color} />
    }
}