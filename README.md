# Speaker Purpose and Attitude

Hear short lines and decide why the speaker says them and how they feel.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Speaker Purpose and Attitude.exe` from the [latest release](https://github.com/Apurba94/toefl-speaker-attitude/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-speaker-attitude/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Some listening questions ask why a speaker says something, or how they feel. The words alone may mislead: "Sure, take my notes" can mean no. Hear twelve original lines and decide the speaker's purpose or attitude, with the cue explained.

Sections: Practice, Cues, Progress, About.

## How to use it

1. Listen in **Practice** before reading the line.
2. Learn the cues in **Cues**: hedging, sarcasm, emphasis and questions to the audience.
3. With computer voices, tone of voice is limited, so focus on the words that carry attitude.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
