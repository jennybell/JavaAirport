'use strict';

describe('Airport', () => {
  let plane;
  let airport;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', () => {
    airport.clearForLanding(plane)
    expect(airport.planes()).toEqual([plane]);
  });

});