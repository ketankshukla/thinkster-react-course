import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TooLong from './components/TooLong'
import TooShort from './components/TooShort'
import JustRight from './components/JustRight'

function List(props) {
	var selectColor = 'purple'

	const getColor = () => {
    //debugger
    if (props.itemList.length === 3) {
			//setselectColor(props.cfg.rightColor)
			return <JustRight color={props.cfg.rightColor} />
		}
		if (props.itemList.length < 3) {
			//setselectColor(props.cfg.shortColor)
			return <TooShort color={props.cfg.shortColor} />
		}
		if (props.itemList.length > 3) {
			//setselectColor(props.cfg.longColor)
			return <TooLong color={props.cfg.longColor} />
		}

	}

	var optionItems = props.itemList.map((item, i) => {
		return (
			<option style={{ color: selectColor }} key={i}>
				{item}
			</option>
		)
	})

	return (
		<div>
			<h3>Q: Who do you want to be when you grow up?</h3>
			<select style={{ background: selectColor }}>{optionItems}</select>
			{getColor()}
		</div>
	)
}

const items1 = [ 'Programmer', 'Carpenter' ]
const items2 = [ 'Programmer', 'Carpenter', 'Plumber' ]
const items3 = [ 'Programmer', 'Carpenter', 'Plumber', 'Goldsmith' ]

//to test the error, remove the itemList prop passed into the List in the render function
List.defaultProps = {
	itemList: [ 'I want to be me!' ],
	cfg: {
		shortColor: 'red',
		longColor: 'blue',
		rightColor: 'green'
	}
}

List.propTypes = {
	itemList: PropTypes.array.isRequired,
	cfg: PropTypes.shape({
		shortColor: PropTypes.string,
		longColor: PropTypes.string,
		rightColor: PropTypes.string,
		size: PropTypes.number
	})
}

const App = () => {
	return <List itemList={items3}
  cfg={{ shortColor: 'orange', longColor: 'pink', rightColor: 'green' }} />
}

ReactDOM.render(<App />, document.getElementById('root'))
