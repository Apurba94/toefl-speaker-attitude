/* Speaker Purpose and Attitude: hear short lines and decide why the speaker says them and how they feel. */
(function () {
  'use strict';
  const items = (bank) => bank.map((x) => Object.assign({}, x, { stem: 'Listen. ' + x.stem, audio: { title: 'Speaker', text: x.say } }));
  const CUES = [['Hedging words', 'I suppose, I guess, maybe: the speaker is unsure or doubtful.'], ['Sarcasm', 'Saying the opposite of what is meant, often with "sure" or "it\'s not like".'], ['Emphasis', 'This will be on the exam, the key point: the speaker stresses importance.'], ['Questions to the audience', 'You might be thinking: the speaker raises a question in order to answer it.']];
  const App = {
    about: 'Some listening questions ask why a speaker says something, or how they feel. The words alone may mislead: "Sure, take my notes" can mean no. Hear twelve original lines and decide the speaker\'s purpose or attitude, with the cue explained.',
    how: ['Listen in **Practice** before reading the line.', 'Learn the cues in **Cues**: hedging, sarcasm, emphasis and questions to the audience.', 'With computer voices, tone of voice is limited, so focus on the words that carry attitude.'],
    tabs: [
      SK.bankTab('practice', 'Practice', (ctx) => items(ctx.data.attitude), { sizes: [6, 12] }),
      { id: 'cues', label: 'Cues', render(el) { el.appendChild(SK.card('Cues to attitude and purpose', SK.table(['Cue', 'What it signals'], CUES, false))); } },
    ],
    items,
    checks: { 'every line has audio and a valid question': (data, assert) => { for (const it of items(data.attitude)) { assert.ok(it.audio.text); assert.deepEqual(SK.validateItem(it), []); } } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
