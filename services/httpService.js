const baseAddress = "http://www.recipepuppy.com/api/";

export default {
    async get(indgredient) {
        return fetch(`${baseAddress}${!indgredient ? '' : `?i=${indgredient}`}`)
            .then(resp => resp.json())
            .then(data => data.results)
            .catch(err => console.error(err));
    }
}