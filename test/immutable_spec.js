import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('Immutability', () => {

    describe('A Number', () => {
        function increment(currState) {
            return currState + 1;
        }

        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });

    });

    describe('A List', () => {

        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', ()=> {

            let state = List.of('Trainspotting', '28 days later');
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(List.of('Trainspotting', '28 days later', 'Sunshine'));
            expect(state).to.equal(List.of('Trainspotting', '28 days later'));
        });

    });

    describe('A Tree', ()=> {

        function addMovie(currState, movie) {

            return currState.update('movies', movies => movies.push(movie));

            // a helper of this code

            //return currState.set(
            //    'movies',
            //    currState.get('movies').push(movie)
            //);

        }

        it('is immutable', ()=> {

            let state = Map({
                movies: List.of('Trainspotting', '28 days later')
            });

            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(
                Map({
                    movies: List.of('Trainspotting', '28 days later', 'Sunshine')
                })
            );

            expect(state).to.equal(
                Map({
                    movies: List.of('Trainspotting', '28 days later')
                })
            );

        });


    })

});