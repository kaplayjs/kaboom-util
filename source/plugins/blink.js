function blinkComp(k) {
    return {
        blink(time) {
            return {
                id: "blink",
                require: [],
                add() {
                    if (this.loopBlink) this.loopBlink();

                    this.loopBlink = k.loop(time, (time) => {
                        if (!time) time = 0.3;

                        this.hidden = !this.hidden;
                    });
                }
            };
        }
    };
};

module.exports = { blinkComp };