import PropTypes from 'prop-types'
import './firstApp.css'

// eslint-disable-next-line react/prop-types
const FirstApp = ( { titles, subTitle } ) => {

    const varOne = 'One';

    const newArray = [1, 2, 3,];

    const newMessage = {
        message: 'Hola Mundo',
        title: 'Ruben'
    }

    const OneFuction = () => {
        return 'Hello'
    }

    const { message, title } = newMessage;

    return (
        <div className="component">
            <div className="subcomponent">
                <p className="parrafo">{ varOne }</p>
            </div>

            <div className="subcomponent">
                <p className="parrafo">{message} {title}</p>
            </div>
            <div className="subcomponent">
                <p className="parrafo">{ newArray }</p>
            </div>
            <div className="subcomponent">
                <p className="parrafo">{ OneFuction() }</p>
            </div>
            <div className="subcomponent">
                <p className="parrafo">{ titles } { subTitle }</p>
            </div>
        </div>

    )
}

FirstApp.propTypes = {
    titles: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    titles: 'Hola Mundo',
    subTitle: 4
}

export default FirstApp