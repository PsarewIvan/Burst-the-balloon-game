class Needle {
  constructor(context, range) {
    this.WIDTH = 10;
    this.HEIGHT = 40;
    this.canvasRange = range;
    this.context = context;
    this.init();

    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  init() {
    this.a = [this.canvasRange.w / 2 - this.WIDTH / 2, 0];
    this.b = [this.canvasRange.w / 2 + this.WIDTH / 2, 0];
    this.c = [this.canvasRange.w / 2, this.HEIGHT];
    this.speed = 500;
  }

  draw(oneDrawPart = 0) {
    this.changeCords(oneDrawPart);
    this.tipCord = {
      x: this.c[0],
      y: this.c[1],
    };
    this.context.beginPath();
    this.context.moveTo(...this.a);
    this.context.lineTo(...this.b);
    this.context.lineTo(...this.c);
    this.context.fillStyle = '#3d405b';
    this.context.fill();
  }

  changeCords(oneDrawPart) {
    if (this.leftKey) {
      this.a[0] = Math.max(0, this.a[0] - oneDrawPart * this.speed);
      this.b[0] = Math.max(this.WIDTH, this.b[0] - oneDrawPart * this.speed);
      this.c[0] = Math.max(
        this.WIDTH / 2,
        this.c[0] - oneDrawPart * this.speed
      );
    }
    if (this.rightKey) {
      this.a[0] = Math.min(
        this.canvasRange.w - this.WIDTH,
        this.a[0] + oneDrawPart * this.speed
      );
      this.b[0] = Math.min(
        this.canvasRange.w,
        this.b[0] + oneDrawPart * this.speed
      );
      this.c[0] = Math.min(
        this.canvasRange.w - this.WIDTH / 2,
        this.c[0] + oneDrawPart * this.speed
      );
    }
  }

  onKeyDown(evt) {
    if (evt.key === 'ArrowLeft') {
      this.leftKey = true;
    }
    if (evt.key === 'ArrowRight') {
      this.rightKey = true;
    }
  }

  onKeyUp(evt) {
    if (evt.key === 'ArrowLeft') {
      this.leftKey = false;
    }
    if (evt.key === 'ArrowRight') {
      this.rightKey = false;
    }
  }
}
