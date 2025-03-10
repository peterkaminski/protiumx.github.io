import {TermColors} from "../constants.js";
import {colorize} from "../utils.js";

const LAST_UPDATE = '2022-05-26';

const whoami = {
  id: "whoami",
  args: 0,
  description: 'display effective developer info',
  async exec(term, _args) {
    term.writeln(colorize(TermColors.Green, 'name: ') + 'brian');
    term.writeln(colorize(TermColors.Green, 'host: ') + window.location.host);
    term.writeln(colorize(TermColors.Green, 'current position: ') + 'software engineer');
    term.writeln(colorize(TermColors.Green, 'company: ') + 'Hearbeat Medical Solutions < https://heartbeat-med.de >');
    term.writeln(colorize(TermColors.Green, 'location: ') + 'Munich, Germany');
    term.writeln(colorize(TermColors.Green, 'fav languages: ') + '[golang, rust, typescript]');
    term.writeln(colorize(TermColors.Green, 'hobbies: ') + '[photography, music, electronics]');
    term.writeln(colorize(TermColors.Green, 'blog: ') + 'https://protiumx.dev/blog');
    term.writeln(colorize(TermColors.Green, 'last update: ') + LAST_UPDATE);
  },
};

export default whoami;
