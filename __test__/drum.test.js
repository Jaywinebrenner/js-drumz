import { Sequencer } from './../src/js/sequencer.js';

describe('Sequencer', () => {

  let sequencer;

  beforeEach(() => {
    sequencer = new Sequencer();
  });

  test('should create an empty sequence with ten 2d arrays of 16 zeros.', () => {
    expect(sequencer.sequence[9][1][15]).toEqual(0);
  });

  test('should increase the step when called and loop at 15', () => {
    sequencer.incrementStep();
    expect(sequencer.currentStep).toEqual(1);
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    sequencer.incrementStep();
    expect(sequencer.currentStep).toEqual(15);
    sequencer.incrementStep();
    expect(sequencer.currentStep).toEqual(0);
  });

  test('should update the tempo value based on an input bpm', () => {
    sequencer.changeTempo(135);
    expect(sequencer.tempo).toEqual(111);
  });

});
