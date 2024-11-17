import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../contexts/useTheme';

export const ThemedIcon = ({ Icon, isFA = true }) => {
    const { isDarkMode } = useTheme();
    const color = isDarkMode ? 'white' : 'black'
    if (isFA) {
        return <FontAwesomeIcon icon={Icon} size='4x' color={color} />
    } else {
        return <Icon height={65} color={color} />
    }
}