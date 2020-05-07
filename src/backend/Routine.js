export default class Routine {
  constructor(
    name,
    type,
    tag,
    estimation,
    imageLink = "",
    done,
    days = [false, false, false, false, false, false, false],
    info,
    active
  ) {
    this.name = name;
    this.type = type;
    this.tag = tag;
    this.estimation = estimation;
    this.imageLink = imageLink;
    done = [];
    info = [];
    active = [];
    for (let m = 0; m < 12; m++) {
      let curr = [];
      let currInfo = [];
      let currActive = [];
      for (let d = 0; d < 32; d++) {
        curr.push(false);
        currActive.push(true);
        currInfo.push("");
      }
      done.push(curr);
      info.push(currInfo);
      active.push(currActive);
    }
    this.info = info;
    this.done = done;
    this.days = days;
    this.active = active;
  }
}
