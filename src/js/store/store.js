import '@ryangjchandler/spruce';

Spruce.store('app', {
    name: 'Ryan Chandler',
    getFirstName() {
        return this.name.split(' ')[0]
    }
}, true);

export default Spruce;