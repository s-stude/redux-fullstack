import {expect} from 'chai';
import {List,Map} from 'immutable';

import {setEntries, next} from '../src/core';

describe('application logic', ()=> {

    describe('setEntries', ()=> {

        it('adds the entries to the state', ()=> {

            const state = Map();
            const entries = ['Trainspotting', '28 days later'];
            const nextState = setEntries(state, entries);

            expect(nextState).to.equal(Map({
                entries: List.of('Trainspotting', '28 days later')
            }));


        });

    });

    describe('next', ()=> {

        it('takes the next two entries under vote', ()=> {

            const state = Map({
                entries: List.of('Trainspotting', '28 days later', 'Sunshine')
            });

            const nextState = next(state);

            expect(nextState).to.equal(Map({
                vote   : Map({
                    pair: List.of('Trainspotting', '28 days later')
                }),
                entries: List.of('Sunshine')
            }))

        });

    });

});