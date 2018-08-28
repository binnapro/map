import Event from 'events';
const em = new Event.EventEmitter();

const AppEvent = {
	emitEvent: (event, data) => {
		em.emit(event, data);
	},
	addListener: (event, data) => {
		em.on(event, data);
	},
	removeListener: (event, callback) => {
		em.removeListener(event, callback)
	}
}

export default AppEvent;